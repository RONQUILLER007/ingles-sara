# 🎓 Inglés Sara - Preparador de Exámenes PWA (100 % Offline)

Aplicación Web Progresiva (PWA) de alto rendimiento, diseñada con **HTML5, Tailwind CSS y JavaScript Vanilla**, inspirada en la agilidad y diversión de **Duolingo** y adaptada al 100 % al temario oficial y patrones de examen de Sara (`contexto_examenes.md`).

La aplicación es **100 % autónoma y offline**: cuenta con un banco oficial de **324 ejercicios reales de examen**, motor de validación léxico-gramatical flexible en el propio dispositivo, explicaciones detalladas en español para cada fallo o acierto, y sistema de rotación inteligente sin repeticiones.

Optimizada específicamente para uso táctil en su tablet **Xiaomi Pad 8** (botones grandes en 3D, respuestas táctiles, feedback inmediato y modo a pantalla completa sin distracciones en Chrome/MIUI/HyperOS).

---

## 🌟 Características Principales

### 1. Banco Oficial Offline de 324 Ejercicios
- **100 % Autónomo sin API externa:** Funciona sin conexión a internet, sin tiempos de espera y sin necesidad de claves API.
- **Distribución de ejercicios por modalidad:**
  - **Modo 1 (Tiempos Verbales y Preposiciones):** 100 ejercicios con 1 y 2 huecos (`{{gap1}}`, `{{gap2}}`) y colocaciones de adjetivo + preposición.
  - **Modo 2 (Rephrasing de Examen):** 144 transformaciones categorizadas (*So/Such, Too/Enough, Prefer/Would rather, Although/Despite, By the time, Present Perfect, Voz Pasiva, Reported Speech, Condicionales y Cambios de Tiempos Verbales*).
  - **Modo 3 (Cloze Test):** 10 relatos temáticos de viajes de 120-150 palabras con 7-8 huecos cada uno (71 huecos evaluados).
  - **Modo 4 (Test Teórico & Trampas):** 70 preguntas tipo test de opción múltiple con barajado de alternativas.
  - **💡 Banco de Errores:** Registro persistente que recopila automáticamente los fallos cometidos para repasarlos hasta dominarlos al 100 %.

---

### 2. Algoritmo de Rotación Sin Repetición (`sessionHistory`)
- **Seguimiento por modo:** El sistema guarda los identificadores de los ejercicios que Sara va completando en `localStorage` y `sessionStorage`.
- **Garantía de variedad:** En cada tanda de práctica de 5 preguntas se seleccionan únicamente preguntas no vistas.
- **Reinicio de ciclo automático:** Cuando quedan menos preguntas sin usar de las requeridas para una tanda completa, el historial de ese modo se renueva automáticamente, garantizando que Sara recorra el 100 % del banco disponible antes de repetir cualquier ejercicio.

---

### 3. Motor de Validación Léxico-Gramatical Flexible
- **Normalización inteligente:** Tolera variaciones de puntuación, mayúsculas/minúsculas y contracciones (*don't / do not*, *can't / cannot*, *'ll / will*, *'d rather / would rather*, *'d have / would have*, etc.).
- **Variantes ortográficas UK / US:** Reconoce indistintamente *travelling/traveling*, *cancelled/canceled*, *learned/learnt*, *practise/practice*, *organising/organizing*.
- **Rephrasing con palabra clave obligatoria:** Valida que la respuesta contenga la palabra requerida, admite inversiones legítimas de cláusulas separadas por comas y comprueba equivalencias léxicas válidas.
- **Modo 4 evaluado por valor de texto:** La comprobación de respuestas tipo test se realiza contra el texto exacto de la solución oficial (`correct_answer`), garantizando una calificación precisa e inmune al orden aleatorio de las opciones.

---

### 4. Retroalimentación Inmediata con Explicación y Traducción
- **Panel inferior de feedback (Duolingo style):**
  - 🟢 **Verde (¡Correcto!):** Acierto con indicación de la regla o significado aplicado.
  - 🟡 **Ámbar (¡Casi perfecta! / Válida):** Acierto con observación de la alternativa estándar del examen.
  - 🔴 **Rojo (¡Incorrecto!):** Solución oficial esperada acompañada de una **explicación en español** que traduce el vocabulario en disputa (*mind over matter*, *no laughing matter*, *a matter of life and death*, etc.) y aclara por qué la opción elegida no era la adecuada.

---

### 5. Gamificación y Sonido Web Audio
- **Efectos de sonido sintetizados:** Acordes mayores para aciertos, alerta suave para fallos y fanfarria para fin de sesión mediante la Web Audio API (sin archivos de audio externos, latencia cero y compatible con modo silencio desde Ajustes).
- **Métricas locales:** Racha de días consecutivos activos (🔥), puntos de experiencia acumulados (⭐) y porcentaje de precisión global y por modo.

---

### 6. Persistencia Local y Copias de Seguridad (Backup)
- **Privacidad total:** Todo el progreso, racha y banco de fallos se almacena localmente en el navegador.
- **Exportar Progreso:** Descarga inmediata de un archivo `.json` de respaldo.
- **Importar Progreso:** Restauración en un clic para migrar el progreso o recuperarlo tras limpiar el navegador.

---

## 📱 Cómo Publicar en GitHub Pages e Instalar en la Xiaomi Pad 8

### 1. Publicar en GitHub Pages:
1. Sube los archivos del repositorio a tu rama principal (`main` o `master`).
2. En GitHub, entra en tu repositorio ➔ pestaña **Settings** ➔ sección **Pages** (barra lateral izquierda).
3. En **Build and deployment**:
   - Source: **Deploy from a branch**.
   - Branch: selecciona **main** (o **master**) y directorio **/ (root)**.
   - Pulsa **Save**.
4. En pocos instantes dispondrás de tu URL segura HTTPS (ejemplo: `https://tu-usuario.github.io/ingles-sara/`).

### 2. Instalar en la Xiaomi Pad 8 (PWA a pantalla completa):
1. En la tablet **Xiaomi Pad 8**, abre **Google Chrome** y navega a la URL de GitHub Pages.
2. Pulsa en los **tres puntos verticales (⋮)** de la esquina superior derecha del navegador.
3. Elige **"Añadir a la pantalla de inicio"** o **"Instalar aplicación"**.
4. Se creará el acceso directo con el icono oficial de la app, permitiendo usarla a pantalla completa y sin conexión a internet.

---

## 📂 Estructura del Proyecto

```text
├── index.html         # Interfaz táctil responsive (Tailwind CSS CDN)
├── manifest.json      # Manifiesto PWA para instalación móvil y tablet
├── sw.js              # Service Worker con caché offline (v8)
├── css/
│   └── styles.css     # Estilos Duolingo 3D, alineación inline-flex de huecos y feedback
├── js/
│   ├── exam-bank.js   # Banco oficial con 324 ejercicios reales categorizados
│   ├── gemini.js      # Motor cliente de normalización, validaciones y explicaciones
│   ├── app.js         # Lógica de la app, historial anti-repeticiones y controladores UI
│   ├── storage.js     # Gestión de localStorage, racha, banco de errores y copias JSON
│   ├── audio.js       # Síntesis Web Audio API para aciertos, fallos y fanfarrias
│   └── contexto.js    # Resumen estructurado del temario y patrones de examen
└── icons/             # Iconos SVG y PNG en resoluciones 192px y 512px
```
