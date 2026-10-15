// Sintetizador de efectos de sonido con Web Audio API (cero dependencias de archivos de audio)
const SoundEffects = {
  ctx: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  isEnabled() {
    if (!window.StorageManager) return true;
    return window.StorageManager.getSettings().soundEnabled;
  },

  // Sonido de Acierto (Duolingo style: acorde mayor alegre y brillante)
  playCorrect() {
    if (!this.isEnabled()) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);

      gain.gain.setValueAtTime(0, now + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.07 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.4);
    });
  },

  // Sonido de Fallo (toque suave y educativo)
  playIncorrect() {
    if (!this.isEnabled()) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.35);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.36);
  },

  // Sonido de Racha 🔥 (Arpegio ascendente)
  playStreak() {
    if (!this.isEnabled()) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const freqs = [440, 554.37, 659.25, 880, 1108.73];

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      gain.gain.setValueAtTime(0.01, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.22, now + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.3);
    });
  },

  // Fanfarria de Sesión Completada (Victoria)
  playComplete() {
    if (!this.isEnabled()) return;
    this.init();
    if (!this.ctx) return;

    const chords = [
      { notes: [523.25, 659.25, 783.99], time: 0.0, dur: 0.25 },
      { notes: [587.33, 739.99, 880.00], time: 0.28, dur: 0.25 },
      { notes: [659.25, 830.61, 987.77], time: 0.56, dur: 0.25 },
      { notes: [783.99, 987.77, 1174.66, 1567.98], time: 0.85, dur: 0.7 }
    ];

    chords.forEach(c => {
      c.notes.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime + c.time;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + c.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + c.dur + 0.05);
      });
    });
  }
};

window.SoundEffects = SoundEffects;
