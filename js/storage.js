// Módulo de persistencia localStorage y copias de seguridad
const STORAGE_KEYS = {
  STATS: 'sara_english_stats',
  STREAK: 'sara_english_streak',
  ERRORS: 'sara_english_error_bank',
  SETTINGS: 'sara_english_settings'
};

const StorageManager = {
  // ===============================
  // CONFIGURACIÓN (Sonidos, etc)
  // ===============================
  getSettings() {
    const defaultSettings = {
      soundEnabled: true,
      hapticsEnabled: true,
      autoAdvance: false
    };
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings;
    } catch (e) {
      return defaultSettings;
    }
  },

  setSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  // ===============================
  // RACHA DE DÍAS (STREAK)
  // ===============================
  getStreak() {
    const defaultStreak = {
      currentStreak: 0,
      bestStreak: 0,
      lastActiveDate: null
    };
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.STREAK);
      return stored ? JSON.parse(stored) : defaultStreak;
    } catch (e) {
      return defaultStreak;
    }
  },

  recordActivityToday() {
    const streak = this.getStreak();
    const todayStr = new Date().toISOString().split('T')[0];

    if (!streak.lastActiveDate) {
      streak.currentStreak = 1;
      streak.bestStreak = 1;
      streak.lastActiveDate = todayStr;
    } else if (streak.lastActiveDate === todayStr) {
      // Ya activo hoy, no incrementamos racha pero aseguramos bestStreak
      streak.bestStreak = Math.max(streak.bestStreak, streak.currentStreak);
    } else {
      const lastDate = new Date(streak.lastActiveDate);
      const today = new Date(todayStr);
      const diffTime = Math.abs(today - lastDate);
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutivo: incrementa
        streak.currentStreak += 1;
      } else if (diffDays > 1) {
        // Rompió la racha: reinicia a 1
        streak.currentStreak = 1;
      }
      streak.bestStreak = Math.max(streak.bestStreak, streak.currentStreak);
      streak.lastActiveDate = todayStr;
    }

    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streak));
    return streak;
  },

  // ===============================
  // ESTADÍSTICAS POR MODO
  // ===============================
  getStats() {
    const defaultStats = {
      totalAnswered: 0,
      totalCorrect: 0,
      xp: 0,
      byMode: {
        mode1: { answered: 0, correct: 0 },
        mode2: { answered: 0, correct: 0 },
        mode3: { answered: 0, correct: 0 },
        mode4: { answered: 0, correct: 0 },
        mode5: { answered: 0, correct: 0 },
        review: { answered: 0, correct: 0 }
      }
    };
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.STATS);
      return stored ? { ...defaultStats, ...JSON.parse(stored) } : defaultStats;
    } catch (e) {
      return defaultStats;
    }
  },

  recordResult(modeKey, isCorrect, xpEarned = 10) {
    const stats = this.getStats();
    stats.totalAnswered += 1;
    if (isCorrect) {
      stats.totalCorrect += 1;
      stats.xp += xpEarned;
    }

    if (!stats.byMode[modeKey]) {
      stats.byMode[modeKey] = { answered: 0, correct: 0 };
    }

    stats.byMode[modeKey].answered += 1;
    if (isCorrect) {
      stats.byMode[modeKey].correct += 1;
    }

    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    this.recordActivityToday();
    return stats;
  },

  // ===============================
  // BANCO DE ERRORES (ERROR BANK)
  // ===============================
  normalizeErrorId(mode, rawId) {
    if (rawId === undefined || rawId === null || rawId === '') {
      return `err_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    }
    const strId = String(rawId);
    if (mode && !strId.startsWith(`${mode}_`)) {
      return `${mode}_${strId}`;
    }
    return strId;
  },

  getErrorBank() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ERRORS);
      if (!stored) return [];
      const list = JSON.parse(stored);
      if (!Array.isArray(list)) return [];

      let modified = false;
      const sanitized = list.map(err => {
        if (!err || typeof err !== 'object') return err;
        const item = { ...err };

        // Migrar IDs antiguos sin prefijo de modo para evitar colisiones entre modos
        if (item.mode && item.id !== undefined && item.id !== null && !String(item.id).startsWith(`${item.mode}_`)) {
          item.id = this.normalizeErrorId(item.mode, item.id);
          modified = true;
        }

        // Corregir errores guardados antiguamente de la pregunta del hospital ("to stay in hospital")
        if (item.question && /to stay in hospital/i.test(item.question)) {
          if (item.correctAnswer && /have had to/i.test(item.correctAnswer)) {
            item.correctAnswer = 'BREAK ➔ "broke" | HAVE ➔ "had" (o "have had")';
            modified = true;
          }
          if (item.rawExercise && Array.isArray(item.rawExercise.gaps)) {
            item.rawExercise = {
              ...item.rawExercise,
              _isNormalized: false,
              gaps: item.rawExercise.gaps.map((g, idx) => {
                if (idx === 1 || /have had to|had to/i.test(g.answer || '')) {
                  modified = true;
                  return {
                    ...g,
                    infinitive: 'HAVE',
                    answer: 'had',
                    alternatives: ['had', 'have had', 'had to', 'have had to']
                  };
                }
                return g;
              })
            };
          }
        }
        return item;
      });

      if (modified) {
        localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(sanitized));
      }
      return sanitized;
    } catch (e) {
      return [];
    }
  },

  addError(exerciseData) {
    const errors = this.getErrorBank();
    const normalizedId = this.normalizeErrorId(exerciseData.mode, exerciseData.id);
    const existingIndex = errors.findIndex(
      err => String(err.id) === normalizedId && err.mode === exerciseData.mode
    );

    const errorItem = {
      id: normalizedId,
      mode: exerciseData.mode,
      question: exerciseData.question,
      userAnswer: exerciseData.userAnswer,
      correctAnswer: exerciseData.correctAnswer,
      explanation: exerciseData.explanation,
      dateAdded: new Date().toISOString(),
      rawExercise: exerciseData.rawExercise || null
    };

    if (existingIndex >= 0) {
      errors[existingIndex] = errorItem;
    } else {
      errors.unshift(errorItem);
    }

    // Limit to max 100 errors to avoid storage bloat
    if (errors.length > 100) errors.pop();

    localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(errors));
    return errors;
  },

  resolveError(errorId) {
    const errors = this.getErrorBank();
    const targetId = String(errorId);
    const filtered = errors.filter(err => String(err.id) !== targetId);
    localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(filtered));
    return filtered;
  },

  clearErrorBank() {
    localStorage.removeItem(STORAGE_KEYS.ERRORS);
  },

  // ===============================
  // EXPORTAR / IMPORTAR BACKUP (JSON)
  // ===============================
  exportProgress() {
    const backupData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      stats: this.getStats(),
      streak: this.getStreak(),
      errors: this.getErrorBank(),
      settings: this.getSettings()
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `progreso_ingles_sara_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  importProgress(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.stats) localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(data.stats));
      if (data.streak) localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(data.streak));
      if (data.errors) localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(data.errors));
      if (data.settings) localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data.settings));
      return { success: true };
    } catch (err) {
      console.error('Error importing progress:', err);
      return { success: false, error: err.message };
    }
  },

  resetAllProgress() {
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.STREAK);
    localStorage.removeItem(STORAGE_KEYS.ERRORS);
  }
};

window.StorageManager = StorageManager;
