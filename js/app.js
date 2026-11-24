// Lógica principal de la aplicación PWA Inglés Sara
const QUESTION_HISTORY_KEY = 'sara_english_question_history_v1';
const FIXED_SESSION_SIZES = {
  mode1: 5,
  mode2: 5,
  mode3: 1,
  mode4: 5,
  mode5: 5,
  review: 5
};

const App = {
  // Estado actual
  state: {
    currentScreen: 'home', // 'home' | 'session' | 'summary' | 'errorBank'
    currentMode: null,     // 'mode1' | 'mode2' | 'mode3' | 'mode4' | 'mode5' | 'review'
    sessionExercises: [],
    currentIndex: 0,
    sessionResults: [],
    selectedOption: null,      // Índice para modo 4
    selectedOptionValue: null, // Valor exacto de texto seleccionado en modo 4
    sessionHistory: {          // Historial de IDs vistos para rotación sin repetición
      mode1: [],
      mode2: [],
      mode3: [],
      mode4: [],
      mode5: []
    },
    isChecking: false,
    isChecked: false,
    isLoading: false,
    noHintMode: false,
    currentFeedback: null,
    // Para modo 3 (Cloze test completo)
    mode3UserAnswers: {},
    // Para modo 5 (Paragraph Builder y envío a Gemini)
    mode5BuilderOrder: [],
    lastGeminiPrompt: ''
  },

  init() {
    console.log('[App] Initializing English App for Sara');
    this.initTheme();
    this.loadQuestionHistory();

    // Registrar Service Worker si es compatible y recargar una sola vez cuando tome control una versión nueva
    if ('serviceWorker' in navigator) {
      const hadController = Boolean(navigator.serviceWorker.controller);
      let swReloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!hadController || swReloading) return;
        swReloading = true;
        window.location.reload();
      });

      const swUrl = new URL('sw.js', window.location.href).href;
      navigator.serviceWorker.register(swUrl, { scope: './' })
        .then(reg => {
          console.log('[SW] Registered successfully on GitHub Pages scope:', reg.scope);
          reg.update().catch(() => {});
        })
        .catch(err => console.log('[SW] Registration failed:', err));
    }

    // Inicializar audio en la primera interacción
    document.addEventListener('touchstart', () => SoundEffects.init(), { once: true });
    document.addEventListener('click', () => SoundEffects.init(), { once: true });

    // Cargar datos en la UI y entrada escalonada inicial
    this.updateHomeStats();
    this.setupEventListeners();
    this.checkPwaInstallPrompt();
    this.triggerAnimation(document.getElementById('home-screen'), 'animate-stagger');
  },

  // ==========================================
  // HELPERS DE ANIMACIÓN A 60 FPS
  // ==========================================
  triggerAnimation(el, className) {
    if (!el || !className) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  },

  setStatWithPop(elementId, newValue, animateTargetParent = false) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const strVal = String(newValue);
    const prevVal = el.dataset.lastValue;
    el.textContent = strVal;

    if (prevVal !== undefined && prevVal !== strVal) {
      const target = (animateTargetParent && el.parentElement) ? el.parentElement : el;
      this.triggerAnimation(target, 'animate-pop-stat');
    }
    el.dataset.lastValue = strVal;
  },

  // ==========================================
  // MODO OSCURO (ACTIVACIÓN, PERSISTENCIA Y SINCRONIZACIÓN)
  // ==========================================
  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    let isDark = false;

    if (savedTheme === 'dark' || savedTheme === 'light') {
      isDark = savedTheme === 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark = true;
    }

    this.applyTheme(isDark, false);
  },

  applyTheme(isDark, persist = true) {
    document.body.classList.toggle('dark-mode', isDark);
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');

    if (persist) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    const headerIcon = document.getElementById('dark-mode-icon');
    if (headerIcon) {
      headerIcon.textContent = isDark ? '☀️' : '🌙';
    }

    const headerBtn = document.getElementById('btn-dark-mode-toggle');
    if (headerBtn) {
      headerBtn.setAttribute('title', isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
      headerBtn.setAttribute('aria-label', isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
    }

    const settingsSwitch = document.getElementById('setting-dark-mode-toggle');
    if (settingsSwitch) {
      settingsSwitch.checked = isDark;
    }
  },

  toggleDarkMode() {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    this.applyTheme(!isCurrentlyDark, true);
  },

  // ==========================================
  // HISTORIAL DE ROTACIÓN SIN REPETICIÓN (LOCALSTORAGE + SESSIONSTORAGE)
  // ==========================================
  loadQuestionHistory() {
    try {
      const raw = localStorage.getItem(QUESTION_HISTORY_KEY) || sessionStorage.getItem(QUESTION_HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.state.sessionHistory = {
          mode1: Array.isArray(parsed.mode1) ? parsed.mode1 : [],
          mode2: Array.isArray(parsed.mode2) ? parsed.mode2 : [],
          mode3: Array.isArray(parsed.mode3) ? parsed.mode3 : [],
          mode4: Array.isArray(parsed.mode4) ? parsed.mode4 : [],
          mode5: Array.isArray(parsed.mode5) ? parsed.mode5 : []
        };
      }
    } catch (e) {
      console.warn('[App] Could not load question history:', e);
    }
  },

  saveQuestionHistory() {
    try {
      const serialized = JSON.stringify(this.state.sessionHistory);
      localStorage.setItem(QUESTION_HISTORY_KEY, serialized);
      sessionStorage.setItem(QUESTION_HISTORY_KEY, serialized);
    } catch (e) {
      console.warn('[App] Could not save question history:', e);
    }
  },

  recordQuestionInHistory(modeKey, questionId) {
    if (this.state.currentMode === 'review') {
      return;
    }
    if (!modeKey || !this.state.sessionHistory[modeKey] || questionId === undefined || questionId === null) {
      return;
    }
    if (!this.state.sessionHistory[modeKey].includes(questionId)) {
      this.state.sessionHistory[modeKey].push(questionId);
      this.saveQuestionHistory();
    }
  },

  selectQuestionsWithoutRepetition(modeKey, count = 5) {
    const bank = window.EXAM_BANK?.[modeKey] || [];
    if (!this.state.sessionHistory[modeKey]) {
      this.state.sessionHistory[modeKey] = [];
    }

    const seenIds = this.state.sessionHistory[modeKey];
    let unseen = bank.filter(q => !seenIds.includes(q.id));

    // Si quedan menos de 5 preguntas sin usar (o menos de count en modo 3), reseteamos el historial de ese modo
    const minThreshold = modeKey === 'mode3' ? Math.max(1, count) : Math.max(5, count);
    if (unseen.length < minThreshold) {
      this.state.sessionHistory[modeKey] = [];
      this.saveQuestionHistory();
      unseen = [...bank];
    }

    const shuffleFisherYates = (arr) => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    let selected;
    if (modeKey === 'mode5') {
      // Alternar Sentence Upgrading y Paragraph Builder empezando por la mecánica con más ejercicios sin ver
      const upgradingPool = shuffleFisherYates(unseen.filter(q => q.type === 'upgrading'));
      const builderPool = shuffleFisherYates(unseen.filter(q => q.type === 'builder'));
      const interleaved = [];
      let pickUpgrading = upgradingPool.length > builderPool.length
        ? true
        : builderPool.length > upgradingPool.length
          ? false
          : Math.random() < 0.5;

      while (interleaved.length < count && (upgradingPool.length > 0 || builderPool.length > 0)) {
        if (pickUpgrading) {
          if (upgradingPool.length > 0) interleaved.push(upgradingPool.shift());
          else if (builderPool.length > 0) interleaved.push(builderPool.shift());
        } else {
          if (builderPool.length > 0) interleaved.push(builderPool.shift());
          else if (upgradingPool.length > 0) interleaved.push(upgradingPool.shift());
        }
        pickUpgrading = !pickUpgrading;
      }

      selected = interleaved.map(ex => GeminiClient.normalizeExercise(modeKey, ex));
    } else {
      const pool = shuffleFisherYates(unseen);
      selected = pool.slice(0, count).map(ex => GeminiClient.normalizeExercise(modeKey, ex));
    }

    // Registrar inmediatamente los IDs seleccionados en el historial para evitar que se repitan en la siguiente tanda
    selected.forEach(ex => this.recordQuestionInHistory(modeKey, ex.id));

    return selected;
  },

  // ==========================================
  // GESTIÓN DE PWA / INSTALACIÓN TABLET
  // ==========================================
  deferredPrompt: null,
  checkPwaInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      const installBtn = document.getElementById('btn-pwa-install');
      if (installBtn) installBtn.classList.remove('hidden');
    });

    window.addEventListener('appinstalled', () => {
      console.log('[PWA] Installed successfully');
      const installBtn = document.getElementById('btn-pwa-install');
      if (installBtn) installBtn.classList.add('hidden');
      this.deferredPrompt = null;
    });
  },

  async promptPwaInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const choiceResult = await this.deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('[PWA] User accepted installation');
      }
      this.deferredPrompt = null;
      document.getElementById('btn-pwa-install')?.classList.add('hidden');
    } else {
      // Instrucciones directas para Xiaomi Pad 8 (Chrome / MIUI / HyperOS)
      alert("Para instalar en tu Xiaomi Pad 8:\n1. Pulsa en los 3 puntos (⋮) de la esquina superior derecha de Chrome.\n2. Selecciona 'Añadir a la pantalla de inicio' o 'Instalar aplicación'.\n¡Y listo!");
    }
  },

  // ==========================================
  // NAVEGACIÓN Y PANTALLAS
  // ==========================================
  showScreen(screenName) {
    this.state.currentScreen = screenName;
    const screens = ['home-screen', 'session-screen', 'summary-screen', 'error-bank-screen'];
    screens.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('hidden');
        el.classList.remove('animate-fade-slide', 'animate-pop', 'animate-stagger');
      }
    });

    const activeEl = document.getElementById(`${screenName}-screen`);
    if (activeEl) {
      activeEl.classList.remove('hidden');
      this.triggerAnimation(activeEl, 'animate-fade-slide');
      if (screenName === 'home') {
        this.triggerAnimation(activeEl, 'animate-stagger');
      }
    }

    if (screenName === 'home') {
      this.updateHomeStats();
      this.resetFeedbackSheet();
    }
  },

  updateHomeStats() {
    const stats = StorageManager.getStats();
    const streak = StorageManager.getStreak();
    const errors = StorageManager.getErrorBank();

    // Racha y XP con efecto pop al variar
    this.setStatWithPop('stat-streak', streak.currentStreak || 0, true);
    this.setStatWithPop('stat-xp', stats.xp || 0, true);

    // Precisión global
    const accuracy = stats.totalAnswered > 0 
      ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) 
      : 0;
    this.setStatWithPop('stat-accuracy', `${accuracy}%`, false);

    // Contador de errores
    this.setStatWithPop('stat-errors-count', errors.length, true);

    const errorCardBadge = document.getElementById('card-error-count');
    if (errorCardBadge) {
      errorCardBadge.textContent = errors.length > 0 ? `${errors.length} pendientes` : '¡Al día!';
      errorCardBadge.className = errors.length > 0 
        ? 'px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-600'
        : 'px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-600';
    }

    // Desglose de precisión por modos
    this.updateModeStatBadge('stat-mode1-acc', stats.byMode?.mode1);
    this.updateModeStatBadge('stat-mode2-acc', stats.byMode?.mode2);
    this.updateModeStatBadge('stat-mode3-acc', stats.byMode?.mode3);
    this.updateModeStatBadge('stat-mode4-acc', stats.byMode?.mode4);
    this.updateModeStatBadge('stat-mode5-acc', stats.byMode?.mode5);

    // Indicador de modo 100% Offline con el Banco Oficial de 836 ejercicios
    const geminiStatus = document.getElementById('gemini-status-pill');
    if (geminiStatus) {
      geminiStatus.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
        <span class="text-xs font-bold text-emerald-700">Banco Oficial 836 Ejercicios (100% Offline)</span>
      `;
      geminiStatus.className = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 cursor-pointer";
    }
  },

  updateModeStatBadge(elementId, modeData) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (!modeData || modeData.answered === 0) {
      el.textContent = 'Sin empezar';
      el.className = 'text-xs font-bold text-slate-400';
    } else {
      const pct = Math.round((modeData.correct / modeData.answered) * 100);
      el.textContent = `${pct}% acierto (${modeData.answered} ejerc.)`;
      el.className = pct >= 80 
        ? 'text-xs font-bold text-emerald-600'
        : pct >= 50 ? 'text-xs font-bold text-amber-600' : 'text-xs font-bold text-rose-600';
    }
  },

  // ==========================================
  // INICIO DE SESIÓN DE PRÁCTICA (100% OFFLINE E INMEDIATO CON ROTACIÓN SIN REPETICIÓN)
  // ==========================================
  startSession(modeKey) {
    this.state.currentMode = modeKey;
    this.state.currentIndex = 0;
    this.state.sessionResults = [];
    this.state.selectedOption = null;
    this.state.selectedOptionValue = null;
    this.state.isChecking = false;
    this.state.isChecked = false;
    this.state.noHintMode = false;
    this.state.currentFeedback = null;
    this.state.mode3UserAnswers = {};

    const sessionLimit = FIXED_SESSION_SIZES[modeKey] || 5;

    if (modeKey === 'review') {
      const errorList = StorageManager.getErrorBank();
      if (errorList.length === 0) {
        alert('¡Enhorabuena! No tienes errores pendientes por repasar en el banco.');
        this.showScreen('home');
        return;
      }
      const shuffled = [...errorList].sort(() => 0.5 - Math.random()).slice(0, sessionLimit);
      this.state.sessionExercises = shuffled.map(err => {
        if (err.rawExercise) return { ...err.rawExercise, isFromErrorBank: true, errorBankId: err.id };
        return {
          id: err.id,
          original: err.question,
          keyword: 'repaso',
          target: err.correctAnswer,
          alternatives: [],
          rule: err.explanation,
          isFromErrorBank: true,
          errorBankId: err.id
        };
      });
    } else {
      this.state.sessionExercises = this.selectQuestionsWithoutRepetition(modeKey, sessionLimit);
    }

    this.showScreen('session');
    this.renderCurrentExercise();
  },

  // ==========================================
  // RENDERIZADO DEL EJERCICIO ACTUAL
  // ==========================================
  renderCurrentExercise() {
    this.state.isChecking = false;
    this.state.isChecked = false;
    this.state.selectedOption = null;
    this.state.selectedOptionValue = null;
    this.resetFeedbackSheet();

    const container = document.getElementById('exercise-card-container');
    const modeBadge = document.getElementById('session-mode-badge');
    const progressBar = document.getElementById('session-progress-fill');
    const counter = document.getElementById('session-counter');

    const total = this.state.sessionExercises.length;
    const current = this.state.currentIndex;
    const progressPct = total > 0 ? (current / total) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progressPct}%`;
    this.setStatWithPop('session-counter', `${current + 1} de ${total}`, false);

    // Nombres legibles de modo
    const modeTitles = {
      mode1: 'Tiempos Verbales',
      mode2: 'Rephrasing (Examen)',
      mode3: 'Cloze Test (Relato)',
      mode4: 'Test Teórico',
      mode5: 'Writing Lab',
      review: 'Repaso de Errores'
    };
    modeBadge.textContent = modeTitles[this.state.currentMode] || 'Práctica';

    let exercise = this.state.sessionExercises[current];
    if (!exercise) {
      this.finishSession();
      return;
    }

    // Normalizar una única vez y persistir en el estado de sesión para mantener intacto el orden de opciones
    const isMode5Ex = exercise.type === 'upgrading' || exercise.type === 'builder' || Boolean(exercise.basic_sentence) || Array.isArray(exercise.scrambled_sentences);
    const effectiveMode = this.state.currentMode === 'review'
      ? (isMode5Ex ? 'mode5' : exercise.options ? 'mode4' : exercise.textTemplate || exercise.blanks ? 'mode3' : exercise.original ? 'mode2' : 'mode1')
      : this.state.currentMode;
    exercise = GeminiClient.normalizeExercise(effectiveMode, exercise);
    this.state.sessionExercises[current] = exercise;

    // Render según el tipo
    if (effectiveMode === 'mode5' || isMode5Ex) {
      this.renderMode5(container, exercise);
    } else if (effectiveMode === 'mode1' || (exercise.gaps && !exercise.textTemplate)) {
      this.renderMode1(container, exercise);
    } else if (effectiveMode === 'mode2' || exercise.original) {
      this.renderMode2(container, exercise);
    } else if (effectiveMode === 'mode3' || exercise.textTemplate) {
      this.renderMode3(container, exercise);
    } else if (effectiveMode === 'mode4' || exercise.options) {
      this.renderMode4(container, exercise);
    }

    this.triggerAnimation(container, 'animate-fade-slide');
    this.updateCheckButtonState();
  },

  // Interruptor manual "Sin pista" (Modos 1 y 3) con recarga instantánea y conservación de respuestas
  renderNoHintToggleHtml() {
    const isOn = Boolean(this.state.noHintMode);
    return `
      <label for="toggle-no-hint-mode" class="no-hint-toggle-wrapper ${isOn ? 'is-active' : ''}" title="Oculta las pistas y activa la corrección flexible">
        <input type="checkbox" id="toggle-no-hint-mode" class="no-hint-checkbox" ${isOn ? 'checked' : ''} aria-label="Sin pista (corrección flexible)">
        <span class="no-hint-switch-track" aria-hidden="true">
          <span class="no-hint-switch-thumb"></span>
        </span>
        <span class="no-hint-label-text">Sin pista</span>
        ${isOn ? '<span class="no-hint-mode-tag">Corrección flexible</span>' : ''}
      </label>
    `;
  },

  attachNoHintToggleListener() {
    const toggle = document.getElementById('toggle-no-hint-mode');
    if (!toggle) return;
    toggle.addEventListener('change', (e) => {
      this.toggleNoHintMode(Boolean(e.target.checked));
    });
  },

  toggleNoHintMode(enabled) {
    const container = document.getElementById('exercise-card-container');
    const exercise = this.state.sessionExercises[this.state.currentIndex];
    if (!container || !exercise) return;

    const savedInputs = {};
    container.querySelectorAll('.gap-input').forEach(inp => {
      if (inp.id) {
        savedInputs[inp.id] = {
          value: inp.value,
          isCorrect: inp.classList.contains('correct'),
          isPartial: inp.classList.contains('partial'),
          isIncorrect: inp.classList.contains('incorrect')
        };
      }
    });

    const activeEl = document.activeElement;
    const activeInputId = (activeEl && activeEl.classList?.contains('gap-input')) ? activeEl.id : null;
    const selectionStart = activeInputId && typeof activeEl.selectionStart === 'number' ? activeEl.selectionStart : null;
    const selectionEnd = activeInputId && typeof activeEl.selectionEnd === 'number' ? activeEl.selectionEnd : null;

    this.state.noHintMode = Boolean(enabled);

    const isCloze = Boolean(exercise.textTemplate || exercise.blanks || this.state.currentMode === 'mode3');
    if (isCloze) {
      this.renderMode3(container, exercise, { autoFocus: false });
    } else {
      this.renderMode1(container, exercise, { autoFocus: false });
    }

    Object.entries(savedInputs).forEach(([id, data]) => {
      const restored = document.getElementById(id);
      if (restored) {
        restored.value = data.value;
        if (data.isCorrect) restored.classList.add('correct');
        if (data.isPartial) restored.classList.add('partial');
        if (data.isIncorrect) restored.classList.add('incorrect');
      }
    });

    if (activeInputId) {
      const activeRestored = document.getElementById(activeInputId);
      if (activeRestored) {
        activeRestored.focus();
        if (selectionStart !== null && selectionEnd !== null && typeof activeRestored.setSelectionRange === 'function') {
          activeRestored.setSelectionRange(selectionStart, selectionEnd);
        }
      }
    }

    this.updateCheckButtonState();
  },

  // Formateador de frases y textos con huecos (Modo 1 y Modo 3) para alineación inline-flex sin solapamientos
  formatGapTextHtml(rawText, gaps, isCloze = false, hideHints = false) {
    let workingText = String(rawText || '');
    const gapTokens = {};

    gaps.forEach((gap, index) => {
      const gapNum = index + 1;
      const tokenKey = `__GAP_TOKEN_${index}__`;

      let badgeHtml = '';
      let inputField = '';

      if (isCloze) {
        const clozeHint = gap.infinitive || `GAP ${gapNum}`;
        badgeHtml = hideHints
          ? `<span class="gap-hint-badge px-2 py-0.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-700">#${gapNum}</span>`
          : `<span class="gap-hint-badge px-2 py-0.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-700 uppercase">#${gapNum} (${clozeHint})</span>`;
        inputField = `<input type="text" id="cloze-gap-${gap.id}" class="gap-input text-slate-800 placeholder-slate-400 font-bold" placeholder="${gapNum}..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-gap-id="${gap.id}">`;
      } else {
        if (!hideHints) {
          const mode1Hint = gap.infinitive || 'WORD';
          badgeHtml = `<span class="gap-hint-badge px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-700 uppercase tracking-wider">(${mode1Hint})</span>`;
        }
        inputField = `<input type="text" id="gap-${gap.id}" class="gap-input text-slate-800 placeholder-slate-400 font-bold" placeholder="Escribe aquí..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-gap-id="${gap.id}">`;
      }

      // Captura el marcador {{gap1}} (con su pista entre paréntesis opcional en Modo 1) y signos de puntuación pegados
      const pattern = isCloze
        ? new RegExp(`(?:\\{\\{${gap.id}\\}\\}|\\{\\{${gapNum}\\}\\}|\\{\\{gap${gapNum}\\}\\})([.,?!;:]+)?`, 'i')
        : new RegExp(`(?:\\{\\{${gap.id}\\}\\}|\\{\\{${gapNum}\\}\\}|\\{\\{gap${gapNum}\\}\\})(?:\\s*\\([^)]+\\))?([.,?!;:]+)?`, 'i');

      let trailingPunct = '';
      if (pattern.test(workingText)) {
        workingText = workingText.replace(pattern, (match, punct) => {
          trailingPunct = punct || '';
          return ` ${tokenKey} `;
        });
      } else if (/_____\s*(?:\([^)]+\))?([.,?!;:]+)?/.test(workingText)) {
        workingText = workingText.replace(/_____\s*(?:\([^)]+\))?([.,?!;:]+)?/, (match, punct) => {
          trailingPunct = punct || '';
          return ` ${tokenKey} `;
        });
      } else {
        workingText = workingText.replace(/\{\{[^}]+\}\}([.,?!;:]+)?/, (match, punct) => {
          trailingPunct = punct || '';
          return ` ${tokenKey} `;
        });
      }

      const punctHtml = trailingPunct ? `<span>${trailingPunct}</span>` : '';
      gapTokens[tokenKey] = `<span class="gap-inline-wrapper">${badgeHtml}${inputField}${punctHtml}</span>`;
    });

    const parts = workingText.split(/(__GAP_TOKEN_\d+__)/g);
    return parts
      .map(part => {
        if (gapTokens[part]) {
          return gapTokens[part];
        }
        return part
          .trim()
          .split(/\s+/)
          .filter(Boolean)
          .map(word => `<span>${word}</span>`)
          .join(' ');
      })
      .filter(Boolean)
      .join(' ');
  },

  // Render Modo 1: Frases con 1 o 2 huecos e infinitivo o preposición
  renderMode1(container, rawEx, { autoFocus = true } = {}) {
    const ex = GeminiClient.normalizeExercise('mode1', rawEx);
    const htmlSentence = this.formatGapTextHtml(ex.sentence, ex.gaps, false, this.state.noHintMode);

    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-2 text-slate-500 text-sm font-bold">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            <span>Completa el hueco con la forma verbal o preposición adecuada:</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            ${this.renderNoHintToggleHtml()}
          </div>
        </div>

        <div class="p-6 md:p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-sm text-xl md:text-2xl text-slate-800 font-semibold">
          <div class="sentence-container">
            ${htmlSentence}
          </div>
        </div>

        <p class="text-xs text-slate-400 text-center font-medium">Pulsa en cada recuadro para escribir tu respuesta</p>
      </div>
    `;

    this.attachNoHintToggleListener();

    // Listeners para activar el botón de comprobar al escribir
    setTimeout(() => {
      const inputs = container.querySelectorAll('.gap-input');
      inputs.forEach(input => {
        input.addEventListener('input', () => this.updateCheckButtonState());
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') this.handleCheckAnswer();
        });
      });
      if (autoFocus && inputs[0]) inputs[0].focus();
    }, 50);
  },

  // Render Modo 2: Rephrasing (Key Word Transformation)
  renderMode2(container, rawEx) {
    const ex = GeminiClient.normalizeExercise('mode2', rawEx);
    const keyword = ex.keyword || ex.key_word || '';
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between gap-2 text-slate-500 text-sm font-bold">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span>Reescribe la oración para que signifique lo mismo usando la palabra obligatoria:</span>
          </div>
        </div>

        <!-- Oración original -->
        <div class="p-6 md:p-8 bg-slate-50 rounded-3xl border-2 border-slate-200 relative">
          <div class="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Frase original del examen</div>
          <div class="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
            "${ex.original}"
          </div>
          <div class="mt-4 flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500">Palabra clave obligatoria:</span>
            <span class="px-3.5 py-1 rounded-xl text-base font-black bg-amber-100 text-amber-800 border-2 border-amber-300 shadow-sm tracking-wide">
              (${keyword})
            </span>
          </div>
        </div>

        <!-- Campo amplio para reescribir -->
        <div class="space-y-2">
          <div class="flex justify-between items-center text-xs font-bold text-slate-500 px-1">
            <span>Tu oración transformada:</span>
            <button id="btn-clear-rephrase" class="text-blue-500 hover:text-blue-600 active:scale-95">Limpiar</button>
          </div>
          <textarea id="rephrasing-input" rows="3" class="w-full p-4 md:p-5 text-lg md:text-xl font-bold text-slate-800 bg-white rounded-2xl border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none shadow-sm placeholder-slate-400" placeholder="Escribe aquí la oración completa reestructurada..."></textarea>
        </div>
      </div>
    `;

    setTimeout(() => {
      const textarea = document.getElementById('rephrasing-input');
      const clearBtn = document.getElementById('btn-clear-rephrase');
      if (textarea) {
        textarea.addEventListener('input', () => this.updateCheckButtonState());
        textarea.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.handleCheckAnswer();
          }
        });
        textarea.focus();
      }
      if (clearBtn && textarea) {
        clearBtn.addEventListener('click', () => {
          textarea.value = '';
          textarea.focus();
          this.updateCheckButtonState();
        });
      }
    }, 50);
  },

  // Render Modo 3: Cloze Test (Relato continuo)
  renderMode3(container, rawEx, { autoFocus = true } = {}) {
    const ex = GeminiClient.normalizeExercise('mode3', rawEx);
    const htmlText = this.formatGapTextHtml(ex.textTemplate, ex.gaps, true, this.state.noHintMode);

    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2 text-slate-600 text-sm font-bold">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            <span class="text-indigo-900 font-extrabold">${ex.title || 'Cloze Test: Relato de Examen'}</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            ${this.renderNoHintToggleHtml()}
            <span class="text-xs font-bold text-slate-400">${ex.gaps.length} huecos a rellenar</span>
          </div>
        </div>

        <div class="p-6 md:p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-sm reading-text text-slate-800 font-medium">
          ${htmlText}
        </div>

        <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-2xl text-xs font-bold text-indigo-700 flex items-center gap-2">
          <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
          <span>Consejo de examen: Lee primero el relato completo para situar las acciones en orden cronológico antes de rellenar.</span>
        </div>
      </div>
    `;

    this.attachNoHintToggleListener();

    setTimeout(() => {
      const inputs = container.querySelectorAll('.gap-input');
      inputs.forEach(input => {
        input.addEventListener('input', () => this.updateCheckButtonState());
      });
      if (autoFocus && inputs[0]) inputs[0].focus();
    }, 50);
  },

  // Render Modo 4: Test Teórico de Opción Múltiple
  renderMode4(container, rawEx) {
    const ex = GeminiClient.normalizeExercise('mode4', rawEx);
    const letters = ['A', 'B', 'C', 'D'];
    let optionsHtml = '';

    ex.options.forEach((optText, idx) => {
      const safeVal = String(optText).replace(/"/g, '&quot;');
      optionsHtml += `
        <button type="button" class="option-card w-full p-4 md:p-5 rounded-2xl bg-white text-left font-bold text-slate-700 flex items-center gap-4 cursor-pointer" data-opt-idx="${idx}" data-opt-value="${safeVal}">
          <span class="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm bg-slate-100 text-slate-600 border border-slate-300 shrink-0 option-badge">
            ${letters[idx]}
          </span>
          <span class="text-base md:text-lg flex-1 leading-snug option-text">${optText}</span>
        </button>
      `;
    });

    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between gap-2 text-slate-500 text-sm font-bold">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>Pregunta Teórica y Trampas Gramaticales Frecuentes:</span>
          </div>
        </div>

        <div class="p-6 md:p-8 bg-purple-50/60 rounded-3xl border-2 border-purple-200 shadow-sm text-xl md:text-2xl font-bold text-slate-900 leading-snug">
          ${ex.question}
        </div>

        <div class="grid grid-cols-1 gap-3.5" id="options-group">
          ${optionsHtml}
        </div>
      </div>
    `;

    setTimeout(() => {
      const cards = container.querySelectorAll('.option-card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          if (this.state.isChecked) return;
          cards.forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          this.state.selectedOption = parseInt(card.getAttribute('data-opt-idx'), 10);
          this.state.selectedOptionValue = card.getAttribute('data-opt-value') || card.querySelector('.option-text')?.textContent || '';
          this.updateCheckButtonState();
        });
      });
    }, 50);
  },

  // Render Modo 5: Writing Lab (Sentence Upgrading y Paragraph Builder)
  renderMode5(container, rawEx) {
    const ex = GeminiClient.normalizeExercise('mode5', rawEx);

    if (ex.type === 'upgrading') {
      const connectorsHtml = ex.target_connectors
        .map(conn => `<button type="button" class="connector-chip" data-connector="${String(conn).replace(/"/g, '&quot;')}" title="Pulsa para insertar en tu texto">+ ${conn}</button>`)
        .join('');

      container.innerHTML = `
        <div class="space-y-5">
          <div class="flex flex-wrap items-center justify-between gap-2 text-slate-500 text-sm font-bold">
            <div class="flex items-center gap-2">
              <span class="text-lg">✍️</span>
              <span>Sentence Upgrading (Mejora formal B2/C1):</span>
            </div>
          </div>

          <!-- Frase básica B1 y conectores objetivo -->
          <div class="p-5 sm:p-6 bg-slate-50 rounded-3xl border-2 border-slate-200 space-y-4">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-slate-400 block mb-1.5">Frase básica (nivel B1) a transformar:</span>
              <p class="text-lg sm:text-xl font-bold text-slate-800 leading-snug">"${ex.basic_sentence}"</p>
            </div>
            <div class="space-y-2 pt-2 border-t border-slate-200">
              <span class="text-xs font-bold text-slate-500 block">Conectores y vocabulario objetivo (incluye al menos uno — pulsa para insertar):</span>
              <div class="flex flex-wrap gap-2" id="writing-connectors-list">
                ${connectorsHtml}
              </div>
            </div>
          </div>

          <!-- Área de escritura con contador en tiempo real -->
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold text-slate-500 px-1">
              <span>Tu versión formal mejorada (sin contracciones):</span>
              <button type="button" id="btn-clear-writing" class="text-teal-600 hover:text-teal-700 active:scale-95">Limpiar</button>
            </div>
            <textarea id="writing-upgrading-input" rows="4" class="w-full p-4 md:p-5 text-base sm:text-lg font-bold text-slate-800 bg-white rounded-2xl border-2 border-slate-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all resize-none shadow-sm placeholder-slate-400" placeholder="Reescribe la frase elevando el registro e integrando algún conector objetivo..."></textarea>
            <div class="flex flex-wrap items-center justify-between gap-2 px-1 pt-0.5">
              <span id="writing-word-counter" class="word-counter-badge word-counter-short">0 palabras · Mínimo 6 palabras</span>
              <span id="writing-contraction-hint" class="hidden text-xs font-extrabold text-amber-500"></span>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        const textarea = document.getElementById('writing-upgrading-input');
        const clearBtn = document.getElementById('btn-clear-writing');
        const chips = container.querySelectorAll('.connector-chip');

        if (textarea) {
          textarea.addEventListener('input', () => {
            this.updateWritingWordCounter();
            this.updateCheckButtonState();
          });
          textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              this.handleCheckAnswer();
            }
          });
          textarea.focus();
        }

        if (clearBtn && textarea) {
          clearBtn.addEventListener('click', () => {
            if (this.state.isChecked) return;
            textarea.value = '';
            textarea.focus();
            this.updateWritingWordCounter();
            this.updateCheckButtonState();
          });
        }

        chips.forEach(chip => {
          chip.addEventListener('click', () => {
            if (this.state.isChecked || !textarea) return;
            const conn = chip.getAttribute('data-connector') || '';
            if (!conn) return;
            const start = textarea.selectionStart ?? textarea.value.length;
            const end = textarea.selectionEnd ?? textarea.value.length;
            const before = textarea.value.slice(0, start);
            const after = textarea.value.slice(end);
            const leadingSpace = before.length > 0 && !/\s$/.test(before) ? ' ' : '';
            const trailingSpace = after.length > 0 && !/^\s/.test(after) ? ' ' : '';
            const inserted = `${leadingSpace}${conn}${trailingSpace}`;
            textarea.value = `${before}${inserted}${after}`;
            const newCursorPos = before.length + inserted.length;
            textarea.focus();
            textarea.setSelectionRange(newCursorPos, newCursorPos);
            this.updateWritingWordCounter();
            this.updateCheckButtonState();
          });
        });

        this.updateWritingWordCounter();
      }, 50);
    } else {
      // Paragraph Builder: inicializar orden [0, 1, 2, 3]
      this.state.mode5BuilderOrder = ex.scrambled_sentences.map((_, i) => i);

      container.innerHTML = `
        <div class="space-y-5">
          <div class="flex flex-wrap items-center justify-between gap-2 text-slate-500 text-sm font-bold">
            <div class="flex items-center gap-2">
              <span class="text-lg">🧩</span>
              <span>Paragraph Builder (Ordena las 4 frases del párrafo):</span>
            </div>
          </div>

          <div class="p-3.5 bg-teal-50 border border-teal-200 rounded-2xl text-xs font-bold text-teal-800 flex items-center justify-between gap-3">
            <span>Usa los botones ↑ y ↓ para colocar las frases en orden lógico de ensayo Bachillerato (1 ➔ 4).</span>
            <button type="button" id="btn-reset-builder-order" class="shrink-0 underline font-black hover:opacity-80">Reiniciar</button>
          </div>

          <div id="builder-cards-container" class="space-y-3"></div>
        </div>
      `;

      this.renderMode5BuilderCards(ex);

      setTimeout(() => {
        document.getElementById('btn-reset-builder-order')?.addEventListener('click', () => {
          if (this.state.isChecked) return;
          this.state.mode5BuilderOrder = ex.scrambled_sentences.map((_, i) => i);
          this.renderMode5BuilderCards(ex);
        });
      }, 50);
    }
  },

  updateWritingWordCounter() {
    const textarea = document.getElementById('writing-upgrading-input');
    const counterEl = document.getElementById('writing-word-counter');
    const hintEl = document.getElementById('writing-contraction-hint');
    if (!textarea || !counterEl) return;

    const val = textarea.value || '';
    const count = GeminiClient.countWords(val);
    const wordLabel = count === 1 ? 'palabra' : 'palabras';

    if (count >= 6) {
      counterEl.className = 'word-counter-badge word-counter-ok';
      counterEl.textContent = `${count} ${wordLabel} ✓`;
    } else {
      counterEl.className = 'word-counter-badge word-counter-short';
      counterEl.textContent = `${count} ${wordLabel} · Mínimo 6 palabras`;
    }

    if (hintEl) {
      const contractions = GeminiClient.detectInformalContractions(val);
      if (contractions.length > 0) {
        hintEl.textContent = `⚠️ Evita contracciones en ensayos formales (${contractions.join(', ')})`;
        hintEl.classList.remove('hidden');
      } else {
        hintEl.textContent = '';
        hintEl.classList.add('hidden');
      }
    }
  },

  renderMode5BuilderCards(ex) {
    const container = document.getElementById('builder-cards-container');
    if (!container) return;

    const order = this.state.mode5BuilderOrder;
    const total = order.length;

    container.innerHTML = order.map((sentIdx, pos) => `
      <div class="builder-card p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-3 sm:gap-4" data-pos="${pos}" data-sent-idx="${sentIdx}">
        <div class="flex items-start gap-3 flex-1 min-w-0">
          <span class="builder-pos-badge w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shrink-0 mt-0.5">${pos + 1}</span>
          <p class="text-sm sm:text-base font-bold leading-snug break-words">${ex.scrambled_sentences[sentIdx]}</p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-1.5 shrink-0">
          <button type="button" class="builder-move-btn w-10 h-10 rounded-xl font-black text-base flex items-center justify-center cursor-pointer" data-pos="${pos}" data-delta="-1" ${pos === 0 || this.state.isChecked ? 'disabled' : ''} aria-label="Subir frase">↑</button>
          <button type="button" class="builder-move-btn w-10 h-10 rounded-xl font-black text-base flex items-center justify-center cursor-pointer" data-pos="${pos}" data-delta="1" ${pos === total - 1 || this.state.isChecked ? 'disabled' : ''} aria-label="Bajar frase">↓</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.builder-move-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.state.isChecked) return;
        const pos = parseInt(btn.getAttribute('data-pos'), 10);
        const delta = parseInt(btn.getAttribute('data-delta'), 10);
        this.moveBuilderCard(pos, delta, ex);
      });
    });
  },

  moveBuilderCard(pos, delta, ex) {
    const targetPos = pos + delta;
    const order = this.state.mode5BuilderOrder;
    if (!Array.isArray(order) || targetPos < 0 || targetPos >= order.length) return;

    [order[pos], order[targetPos]] = [order[targetPos], order[pos]];
    this.renderMode5BuilderCards(ex);
    this.updateCheckButtonState();
  },

  // ==========================================
  // COMPROBACIÓN DE RESPUESTAS Y FEEDBACK
  // ==========================================
  updateCheckButtonState() {
    const btn = document.getElementById('btn-session-check');
    if (!btn) return;

    if (this.state.isChecked) {
      btn.textContent = 'CONTINUAR';
      btn.disabled = false;
      btn.className = 'btn-duo w-full py-4 rounded-2xl text-lg font-black tracking-wider uppercase shadow-md btn-duo-green';
      return;
    }

    btn.textContent = 'COMPROBAR';
    const ex = this.state.sessionExercises[this.state.currentIndex];
    let canCheck = false;

    const isMode5 = this.state.currentMode === 'mode5' || (ex && (ex.type === 'upgrading' || ex.type === 'builder' || ex.basic_sentence || Array.isArray(ex.scrambled_sentences)));

    if (isMode5) {
      if (ex?.type === 'builder' || Array.isArray(ex?.scrambled_sentences)) {
        canCheck = this.state.mode5BuilderOrder.length > 0;
      } else {
        const textarea = document.getElementById('writing-upgrading-input');
        canCheck = Boolean(textarea && textarea.value.trim().length > 0);
      }
    } else if (this.state.currentMode === 'mode1' || (ex && ex.gaps && !ex.textTemplate)) {
      const inputs = document.querySelectorAll('.gap-input');
      canCheck = inputs.length > 0 && Array.from(inputs).some(input => input.value.trim().length > 0);
    } else if (this.state.currentMode === 'mode2' || (ex && ex.original)) {
      const textarea = document.getElementById('rephrasing-input');
      canCheck = textarea && textarea.value.trim().length > 0;
    } else if (this.state.currentMode === 'mode3' || (ex && ex.textTemplate)) {
      const inputs = document.querySelectorAll('.gap-input');
      canCheck = inputs.length > 0 && Array.from(inputs).some(input => input.value.trim().length > 0);
    } else if (this.state.currentMode === 'mode4' || (ex && ex.options)) {
      canCheck = this.state.selectedOption !== null || Boolean(this.state.selectedOptionValue);
    }

    btn.disabled = !canCheck;
    btn.className = canCheck 
      ? 'btn-duo w-full py-4 rounded-2xl text-lg font-black tracking-wider uppercase shadow-md btn-duo-green'
      : 'btn-duo w-full py-4 rounded-2xl text-lg font-black tracking-wider uppercase shadow-md btn-duo-white opacity-50 cursor-not-allowed';
  },

  async handleCheckAnswer() {
    if (this.state.isChecked) {
      this.advanceToNext();
      return;
    }

    const ex = this.state.sessionExercises[this.state.currentIndex];
    if (!ex) return;

    this.state.isChecking = true;

    const isMode5 = this.state.currentMode === 'mode5' || ex.type === 'upgrading' || ex.type === 'builder' || Boolean(ex.basic_sentence) || Array.isArray(ex.scrambled_sentences);

    if (isMode5) {
      this.checkMode5(ex);
    } else if (this.state.currentMode === 'mode1' || (ex.gaps && !ex.textTemplate)) {
      this.checkMode1(ex);
    } else if (this.state.currentMode === 'mode2' || ex.original) {
      await this.checkMode2(ex);
    } else if (this.state.currentMode === 'mode3' || ex.textTemplate) {
      this.checkMode3(ex);
    } else if (this.state.currentMode === 'mode4' || ex.options) {
      this.checkMode4(ex);
    }
  },

  formatGapSampleAnswers(gap) {
    const rawList = [
      gap?.answer,
      ...(Array.isArray(gap?.alternatives) ? gap.alternatives : []),
      ...(Array.isArray(gap?.acceptedAnswers) ? gap.acceptedAnswers : [])
    ].filter(Boolean);
    const unique = [];
    const seen = new Set();
    rawList.forEach(item => {
      const cleaned = String(item).trim();
      const key = cleaned.toLowerCase();
      if (cleaned && !seen.has(key)) {
        seen.add(key);
        unique.push(cleaned);
      }
    });
    return unique;
  },

  // Comprobar Modo 1
  checkMode1(rawEx) {
    const ex = GeminiClient.normalizeExercise('mode1', rawEx);
    if (!ex.isFromErrorBank && this.state.currentMode !== 'review') {
      this.recordQuestionInHistory('mode1', ex.id);
    }

    const useRelaxed = Boolean(this.state.noHintMode);
    let allCorrect = true;
    let hasFlexibleMatch = false;
    let hasWasWerePartial = false;
    const userAnswers = [];

    ex.gaps.forEach(gap => {
      const input = document.getElementById(`gap-${gap.id}`);
      const val = (input?.value || '').trim();
      userAnswers.push(val);

      let isGapCorrect = false;
      let isGapPartial = false;
      const statusRes = GeminiClient.validateGapWithStatus(val, gap, ex.sentence || '', ex.category || '');
      if (statusRes.isValid) {
        isGapCorrect = true;
        if (statusRes.isWasWerePartial) {
          isGapPartial = true;
          hasWasWerePartial = true;
        }
      } else if (useRelaxed) {
        const relaxedRes = GeminiClient.validateGapRelaxed(val, gap, ex.sentence || '', ex.category || '');
        isGapCorrect = relaxedRes.isValid;
        if (relaxedRes.isValid && relaxedRes.isFlexibleMatch) {
          hasFlexibleMatch = true;
        }
      }

      if (input) {
        input.classList.remove('correct', 'partial', 'incorrect');
        if (isGapCorrect) {
          input.classList.add(isGapPartial ? 'partial' : 'correct');
        } else {
          input.classList.add('incorrect');
        }
      }
      if (!isGapCorrect) allCorrect = false;
    });

    const expectedAnswers = ex.gaps
      .map((g, idx) => (g.infinitive ? `${g.infinitive} ➔ "${g.answer}"` : `Hueco ${idx + 1} ➔ "${g.answer}"`))
      .join(' | ');

    const exampleAnswers = ex.gaps
      .map((g, idx) => {
        const samples = this.formatGapSampleAnswers(g).map(a => `"${a}"`).join(' / ');
        return g.infinitive ? `${g.infinitive} ➔ ${samples}` : `Hueco ${idx + 1} ➔ ${samples}`;
      })
      .join(' | ');

    const mode1Category = ex.category || 'Tiempos Verbales';

    if (allCorrect) {
      SoundEffects.playCorrect();
      if (hasWasWerePartial) {
        this.showFeedback({
          type: 'partial',
          title: '¡Medio válido! En examen prioriza "were / weren\'t"',
          message: 'Has escrito "was / wasn\'t", aceptable en inglés informal en 1ª y 3ª persona del singular, pero en examen se recomienda "were / weren\'t".',
          rule: `${ex.rule}\n\n${GeminiClient.WERE_VS_WAS_NOTE}`,
          expectedText: `Forma estándar de examen: ${expectedAnswers}`,
          category: mode1Category
        });
      } else if (useRelaxed && hasFlexibleMatch) {
        this.showFeedback({
          type: 'correct',
          title: '¡Válido! Aceptado en modo Sin pista',
          message: 'Tu respuesta encaja gramatical y contextualmente en la frase (corrección flexible activa).',
          rule: ex.rule,
          expectedText: `Ejemplos de respuestas habituales: ${exampleAnswers}`,
          category: mode1Category
        });
      } else {
        this.showFeedback({
          type: 'correct',
          title: '¡Correcto! Muy bien resuelto',
          message: 'Has aplicado la forma verbal o preposición exacta que pide la frase.',
          rule: ex.rule,
          expectedText: `Forma correcta: ${expectedAnswers}`,
          category: mode1Category
        });
      }
      StorageManager.recordResult('mode1', true);
      if (ex.isFromErrorBank && ex.errorBankId) {
        StorageManager.resolveError(ex.errorBankId);
      }
    } else {
      SoundEffects.playIncorrect();
      this.showFeedback({
        type: 'error',
        title: '¡Incorrecto! Revisa la forma exigida',
        message: `Tu respuesta: "${userAnswers.join(' / ') || '—'}"`,
        rule: ex.rule,
        expectedText: `Respuesta correcta: ${expectedAnswers}`,
        category: mode1Category
      });
      StorageManager.recordResult('mode1', false);
      StorageManager.addError({
        id: StorageManager.normalizeErrorId('mode1', ex.id),
        mode: 'mode1',
        question: ex.sentence,
        userAnswer: userAnswers.join(' / '),
        correctAnswer: expectedAnswers,
        explanation: ex.rule,
        rawExercise: ex
      });
    }

    this.state.sessionResults.push({ isCorrect: allCorrect });
    this.markChecked();
  },

  // Comprobar Modo 2: Rephrasing con validación flexible offline
  async checkMode2(rawEx) {
    const ex = GeminiClient.normalizeExercise('mode2', rawEx);
    if (!ex.isFromErrorBank && this.state.currentMode !== 'review') {
      this.recordQuestionInHistory('mode2', ex.id);
    }

    const textarea = document.getElementById('rephrasing-input');
    const val = (textarea?.value || '').trim();

    const result = GeminiClient.validateRephrasing(val, ex.target, ex.alternatives, ex.keyword, ex.category || '');

    if (textarea) {
      textarea.classList.remove('correct', 'partial', 'incorrect');
      if (result.isValid) {
        textarea.classList.add(result.isPartial ? 'partial' : 'correct');
      } else {
        textarea.classList.add('incorrect');
      }
    }

    const mode2Category = ex.category || 'Rephrasing';

    if (result.isValid) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: result.isPartial ? 'partial' : 'correct',
        title: result.isWasWerePartial
          ? '¡Medio válido! En examen prioriza "were / weren\'t"'
          : result.isPartial
            ? '¡Casi perfecta! Válida'
            : '¡Correcto! Transformación impecable',
        message: result.feedback,
        rule: result.isWasWerePartial ? `${ex.rule}\n\n${GeminiClient.WERE_VS_WAS_NOTE}` : ex.rule,
        expectedText: result.isWasWerePartial ? `Solución estándar de examen: "${ex.target}"` : `Solución oficial: "${ex.target}"`,
        category: mode2Category
      });
      StorageManager.recordResult('mode2', true);

      // Si venía del banco de errores, lo resolvemos
      if (ex.isFromErrorBank && ex.errorBankId) {
        StorageManager.resolveError(ex.errorBankId);
      }
    } else {
      SoundEffects.playIncorrect();
      this.showFeedback({
        type: 'error',
        title: '¡Incorrecto! Transformación no coincidente',
        message: result.feedback,
        rule: ex.rule,
        expectedText: `Solución correcta: "${ex.target}"`,
        category: mode2Category
      });
      StorageManager.recordResult('mode2', false);
      StorageManager.addError({
        id: StorageManager.normalizeErrorId('mode2', ex.id),
        mode: 'mode2',
        question: `Original: "${ex.original}" (${ex.keyword})`,
        userAnswer: val,
        correctAnswer: ex.target,
        explanation: ex.rule,
        rawExercise: ex
      });
    }

    this.state.sessionResults.push({ isCorrect: result.isValid });
    this.markChecked();
  },

  // Comprobar Modo 3: Cloze Test (revisa todos los huecos)
  checkMode3(rawEx) {
    const ex = GeminiClient.normalizeExercise('mode3', rawEx);
    if (!ex.isFromErrorBank && this.state.currentMode !== 'review') {
      this.recordQuestionInHistory('mode3', ex.id);
    }

    const useRelaxed = Boolean(this.state.noHintMode);
    let correctCount = 0;
    let hasFlexibleMatch = false;
    let hasWasWerePartial = false;
    const totalGaps = ex.gaps.length;
    const breakdown = [];

    ex.gaps.forEach((gap, index) => {
      const input = document.getElementById(`cloze-gap-${gap.id}`);
      const val = (input?.value || '').trim();

      let isGapCorrect = false;
      let isGapPartial = false;
      const statusRes = GeminiClient.validateGapWithStatus(val, gap, ex.textTemplate || '', 'Cloze Test');
      if (statusRes.isValid) {
        isGapCorrect = true;
        if (statusRes.isWasWerePartial) {
          isGapPartial = true;
          hasWasWerePartial = true;
        }
      } else if (useRelaxed) {
        const relaxedRes = GeminiClient.validateGapRelaxed(val, gap, ex.textTemplate || '', 'Cloze Test');
        isGapCorrect = relaxedRes.isValid;
        if (relaxedRes.isValid && relaxedRes.isFlexibleMatch) {
          hasFlexibleMatch = true;
        }
      }

      if (input) {
        input.classList.remove('correct', 'partial', 'incorrect');
        if (isGapCorrect) {
          input.classList.add(isGapPartial ? 'partial' : 'correct');
        } else {
          input.classList.add('incorrect');
        }
      }

      if (isGapCorrect) {
        correctCount += 1;
      } else {
        breakdown.push(`Hueco #${index + 1} (${gap.infinitive}): "${gap.answer}"`);
      }
    });

    const isAllOrMostCorrect = correctCount === totalGaps;
    const isPassing = correctCount >= Math.ceil(totalGaps * 0.7);
    const fullSolutions = ex.gaps.map((g, i) => `#${i + 1}: "${g.answer}" (${g.infinitive})`).join(' · ');
    const fullExamples = ex.gaps
      .map((g, i) => `#${i + 1}: ${this.formatGapSampleAnswers(g).slice(0, 3).map(a => `"${a}"`).join(' / ')} (${g.infinitive})`)
      .join(' · ');

    const mode3Category = ex.category || (
      Number(ex.id) <= 10
        ? 'Travel Vocabulary (Cloze Test)'
        : Number(ex.id) <= 22
          ? 'Conditionals & Wishes (Cloze Test)'
          : 'Narrative Past Tenses & Phrasal Verbs (Cloze Test)'
    );

    const effectiveRule = hasWasWerePartial
      ? `${ex.generalRule}\n\n${GeminiClient.WERE_VS_WAS_NOTE}`
      : ex.generalRule;

    if (isAllOrMostCorrect) {
      SoundEffects.playCorrect();
      if (hasWasWerePartial) {
        this.showFeedback({
          type: 'partial',
          title: `¡Medio válido! ${correctCount}/${totalGaps} aciertos (revisa "were / weren't")`,
          message: 'Has usado "was / wasn\'t" en 1ª o 3ª persona del singular; en examen formal prioriza "were / weren\'t".',
          rule: effectiveRule,
          expectedText: `Respuestas estándar: ${fullSolutions}`,
          category: mode3Category
        });
      } else if (useRelaxed && hasFlexibleMatch) {
        this.showFeedback({
          type: 'correct',
          title: `¡Puntuación perfecta! ${correctCount}/${totalGaps} válidos (Sin pista)`,
          message: 'Tus respuestas mantienen coherencia con el contexto (corrección flexible activa).',
          rule: effectiveRule,
          expectedText: `Ejemplos de respuestas habituales: ${fullExamples}`,
          category: mode3Category
        });
      } else {
        this.showFeedback({
          type: 'correct',
          title: `¡Puntuación perfecta! ${correctCount}/${totalGaps} aciertos`,
          message: 'Has clavado todas las palabras del texto.',
          rule: effectiveRule,
          expectedText: `Respuestas: ${fullSolutions}`,
          category: mode3Category
        });
      }
      StorageManager.recordResult('mode3', true, 25);
      if (ex.isFromErrorBank && ex.errorBankId) {
        StorageManager.resolveError(ex.errorBankId);
      }
    } else if (isPassing) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: 'partial',
        title: hasWasWerePartial
          ? `¡Buen trabajo! ${correctCount}/${totalGaps} aciertos (revisa "were / weren't")`
          : useRelaxed && hasFlexibleMatch
            ? `¡Buen trabajo! ${correctCount}/${totalGaps} válidos (Sin pista)`
            : `¡Buen trabajo! ${correctCount}/${totalGaps} aciertos`,
        message: hasWasWerePartial
          ? 'Has acertado la mayoría del relato; recuerda priorizar "were / weren\'t" en examen formal.'
          : useRelaxed && hasFlexibleMatch
            ? 'Has acertado la gran mayoría del relato con corrección flexible activa.'
            : 'Has acertado la gran mayoría del relato.',
        rule: effectiveRule,
        expectedText: useRelaxed && hasFlexibleMatch
          ? `Correcciones pendientes: ${breakdown.join(' · ')}\nEjemplos habituales: ${fullExamples}`
          : `Correcciones pendientes: ${breakdown.join(' · ')}`,
        category: mode3Category
      });
      StorageManager.recordResult('mode3', true, 15);
      if (ex.isFromErrorBank && ex.errorBankId) {
        StorageManager.resolveError(ex.errorBankId);
      }
    } else {
      SoundEffects.playIncorrect();
      this.showFeedback({
        type: 'error',
        title: `Necesita repaso: ${correctCount}/${totalGaps} aciertos`,
        message: 'Revisa las palabras correctas para cada hueco:',
        rule: ex.generalRule,
        expectedText: breakdown.join(' · '),
        category: mode3Category
      });
      StorageManager.recordResult('mode3', false);
      StorageManager.addError({
        id: StorageManager.normalizeErrorId('mode3', ex.id),
        mode: 'mode3',
        question: `Cloze: ${ex.title}`,
        userAnswer: `${correctCount}/${totalGaps} aciertos`,
        correctAnswer: ex.gaps.map((g, i) => `#${i + 1}: ${g.answer}`).join(', '),
        explanation: ex.generalRule,
        rawExercise: ex
      });
    }

    this.state.sessionResults.push({ 
      isCorrect: isPassing, 
      correctCount: correctCount, 
      totalCount: totalGaps 
    });
    this.markChecked();
  },

  // Comprobar Modo 4: Test Teórico (Validación estricta por valor de texto exacto de la respuesta)
  checkMode4(rawEx) {
    const ex = GeminiClient.normalizeExercise('mode4', rawEx);
    if (!ex.isFromErrorBank && this.state.currentMode !== 'review') {
      this.recordQuestionInHistory('mode4', ex.id);
    }

    const correctAns = ex.correct_answer || '';
    const normCorrect = GeminiClient.normalizeText(correctAns);

    const cards = document.querySelectorAll('.option-card');
    let selectedText = this.state.selectedOptionValue || '';
    if (!selectedText && typeof this.state.selectedOption === 'number' && ex.options[this.state.selectedOption]) {
      selectedText = ex.options[this.state.selectedOption];
    }

    const normSelected = GeminiClient.normalizeText(selectedText);
    const isCorrect = Boolean(normSelected && normSelected === normCorrect);

    let correctLetter = '';
    const letters = ['A', 'B', 'C', 'D'];

    cards.forEach((card, idx) => {
      card.classList.remove('selected');
      const cardText = card.getAttribute('data-opt-value') || card.querySelector('.option-text')?.textContent || '';
      const isCardCorrect = GeminiClient.normalizeText(cardText) === normCorrect;
      const isCardSelected = idx === this.state.selectedOption || GeminiClient.normalizeText(cardText) === normSelected;

      if (isCardCorrect) {
        card.classList.add('correct');
        correctLetter = letters[idx] || '';
      } else if (isCardSelected && !isCorrect) {
        card.classList.add('incorrect');
      }
    });

    const detailedExplanation = GeminiClient.buildMode4DetailedExplanation(ex, selectedText, isCorrect);
    const mode4Category = ex.category || 'Test Teórico';

    if (isCorrect) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: 'correct',
        title: `¡Correcto! "${correctAns}"`,
        message: 'Has elegido la opción exacta.',
        rule: detailedExplanation,
        expectedText: null,
        category: mode4Category
      });
      StorageManager.recordResult('mode4', true);
      if (ex.isFromErrorBank && ex.errorBankId) {
        StorageManager.resolveError(ex.errorBankId);
      }
    } else {
      SoundEffects.playIncorrect();
      const letterPrefix = correctLetter ? `Opción ${correctLetter}: ` : '';
      this.showFeedback({
        type: 'error',
        title: '¡Incorrecto! Fíjate en la explicación',
        message: `Tu respuesta: "${selectedText || '—'}"`,
        rule: detailedExplanation,
        expectedText: `Respuesta correcta (${letterPrefix}"${correctAns}")`,
        category: mode4Category
      });
      StorageManager.recordResult('mode4', false);
      StorageManager.addError({
        id: StorageManager.normalizeErrorId('mode4', ex.id),
        mode: 'mode4',
        question: ex.question,
        userAnswer: selectedText,
        correctAnswer: correctAns,
        explanation: detailedExplanation,
        rawExercise: ex
      });
    }

    this.state.sessionResults.push({ isCorrect });
    this.markChecked();
  },

  // Construir el prompt listo para pegar en Gemini en ejercicios de Writing Lab (Modo 5)
  buildMode5GeminiPrompt(ex, studentText, wordCount) {
    const cleanText = String(studentText || '').trim();
    const isBuilder = ex?.type === 'builder';
    const essayType = ex?.essay_type || 'Opinion Essay';

    const contextLine = isBuilder
      ? `Mecánica: Paragraph Builder (${ex.paragraph_role || 'Body Paragraph'})`
      : `Frase base B1 a mejorar: "${ex.basic_sentence || ''}"\nConectores/vocabulario objetivo: ${(ex.target_connectors || []).join(', ')}`;

    return [
      'Actúa como corrector oficial de inglés de nivel Bachillerato (B2/C1).',
      `Tipo de redacción: ${essayType}`,
      contextLine,
      `Número de palabras del alumno: ${wordCount}`,
      '',
      isBuilder ? 'Párrafo ordenado por el alumno:' : 'Texto escrito por el alumno:',
      `"${cleanText}"`,
      '',
      'Por favor, corrígeme brevemente este texto indicando:',
      '1. Nota orientativa sobre 10 según criterios de Bachillerato (B2/C1).',
      '2. Errores o mejoras de gramática, registro formal y conectores.',
      '3. Una versión mejorada de nivel B2/C1 manteniendo exactamente mis ideas.'
    ].join('\n');
  },

  // Comprobar Modo 5: Writing Lab (Sentence Upgrading y Paragraph Builder)
  checkMode5(rawEx) {
    const ex = GeminiClient.normalizeExercise('mode5', rawEx);
    if (!ex.isFromErrorBank && this.state.currentMode !== 'review') {
      this.recordQuestionInHistory('mode5', ex.id);
    }
    const errorItemId = StorageManager.normalizeErrorId('mode5', ex.id);

    if (ex.type === 'upgrading') {
      const textarea = document.getElementById('writing-upgrading-input');
      const val = (textarea?.value || '').trim();
      const result = GeminiClient.validateWritingUpgrading(val, ex);
      const wordCount = GeminiClient.countWords(val);
      const geminiPrompt = this.buildMode5GeminiPrompt(ex, val, wordCount);

      if (textarea) {
        textarea.classList.remove('correct', 'incorrect');
        textarea.classList.add(result.isValid ? 'correct' : 'incorrect');
      }

      const modelsText = ex.model_answers
        .map((ans, idx) => `Modelo ${idx + 1}: "${ans}"`)
        .join('\n');
      const mode5UpgradingCategory = `${ex.essay_type} · Sentence Upgrading`;

      if (result.isValid) {
        SoundEffects.playCorrect();
        this.showFeedback({
          type: result.isPartial ? 'partial' : 'correct',
          title: result.isPartial
            ? '¡Buena mejora! Cuidado con las contracciones'
            : '¡Excelente mejora de nivel B2/C1!',
          message: result.feedback,
          rule: ex.explanation,
          expectedText: `Versiones modelo de examen:\n${modelsText}`,
          geminiPrompt,
          category: mode5UpgradingCategory
        });
        StorageManager.recordResult('mode5', true, result.isPartial ? 10 : 15);
        if (ex.isFromErrorBank && ex.errorBankId) {
          StorageManager.resolveError(ex.errorBankId);
        }
      } else {
        SoundEffects.playIncorrect();
        this.showFeedback({
          type: 'error',
          title: 'Revisa los conectores y el registro formal',
          message: result.feedback,
          rule: ex.explanation,
          expectedText: `Versiones modelo de examen:\n${modelsText}`,
          geminiPrompt,
          category: mode5UpgradingCategory
        });
        StorageManager.recordResult('mode5', false);
        StorageManager.addError({
          id: errorItemId,
          mode: 'mode5',
          question: `[${ex.essay_type}] Mejora: "${ex.basic_sentence}" (Conectores: ${ex.target_connectors.join(', ')})`,
          userAnswer: val,
          correctAnswer: ex.model_answers[0] || '',
          explanation: ex.explanation,
          rawExercise: ex
        });
      }

      this.state.sessionResults.push({ isCorrect: result.isValid });
      this.markChecked();
      return;
    }

    // Paragraph Builder
    const userOrder = this.state.mode5BuilderOrder;
    const correctOrder = ex.correct_order;
    const cards = document.querySelectorAll('#builder-cards-container .builder-card');
    const moveBtns = document.querySelectorAll('#builder-cards-container .builder-move-btn');
    moveBtns.forEach(btn => { btn.disabled = true; });
    const resetBtn = document.getElementById('btn-reset-builder-order');
    if (resetBtn) resetBtn.disabled = true;

    let exactMatches = 0;
    cards.forEach((card, pos) => {
      const isPosCorrect = userOrder[pos] === correctOrder[pos];
      card.classList.remove('correct', 'incorrect');
      card.classList.add(isPosCorrect ? 'correct' : 'incorrect');
      if (isPosCorrect) exactMatches += 1;
    });

    const isAllCorrect = exactMatches === correctOrder.length;
    const orderedParagraph = correctOrder
      .map(sentIdx => ex.scrambled_sentences[sentIdx])
      .join(' ');
    const studentParagraph = userOrder
      .map(sentIdx => ex.scrambled_sentences[sentIdx])
      .join(' ');
    const studentWordCount = GeminiClient.countWords(studentParagraph);
    const geminiPrompt = this.buildMode5GeminiPrompt(ex, studentParagraph, studentWordCount);
    const mode5BuilderCategory = `${ex.essay_type} · ${ex.paragraph_role}`;

    if (isAllCorrect) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: 'correct',
        title: `¡Párrafo perfecto! (${exactMatches}/${correctOrder.length})`,
        message: 'Has enlazado todas las ideas con cohesión y coherencia lógica.',
        rule: ex.explanation,
        expectedText: `Párrafo completo:\n${orderedParagraph}`,
        geminiPrompt,
        category: mode5BuilderCategory
      });
      StorageManager.recordResult('mode5', true, 15);
      if (ex.isFromErrorBank && ex.errorBankId) {
        StorageManager.resolveError(ex.errorBankId);
      }
    } else {
      SoundEffects.playIncorrect();
      this.showFeedback({
        type: 'error',
        title: `Orden incorrecto (${exactMatches}/${correctOrder.length} posiciones bien)`,
        message: 'Fíjate en las tarjetas marcadas en rojo y revisa los conectores de transición:',
        rule: ex.explanation,
        expectedText: `Orden correcto del párrafo:\n${orderedParagraph}`,
        geminiPrompt,
        category: mode5BuilderCategory
      });
      StorageManager.recordResult('mode5', false);
      StorageManager.addError({
        id: errorItemId,
        mode: 'mode5',
        question: `[${ex.essay_type} - ${ex.paragraph_role}] Ordena las 4 frases del párrafo`,
        userAnswer: `${exactMatches}/${correctOrder.length} posiciones correctas`,
        correctAnswer: orderedParagraph,
        explanation: ex.explanation,
        rawExercise: ex
      });
    }

    this.state.sessionResults.push({ isCorrect: isAllCorrect });
    this.markChecked();
  },

  markChecked() {
    this.state.isChecked = true;
    const progressBar = document.getElementById('session-progress-fill');
    const total = this.state.sessionExercises.length;
    if (progressBar && total > 0) {
      const completedPct = Math.min(100, ((this.state.currentIndex + 1) / total) * 100);
      progressBar.style.width = `${completedPct}%`;
    }
    this.updateHomeStats();
    this.updateCheckButtonState();
  },

  // ==========================================
  // PANEL DE FEEDBACK DUOLINGO STYLE (TEXTO EXPLICATIVO INFERIOR)
  // ==========================================
  showFeedback({ type, title, message, rule, expectedText, geminiPrompt = null, category = null }) {
    const sheet = document.getElementById('feedback-sheet');
    const titleEl = document.getElementById('feedback-title');
    const msgEl = document.getElementById('feedback-message');
    const ruleContainer = document.getElementById('feedback-rule-container');
    const ruleEl = document.getElementById('feedback-rule-text');
    const categoryRow = document.getElementById('feedback-category-row');
    const categoryBadge = document.getElementById('feedback-category-badge');
    const expectedEl = document.getElementById('feedback-expected');
    const iconContainer = document.getElementById('feedback-icon-container');
    const geminiActions = document.getElementById('feedback-gemini-actions');
    const geminiStatus = document.getElementById('gemini-send-status');
    const geminiFallbackBox = document.getElementById('gemini-fallback-box');

    if (!sheet) return;

    sheet.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'bg-rose-50', 'border-rose-300', 'bg-amber-50', 'border-amber-300', 'animate-slide-up');
    void sheet.offsetWidth;
    sheet.classList.add('animate-slide-up');

    if (type === 'correct') {
      sheet.classList.add('bg-emerald-50', 'border-emerald-300');
      titleEl.className = 'text-lg sm:text-xl font-black text-emerald-800';
      titleEl.textContent = title;
      iconContainer.innerHTML = `
        <div class="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-md">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        </div>
      `;
    } else if (type === 'partial') {
      sheet.classList.add('bg-amber-50', 'border-amber-300');
      titleEl.className = 'text-lg sm:text-xl font-black text-amber-800';
      titleEl.textContent = title;
      iconContainer.innerHTML = `
        <div class="w-11 h-11 rounded-full bg-amber-500 text-white flex items-center justify-center font-black shadow-md">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
      `;
    } else {
      sheet.classList.add('bg-rose-50', 'border-rose-300');
      titleEl.className = 'text-lg sm:text-xl font-black text-rose-800';
      titleEl.textContent = title;
      iconContainer.innerHTML = `
        <div class="w-11 h-11 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shadow-md animate-shake">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
        </div>
      `;
    }

    msgEl.textContent = message || '';

    if (expectedText) {
      expectedEl.classList.remove('hidden');
      expectedEl.textContent = expectedText;
    } else {
      expectedEl.classList.add('hidden');
    }

    if (categoryRow && categoryBadge) {
      if (category) {
        categoryBadge.textContent = `🏷️ ${category}`;
        categoryRow.classList.remove('hidden');
      } else {
        categoryBadge.textContent = '';
        categoryRow.classList.add('hidden');
      }
    }

    if (rule || category) {
      ruleContainer.classList.remove('hidden');
      ruleEl.textContent = rule || '';
    } else {
      ruleContainer.classList.add('hidden');
    }

    this.state.lastGeminiPrompt = geminiPrompt || '';
    if (geminiStatus) {
      geminiStatus.className = 'hidden p-3 rounded-2xl text-xs sm:text-sm font-bold leading-relaxed';
      geminiStatus.innerHTML = '';
    }
    if (geminiFallbackBox) geminiFallbackBox.classList.add('hidden');
    if (geminiActions) {
      if (geminiPrompt) geminiActions.classList.remove('hidden');
      else geminiActions.classList.add('hidden');
    }

    setTimeout(() => {
      sheet.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  },

  resetFeedbackSheet() {
    this.state.lastGeminiPrompt = '';
    const sheet = document.getElementById('feedback-sheet');
    if (sheet) {
      sheet.classList.add('hidden');
      sheet.classList.remove('animate-slide-up');
    }
    document.getElementById('feedback-category-row')?.classList.add('hidden');
    const categoryBadge = document.getElementById('feedback-category-badge');
    if (categoryBadge) categoryBadge.textContent = '';
    document.getElementById('feedback-gemini-actions')?.classList.add('hidden');
    document.getElementById('gemini-send-status')?.classList.add('hidden');
    document.getElementById('gemini-fallback-box')?.classList.add('hidden');
  },

  async copyTextToClipboard(text) {
    const content = String(text || '');
    if (!content) return false;

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(content);
        return true;
      } catch (e) {
        console.warn('[Clipboard] writeText failed, trying textarea fallback:', e);
      }
    }

    let tempArea = null;
    try {
      tempArea = document.createElement('textarea');
      tempArea.value = content;
      tempArea.setAttribute('readonly', '');
      tempArea.style.position = 'fixed';
      tempArea.style.top = '-9999px';
      tempArea.style.left = '-9999px';
      tempArea.style.opacity = '0';
      document.body.appendChild(tempArea);
      tempArea.focus();
      tempArea.select();
      tempArea.setSelectionRange(0, content.length);
      const ok = document.execCommand('copy');
      return Boolean(ok);
    } catch (err) {
      console.warn('[Clipboard] Fallback copy failed:', err);
      return false;
    } finally {
      if (tempArea && tempArea.parentNode) {
        tempArea.parentNode.removeChild(tempArea);
      }
    }
  },

  async handleSendToGemini() {
    const promptText = this.state.lastGeminiPrompt;
    if (!promptText) return;

    const statusEl = document.getElementById('gemini-send-status');
    const fallbackBox = document.getElementById('gemini-fallback-box');
    const fallbackTextarea = document.getElementById('gemini-fallback-textarea');

    const copied = await this.copyTextToClipboard(promptText);

    let popup = null;
    try {
      popup = window.open('https://gemini.google.com/', '_blank', 'noopener,noreferrer');
    } catch (e) {
      popup = null;
    }

    const popupOpened = Boolean(popup && !popup.closed);

    if (copied && popupOpened) {
      if (fallbackBox) fallbackBox.classList.add('hidden');
      if (statusEl) {
        statusEl.className = 'gemini-status-ok p-3 rounded-2xl text-xs sm:text-sm font-bold leading-relaxed';
        statusEl.textContent = '✅ Texto copiado al portapapeles y Gemini abierto en una pestaña nueva. Solo tienes que pegarlo (Ctrl+V o mantener pulsado ➔ Pegar).';
      }
      this.showToast('Texto copiado y Gemini abierto.');
    } else if (copied) {
      if (fallbackBox) fallbackBox.classList.add('hidden');
      if (statusEl) {
        statusEl.className = 'gemini-status-ok p-3 rounded-2xl text-xs sm:text-sm font-bold leading-relaxed';
        statusEl.innerHTML = '✅ <strong>Texto ya copiado al portapapeles y listo para pegar en Gemini.</strong> Si el navegador bloqueó la pestaña o necesitas cambiar de ventana manualmente, <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="underline font-black">pulsa aquí para abrir Gemini</a> y pega el texto.';
      }
      this.showToast('Texto copiado al portapapeles para pegar en Gemini.');
    } else {
      if (fallbackTextarea) {
        fallbackTextarea.value = promptText;
      }
      if (fallbackBox) {
        fallbackBox.classList.remove('hidden');
      }
      if (fallbackTextarea) {
        fallbackTextarea.focus();
        fallbackTextarea.select();
      }
      if (statusEl) {
        statusEl.className = 'gemini-status-warn p-3 rounded-2xl text-xs sm:text-sm font-bold leading-relaxed';
        statusEl.innerHTML = '⚠️ No pudimos copiar automáticamente al portapapeles. Usa el cuadro inferior para copiar el texto y pégalo en Gemini (<a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="underline font-black">abrir Gemini</a>).';
      }
      this.showToast('Copia el texto del cuadro inferior para pegarlo en Gemini.');
    }
  },

  advanceToNext() {
    this.state.currentIndex += 1;
    if (this.state.currentIndex < this.state.sessionExercises.length) {
      this.renderCurrentExercise();
    } else {
      this.finishSession();
    }
  },

  // ==========================================
  // FIN DE SESIÓN Y PANTALLA RESUMEN
  // ==========================================
  finishSession() {
    SoundEffects.playComplete();
    this.showScreen('summary');

    let total = this.state.sessionResults.length;
    let correct = this.state.sessionResults.filter(r => r.isCorrect).length;

    // En modo 3 (Cloze test), desglosar por huecos acertados en el relato
    if (this.state.currentMode === 'mode3' && this.state.sessionResults[0]?.totalCount) {
      total = this.state.sessionResults[0].totalCount;
      correct = this.state.sessionResults[0].correctCount;
    }

    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    document.getElementById('summary-score').textContent = `${correct}/${total}`;
    document.getElementById('summary-pct').textContent = `${pct}% de acierto`;

    const xpEarned = correct * 10;
    document.getElementById('summary-xp').textContent = `+${xpEarned} XP`;

    const streak = StorageManager.recordActivityToday();
    document.getElementById('summary-streak').textContent = `${streak.currentStreak} días 🔥`;

    // Mensaje motivador personalizado
    const titleEl = document.getElementById('summary-title');
    const msgEl = document.getElementById('summary-message');

    if (pct === 100) {
      titleEl.textContent = '¡IMPRESIONANTE, SARA!';
      msgEl.textContent = '¡Has clavado todas las preguntas! Estás más que preparada para el examen.';
    } else if (pct >= 80) {
      titleEl.textContent = '¡MUY BIEN HECHO!';
      msgEl.textContent = 'Gran dominio del temario. Los errores se han guardado en tu Banco de Errores para afinar.';
    } else if (pct >= 50) {
      titleEl.textContent = '¡BUEN ENTRENAMIENTO!';
      msgEl.textContent = 'Sigue practicando las reglas clave. Cada intento te acerca al aprobado sobrado.';
    } else {
      titleEl.textContent = '¡ÁNIMO, A POR ELLO!';
      msgEl.textContent = 'Las trampas de examen son duras. Te recomendamos hacer una sesión de Banco de Errores.';
    }
  },

  // ==========================================
  // BANCO DE ERRORES (SCREEN)
  // ==========================================
  formatErrorQuestionHtml(err) {
    let rawQ = String(err?.question || '');
    const gaps = Array.isArray(err?.rawExercise?.gaps) ? err.rawExercise.gaps : [];

    // Reemplazar {{gap1}}, {{gap2}}, {{1}}, etc. por una píldora/subrayado limpio sin sintaxis cruda
    rawQ = rawQ.replace(/\{\{(?:gap)?(\d+)\}\}(?:\s*\(([^)]+)\))?/gi, (match, numStr, inlineHint) => {
      const idx = Math.max(0, parseInt(numStr, 10) - 1);
      const gapObj = gaps[idx];
      const hintText = (inlineHint || gapObj?.infinitive || '').trim();
      const hintBadge = hintText
        ? ` <span class="text-xs font-black text-blue-700 uppercase">(${hintText})</span>`
        : '';
      return `<span class="inline-flex items-baseline px-2 py-0.5 mx-0.5 rounded-lg bg-slate-100 border-b-2 border-slate-400 text-slate-700 font-bold">______${hintBadge}</span>`;
    });

    // Cualquier otro marcador {{...}} residual
    rawQ = rawQ.replace(/\{\{[^}]+\}\}/g, '<span class="inline-block px-2 py-0.5 mx-0.5 rounded-lg bg-slate-100 border-b-2 border-slate-400 text-slate-700 font-bold">______</span>');

    return rawQ;
  },

  showErrorBankScreen() {
    this.showScreen('error-bank');
    const errors = StorageManager.getErrorBank();
    const container = document.getElementById('error-list-container');
    const emptyState = document.getElementById('error-empty-state');
    const countBadge = document.getElementById('error-bank-total-badge');

    if (countBadge) countBadge.textContent = `${errors.length} errores guardados`;

    if (errors.length === 0) {
      if (emptyState) emptyState.classList.remove('hidden');
      if (container) container.innerHTML = '';
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    let html = '';

    errors.forEach((err, idx) => {
      const modeNames = {
        mode1: 'Tiempos Verbales',
        mode2: 'Rephrasing',
        mode3: 'Cloze Test',
        mode4: 'Test Teórico',
        mode5: 'Writing Lab'
      };

      const formattedQuestion = this.formatErrorQuestionHtml(err);

      html += `
        <div class="p-5 md:p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm space-y-3 relative">
          <div class="flex items-center justify-between text-xs font-bold text-slate-400">
            <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-black">${modeNames[err.mode] || 'Ejercicio'}</span>
            <button class="text-rose-500 hover:text-rose-700 font-bold text-xs" onclick="App.deleteErrorItem('${err.id}')">Eliminar</button>
          </div>

          <div class="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
            ${formattedQuestion}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800">
              <span class="block text-xs font-black uppercase text-rose-500 mb-1">Tu respuesta:</span>
              <span class="font-bold">${err.userAnswer || '(En blanco)'}</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
              <span class="block text-xs font-black uppercase text-emerald-600 mb-1">Respuesta esperada:</span>
              <span class="font-bold">${err.correctAnswer}</span>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed font-medium">
            <strong class="text-slate-800">Regla explicada:</strong> ${err.explanation}
          </div>
        </div>
      `;
    });

    if (container) container.innerHTML = html;
  },

  deleteErrorItem(errorId) {
    StorageManager.resolveError(errorId);
    this.showErrorBankScreen();
    this.updateHomeStats();
  },

  clearAllErrors() {
    if (confirm('¿Seguro que quieres vaciar todo el Banco de Errores?')) {
      StorageManager.clearErrorBank();
      this.showErrorBankScreen();
      this.updateHomeStats();
    }
  },

  // ==========================================
  // MODAL DE AJUSTES Y CONFIGURACIÓN
  // ==========================================
  openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (!modal) return;

    const soundToggle = document.getElementById('setting-sound-toggle');
    const darkToggle = document.getElementById('setting-dark-mode-toggle');
    const settings = StorageManager.getSettings();

    if (soundToggle) soundToggle.checked = settings.soundEnabled;
    if (darkToggle) darkToggle.checked = document.body.classList.contains('dark-mode');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  },

  closeSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    this.updateHomeStats();
  },

  saveSettings() {
    const soundToggle = document.getElementById('setting-sound-toggle');
    const darkToggle = document.getElementById('setting-dark-mode-toggle');

    if (darkToggle) {
      this.applyTheme(darkToggle.checked, true);
    }

    if (soundToggle) {
      const current = StorageManager.getSettings();
      StorageManager.setSettings({
        ...current,
        soundEnabled: soundToggle.checked
      });
    }

    this.closeSettingsModal();
    this.showToast('Configuración guardada correctamente.');
  },

  // Toast flotante
  showToast(message, duration = 3500) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('animate-slide-up');
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, duration);
  },

  // ==========================================
  // CONFIGURACIÓN DE EVENT LISTENERS
  // ==========================================
  setupEventListeners() {
    // Botones de inicio de modo
    document.getElementById('card-mode-1')?.addEventListener('click', () => this.startSession('mode1'));
    document.getElementById('card-mode-2')?.addEventListener('click', () => this.startSession('mode2'));
    document.getElementById('card-mode-3')?.addEventListener('click', () => this.startSession('mode3'));
    document.getElementById('card-mode-4')?.addEventListener('click', () => this.startSession('mode4'));
    document.getElementById('card-mode-5')?.addEventListener('click', () => this.startSession('mode5'));
    document.getElementById('card-mode-review')?.addEventListener('click', () => this.startSession('review'));

    // Botón directo a ver Banco de Errores
    document.getElementById('btn-open-error-bank')?.addEventListener('click', () => this.showErrorBankScreen());
    document.getElementById('btn-back-from-errors')?.addEventListener('click', () => this.showScreen('home'));
    document.getElementById('btn-start-review-session')?.addEventListener('click', () => this.startSession('review'));
    document.getElementById('btn-clear-all-errors')?.addEventListener('click', () => this.clearAllErrors());

    // Conmutadores de Modo Oscuro (Header y Modal de Ajustes sincronizados)
    document.getElementById('btn-dark-mode-toggle')?.addEventListener('click', () => this.toggleDarkMode());
    document.getElementById('setting-dark-mode-toggle')?.addEventListener('change', (e) => {
      this.applyTheme(Boolean(e.target.checked), true);
    });

    // Botón comprobar y continuar
    document.getElementById('btn-session-check')?.addEventListener('click', () => this.handleCheckAnswer());

    // Enviar a Gemini desde el panel de feedback (Modo 5)
    document.getElementById('btn-send-to-gemini')?.addEventListener('click', () => this.handleSendToGemini());
    document.getElementById('btn-select-fallback-gemini')?.addEventListener('click', () => {
      const fallbackTextarea = document.getElementById('gemini-fallback-textarea');
      if (fallbackTextarea) {
        fallbackTextarea.focus();
        fallbackTextarea.select();
        fallbackTextarea.setSelectionRange(0, fallbackTextarea.value.length);
      }
    });

    // Botón salir de sesión
    document.getElementById('btn-session-exit')?.addEventListener('click', () => {
      if (confirm('¿Quieres salir de la sesión? No se guardará el progreso de los ejercicios pendientes.')) {
        this.showScreen('home');
      }
    });

    // Botón volver a inicio desde resumen
    document.getElementById('btn-summary-home')?.addEventListener('click', () => this.showScreen('home'));
    document.getElementById('btn-summary-replay')?.addEventListener('click', () => {
      if (this.state.currentMode) this.startSession(this.state.currentMode);
      else this.showScreen('home');
    });

    // Ajustes
    document.getElementById('btn-open-settings')?.addEventListener('click', () => this.openSettingsModal());
    document.getElementById('gemini-status-pill')?.addEventListener('click', () => this.openSettingsModal());
    document.getElementById('btn-close-settings')?.addEventListener('click', () => this.closeSettingsModal());
    document.getElementById('btn-save-settings')?.addEventListener('click', () => this.saveSettings());

    // Exportar e Importar Progreso
    document.getElementById('btn-export-progress')?.addEventListener('click', () => {
      StorageManager.exportProgress();
      this.showToast('Descargando copia de seguridad...');
    });

    document.getElementById('file-import-input')?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = StorageManager.importProgress(event.target.result);
        if (res.success) {
          this.showToast('Progreso importado con éxito');
          this.updateHomeStats();
        } else {
          alert('Error al leer el archivo de copia de seguridad: ' + res.error);
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('btn-reset-stats')?.addEventListener('click', () => {
      if (confirm('¿Seguro que deseas reiniciar todas las estadísticas y rachas? Esta acción no se puede deshacer.')) {
        StorageManager.resetAllProgress();
        this.updateHomeStats();
        this.showToast('Estadísticas reiniciadas.');
      }
    });

    // PWA Install Button
    document.getElementById('btn-pwa-install')?.addEventListener('click', () => this.promptPwaInstall());
  }
};

// Arrancar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

window.App = App;
window.toggleDarkMode = () => App.toggleDarkMode();
