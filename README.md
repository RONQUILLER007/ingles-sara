# 🎓 Inglés Sara - Preparador de Exámenes PWA (100 % Offline)

Aplicación Web Progresiva (PWA) de alto rendimiento, diseñada con **HTML5, Tailwind CSS y JavaScript Vanilla**, inspirada en la agilidad y diversión de **Duolingo** y adaptada al 100 % al temario oficial y patrones de examen de Sara (`AGENTS.md`).

La aplicación es **100 % autónoma y offline**: cuenta con un banco oficial de **836 ejercicios reales de examen**, motor de validación léxico-gramatical flexible en el propio dispositivo, explicaciones detalladas en español para cada fallo o acierto, Modo Oscuro completo (`body.dark-mode`), Writing Lab B2/C1 con copiado rápido a Gemini y sistema de rotación inteligente sin repeticiones.

Optimizada específicamente para uso táctil en su tablet **Xiaomi Pad 8** y escritorio (animaciones ligeras a 60 FPS con soporte para `prefers-reduced-motion`, feedback inmediato y modo a pantalla completa sin distracciones en Chrome/MIUI/HyperOS).

---

## 🌟 Características Principales

### 1. Banco Oficial Offline de 836 Ejercicios
- **100 % Autónomo y Offline Real:** Funciona sin conexión a internet gracias al Service Worker (`sw.js`, versión `ingles-sara-v21`), que precachea todos los activos locales junto con los recursos externos confiables necesarios (Tailwind CSS CDN y Google Fonts *Nunito*, incluyendo respuestas `opaque`).
- **Distribución exacta de ejercicios por modalidad:**
  - **Modo 1 (Tiempos Verbales, Preposiciones, Condicionales y Deseos):** **260 ejercicios** (**353 huecos**) con 1 y 2 huecos (`{{gap1}}`, `{{gap2}}`), verbos estáticos vs. dinámicos, futuros, pasados, colocaciones de adjetivo + preposición, condicionales e `I wish / If only`. Pistas en **inglés** por defecto junto a cada hueco e interruptor manual **"Sin pista"**.
  - **Modo 2 (Rephrasing de Examen — *Key Word Transformation*):** **321 transformaciones** categorizadas (*So/Such, Too/Enough, Prefer/Would rather, Although/Despite, By the time, Present Perfect, Voz Pasiva, Reported Speech, Condicionales, Deseos `I wish / If only` y Transformación de Tiempos Verbales*).
  - **Modo 3 (Cloze Test — Relatos Completos):** **30 relatos coherentes** de 100-150 palabras (**205 huecos** evaluados en total) sobre *Travel Vocabulary*, condicionales/deseos, tiempos narrativos del pasado y phrasal verbs, con pistas en **inglés** por defecto e interruptor manual **"Sin pista"**. Se practica **1 relato completo** por sesión.
  - **Modo 4 (Test Teórico & Trampas):** **185 preguntas** tipo test de opción múltiple (A, B, C, D) con barajado de alternativas y desglose detallado de aciertos/errores sobre trampas gramaticales, expresiones con `matter`, preposiciones, pasiva, estilo indirecto, condicionales y vocabulario.
  - **Modo 5 (Writing Lab — *For and Against* / *Opinion Essays*):** **40 ejercicios** de redacción de Bachillerato B2/C1 equilibrados entre **20** de *Sentence Upgrading* (mejora formal con conectores objetivo, contador de palabras en tiempo real y detector de contracciones informales) y **20** de *Paragraph Builder* (ordenación lógica de párrafos), con botón **"Enviar a Gemini"** tras validar.
  - **💡 Banco de Errores:** Registro persistente sin colisiones de IDs entre modos (`mode1_`..`mode5_`) que recopila automáticamente los fallos cometidos para repasarlos hasta dominarlos al 100 %, sin contaminar el historial de rotación normal en las rondas de repaso.

---

### 2. Sesiones Fijas y Rotación Sin Repetición (`sessionHistory`)
- **Tamaño fijo de sesión (`FIXED_SESSION_SIZES`):**
  - **Modos de preguntas cortas (`mode1`, `mode2`, `mode4`, `mode5`) y repaso (`review`):** sesiones fijas de **5 preguntas**. En `mode5`, cada ronda alterna *Sentence Upgrading* y *Paragraph Builder* empezando por la mecánica con más ejercicios sin ver.
  - **Modo 3 (`mode3`):** funciona por **1 relato completo** por sesión.
- **Seguimiento por modo:** El sistema guarda los identificadores de los ejercicios completados en `localStorage` y `sessionStorage`, seleccionando únicamente ejercicios no vistos hasta completar todo el banco del modo antes de reiniciar el ciclo (las rondas de `'review'` nunca alteran este historial).

---

