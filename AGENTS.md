# Guía Operativa y Temario Oficial — Inglés Sara (PWA)

Este documento unifica las **reglas técnicas/operativas del proyecto** y el **temario oficial de examen** (absorbiendo el antiguo `contexto_examenes.md`) para cualquier agente o colaborador que mantenga o amplíe la aplicación **Inglés Sara**.

---

## Parte I · Reglas Operativas del Proyecto

1. **Arquitectura 100 % Offline y GitHub Pages:**
   - Aplicación web estática PWA sin backend propio ni claves externas obligatorias. Todas las rutas de activos deben ser relativas (`./`).
   - El Service Worker (`sw.js`) debe cachear los recursos locales y gestionar recursos externos confiables (`cdn.tailwindcss.com`, `fonts.googleapis.com`, `fonts.gstatic.com`, incluidas respuestas `opaque`) para mantener estilos y tipografía sin conexión.
   - Soporte completo para **Modo Oscuro** (`body.dark-mode` / `[data-theme="dark"]`) en todas las pantallas y modales (Home, Sesiones, Banco de Errores, Modal de Ajustes, Writing Lab y feedback), con diseño adaptable a tablet (Xiaomi Pad 8) y escritorio y respeto a `prefers-reduced-motion`.

2. **Integridad del Banco de Ejercicios (`js/exam-bank.js`):**
   - Actualmente integrado con **836 ejercicios oficiales** (`mode1=260`, `mode2=321`, `mode3=30`, `mode4=185`, `mode5=40`).
   - **No borrar ni recortar ejercicios existentes** salvo petición explícita del usuario. Si se añaden nuevos ejercicios, evitar duplicados, mantener IDs únicos por modo y validar sintaxis JS/JSON antes de dar la tarea por terminada.

3. **Tamaño Fijo de Sesiones (`js/app.js`):**
   - **Modos de preguntas cortas (`mode1`, `mode2`, `mode4`, `mode5`) y `review`:** sesiones fijas de **5 preguntas** (`FIXED_SESSION_SIZES`).
   - **`mode3` (Cloze Test):** funciona por **1 relato completo** por sesión (no forzar a 5 relatos).
   - En `mode5` (Writing Lab), alternar de forma equilibrada entre *Sentence Upgrading* (`upgrading`) y *Paragraph Builder* (`builder`), priorizando al inicio de la tanda la mecánica con más ejercicios sin ver.

4. **Banco de Errores sin Colisiones e Historial Limpio (`js/storage.js` y `js/app.js`):**
   - Todos los fallos guardados deben usar IDs prefijados por modo (`mode1_${ex.id}`, `mode2_${ex.id}`, `mode3_${ex.id}`, `mode4_${ex.id}`, `mode5_${ex.id}`) mediante `StorageManager.normalizeErrorId(mode, rawId)`, y `addError()` debe comprobar tanto `id` como `mode`.
   - Las sesiones de repaso (`currentMode === 'review'`) **no deben contaminar** el historial de rotación normal (`recordQuestionInHistory`).

5. **Pistas en Inglés por Defecto e Interruptor "Sin pista" (`mode1` y `mode3`):**
   - Todas las pistas mostradas a la izquierda de los huecos deben estar **siempre en inglés por defecto** (formato de examen: verbo base en mayúsculas, `PREPOSITION` o etiqueta léxica breve). Nunca mostrar pistas en español ni huecos sin etiqueta en modo estándar.
   - El interruptor táctil **"Sin pista"** (`#toggle-no-hint-mode`, `App.state.noHintMode`) debe **reiniciarse siempre a apagado** (`noHintMode = false`, `checked = false`) al iniciar cada nueva ronda.
   - Debe poder activarse o desactivarse libremente en cualquier momento de la ronda, **re-renderizando al instante** la pregunta o relato actual y conservando el texto ya escrito en los huecos.
   - Con `noHintMode === false`: validación estándar precisa (contracciones ↔ formas completas, disambiguación contextual `'d`/`'s`, ortografía UK/US, puntuación y alternativas válidas).
   - Con `noHintMode === true`: corrección laxa y flexible (`GeminiClient.validateGapRelaxed`) que acepta coincidencias exactas/alternativas y respuestas en inglés coherentes con el contexto gramatical del hueco, mostrando ejemplos habituales junto a la explicación.

