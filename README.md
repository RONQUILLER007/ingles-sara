# 🎓 Inglés Sara - Preparador de Exámenes PWA

Aplicación Web Progresiva (PWA) de alto rendimiento, diseñada con **HTML5, Tailwind CSS y JavaScript Vanilla**, inspirada en la agilidad y diversión de **Duolingo** y adaptada al 100 % al temario oficial y patrones de examen de Sara (`contexto_examenes.md`).

Optimizada específicamente para uso táctil en su tablet **Xiaomi Pad 8** (botones grandes en 3D, respuestas táctiles, feedback inmediato y modo a pantalla completa sin distracciones).

---

## 🌟 Características Principales

### 1. Conexión con IA Google Gemini (`gemini-3.8-flash`)
- **Generación en vivo:** Cada tanda crea ejercicios inéditos mediante la API REST oficial de Gemini configurada con `responseMimeType: "application/json"`.
- **Inyección de contexto:** Se inyecta íntegramente `contexto_examenes.md` como instrucción del sistema en cada llamada para clavar tiempos verbales, vocabulario, phrasal verbs (*head for, cheer up, break down...*) y conectores (*while, as, by the time, since, for*).
- **Banco de Semillas Offline Precargado:** Incluye los 15 ejercicios reales de *Rephrasing*, relatos de examen de *Cloze Test*, y preguntas teóricas directamente en código. Si la tablet está sin conexión o no se ha introducido la clave API todavía, la app es **100 % funcional de inmediato**.
- **Validación Flexible de Rephrasing:** Tolera diferencias de puntuación, mayúsculas y contracciones (*don't / do not*, *can't / cannot*, *'ll / will*), verifica la presencia de la palabra clave obligatoria, y permite inversión legítima de cláusulas. Además, si la API Key está activa, puede consultar a Gemini en segundo plano para validar formulaciones alternativas válidas.

---

### 2. Los 4 Modos de Estudio + Banco de Errores

| Modo | Formato | Enfoque Pedagógico |
| :--- | :--- | :--- |
| **1. Tiempos Verbales** | Frases con 1 o 2 huecos y verbo en infinitivo `(SMELL)`, `(NOT BE) / (HAVE)` | Verbos estáticos (*stative verbs* sin -ing), interrupciones con *when/while*, contrastes de pasado y futuro. |
| **2. Rephrasing** | Frase original + palabra clave obligatoria `(cost)`, `(for)`, `(By the time)` | *Key Word Transformation* idéntico al examen. Campo de texto amplio con validación flexible. |
| **3. Cloze Test** | Párrafo narrativo continuo de 120-150 palabras con 6-8 huecos numerados | Relatos en pasado concatenado, *Past Perfect* y *phrasal verbs*. |
| **4. Test Teórico & Trampas** | Opción múltiple táctil (A, B, C, D) con letras resaltadas | Trampas frecuentes: *since vs for*, *by the time* en pasado vs futuro, verbos de duración intercambiables. |
| **💡 Banco de Errores** | Modo de Repaso Inteligente | Almacena automáticamente cualquier fallo con su explicación. Al acertar en el repaso, la frase se elimina. |

---

### 3. Gamificación y Feedback Inmediato
- **Tarjetas de Retroalimentación Duolingo:** Al pulsar *"Comprobar"*, se desliza un panel inferior:
  - 🟢 **Verde (¡Excelente!):** Acierto con felicitación y regla explicada.
  - 🟡 **Ámbar (¡Casi!):** Respuesta válida o variante aceptada.
  - 🔴 **Rojo (¡Atenta!):** Solución esperada de examen y explicación detallada de la regla infringida en español.
- **Efectos de Sonido Web Audio API:** Acordes mayores alegres en aciertos, sonido suave en fallos y fanfarria triunfal al completar la sesión (sin archivos externos, 0 latencia y 100 % offline).
- **Métricas:** Racha de días consecutivos (🔥), puntos de experiencia acumulados (⭐), porcentaje de precisión desglosado por modos y récord personal.

---

### 4. Persistencia Local (`localStorage`) y Copias de Seguridad
- Todo se guarda en el almacenamiento local del navegador de la tablet.
- **Exportar Progreso:** Descarga un archivo `.json` con todas las estadísticas, racha y el banco de errores.
- **Importar Progreso:** Permite restaurar el archivo `.json` en cualquier momento o pasar los datos de un dispositivo a otro.
- **Ajustes:** Menú intuitivo para configurar la clave de Gemini, probar la conexión, silenciar sonidos y reiniciar estadísticas.

---