### 3. Pistas en Inglés e Interruptor Manual "Sin pista" (`mode1` y `mode3`)
- **Pistas estándar en inglés:** Todas las etiquetas a la izquierda de los huecos aparecen siempre en inglés por defecto (verbo base en mayúsculas, `PREPOSITION` o pista léxica breve estilo examen).
- **Interruptor manual "Sin pista" (`#toggle-no-hint-mode`):**
  - Se reinicia automáticamente a **apagado** (`noHintMode = false`, `checked = false`) al iniciar cada nueva ronda.
  - Puede activarse o desactivarse libremente en cualquier momento de la ronda, re-renderizando al instante la pregunta o relato actual para ocultar o mostrar las pistas y conservando el texto ya escrito en los huecos.
  - Al estar **activado**, utiliza la validación flexible contextual (`GeminiClient.validateGapRelaxed`), que acepta coincidencias estándar y respuestas en inglés coherentes con la estructura gramatical del hueco, mostrando ejemplos de respuestas habituales junto a la explicación.

---

### 4. Motor de Validación Léxico-Gramatical Flexible
- **Normalización avanzada y puntuación:** Tolera diferencias de mayúsculas/minúsculas, apóstrofos rectos o curvos, comas opcionales, inversiones legítimas de cláusulas, `that` opcional, singular `was/were` equivalente y variantes ortográficas **UK / US** (*travelling/traveling*, *cancelled/canceled*, *learned/learnt*, *practise/practice*, *apologised/apologized*, *neighbour/neighbor*, etc.).
- **Contracciones ↔ formas plenas con desambiguación contextual:** Expande bidireccionalmente negativas y pronombres distinguiendo `'d + participio` (`had`) frente a `'d + infinitivo` (`would`) y `'s` (`is` vs. `has`), evitando falsos fallos en 2ª/3ª condicional o *I wish*.
- **Modo 4 evaluado por valor de texto:** La comprobación se realiza contra el texto exacto de `correct_answer`, garantizando precisión independiente del barajado aleatorio.

---

### 5. Modo Oscuro, Gamificación, Envío a Gemini y Backup
- **Modo Oscuro completo (`body.dark-mode` / `[data-theme="dark"]`):** Conmutable desde el encabezado o el modal de Ajustes con persistencia en `localStorage` y adaptación en tarjetas, inputs, opciones, feedback, Banco de Errores, Modal de Ajustes, Writing Lab y botones/badges.
- **Botón "Enviar a Gemini" (Modo 5):** Al corregir un ejercicio del Writing Lab, genera un prompt listo para corrector B2/C1, lo copia al portapapeles (con cuadro de texto *fallback* si el navegador restringe el portapapeles) e intenta abrir Gemini en nueva pestaña.
- **Sonido Web Audio y métricas:** Efectos sintetizados de acierto, error y fin de sesión, racha diaria (🔥), XP (⭐) y precisión global y por modo.
- **Copias de Seguridad (Backup):** Exportación e importación inmediata en JSON de progreso, racha, ajustes y Banco de Errores.

---

## 📱 Despliegue en GitHub Pages e Instalación en Tablet

### 1. Publicación automática en GitHub Pages (`RONQUILLER007/ingles-sara`)
- Repositorio configurado con publicación continua en la rama `main` (`https://ronquiller007.github.io/ingles-sara/`).
- La caché de la PWA se controla mediante `CACHE_NAME` en `sw.js` (actualmente `ingles-sara-v21`) y query strings `?v=21` en `index.html`. Al publicarse una nueva versión, `sw.js` ejecuta `skipWaiting()` y `clients.claim()` y la aplicación realiza una única recarga automática al detectar `controllerchange` para cargar los cambios al instante.

### 2. Instalar en la Xiaomi Pad 8 (PWA a pantalla completa):
1. En **Google Chrome** en la tablet, abre la URL de GitHub Pages (`https://ronquiller007.github.io/ingles-sara/`).
2. Pulsa en los **tres puntos verticales (⋮)** de la esquina superior derecha.
3. Elige **"Añadir a la pantalla de inicio"** o **"Instalar aplicación"**.
4. Se creará el acceso directo con el icono oficial para abrir la app a pantalla completa y estudiar 100 % sin conexión.

---

## 📂 Estructura del Proyecto

```text
├── .gitignore         # Exclusión de temporales, respaldos y archivos ajenos a la web
├── AGENTS.md          # Reglas operativas, flujo Git automático y temario oficial fusionado
├── README.md          # Documentación principal y resumen actualizado de la aplicación
├── index.html         # Interfaz táctil responsive (?v=21 + Google Fonts + Tailwind CDN)
├── manifest.json      # Manifiesto PWA para instalación en tablet y escritorio
├── sw.js              # Service Worker offline (ingles-sara-v21, locales + CDN/Fonts opaque)
├── css/
│   └── styles.css     # Estilos Duolingo 3D, Modo Oscuro, interruptor Sin pista y animaciones 60 FPS
├── js/
│   ├── exam-bank.js   # Banco oficial con 836 ejercicios (260 / 321 / 30 / 185 / 40)
│   ├── gemini.js      # Motor local de normalización, validación estándar/laxa y explicaciones
│   ├── app.js         # Lógica principal, sesiones fijas de 5, Modo 5, Sin pista e historial
│   ├── storage.js     # Persistencia localStorage, racha, Banco de Errores sin colisiones y JSON backup
│   ├── audio.js       # Síntesis Web Audio API para efectos táctiles de acierto, fallo y cierre
│   └── contexto.js    # Referencia embebida del temario y patrones de examen
└── icons/             # Iconos SVG y PNG en resoluciones 192px y 512px
```