6. **Control de Caché PWA y Estructura Limpia de la Raíz:**
   - Cada vez que se modifiquen archivos de la app (`index.html`, `css/`, `js/`, `manifest.json`), incrementar `CACHE_NAME` en `sw.js` y actualizar los query strings `?v=...` en `index.html`.
   - Mantener la raíz del proyecto limpia exclusivamente con: `index.html`, `sw.js`, `manifest.json`, `.gitignore`, `README.md`, `AGENTS.md` y las carpetas `js/`, `css/`, `icons/`. Excluir apuntes PDF, JSON fuente brutos, capturas de corrección y archivos temporales mediante `.gitignore`.

7. **Commit y Push Automático a `RONQUILLER007/ingles-sara` tras Modificaciones:**
   - Siempre que se realicen modificaciones de código, estilos, datos o documentación en el proyecto, ejecutar automáticamente al finalizar (sin preguntar confirmación previa al usuario):
     1. Revisar `git status` para confirmar que no entra ningún archivo de respaldo, borrador ni elemento no deseado o excluido por `.gitignore`.
     2. Ejecutar directamente `git add`, `git commit` con un mensaje descriptivo claro y `git push` a la rama activa del repositorio `RONQUILLER007/ingles-sara`, informando del resultado al concluir.
   - **Única excepción:** cuando el usuario solicite explícitamente una auditoría o revisión de solo lectura sin modificar archivos.

---

## Parte II · Temario Oficial, Reglas Gramaticales y Patrones de Examen

Análisis técnico extraído de los apuntes oficiales de Sara (*Tiempos Verbales, Condicionales/Deseos, Transformaciones, Cloze Test, Trampas de Examen y Writing B2/C1*) para estructurar los ejercicios, pistas y explicaciones en `js/exam-bank.js` y `js/gemini.js`.

### 1. Temario Exacto y Bloques de Estudio

#### A. Tiempos de Presente
- **Simple Present:**
  - *Usos:* Hábitos y rutinas (*always, never, usually*), hechos y verdades universales, horarios y programas oficiales con valor de futuro (*"The match finishes at 7.45"*), y uso obligatorio con **verbos estáticos** (*stative verbs*).
- **Present Continuous:**
  - *Usos:* Acciones en desarrollo en el momento de hablar (*now, at present*), situaciones temporales (*"I'm living with my sister until..."*), hábitos molestos con *always*, y planes futuros agendados y confirmados (*future arrangements*).

#### B. Tiempos de Pasado
- **Simple Past:**
  - *Usos:* Acciones completadas en un momento definido del pasado (*yesterday, in 1967, 3 days ago, in August*), hábitos pasados y acciones consecutivas/secuenciales (*"He climbed the stairs and then followed me"*).
