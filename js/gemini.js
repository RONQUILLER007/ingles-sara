// Conexión con la API REST de Gemini (gemini-3.8-flash) y generador de ejercicios
const GeminiClient = {
  modelName: 'gemini-3.8-flash',

  // Normalizador de texto para validación flexible
  normalizeText(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .trim()
      // Elimina puntuación final (. ? ! , ;)
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // Normalización con contracciones estándar y formas completas
  expandContractions(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/\bcan't\b/g, 'cannot')
      .replace(/\bwon't\b/g, 'will not')
      .replace(/\bshan't\b/g, 'shall not')
      .replace(/n't\b/g, ' not')
      .replace(/'ll\b/g, ' will')
      .replace(/'ve\b/g, ' have')
      .replace(/'re\b/g, ' are')
      .replace(/'m\b/g, ' am')
      .replace(/'d\b/g, ' had')
      .replace(/gonna\b/g, 'going to')
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // Validación flexible para ejercicios de Rephrasing
  validateRephrasing(userAnswer, targetAnswer, alternatives = [], keyword = '') {
    const rawUser = (userAnswer || '').trim();
    if (!rawUser) {
      return { isValid: false, isPartial: false, feedback: 'Por favor, escribe una respuesta.' };
    }

    const normUser = this.normalizeText(rawUser);
    const expandedUser = this.expandContractions(rawUser);

    const candidates = [targetAnswer, ...(alternatives || [])];

    // Comprobación exacta tras normalizar y expandir contracciones
    for (const cand of candidates) {
      const normCand = this.normalizeText(cand);
      const expandedCand = this.expandContractions(cand);

      if (normUser === normCand || expandedUser === expandedCand) {
        return {
          isValid: true,
          isPartial: false,
          feedback: '¡Excelente! Respuesta perfectamente formulada.'
        };
      }
    }

    // Inversión de cláusulas conectadas por conectores comunes (after, while, by the time, because, when)
    for (const cand of candidates) {
      const parts = cand.split(/,\s*/);
      if (parts.length === 2) {
        const invertedCand = `${parts[1]} ${parts[0]}`;
        if (normUser === this.normalizeText(invertedCand) || expandedUser === this.expandContractions(invertedCand)) {
          return {
            isValid: true,
            isPartial: true,
            feedback: '¡Correcta! Has invertido el orden de las cláusulas respecto al modelo de examen, pero es 100% válida.'
          };
        }
      }
    }

    // Comprobación de inclusión obligatoria de la palabra clave
    if (keyword) {
      const normKeyword = this.normalizeText(keyword);
      const userWords = normUser.split(' ');
      const keywordWords = normKeyword.split(' ');

      const containsKeyword = keywordWords.every(kw => userWords.includes(kw) || normUser.includes(kw));

      if (!containsKeyword) {
        return {
          isValid: false,
          isPartial: false,
          feedback: `Recuerda que debes incluir obligatoriamente la palabra clave: "(${keyword})".`
        };
      }
    }

    // Comprobación de similitud léxica alta (>85% de palabras clave)
    const targetWords = this.normalizeText(targetAnswer).split(' ').filter(w => w.length > 2);
    const userWords = normUser.split(' ');
    const matchCount = targetWords.filter(w => userWords.includes(w)).length;
    const similarityRatio = targetWords.length > 0 ? matchCount / targetWords.length : 0;

    if (similarityRatio >= 0.85) {
      return {
        isValid: true,
        isPartial: true,
        feedback: '¡Casi perfecta! Tu respuesta es válida, aunque la formulación estándar del examen suele ser la mostrada.'
      };
    }

    return {
      isValid: false,
      isPartial: false,
      feedback: 'Respuesta no coincidente con las fórmulas requeridas en el examen.'
    };
  },

  // Validación asistida por IA si la respuesta difiere del banco local
  async validateRephrasingWithAI(userAnswer, originalSentence, keyword, targetAnswer) {
    try {
      const prompt = `Evalúa si la siguiente respuesta de un examen de inglés (nivel B2/C1 universitario) es gramaticalmente correcta y transmite exactamente el mismo significado que la solución esperada, respetando la palabra obligatoria entre paréntesis.

Frase original del examen: "${originalSentence}"
Palabra clave obligatoria: "(${keyword})"
Solución esperada oficial: "${targetAnswer}"
Respuesta escrita por el estudiante: "${userAnswer}"

Devuelve única y exclusivamente un JSON con:
{
  "isValid": boolean (true si es gramaticalmente correcta y semánticamente equivalente),
  "isPartial": boolean (true si es válida pero con una leve variante de estilo o puntuación),
  "feedback": string (breve comentario pedagógico en español)
}`;

      const res = await this.callGemini(prompt);
      if (res && typeof res.isValid === 'boolean') {
        return res;
      }
    } catch (e) {
      console.warn('AI validation skipped, using local validator:', e.message);
    }
    return null;
  },

  // Validación para huecos individuales (Modo 1 y Modo 3)
  validateGap(userAnswer, correctAnswer, alternatives = []) {
    const normUser = this.normalizeText(userAnswer);
    const expandedUser = this.expandContractions(userAnswer);

    const candidates = [correctAnswer, ...(alternatives || [])];
    for (const cand of candidates) {
      if (normUser === this.normalizeText(cand) || expandedUser === this.expandContractions(cand)) {
        return true;
      }
    }
    return false;
  },

  // Llamada genérica a la API REST de Gemini con systemInstruction y responseMimeType: application/json
  async callGemini(userPrompt) {
    const apiKey = window.StorageManager ? window.StorageManager.getApiKey() : '';
    if (!apiKey) {
      throw new Error('NO_API_KEY');
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent?key=${apiKey}`;

    const systemInstructionContent = `Eres el preparador y tutor personal de inglés universitario y de instituto de Sara. 
Tu única misión es generar ejercicios de alta calidad que sigan AL 100% el temario, los tiempos verbales, el vocabulario, los phrasal verbs, los conectores y las fórmulas de examen descritas a continuación.

--- DOCUMENTO TÉCNICO OFICIAL DE SU TEMARIO Y EXÁMENES ---
${window.CONTEXTO_EXAMENES_RAW || ''}
-----------------------------------------------------------

REGLAS DE SALIDA:
- Devuelve SIEMPRE única y exclusivamente un objeto o lista JSON válida, sin bloques markdown de comillas triples (\`\`\`json).
- Las explicaciones deben estar en español, ser claras, directas y motivadoras, citando las reglas del documento técnico.`;

    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [{ text: userPrompt }]
        }
      ],
      systemInstruction: {
        parts: [{ text: systemInstructionContent }]
      },
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.7
      }
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API_ERROR_${response.status}: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText) {
      throw new Error('EMPTY_RESPONSE_FROM_GEMINI');
    }

    try {
      // Limpieza por si devuelve bloques markdown
      const cleaned = candidateText.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
      return JSON.parse(cleaned);
    } catch (parseErr) {
      console.error('Error parseando JSON de Gemini:', parseErr, candidateText);
      throw new Error('INVALID_JSON_RESPONSE');
    }
  },

  // Generador de ejercicios para el MODO 1: Tiempos Verbales
  async getMode1Exercises(count = 5) {
    try {
      const prompt = `Genera un lote de ${count} ejercicios de Tiempos Verbales (Modo 1) basados estrictamente en el temario de Sara (verbos estáticos, interrupciones en pasado con when/while, contrastes de Simple Past vs Present Perfect Simple/Continuous, o contrastes de Futuro will vs be going to vs Future Continuous vs Future Perfect con By the time).

Cada ejercicio debe contener:
- "id": string identificativo único.
- "sentence": frase con uno o dos huecos indicados como {{gap1}} y opcionalmente {{gap2}}.
- "gaps": array con cada hueco:
    - "id": "gap1" o "gap2"
    - "infinitive": verbo en infinitivo en mayúsculas (ej: "SMELL", "NOT BE", "BREAK", "KNOCK")
    - "answer": forma verbal correcta
    - "alternatives": array con formas contraídas válidas
    - "hint": pista breve sobre el uso gramatical
- "rule": breve explicación en español de la regla gramatical aplicada.

Formato JSON: Array de ${count} objetos.`;

      const result = await this.callGemini(prompt);
      if (Array.isArray(result) && result.length > 0) {
        return result.slice(0, count);
      }
      throw new Error('Invalid format received');
    } catch (err) {
      console.warn('Gemini Mode 1 fallback to local bank:', err.message);
      return this.getRandomLocalExercises('mode1', count);
    }
  },

  // Generador de ejercicios para el MODO 2: Rephrasing
  async getMode2Exercises(count = 5) {
    try {
      const prompt = `Genera un lote de ${count} ejercicios de REPHRASING (Key Word Transformation) idénticos al formato de examen de Sara.
IMPORTANTE: Usa las fórmulas exactas analizadas:
- By the time + FUTURE PERFECT / PAST PERFECT
- While + PAST CONTINUOUS -> PAST CONTINUOUS / PAST SIMPLE
- Past Simple + AGO -> Present Perfect + FOR / SINCE
- When + Past Simple (meet)? -> How long + Present Perfect (know)?
- NEVER + Present Simple / Present Perfect
- Verbos estáticos (cost, own, believe, etc.)
- Future arrangements con Present Continuous o be going to

Cada ejercicio debe tener:
- "id": string único
- "original": frase original completa (ej: "George started working here four years ago.")
- "keyword": palabra clave en mayúscula o minúscula que debe incluir obligatoriamente entre paréntesis (ej: "for")
- "target": transformación correcta esperada
- "alternatives": array de alternativas válidas (con contracciones, ligeros órdenes válidos)
- "rule": explicación breve y pedagógica en español de la fórmula aplicada.

Formato JSON: Array de ${count} objetos.`;

      const result = await this.callGemini(prompt);
      if (Array.isArray(result) && result.length > 0) {
        return result.slice(0, count);
      }
      throw new Error('Invalid format received');
    } catch (err) {
      console.warn('Gemini Mode 2 fallback to local bank:', err.message);
      return this.getRandomLocalExercises('mode2', count);
    }
  },

  // Generador para el MODO 3: Cloze Test (1 texto narrativo de 120-150 palabras con 6-8 huecos)
  async getMode3Exercise() {
    try {
      const prompt = `Genera 1 texto narrativo para Cloze Test (Modo 3) adaptado a Sara, similar a los relatos de examen 'Last night I was alone at home...' o 'Last Monday, Angie got up...'.
Requisitos:
- Longitud: 120 a 150 palabras.
- Debe tener entre 6 y 8 huecos numerados como {{gap1}}, {{gap2}}, ... {{gap7}}.
- Los huecos deben evaluar alternancia de Past Simple, Past Continuous, Past Perfect Simple/Continuous, y phrasal verbs del temario (head for, break down, cheer up, turn up, look for).
- Devuelve un único objeto JSON con:
    - "id": string único
    - "title": título sugerente del relato
    - "textTemplate": texto completo con {{gap1}}, {{gap2}}, etc. indicando entre paréntesis el infinitivo o pista.
    - "gaps": array de objetos:
        - "id": "gap1", "gap2", etc.
        - "infinitive": infinitivo en mayúsculas
        - "answer": respuesta correcta
        - "alternatives": array de contracciones o variantes
        - "explanation": explicación de por qué va ese tiempo verbal
    - "generalRule": resumen en español de la regla o trama temporal evaluada.`;

      const result = await this.callGemini(prompt);
      if (result && result.textTemplate && Array.isArray(result.gaps)) {
        return result;
      }
      throw new Error('Invalid format received');
    } catch (err) {
      console.warn('Gemini Mode 3 fallback to local bank:', err.message);
      const bank = window.EXAM_BANK.mode3;
      const randomIndex = Math.floor(Math.random() * bank.length);
      return bank[randomIndex];
    }
  },

  // Generador para el MODO 4: Test Teórico (5 preguntas de opción múltiple con trampas)
  async getMode4Exercises(count = 5) {
    try {
      const prompt = `Genera un lote de ${count} preguntas de TEST TEÓRICO (Modo 4) sobre las reglas y trampas gramaticales del temario de Sara:
- Prohibición de tiempos continuos con verbos estáticos (contain, belong to, own, smell, realize, suppose...).
- Diferencia de enfoque entre Present Perfect Simple (resultado/veces) y Continuous (duración/proceso).
- Verbos de duración habitual (live, work, study: intercambiables sin cambio de significado).
- Trampa de Since (punto inicio) vs For (duración acumulada).
- Estructura y tiempos de By the time en pasado vs futuro.
- Conectores while/as vs when en acciones simultáneas o interrumpidas.
- Will vs be going to ante evidencias en el presente.

Cada pregunta debe contener:
- "id": string único
- "question": la pregunta teórica o el caso con trampa formulado en español
- "options": array de 4 opciones en español (A, B, C, D)
- "correctIndex": número entero de 0 a 3 indicando la opción correcta
- "explanation": explicación en español de la regla gramatical y por qué las otras son trampas.

Formato JSON: Array de ${count} objetos.`;

      const result = await this.callGemini(prompt);
      if (Array.isArray(result) && result.length > 0) {
        return result.slice(0, count);
      }
      throw new Error('Invalid format received');
    } catch (err) {
      console.warn('Gemini Mode 4 fallback to local bank:', err.message);
      return this.getRandomLocalExercises('mode4', count);
    }
  },

  // Obtener ejercicios aleatorios del banco local
  getRandomLocalExercises(modeKey, count = 5) {
    const list = window.EXAM_BANK?.[modeKey] || [];
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },

  // Test de conexión con la API de Gemini
  async testApiKey(apiKey) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent?key=${apiKey}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Responde únicamente con {"status":"ok"}' }] }],
        generationConfig: { responseMimeType: 'application/json' }
      })
    });
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `Error ${response.status}`);
    }
    return true;
  }
};

window.GeminiClient = GeminiClient;
