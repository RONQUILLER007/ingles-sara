// Lógica principal de la aplicación PWA Inglés Sara
const App = {
  // Estado actual
  state: {
    currentScreen: 'home', // 'home' | 'session' | 'summary' | 'errorBank'
    currentMode: null,     // 'mode1' | 'mode2' | 'mode3' | 'mode4' | 'review'
    sessionExercises: [],
    currentIndex: 0,
    sessionResults: [],
    selectedOption: null, // Para modo 4
    isChecking: false,
    isChecked: false,
    isLoading: false,
    currentFeedback: null,
    // Para modo 3 (Cloze test completo)
    mode3UserAnswers: {}
  },

  init() {
    console.log('[App] Initializing English App for Sara');
    // Registrar Service Worker si es compatible
    if ('serviceWorker' in navigator) {
      const swUrl = new URL('sw.js', window.location.href).href;
      navigator.serviceWorker.register(swUrl, { scope: './' })
        .then(reg => console.log('[SW] Registered successfully on GitHub Pages scope:', reg.scope))
        .catch(err => console.log('[SW] Registration failed:', err));
    }

    // Inicializar audio en la primera interacción
    document.addEventListener('touchstart', () => SoundEffects.init(), { once: true });
    document.addEventListener('click', () => SoundEffects.init(), { once: true });

    // Cargar datos en la UI
    this.updateHomeStats();
    this.setupEventListeners();
    this.checkPwaInstallPrompt();
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
      if (el) el.classList.add('hidden');
    });

    const activeEl = document.getElementById(`${screenName}-screen`);
    if (activeEl) {
      activeEl.classList.remove('hidden');
      activeEl.classList.add('animate-pop');
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
    const apiKey = StorageManager.getApiKey();

    // Racha
    document.getElementById('stat-streak').textContent = streak.currentStreak || 0;
    document.getElementById('stat-xp').textContent = stats.xp || 0;

    // Precisión global
    const accuracy = stats.totalAnswered > 0 
      ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) 
      : 0;
    document.getElementById('stat-accuracy').textContent = `${accuracy}%`;

    // Contador de errores
    const errorCountEl = document.getElementById('stat-errors-count');
    if (errorCountEl) errorCountEl.textContent = errors.length;

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

    // Indicador de modo de generación (IA en vivo vs Banco local)
    const geminiStatus = document.getElementById('gemini-status-pill');
    if (geminiStatus) {
      if (apiKey) {
        geminiStatus.innerHTML = `
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-xs font-bold text-emerald-700">Gemini 3.8 Flash Activo (Generación en Vivo)</span>
        `;
        geminiStatus.className = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 cursor-pointer";
      } else {
        geminiStatus.innerHTML = `
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span class="text-xs font-bold text-amber-700">Banco de Exámenes Sara (Añadir API Key para ejercicios infinitos)</span>
        `;
        geminiStatus.className = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 cursor-pointer";
      }
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
  // INICIO DE SESIÓN DE PRÁCTICA CON BLOQUEO DE UI
  // ==========================================
  async startSession(modeKey) {
    if (this.state.isGenerating) return;

    this.state.currentMode = modeKey;
    this.state.currentIndex = 0;
    this.state.sessionResults = [];
    this.state.selectedOption = null;
    this.state.isChecking = false;
    this.state.isChecked = false;
    this.state.currentFeedback = null;
    this.state.mode3UserAnswers = {};

    // 1. Bloqueo de UI y aviso visual inmediato para evitar múltiples clics
    this.setGeneratingState(true, 'Generando ejercicios, por favor espera...');

    try {
      if (modeKey === 'mode1') {
        this.state.sessionExercises = await GeminiClient.getMode1Exercises(5);
      } else if (modeKey === 'mode2') {
        this.state.sessionExercises = await GeminiClient.getMode2Exercises(5);
      } else if (modeKey === 'mode3') {
        const cloze = await GeminiClient.getMode3Exercise();
        this.state.sessionExercises = [cloze];
      } else if (modeKey === 'mode4') {
        this.state.sessionExercises = await GeminiClient.getMode4Exercises(5);
      } else if (modeKey === 'review') {
        const errorList = StorageManager.getErrorBank();
        if (errorList.length === 0) {
          this.setGeneratingState(false);
          alert('¡Enhorabuena! No tienes errores pendientes por repasar en el banco.');
          this.showScreen('home');
          return;
        }
        const shuffled = [...errorList].sort(() => 0.5 - Math.random()).slice(0, 5);
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
      }

      this.setGeneratingState(false);
      this.showScreen('session');
      this.renderCurrentExercise();
    } catch (err) {
      this.setGeneratingState(false);
      console.warn('Error en la sesión:', err);

      // Si tras el reintento automático persiste el error de saturación (429/503)
      if (err.isHighDemand) {
        this.showHighDemandModal(modeKey);
      } else {
        alert('Hubo un problema de conexión con la IA. Cargando ejercicios del temario oficial...');
        this.startOfflineSession(modeKey);
      }
    }
  },

  startOfflineSession(modeKey) {
    this.showScreen('session');
    this.state.sessionExercises = GeminiClient.getRandomLocalExercises(modeKey === 'review' ? 'mode2' : modeKey, 5);
    this.renderCurrentExercise();
    this.showToast('Sesión cargada con el banco de examen.');
  },

  showHighDemandModal(modeKey) {
    const modal = document.getElementById('high-demand-modal');
    if (!modal) {
      alert('Los servidores están muy ocupados ahora mismo. Por favor, espera un minuto y vuelve a intentarlo.');
      this.showScreen('home');
      return;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const btnOffline = document.getElementById('btn-high-demand-offline');
    const btnClose = document.getElementById('btn-high-demand-close');

    if (btnOffline) {
      btnOffline.onclick = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        this.startOfflineSession(modeKey);
      };
    }

    if (btnClose) {
      btnClose.onclick = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        this.showScreen('home');
      };
    }
  },

  // ==========================================
  // RENDERIZADO DEL EJERCICIO ACTUAL
  // ==========================================
  renderCurrentExercise() {
    this.state.isChecking = false;
    this.state.isChecked = false;
    this.state.selectedOption = null;
    this.resetFeedbackSheet();

    const container = document.getElementById('exercise-card-container');
    const modeBadge = document.getElementById('session-mode-badge');
    const progressBar = document.getElementById('session-progress-fill');
    const counter = document.getElementById('session-counter');

    const total = this.state.sessionExercises.length;
    const current = this.state.currentIndex;
    const progressPct = total > 0 ? (current / total) * 100 : 0;
    progressBar.style.width = `${progressPct}%`;
    counter.textContent = `${current + 1} de ${total}`;

    // Nombres legibles de modo
    const modeTitles = {
      mode1: 'Tiempos Verbales',
      mode2: 'Rephrasing (Examen)',
      mode3: 'Cloze Test (Relato)',
      mode4: 'Test Teórico',
      review: 'Repaso de Errores'
    };
    modeBadge.textContent = modeTitles[this.state.currentMode] || 'Práctica';

    const exercise = this.state.sessionExercises[current];
    if (!exercise) {
      this.finishSession();
      return;
    }

    // Render según el tipo
    if (this.state.currentMode === 'mode1' || (exercise.gaps && !exercise.textTemplate)) {
      this.renderMode1(container, exercise);
    } else if (this.state.currentMode === 'mode2' || exercise.original) {
      this.renderMode2(container, exercise);
    } else if (this.state.currentMode === 'mode3' || exercise.textTemplate) {
      this.renderMode3(container, exercise);
    } else if (this.state.currentMode === 'mode4' || exercise.options) {
      this.renderMode4(container, exercise);
    }

    this.updateCheckButtonState();
  },

  // Render Modo 1: Frases con 1 o 2 huecos e infinitivo
  renderMode1(container, ex) {
    let htmlSentence = ex.sentence;
    ex.gaps.forEach((gap, index) => {
      const infinitiveBadge = `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-700 mx-1 align-middle uppercase tracking-wider">(${gap.infinitive})</span>`;
      const inputField = `<input type="text" id="gap-${gap.id}" class="gap-input mx-1 text-slate-800 placeholder-slate-400 font-bold" placeholder="Escribe aquí..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-gap-id="${gap.id}">`;
      
      const regex = new RegExp(`(\\{\\{${gap.id}\\}\\}|\\{\\{${index + 1}\\}\\}|\\{\\{gap${index + 1}\\}\\})`, 'gi');
      if (regex.test(htmlSentence)) {
        htmlSentence = htmlSentence.replace(regex, `${infinitiveBadge} ${inputField}`);
      } else {
        htmlSentence = htmlSentence.replace(/\{\{[^}]+\}\}/, `${infinitiveBadge} ${inputField}`);
      }
    });

    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center gap-2 text-slate-500 text-sm font-bold">
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          <span>Conjuga el verbo entre paréntesis en el tiempo verbal adecuado:</span>
        </div>

        <div class="p-6 md:p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-sm leading-relaxed text-xl md:text-2xl text-slate-800 font-semibold">
          ${htmlSentence}
        </div>

        <p class="text-xs text-slate-400 text-center font-medium">Pulsa en cada recuadro para escribir tu respuesta</p>
      </div>
    `;

    // Listeners para activar el botón de comprobar al escribir
    setTimeout(() => {
      const inputs = container.querySelectorAll('.gap-input');
      inputs.forEach(input => {
        input.addEventListener('input', () => this.updateCheckButtonState());
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') this.handleCheckAnswer();
        });
      });
      if (inputs[0]) inputs[0].focus();
    }, 50);
  },

  // Render Modo 2: Rephrasing (Key Word Transformation)
  renderMode2(container, ex) {
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center gap-2 text-slate-500 text-sm font-bold">
          <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          <span>Reescribe la oración para que signifique lo mismo usando la palabra obligatoria:</span>
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
              (${ex.keyword})
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
  renderMode3(container, ex) {
    let htmlText = ex.textTemplate;
    ex.gaps.forEach((gap, index) => {
      const gapNum = index + 1;
      const infinitiveBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-700 mx-0.5">#${gapNum} (${gap.infinitive})</span>`;
      const inputField = `<input type="text" id="cloze-gap-${gap.id}" class="gap-input mx-1 text-slate-800 placeholder-slate-400 font-bold" placeholder="${gapNum}..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-gap-id="${gap.id}">`;
      
      const regex = new RegExp(`(\\{\\{${gap.id}\\}\\}|\\{\\{${gapNum}\\}\\}|\\{\\{gap${gapNum}\\}\\})`, 'gi');
      if (regex.test(htmlText)) {
        htmlText = htmlText.replace(regex, `${infinitiveBadge} ${inputField}`);
      } else {
        htmlText = htmlText.replace(/\{\{[^}]+\}\}/, `${infinitiveBadge} ${inputField}`);
      }
    });

    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between text-slate-600 text-sm font-bold">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            <span class="text-indigo-900 font-extrabold">${ex.title || 'Cloze Test: Relato de Examen'}</span>
          </div>
          <span class="text-xs font-bold text-slate-400">${ex.gaps.length} huecos a rellenar</span>
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

    setTimeout(() => {
      const inputs = container.querySelectorAll('.gap-input');
      inputs.forEach(input => {
        input.addEventListener('input', () => this.updateCheckButtonState());
      });
      if (inputs[0]) inputs[0].focus();
    }, 50);
  },

  // Render Modo 4: Test Teórico de Opción Múltiple
  renderMode4(container, ex) {
    const letters = ['A', 'B', 'C', 'D'];
    let optionsHtml = '';

    ex.options.forEach((optText, idx) => {
      optionsHtml += `
        <button type="button" class="option-card w-full p-4 md:p-5 rounded-2xl bg-white text-left font-bold text-slate-700 flex items-center gap-4 cursor-pointer" data-opt-idx="${idx}">
          <span class="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm bg-slate-100 text-slate-600 border border-slate-300 shrink-0 option-badge">
            ${letters[idx]}
          </span>
          <span class="text-base md:text-lg flex-1 leading-snug">${optText}</span>
        </button>
      `;
    });

    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center gap-2 text-slate-500 text-sm font-bold">
          <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Pregunta Teórica y Trampas Gramaticales Frecuentes:</span>
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
          this.updateCheckButtonState();
        });
      });
    }, 50);
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

    if (this.state.currentMode === 'mode1' || (ex && ex.gaps && !ex.textTemplate)) {
      const inputs = document.querySelectorAll('.gap-input');
      canCheck = inputs.length > 0 && Array.from(inputs).some(input => input.value.trim().length > 0);
    } else if (this.state.currentMode === 'mode2' || (ex && ex.original)) {
      const textarea = document.getElementById('rephrasing-input');
      canCheck = textarea && textarea.value.trim().length > 0;
    } else if (this.state.currentMode === 'mode3' || (ex && ex.textTemplate)) {
      const inputs = document.querySelectorAll('.gap-input');
      canCheck = inputs.length > 0 && Array.from(inputs).some(input => input.value.trim().length > 0);
    } else if (this.state.currentMode === 'mode4' || (ex && ex.options)) {
      canCheck = this.state.selectedOption !== null;
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

    if (this.state.currentMode === 'mode1' || (ex.gaps && !ex.textTemplate)) {
      this.checkMode1(ex);
    } else if (this.state.currentMode === 'mode2' || ex.original) {
      await this.checkMode2(ex);
    } else if (this.state.currentMode === 'mode3' || ex.textTemplate) {
      this.checkMode3(ex);
    } else if (this.state.currentMode === 'mode4' || ex.options) {
      this.checkMode4(ex);
    }
  },

  // Comprobar Modo 1
  checkMode1(ex) {
    let allCorrect = true;
    const userAnswers = [];

    ex.gaps.forEach(gap => {
      const input = document.getElementById(`gap-${gap.id}`);
      const val = (input?.value || '').trim();
      userAnswers.push(val);

      const isGapCorrect = GeminiClient.validateGap(val, gap.answer, gap.alternatives);
      if (input) {
        input.classList.remove('correct', 'incorrect');
        input.classList.add(isGapCorrect ? 'correct' : 'incorrect');
      }
      if (!isGapCorrect) allCorrect = false;
    });

    const expectedAnswers = ex.gaps.map(g => `${g.infinitive} ➔ "${g.answer}"`).join(' | ');

    if (allCorrect) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: 'correct',
        title: '¡Excelente! Todo correcto',
        message: 'Has aplicado los tiempos verbales con total precisión.',
        rule: ex.rule,
        expectedText: null
      });
      StorageManager.recordResult('mode1', true);
    } else {
      SoundEffects.playIncorrect();
      this.showFeedback({
        type: 'error',
        title: 'Respuesta incorrecta',
        message: 'Fíjate en el tiempo verbal requerido por el contexto:',
        rule: ex.rule,
        expectedText: expectedAnswers
      });
      StorageManager.recordResult('mode1', false);
      StorageManager.addError({
        id: ex.id,
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

  // Comprobar Modo 2: Rephrasing con validación flexible y asistencia por IA opcional
  async checkMode2(ex) {
    const textarea = document.getElementById('rephrasing-input');
    const val = (textarea?.value || '').trim();

    let result = GeminiClient.validateRephrasing(val, ex.target, ex.alternatives, ex.keyword);

    // Si localmente no coincide exactamente pero hay API Key, consultamos a Gemini
    if (!result.isValid && StorageManager.getApiKey()) {
      const checkBtn = document.getElementById('btn-session-check');
      if (checkBtn) checkBtn.textContent = 'CONSULTANDO A GEMINI...';

      const aiEvaluation = await GeminiClient.validateRephrasingWithAI(val, ex.original, ex.keyword, ex.target);
      if (aiEvaluation && aiEvaluation.isValid) {
        result = aiEvaluation;
      }
    }

    if (result.isValid) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: result.isPartial ? 'partial' : 'correct',
        title: result.isPartial ? '¡Casi perfecta! Válida' : '¡Excelente! Estructura impecable',
        message: result.feedback,
        rule: ex.rule,
        expectedText: `Modelo de examen: "${ex.target}"`
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
        title: 'Transformación no coincidente',
        message: result.feedback,
        rule: ex.rule,
        expectedText: `Transformación esperada: "${ex.target}"`
      });
      StorageManager.recordResult('mode2', false);
      StorageManager.addError({
        id: ex.id,
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
  checkMode3(ex) {
    let correctCount = 0;
    const totalGaps = ex.gaps.length;
    const breakdown = [];

    ex.gaps.forEach((gap, index) => {
      const input = document.getElementById(`cloze-gap-${gap.id}`);
      const val = (input?.value || '').trim();
      const isGapCorrect = GeminiClient.validateGap(val, gap.answer, gap.alternatives);

      if (input) {
        input.classList.remove('correct', 'incorrect');
        input.classList.add(isGapCorrect ? 'correct' : 'incorrect');
      }

      if (isGapCorrect) {
        correctCount += 1;
      } else {
        breakdown.push(`Hueco #${index + 1} (${gap.infinitive}): Era "${gap.answer}"`);
      }
    });

    const isAllOrMostCorrect = correctCount === totalGaps;
    const isPassing = correctCount >= Math.ceil(totalGaps * 0.7);

    if (isAllOrMostCorrect) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: 'correct',
        title: `¡Puntuación perfecta! ${correctCount}/${totalGaps} aciertos`,
        message: 'Has clavado la alternancia de tiempos en el relato.',
        rule: ex.generalRule,
        expectedText: null
      });
      StorageManager.recordResult('mode3', true, 25);
    } else if (isPassing) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: 'partial',
        title: `¡Buen trabajo! ${correctCount}/${totalGaps} aciertos`,
        message: `Has acertado la gran mayoría del relato. Repasa estos huecos: ${breakdown.join(' · ')}`,
        rule: ex.generalRule,
        expectedText: null
      });
      StorageManager.recordResult('mode3', true, 15);
    } else {
      SoundEffects.playIncorrect();
      this.showFeedback({
        type: 'error',
        title: `Necesita repaso: ${correctCount}/${totalGaps} aciertos`,
        message: breakdown.join(' · '),
        rule: ex.generalRule,
        expectedText: null
      });
      StorageManager.recordResult('mode3', false);
      StorageManager.addError({
        id: ex.id,
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

  // Comprobar Modo 4: Test Teórico
  checkMode4(ex) {
    const isCorrect = this.state.selectedOption === ex.correctIndex;
    const cards = document.querySelectorAll('.option-card');

    cards.forEach((card, idx) => {
      card.classList.remove('selected');
      if (idx === ex.correctIndex) {
        card.classList.add('correct');
      } else if (idx === this.state.selectedOption && !isCorrect) {
        card.classList.add('incorrect');
      }
    });

    if (isCorrect) {
      SoundEffects.playCorrect();
      this.showFeedback({
        type: 'correct',
        title: '¡Respuesta correcta!',
        message: 'Dominas la teoría de esta regla gramatical.',
        rule: ex.explanation,
        expectedText: null
      });
      StorageManager.recordResult('mode4', true);
    } else {
      SoundEffects.playIncorrect();
      this.showFeedback({
        type: 'error',
        title: '¡Cuidado con la trampa!',
        message: `La opción correcta era la ${['A', 'B', 'C', 'D'][ex.correctIndex]}: "${ex.options[ex.correctIndex]}"`,
        rule: ex.explanation,
        expectedText: null
      });
      StorageManager.recordResult('mode4', false);
      StorageManager.addError({
        id: ex.id,
        mode: 'mode4',
        question: ex.question,
        userAnswer: ex.options[this.state.selectedOption],
        correctAnswer: ex.options[ex.correctIndex],
        explanation: ex.explanation,
        rawExercise: ex
      });
    }

    this.state.sessionResults.push({ isCorrect });
    this.markChecked();
  },

  markChecked() {
    this.state.isChecked = true;
    this.updateCheckButtonState();
  },

  // ==========================================
  // PANEL DE FEEDBACK DUOLINGO STYLE
  // ==========================================
  showFeedback({ type, title, message, rule, expectedText }) {
    const sheet = document.getElementById('feedback-sheet');
    const titleEl = document.getElementById('feedback-title');
    const msgEl = document.getElementById('feedback-message');
    const ruleContainer = document.getElementById('feedback-rule-container');
    const ruleEl = document.getElementById('feedback-rule-text');
    const expectedEl = document.getElementById('feedback-expected');
    const iconContainer = document.getElementById('feedback-icon-container');

    if (!sheet) return;

    sheet.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'bg-rose-50', 'border-rose-300', 'bg-amber-50', 'border-amber-300');
    sheet.classList.add('animate-slide-up');

    if (type === 'correct') {
      sheet.classList.add('bg-emerald-50', 'border-emerald-300');
      titleEl.className = 'text-xl font-black text-emerald-800';
      titleEl.textContent = title;
      iconContainer.innerHTML = `
        <div class="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-md">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        </div>
      `;
    } else if (type === 'partial') {
      sheet.classList.add('bg-amber-50', 'border-amber-300');
      titleEl.className = 'text-xl font-black text-amber-800';
      titleEl.textContent = title;
      iconContainer.innerHTML = `
        <div class="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-black shadow-md">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
      `;
    } else {
      sheet.classList.add('bg-rose-50', 'border-rose-300');
      titleEl.className = 'text-xl font-black text-rose-800';
      titleEl.textContent = title;
      iconContainer.innerHTML = `
        <div class="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shadow-md animate-shake">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
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

    if (rule) {
      ruleContainer.classList.remove('hidden');
      ruleEl.textContent = rule;
    } else {
      ruleContainer.classList.add('hidden');
    }
  },

  resetFeedbackSheet() {
    const sheet = document.getElementById('feedback-sheet');
    if (sheet) {
      sheet.classList.add('hidden');
      sheet.classList.remove('animate-slide-up');
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
        mode4: 'Test Teórico'
      };

      html += `
        <div class="p-5 md:p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm space-y-3 relative">
          <div class="flex items-center justify-between text-xs font-bold text-slate-400">
            <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-black">${modeNames[err.mode] || 'Ejercicio'}</span>
            <button class="text-rose-500 hover:text-rose-700 font-bold text-xs" onclick="App.deleteErrorItem('${err.id}')">Eliminar</button>
          </div>

          <div class="text-base md:text-lg font-bold text-slate-800 leading-snug">
            ${err.question}
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

    const apiKeyInput = document.getElementById('setting-api-key');
    const soundToggle = document.getElementById('setting-sound-toggle');
    const settings = StorageManager.getSettings();

    if (apiKeyInput) apiKeyInput.value = StorageManager.getApiKey();
    if (soundToggle) soundToggle.checked = settings.soundEnabled;

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
    const apiKeyInput = document.getElementById('setting-api-key');
    const soundToggle = document.getElementById('setting-sound-toggle');

    if (apiKeyInput) {
      StorageManager.setApiKey(apiKeyInput.value);
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

  async testGeminiApiKey() {
    const apiKeyInput = document.getElementById('setting-api-key');
    const statusMsg = document.getElementById('gemini-test-status');
    const testBtn = document.getElementById('btn-test-gemini');
    const key = apiKeyInput?.value?.trim();

    if (!key) {
      if (statusMsg) {
        statusMsg.textContent = 'Introduce una clave antes de probar.';
        statusMsg.className = 'text-xs font-bold text-rose-600 mt-2 block';
      }
      return;
    }

    if (statusMsg) {
      statusMsg.textContent = 'Verificando con Google Gemini...';
      statusMsg.className = 'text-xs font-bold text-blue-600 mt-2 block';
    }
    if (testBtn) {
      testBtn.disabled = true;
      testBtn.textContent = 'Verificando...';
    }

    try {
      await GeminiClient.testApiKey(key);
      StorageManager.setApiKey(key);
      this.updateHomeStats();
      if (statusMsg) {
        statusMsg.textContent = '¡Conexión con Gemini 3.8 Flash exitosa! Clave guardada.';
        statusMsg.className = 'text-xs font-bold text-emerald-600 mt-2 block';
      }
    } catch (err) {
      if (statusMsg) {
        if (err.isHighDemand || err.isTimeout) {
          StorageManager.setApiKey(key);
          this.updateHomeStats();
          statusMsg.textContent = 'Servidores ocupados. La clave se ha guardado, puedes cerrar esta ventana y usar el banco local.';
          statusMsg.className = 'text-xs font-bold text-amber-600 mt-2 block';
        } else {
          statusMsg.textContent = `Error: ${err.message}`;
          statusMsg.className = 'text-xs font-bold text-rose-600 mt-2 block';
        }
      }
    } finally {
      if (testBtn) {
        testBtn.disabled = false;
        testBtn.textContent = 'Probar';
      }
    }
  },

  // 1. Bloqueo de UI y estado de generación para evitar clics múltiples
  setGeneratingState(isGenerating, text = 'Generando ejercicios, por favor espera...') {
    this.state.isGenerating = isGenerating;

    // Desactivar o activar tarjetas de modo en el home
    const modeCards = document.querySelectorAll('#card-mode-1, #card-mode-2, #card-mode-3, #card-mode-4, #card-mode-review, #btn-open-error-bank');
    modeCards.forEach(card => {
      if (isGenerating) {
        card.classList.add('pointer-events-none', 'opacity-50');
      } else {
        card.classList.remove('pointer-events-none', 'opacity-50');
      }
    });

    // Desactivar botones de repetición si están presentes
    const replayBtn = document.getElementById('btn-summary-replay');
    if (replayBtn) replayBtn.disabled = isGenerating;

    const reviewBtn = document.getElementById('btn-start-review-session');
    if (reviewBtn) reviewBtn.disabled = isGenerating;

    // Mostrar u ocultar modal de carga
    this.showLoadingModal(isGenerating, text);
  },

  updateLoadingText(text) {
    const label = document.getElementById('loading-text');
    if (label) label.textContent = text;
  },

  // Modal de carga con backdrop
  showLoadingModal(show, text = 'Generando ejercicios, por favor espera...') {
    const modal = document.getElementById('loading-modal');
    const label = document.getElementById('loading-text');
    if (!modal) return;

    if (show) {
      if (label) label.textContent = text;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  // Toast flotante
  showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('animate-slide-up');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
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
    document.getElementById('card-mode-review')?.addEventListener('click', () => this.startSession('review'));

    // Botón directo a ver Banco de Errores
    document.getElementById('btn-open-error-bank')?.addEventListener('click', () => this.showErrorBankScreen());
    document.getElementById('btn-back-from-errors')?.addEventListener('click', () => this.showScreen('home'));
    document.getElementById('btn-start-review-session')?.addEventListener('click', () => this.startSession('review'));
    document.getElementById('btn-clear-all-errors')?.addEventListener('click', () => this.clearAllErrors());

    // Botón comprobar y continuar
    document.getElementById('btn-session-check')?.addEventListener('click', () => this.handleCheckAnswer());

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
    document.getElementById('btn-test-gemini')?.addEventListener('click', () => this.testGeminiApiKey());

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