- **Past Continuous:**
  - *Usos:* Acciones en desarrollo en un punto concreto del pasado (*at 9 o'clock last night*), dos o más acciones simultáneas unidas por ***while / as***, y acción larga en proceso interrumpida por una acción corta en Pasado Simple unida por ***when***.

#### C. Tiempos Perfectos de Presente
- **Present Perfect Simple:**
  - *Usos:* Acciones pasadas con consecuencia o resultado claro en el presente (*"I have lost my keys"*), acciones iniciadas en el pasado que continúan en el presente, experiencias de vida en periodos no concluidos (*"in my life, this week, so far"*), y énfasis en el **resultado o número de veces completado**.
- **Present Perfect Continuous:**
  - *Usos:* Énfasis prioritario en la **duración o proceso acumulado** de la acción (*"He has been waiting for an hour"*). Intercambiable con la forma simple en verbos de duración habitual (*live, work, study, wait, rain*) sin cambio apreciable de significado.

#### D. Tiempos Perfectos de Pasado
- **Past Perfect Simple:**
  - *Usos:* Acción anterior a otra acción pasada o punto de referencia en el pasado (*"By the time the police arrived, he had already left"*). Énfasis en el resultado.
- **Past Perfect Continuous:**
  - *Usos:* Proceso o duración acumulada previa a una acción posterior en pasado (*"She went to the doctor because her leg had been aching for 2 days"*).

#### E. Tiempos de Futuro
- **Future Simple (`will`):**
  - *Usos:* Predicciones generales basadas en opinión (*I think, probably*), decisiones espontáneas en el momento de hablar, promesas/ofrecimientos (*promise, I'm sure*), y cláusula principal de la **Primera Condicional** y oraciones temporales.
- **Be going to Future:**
  - *Usos:* Acciones futuras inminentes basadas en **evidencias claras en el presente** (*"Look at those dark clouds! It is going to rain"*) y planes o intenciones previas.
- **Future Continuous:**
  - *Usos:* Acciones que estarán en pleno desarrollo en un punto determinado del futuro (*"This time next week I'll be sunbathing"*).
- **Future Perfect:**
  - *Usos:* Acciones que ya habrán finalizado **antes de un momento futuro concreto** (*by 8 o'clock, by the time..., by Friday*).

#### F. Verbos Estáticos (*Stative Verbs*)
- Clasificados por áreas semánticas:
  - **Pensamiento:** *think, imagine, realize, suppose, understand, believe, agree, forget, remember, recognize, know*.
  - **Sentimiento:** *love, like, prefer, hate, feel, want, dislike, wish*.
  - **Sentidos:** *smell, see, taste, hear*.
  - **Apariencia:** *appear, resemble, seem, look like*.
  - **Posesión:** *have/got, belong to, own, contain, include, possess, consist of*.
  - **Importancia/Medida:** *concern, deserve, fit, interest, involve, matter, mean, satisfy, surprise, weigh, cost, need, require*.
- *Regla:* No se emplean habitualmente en formas continuas (*-ing*). Verbos duales (*think, have, smell, taste, look, see, weigh*) admiten continuo solo cuando expresan acción dinámica deliberada.

#### G. Bloques Avanzados Integrados en el Temario de Examen
- **Condicionales y Conectores Condicionales:** Zero (*If + Pres, Pres*), 1st (*If/Unless/Provided that/As long as/In case + Pres, will/can/may + inf*), 2nd (*If + Past Simple/were, would/could/might + inf*), 3rd (*If + Past Perfect, would/could/might have + V3*) y Mixed Conditionals.
- **Deseos y Quejas (`I wish / If only`):** *+ Past Simple/were* (deseo sobre el presente), *+ Past Perfect* (arrepentimiento sobre el pasado) y *+ sujeto + would + inf* (queja por un hábito ajeno o situación externa).
- **Voz Pasiva y Estilo Indirecto:** Pasivas simples/continuas/perfectas/modales, pasiva de doble objeto, pasiva impersonal (*It is said that / He is said to...*), causativo (*have/get something done*), y *Reported Speech* con *backshift*, preguntas indirectas en orden afirmativo, órdenes (*told + obj + not to*) y verbos introductorios (*suggest + -ing, advise, apologise for, deny, remind, refuse, warn*).
- **Vocabulario y Expresiones Clave:** *Adjectives and Prepositions* (*accustomed to, amazed by, committed to, curious about, disappointed with, excited about, experienced in, frustrated by, impressed with, jealous of, popular with, responsible for*), *Expressions with "matter"*, *Travel Vocabulary* (*abroad, in advance, deal, off season, carry-on, location, delayed, outdoors, trail, overnight, stopover*) y **Writing Lab B2/C1** (*For & Against* y *Opinion Essays*, evitando contracciones informales).

---

### 2. Vocabulario, Phrasal Verbs y Conectores

#### A. Marcadores y Expresiones Temporales Evaluados

| Tiempo Verbal | Expresiones y Marcadores Clave Evaluados |
| --- | --- |
| **Simple Present** | *always, never, usually, sometimes, once/twice a week, every day/Sunday, in the morning, how often* |
| **Present Continuous** | *at the moment, just now, Listen!, Look!, now, right now, this year, today, these days, next Friday* |
| **Simple Past** | *yesterday, 3 days ago, in 1967, in the 1980s, last Friday, when, then* |
| **Past Continuous** | *at 4 o'clock last night, when, while, as long as, as* |
| **Present Perfect** | *already* (afirmativas, posición media), *yet* (negativas/interrogativas, posición final), *just, since* (punto concreto), *for* (periodo de tiempo), *never, ever, so far, recently, lately, up to now, till now* |
| **Past Perfect** | *by, by the time, after, before, just, never, not yet, until that day* |
| **Futuros** | *probably, tomorrow, next week, this time tomorrow, by 7.00, by tomorrow/July, not until...* |

#### B. Sintaxis de Conectores
- `while / as` + **Past Continuous** (para la acción larga o simultánea).
- `when` + **Past Simple** (para la acción corta o interrupción).
- `by the time` + **Past Simple** + **Past Perfect**.
- `by the time` + **Present Simple** + **Future Perfect**.
- `after` + **Past Perfect** + **Past Simple**.
- `since` + punto concreto de inicio vs. `for` + duración de tiempo.

#### C. Phrasal Verbs y Verbos con Preposición Frecuentes
- *cheer up, break down, look after, turn up, turn on/off, turn down, get up, get off, get on well, head for, fall off, belong to, look for, look over, get into, fly off, put on, put off, put up, wait for, set off, give up, give away, come across, find out, carry on, work out, take over, bring back, run out of*.

---

### 3. Formato y Patrones de "Rephrasing" (*Key Word Transformation*)

1. Se presenta una frase original completa.
2. Se indica una **palabra clave u oracional** obligatoria (`(cost)`, `(own)`, `(are)`, `(while)`, `(after)`, `(By the time)`, `(never)`, `(for)`, `(leaving)`, etc.).
3. El estudiante debe reestructurar la oración para que contenga dicha palabra clave y mantenga exactamente el mismo significado.

#### Fórmulas Explícitas de Transformación
- **By the time + Present Simple $\rightarrow$ FUTURE PERFECT**
- **By the time + PAST SIMPLE $\rightarrow$ PAST PERFECT**
- **While + PAST CONTINUOUS $\rightarrow$ PAST CONTINUOUS / PAST SIMPLE**
- **When + PAST SIMPLE $\rightarrow$ PAST CONTINUOUS / PAST SIMPLE**
- **Past Simple + AGO $\rightarrow$ Present Perfect + FOR / SINCE**
- **When + Past Simple (meet)? $\rightarrow$ How long + Present Perfect (know)?**
- **NEVER + Present Simple / Present Perfect**
- **So + adj/adv + that $\leftrightarrow$ Such + (a/an) + adj + noun + that** (sin `a/an` ante incontables o plurales)
- **Too + adj + to inf $\leftrightarrow$ Not + adj opuesto + enough + to inf**
- **Prefer + V-ing + to + V-ing $\leftrightarrow$ Would rather + inf sin to + than + inf sin to**
- **Although / Even though + oración $\leftrightarrow$ Despite / In spite of + noun / V-ing / the fact that...**

#### 15 Ejemplos Reales de Referencia
1. *How much is this magazine?* (`cost`) $\rightarrow$ **How much does this magazine cost?**
2. *I haven't got a car.* (`own`) $\rightarrow$ **I don't own a car.**
3. *We intend to meet for lunch tomorrow.* (`are`) $\rightarrow$ **We are meeting for lunch tomorrow.**
4. *Brenda plays a lot of football.* (`often`) $\rightarrow$ **Brenda often plays football.**
5. *The children are quiet at the moment.* (`talk`) $\rightarrow$ **The children aren't talking at the moment.**
6. *I've got plans to see Paul tonight.* (`am`) $\rightarrow$ **I am going to see Paul tonight.**
7. *It started to rain in the middle of our picnic.* (`while`) $\rightarrow$ **It started to rain while we were having a picnic.**
8. *We found a better flat. Then we moved.* (`after`) $\rightarrow$ **After we had found a better flat, we moved.**
9. *She finished all the work. Then he came to help her.* (`By the time`) $\rightarrow$ **By the time he came to help her, she had finished all the work.**
10. *I plan to leave in a week.* (`leaving`) $\rightarrow$ **I'll be leaving in a week.**
11. *I don't listen to classical music at all.* (`never`) $\rightarrow$ **I never listen to classical music.**
12. *George started working here four years ago.* (`for`) $\rightarrow$ **George has worked here for four years.**
13. *I was in the middle of a conversation with my teacher when you called.* (`while`) $\rightarrow$ **While I was talking with my teacher, you called.**
14. *Anne is visiting our country for the first time.* (`never`) $\rightarrow$ **Anne has never visited our country.**
15. *Paul met Julie in primary school.* (`known`) $\rightarrow$ **Paul has known Julie since primary school.**

---

### 4. Tipología de Ejercicios y Trampas Gramaticales Frecuentes

#### A. Frases con Huecos e Infinitivo/Etiqueta en Inglés
- **Verbos estáticos vs. continuos:** *"These flowers **smell** (SMELL) nice."*, *"Milk **contains** (CONTAIN) lots of vitamins."*, *"Hello! I **am calling** (CALL) you from my office because my boss **is not** (NOT BE) here; he **is having** (HAVE) lunch with his wife..."*
- **Interrupción en pasado:** *"While I **was getting** (GET) dressed, the bell rang."*, *"When she **was flying** (FLY) to Paris, the sun **was shining** (SHINE)."*
- **Present Perfect Simple vs. Continuous / Past Simple:** *"Have you been on holiday this year? No, I **broke** (BREAK) my leg in August and I **had** (HAVE) to stay in hospital for 2 months."* (también válidas `have had`, `had to`, `have had to`), *"You look tired, what **have you been doing** (YOU/DO)? I **have been running** (RUN) 8 kms."*
- **Contrastes de Futuro:** *"Watch out! You **are going to knock** (KNOCK) the vase over."*, *"By the time you get home, I **will have finished** (FINISH) painting your room."*, *"This time tomorrow I **will be having** (HAVE) a drink with Tom Cruise."*

#### B. Textos con Huecos (*Cloze Tests* de Relatos Concatenados)
- **Ejemplo 1 (Relato concatenado en pasado):** *"Last night I **was** (BE) alone at home. I **was lying** (LIE) on my bed and I **was watching** (WATCH) TV when I **heard** (HEAR) a strange noise. The noise **came** (COME) from the kitchen. I **went** (GO) downstairs, **picked up** (PICK UP) a heavy vase from the table and **headed for** (HEAD FOR) the kitchen. I **opened** (OPEN) the door very slowly. Then, I **saw** (SEE) someone. He **was searching** (SEARCH) in the fridge. I **was** (BE) so frightened that I **dropped** (DROP) the vase and it **crashed** (CRASH) onto the floor. The man **turned** (TURN) towards the door and I **saw** (SEE) his face. It **was** (BE) my husband!"*
- **Ejemplo 2 (Relato con Pasado Perfecto Simple y Continuo):** *"Last Monday, Angie **got up** (GET UP) for work as usual and **went** (GO) to the kitchen to have some breakfast. But when she **opened** (OPEN) the fridge, she **found** (FIND) that her flatmate Lucy **had drunk** (DRINK) all the milk - not a good start to the day! So she **had** (HAVE) a quick cup of black coffee, **got** (GET) dressed and **went** (GO) out to the car. There she **found** (FIND) that she **had forgotten** (FORGET) to put the cover on the car the night before and there **was** (BE) thick frost all over the windscreen..."*

#### C. Trampas Teóricas Frecuentes (Modo 4)
- **Verbos estáticos en continuo:** *"Milk is containing vitamins"* es incorrecta (*contain* es estático y rechaza *-ing*).
- **Present Perfect Simple vs. Continuous:** Simple enfatiza resultado o cantidad (*"I have written 18 SMS's"*); Continuous enfatiza duración acumulada (*"for two hours"*). Con *live* o *work*, ambos son intercambiables sin cambio sustancial.
- **Since vs. For:** `since` indica inicio concreto (*since 2018, since primary school*); `for` indica duración acumulada (*for 5 years, for two hours*). *"since 5 years"* es error grave típico.
- **By the time:** En pasado exige *Past Simple + Past Perfect*; en futuro exige *Present Simple + Future Perfect*.
- **Despite vs. In spite of:** *Despite* **nunca** lleva `of` detrás; ambos exigen sustantivo, gerundio (*-ing*) o *the fact that*, nunca `Sujeto + Verbo` directo.
