// Banco offline precargado con los ejercicios exactos de las fuentes de Sara (contexto_examenes.md)
const EXAM_BANK = {
  // ==========================================
  // MODO 1: TIEMPOS VERBALES
  // ==========================================
  mode1: [
    {
      id: "m1_1",
      sentence: "These flowers {{gap1}} nice.",
      gaps: [
        {
          id: "gap1",
          infinitive: "SMELL",
          answer: "smell",
          alternatives: ["smells"],
          hint: "Verbo estático de sentidos (Stative Verb)"
        }
      ],
      rule: "Los verbos estáticos de los sentidos (como 'smell', 'taste', 'see') no se usan en tiempos continuos (-ing). Con 'These flowers' (plural), usamos el Simple Present: 'smell'."
    },
    {
      id: "m1_2",
      sentence: "Milk {{gap1}} lots of vitamins.",
      gaps: [
        {
          id: "gap1",
          infinitive: "CONTAIN",
          answer: "contains",
          alternatives: [],
          hint: "Verbo estático de posesión/contenido"
        }
      ],
      rule: "'Contain' es un verbo estático y no admite forma continua. Con sujeto incontable/tercera persona 'Milk', añadimos '-s': 'contains'."
    },
    {
      id: "m1_3",
      sentence: "Hello! I {{gap1}} you from my office because my boss {{gap2}} here; he {{gap3}} lunch with his wife.",
      gaps: [
        {
          id: "gap1",
          infinitive: "CALL",
          answer: "am calling",
          alternatives: ["'m calling"],
          hint: "Acción en desarrollo en el momento de hablar"
        },
        {
          id: "gap2",
          infinitive: "NOT BE",
          answer: "is not",
          alternatives: ["isn't", "isnt"],
          hint: "Presente simple del verbo to be"
        },
        {
          id: "gap3",
          infinitive: "HAVE",
          answer: "is having",
          alternatives: ["'s having"],
          hint: "Acción temporal en curso (have lunch = comer)"
        }
      ],
      rule: "Llamar y comer son acciones en curso ahora mismo (Present Continuous: 'am calling', 'is having'). El verbo 'to be' no se usa en continuo aquí ('is not')."
    },
    {
      id: "m1_4",
      sentence: "While I {{gap1}} dressed, the bell rang.",
      gaps: [
        {
          id: "gap1",
          infinitive: "GET",
          answer: "was getting",
          alternatives: [],
          hint: "Acción larga en proceso interrumpida por 'rang'"
        }
      ],
      rule: "Con 'While' expresamos la acción larga en proceso en el pasado (Past Continuous: 'was getting'), que es interrumpida por la acción corta en Past Simple ('rang')."
    },
    {
      id: "m1_5",
      sentence: "When she {{gap1}} to Paris, the sun {{gap2}}.",
      gaps: [
        {
          id: "gap1",
          infinitive: "FLY",
          answer: "was flying",
          alternatives: [],
          hint: "Acción continua en el pasado"
        },
        {
          id: "gap2",
          infinitive: "SHINE",
          answer: "was shining",
          alternatives: [],
          hint: "Acción simultánea en el pasado"
        }
      ],
      rule: "Dos acciones simultáneas o en desarrollo en el pasado se expresan en Past Continuous: 'was flying' y 'was shining'."
    },
    {
      id: "m1_6",
      sentence: "No, I {{gap1}} my leg in August and I {{gap2}} to stay in hospital for 2 months.",
      gaps: [
        {
          id: "gap1",
          infinitive: "BREAK",
          answer: "broke",
          alternatives: [],
          hint: "Momento concreto definido en el pasado (in August)"
        },
        {
          id: "gap2",
          infinitive: "HAVE TO",
          answer: "have had to",
          alternatives: ["had to", "'ve had to"],
          hint: "Consecuencia acumulada o acción pasada concluida"
        }
      ],
      rule: "Con una fecha o mes pasado concreto ('in August') es obligatorio el Simple Past ('broke'). Para la consecuencia en presente perfecto o pasado: 'have had to' o 'had to'."
    },
    {
      id: "m1_7",
      sentence: "You look tired, what {{gap1}}? I {{gap2}} 8 kms.",
      gaps: [
        {
          id: "gap1",
          infinitive: "YOU/DO",
          answer: "have you been doing",
          alternatives: [],
          hint: "Pregunta sobre el proceso que causa el cansancio presente"
        },
        {
          id: "gap2",
          infinitive: "RUN",
          answer: "have been running",
          alternatives: ["have run", "'ve been running", "'ve run"],
          hint: "Proceso acumulado que explica el estado actual"
        }
      ],
      rule: "Present Perfect Continuous ('have you been doing', 'have been running') enfatiza la duración y el cansancio visible en el presente."
    },
    {
      id: "m1_8",
      sentence: "Watch out! You {{gap1}} the vase over.",
      gaps: [
        {
          id: "gap1",
          infinitive: "KNOCK",
          answer: "are going to knock",
          alternatives: ["'re going to knock"],
          hint: "Futuro inminente basado en evidencia visual ('Watch out!')"
        }
      ],
      rule: "Cuando hay evidencia directa o una advertencia inmediata en el presente ('Watch out!'), se utiliza 'be going to', no 'will'."
    },
    {
      id: "m1_9",
      sentence: "By the time you get home, I {{gap1}} painting your room.",
      gaps: [
        {
          id: "gap1",
          infinitive: "FINISH",
          answer: "will have finished",
          alternatives: ["'ll have finished"],
          hint: "Acción que habrá concluido antes de un momento futuro ('By the time...')"
        }
      ],
      rule: "Fórmula de examen: 'By the time + Present Simple + Future Perfect (will have finished)'. Expresa que la tarea habrá terminado antes de tu llegada."
    },
    {
      id: "m1_10",
      sentence: "This time tomorrow I {{gap1}} a drink with Tom Cruise.",
      gaps: [
        {
          id: "gap1",
          infinitive: "HAVE",
          answer: "will be having",
          alternatives: ["'ll be having"],
          hint: "Acción que estará en pleno desarrollo en un punto futuro"
        }
      ],
      rule: "El marcador 'This time tomorrow' sitúa una acción en pleno desarrollo en el futuro, requiriendo Future Continuous ('will be having')."
    },
    {
      id: "m1_11",
      sentence: "By the time the police arrived, he {{gap1}} already.",
      gaps: [
        {
          id: "gap1",
          infinitive: "LEAVE",
          answer: "had left",
          alternatives: ["had already left"],
          hint: "Acción anterior a otra acción en pasado (arrived)"
        }
      ],
      rule: "Fórmula de examen: 'By the time + Past Simple + Past Perfect'. El ladrón se fue antes de que la policía llegara, por eso usamos 'had left'."
    },
    {
      id: "m1_12",
      sentence: "I cannot go out tonight. The match {{gap1}} at 7.45.",
      gaps: [
        {
          id: "gap1",
          infinitive: "FINISH",
          answer: "finishes",
          alternatives: [],
          hint: "Horario o programa oficial con valor de futuro"
        }
      ],
      rule: "Los horarios oficiales o programas fijados (trenes, partidos, clases) se expresan en Simple Present con valor de futuro: 'finishes at 7.45'."
    }
  ],

  // ==========================================
  // MODO 2: REPHRASING (KEY WORD TRANSFORMATION)
  // 15 ejemplos reales extraídos de contexto_examenes.md
  // ==========================================
  mode2: [
    {
      id: "m2_1",
      original: "How much is this magazine?",
      keyword: "cost",
      target: "How much does this magazine cost?",
      alternatives: [
        "How much does this magazine cost"
      ],
      rule: "Uso del verbo estático 'cost' en interrogativa presente. Requiere el auxiliar 'does': 'How much does this magazine cost?'."
    },
    {
      id: "m2_2",
      original: "I haven't got a car.",
      keyword: "own",
      target: "I don't own a car.",
      alternatives: [
        "I do not own a car.",
        "I don't own a car",
        "I do not own a car"
      ],
      rule: "Sustitución de 'haven't got' por el verbo estático de posesión 'own' en presente simple con auxiliar 'don't': 'I don't own a car.'."
    },
    {
      id: "m2_3",
      original: "We intend to meet for lunch tomorrow.",
      keyword: "are",
      target: "We are meeting for lunch tomorrow.",
      alternatives: [
        "We're meeting for lunch tomorrow.",
        "We are meeting for lunch tomorrow",
        "We're meeting for lunch tomorrow",
        "We are having lunch together tomorrow."
      ],
      rule: "Planes acordados y confirmados con otras personas ('future arrangements') se expresan en Present Continuous: 'We are meeting for lunch tomorrow.'."
    },
    {
      id: "m2_4",
      original: "Brenda plays a lot of football.",
      keyword: "often",
      target: "Brenda often plays football.",
      alternatives: [
        "Brenda often plays football",
        "Brenda plays football often.",
        "Brenda plays football often"
      ],
      rule: "Posición del adverbio de frecuencia: va antes del verbo principal ('often plays football'). 'A lot of football' se transforma en frecuencia con 'often'."
    },
    {
      id: "m2_5",
      original: "The children are quiet at the moment.",
      keyword: "talk",
      target: "The children aren't talking at the moment.",
      alternatives: [
        "The children are not talking at the moment.",
        "The children aren't talking at the moment",
        "The children are not talking at the moment"
      ],
      rule: "Estar callados ('quiet') significa que no están hablando. Con 'at the moment' usamos Present Continuous negativo: 'aren't talking'."
    },
    {
      id: "m2_6",
      original: "I've got plans to see Paul tonight.",
      keyword: "am",
      target: "I am going to see Paul tonight.",
      alternatives: [
        "I'm going to see Paul tonight.",
        "I am seeing Paul tonight.",
        "I'm seeing Paul tonight.",
        "I am going to see Paul tonight",
        "I'm going to see Paul tonight"
      ],
      rule: "'Plans to do something' se transforma con 'be going to' o 'Present Continuous': 'I am going to see Paul tonight.' o 'I am seeing Paul tonight.'."
    },
    {
      id: "m2_7",
      original: "It started to rain in the middle of our picnic.",
      keyword: "while",
      target: "It started to rain while we were having a picnic.",
      alternatives: [
        "While we were having a picnic, it started to rain.",
        "It started raining while we were having a picnic.",
        "It began to rain while we were having a picnic.",
        "It started to rain while we were having a picnic",
        "While we were having a picnic it started to rain"
      ],
      rule: "Sintaxis de 'while': 'while + Past Continuous' para la acción larga de fondo ('while we were having a picnic') interrumpida por 'started to rain'."
    },
    {
      id: "m2_8",
      original: "We found a better flat. Then we moved.",
      keyword: "after",
      target: "After we had found a better flat, we moved.",
      alternatives: [
        "We moved after we had found a better flat.",
        "After finding a better flat, we moved.",
        "After we had found a better flat we moved",
        "We moved after we had found a better flat"
      ],
      rule: "Fórmula de examen: 'after + Past Perfect + Past Simple'. La acción que ocurrió primero (encontrar piso) va en Past Perfect ('had found')."
    },
    {
      id: "m2_9",
      original: "She finished all the work. Then he came to help her.",
      keyword: "By the time",
      target: "By the time he came to help her, she had finished all the work.",
      alternatives: [
        "She had finished all the work by the time he came to help her.",
        "By the time he came to help her she had finished all the work.",
        "She had finished all the work by the time he arrived to help her."
      ],
      rule: "Fórmula de examen: 'By the time + Past Simple (came) + Past Perfect (had finished)'. La acción anterior va en pasado perfecto."
    },
    {
      id: "m2_10",
      original: "I plan to leave in a week.",
      keyword: "leaving",
      target: "I'll be leaving in a week.",
      alternatives: [
        "I will be leaving in a week.",
        "I am leaving in a week.",
        "I'm leaving in a week.",
        "I'll be leaving in a week",
        "I will be leaving in a week"
      ],
      rule: "Acción agendada o prevista en el futuro: Future Continuous ('I'll be leaving in a week') o Present Continuous ('I'm leaving in a week')."
    },
    {
      id: "m2_11",
      original: "I don't listen to classical music at all.",
      keyword: "never",
      target: "I never listen to classical music.",
      alternatives: [
        "I never listen to classical music",
        "Never do I listen to classical music."
      ],
      rule: "'Don't... at all' equivale a 'never'. El adverbio 'never' se coloca entre el sujeto y el verbo principal en Simple Present: 'I never listen'."
    },
    {
      id: "m2_12",
      original: "George started working here four years ago.",
      keyword: "for",
      target: "George has worked here for four years.",
      alternatives: [
        "George has been working here for four years.",
        "George has worked here for four years",
        "George has been working here for four years",
        "George's worked here for four years."
      ],
      rule: "Fórmula de examen: 'Past Simple + ago -> Present Perfect + FOR'. Con verbos habituales como 'work', tanto 'has worked' como 'has been working' son válidos."
    },
    {
      id: "m2_13",
      original: "I was in the middle of a conversation with my teacher when you called.",
      keyword: "while",
      target: "While I was talking with my teacher, you called.",
      alternatives: [
        "While I was speaking with my teacher, you called.",
        "While I was talking to my teacher, you called.",
        "While I was speaking to my teacher, you called.",
        "You called while I was talking to my teacher.",
        "You called while I was talking with my teacher."
      ],
      rule: "Estar en medio de una conversación equivale a 'was talking/speaking'. Se introduce con 'While + Past Continuous'."
    },
    {
      id: "m2_14",
      original: "Anne is visiting our country for the first time.",
      keyword: "never",
      target: "Anne has never visited our country.",
      alternatives: [
        "Anne has never visited our country before.",
        "Anne has never visited our country",
        "Anne's never visited our country."
      ],
      rule: "'For the first time' se transforma en 'never + Present Perfect': 'Anne has never visited our country before'."
    },
    {
      id: "m2_15",
      original: "Paul met Julie in primary school.",
      keyword: "known",
      target: "Paul has known Julie since primary school.",
      alternatives: [
        "Paul has known Julie since primary school",
        "Paul's known Julie since primary school."
      ],
      rule: "Fórmula de examen: 'met (conocer por primera vez) -> has known (conocer de continuo)'. Como 'primary school' es un punto concreto, se usa 'since', no 'for'."
    }
  ],

  // ==========================================
  // MODO 3: TEXTO CON HUECOS (CLOZE TEST)
  // Textos narrativos continuos de 120-150 palabras con 6-8 huecos
  // ==========================================
  mode3: [
    {
      id: "m3_1",
      title: "Relato 1: A Strange Noise in the Kitchen",
      textTemplate: "Last night I {{gap1}} (BE) alone at home. I {{gap2}} (LIE) on my bed and I was watching TV when I {{gap3}} (HEAR) a strange noise. The noise came from the kitchen. I went downstairs, picked up a heavy vase and {{gap4}} (HEAD FOR) the kitchen. I opened the door slowly. Then, I saw someone; he {{gap5}} (SEARCH) in the fridge. I was so frightened that I dropped the vase and it {{gap6}} (CRASH) onto the floor. The man turned towards the door and I {{gap7}} (SEE) his face. It was my husband!",
      gaps: [
        { id: "gap1", infinitive: "BE", answer: "was", alternatives: [], explanation: "Past Simple del verbo to be para primera persona ('I was')." },
        { id: "gap2", infinitive: "LIE", answer: "was lying", alternatives: [], explanation: "Past Continuous ('was lying'): acción en desarrollo en ese momento." },
        { id: "gap3", infinitive: "HEAR", answer: "heard", alternatives: [], explanation: "Past Simple: acción corta que interrumpe con 'when' ('heard')." },
        { id: "gap4", infinitive: "HEAD FOR", answer: "headed for", alternatives: [], explanation: "Past Simple del phrasal verb 'head for' (dirigirse hacia) en serie consecutiva." },
        { id: "gap5", infinitive: "SEARCH", answer: "was searching", alternatives: [], explanation: "Past Continuous: acción en pleno proceso que el narrador presencia." },
        { id: "gap6", infinitive: "CRASH", answer: "crashed", alternatives: [], explanation: "Past Simple: acción consecutiva inmediata en el relato." },
        { id: "gap7", infinitive: "SEE", answer: "saw", alternatives: [], explanation: "Past Simple: acción puntual al ver el rostro ('saw')." }
      ],
      generalRule: "Contraste clásico de examen: acciones de fondo en Past Continuous interrumpidas o seguidas por acciones puntuales y secuenciales en Past Simple."
    },
    {
      id: "m3_2",
      title: "Relato 2: Angie's Bad Morning",
      textTemplate: "Last Monday, Angie got up for work and went to the kitchen. But when she {{gap1}} (OPEN) the fridge, she discovered that Lucy {{gap2}} (DRINK) all the milk. So she had a quick coffee, got dressed and went out to her car. There she found that she {{gap3}} (FORGET) to put the cover on the car and there {{gap4}} (BE) thick frost everywhere. While she {{gap5}} (TRY) to scrape the ice off, her neighbour {{gap6}} (OFFER) to give her a lift. Angie smiled and {{gap7}} (ACCEPT) right away.",
      gaps: [
        { id: "gap1", infinitive: "OPEN", answer: "opened", alternatives: [], explanation: "Past Simple: acción puntual al abrir la nevera." },
        { id: "gap2", infinitive: "DRINK", answer: "had drunk", alternatives: [], explanation: "Past Perfect: Lucy se había bebido la leche antes de que Angie abriera el frigorífico." },
        { id: "gap3", infinitive: "FORGET", answer: "had forgotten", alternatives: [], explanation: "Past Perfect: el olvido ocurrió la noche anterior, antes del momento en que lo descubre." },
        { id: "gap4", infinitive: "BE", answer: "was", alternatives: [], explanation: "Past Simple de estado ('there was thick frost')." },
        { id: "gap5", infinitive: "TRY", answer: "was trying", alternatives: [], explanation: "Past Continuous introducido por 'While': acción en proceso." },
        { id: "gap6", infinitive: "OFFER", answer: "offered", alternatives: [], explanation: "Past Simple: interrupción u ofrecimiento puntual de su vecino." },
        { id: "gap7", infinitive: "ACCEPT", answer: "accepted", alternatives: [], explanation: "Past Simple: acción consecutiva y decidida." }
      ],
      generalRule: "Uso del Past Perfect Simple ('had drunk', 'had forgotten') para acciones completadas con anterioridad al relato principal en pasado."
    },
    {
      id: "m3_3",
      title: "Relato 3: The Broken Flight to London",
      textTemplate: "When Sara {{gap1}} (ARRIVE) at the airport yesterday, she noticed that hundreds of passengers {{gap2}} (WAIT) in long queues. The airline assistant told them that a storm {{gap3}} (BREAK DOWN) several radar systems earlier that morning. Sara {{gap4}} (CALL) her hotel to say she would be late. While she {{gap5}} (TALK) on the phone, an announcement {{gap6}} (INFORM) everyone that their gate was finally open. She breathed a sigh of relief and {{gap7}} (CHEER UP) immediately.",
      gaps: [
        { id: "gap1", infinitive: "ARRIVE", answer: "arrived", alternatives: [], explanation: "Past Simple: momento concreto puntual en el aeropuerto." },
        { id: "gap2", infinitive: "WAIT", answer: "were waiting", alternatives: [], explanation: "Past Continuous: multitud de pasajeros esperando en desarrollo." },
        { id: "gap3", infinitive: "BREAK DOWN", answer: "had broken down", alternatives: [], explanation: "Past Perfect del phrasal verb 'break down': la avería ocurrió antes de su llegada." },
        { id: "gap4", infinitive: "CALL", answer: "called", alternatives: [], explanation: "Past Simple: acción secuencial deliberada." },
        { id: "gap5", infinitive: "TALK", answer: "was talking", alternatives: [], explanation: "Past Continuous con 'While': llamada en desarrollo." },
        { id: "gap6", infinitive: "INFORM", answer: "informed", alternatives: [], explanation: "Past Simple: interrumpe la llamada." },
        { id: "gap7", infinitive: "CHEER UP", answer: "cheered up", alternatives: [], explanation: "Past Simple del phrasal verb 'cheer up' (animarse)." }
      ],
      generalRule: "Integración de phrasal verbs del temario ('break down', 'cheer up') con alternancia de Past Simple, Past Continuous y Past Perfect."
    }
  ],

  // ==========================================
  // MODO 4: TEST TEÓRICO (PREGUNTAS CON TRAMPAS FRECUENTES)
  // ==========================================
  mode4: [
    {
      id: "m4_1",
      question: "¿Es gramaticalmente correcta la oración: 'Milk is containing vitamins'?",
      options: [
        "Sí, porque la leche contiene vitaminas en este momento presente.",
        "No, porque 'contain' es un verbo estático y no admite formas continuas (-ing).",
        "Sí, pero solo si se usa en oraciones interrogativas.",
        "No, debería usarse en Past Continuous ('was containing')."
      ],
      correctIndex: 1,
      explanation: "¡Regla de oro! 'Contain' es un verbo estático (stative verb) de posesión/contenido. No se usa habitualmente en tiempos continuos. Lo correcto es: 'Milk contains vitamins'."
    },
    {
      id: "m4_2",
      question: "¿Qué diferencia fundamental existe entre Present Perfect Simple y Present Perfect Continuous?",
      options: [
        "El Simple se usa solo para el pasado lejano y el Continuous para el futuro.",
        "El Simple enfatiza el resultado o las veces completadas; el Continuous enfatiza la duración y el proceso.",
        "No existe ninguna diferencia; se pueden intercambiar con cualquier verbo en inglés.",
        "El Continuous solo se utiliza con verbos estáticos como 'know' y 'love'."
      ],
      correctIndex: 1,
      explanation: "El Present Perfect Simple enfatiza el resultado ('I have written 5 emails'), mientras que el Continuous enfatiza la duración acumulada del proceso ('I have been writing emails for two hours')."
    },
    {
      id: "m4_3",
      question: "Con verbos de duración habitual como 'live' o 'work', ¿hay cambio de significado entre Simple y Continuous en Present Perfect?",
      options: [
        "Sí, el Simple significa que la acción ya terminó definitivamente.",
        "No, ambos expresan esencialmente la misma idea sin alterar el significado.",
        "Sí, el Continuous solo se puede usar si trabajas menos de 2 horas al día.",
        "No se puede usar 'live' en Present Perfect jamás."
      ],
      correctIndex: 1,
      explanation: "En los apuntes de Sara: con verbos de duración habitual (live, work, study, wait, rain) las formas 'have lived' y 'have been living' son intercambiables sin cambio apreciable de significado."
    },
    {
      id: "m4_4",
      question: "¿Cuál de las siguientes opciones describe el uso correcto de 'SINCE' y 'FOR'?",
      options: [
        "'Since' marca el punto de inicio concreto (since 2018), y 'for' indica duración de tiempo (for 5 years).",
        "'Since' se usa para periodos de tiempo (since 3 days) y 'for' para fechas exactas (for Monday).",
        "Ambos son exactamente sinónimos y da igual cuál se coloque.",
        "'Since' solo se puede usar con Past Simple y 'for' solo con Future Simple."
      ],
      correctIndex: 0,
      explanation: "Trampa típica de examen: 'Since' marca el momento exacto de partida ('since primary school', 'since 2015'), mientras que 'for' indica duración ('for four years'). Decir 'since 4 years' es un fallo grave."
    },
    {
      id: "m4_5",
      question: "¿Qué combinación de tiempos verbales exige la estructura 'By the time' en un contexto de pasado?",
      options: [
        "By the time + Past Continuous + Simple Present",
        "By the time + Past Simple + Past Perfect",
        "By the time + Past Perfect + Future Simple",
        "By the time + Present Perfect + Past Simple"
      ],
      correctIndex: 1,
      explanation: "Fórmula explícita de examen: 'By the time + Past Simple, sujeto + Past Perfect' (Ej: 'By the time he came to help her, she had finished all the work')."
    },
    {
      id: "m4_6",
      question: "¿Y qué combinación exige 'By the time' cuando el contexto se refiere al futuro?",
      options: [
        "By the time + Future Simple (will) + Future Continuous",
        "By the time + Present Simple + Future Perfect (will have + participio)",
        "By the time + Past Simple + Future Perfect",
        "By the time + Present Continuous + Simple Present"
      ],
      correctIndex: 1,
      explanation: "Fórmula de examen: 'By the time + Present Simple + Future Perfect' (Ej: 'By the time you get home, I will have finished painting your room'). En la subordinada temporal nunca se pone 'will'."
    },
    {
      id: "m4_7",
      question: "¿Cuál de los siguientes verbos es un STATIVE VERB que NO debe emplearse en forma continua?",
      options: [
        "Run (correr)",
        "Belong to (pertenecer a)",
        "Fly (volar)",
        "Drink (beber)"
      ],
      correctIndex: 1,
      explanation: "'Belong to' es un verbo estático de posesión (junto a own, have, possess). No se dice 'This book is belonging to me', sino 'This book belongs to me'."
    },
    {
      id: "m4_8",
      question: "En una oración donde una acción larga en el pasado es interrumpida por otra corta, ¿qué conectores y tiempos corresponden?",
      options: [
        "While / As con Past Simple, y When con Past Continuous.",
        "While / As con Past Continuous (acción larga), y When con Past Simple (acción corta que interrumpe).",
        "Ambas acciones deben ir obligatoriamente en Present Perfect.",
        "When solo se usa con Future Simple."
      ],
      correctIndex: 1,
      explanation: "Regla sintáctica: 'While / As + Past Continuous' (acción larga de fondo) y 'When + Past Simple' (acción puntual interruptora). Ej: 'While I was having a shower, the phone rang'."
    },
    {
      id: "m4_9",
      question: "¿Cuándo se debe usar 'be going to' en lugar de 'will' para expresar futuro?",
      options: [
        "Para decisiones espontáneas tomadas en el mismo instante de hablar.",
        "Cuando existe una evidencia clara e inmediata en el presente o una intención previa meditada.",
        "Solo en la cláusula de resultado de la Primera Condicional.",
        "Únicamente cuando se habla de horarios de trenes y autobuses."
      ],
      correctIndex: 1,
      explanation: "'Be going to' se usa ante evidencias claras en el presente ('Look at those dark clouds! It is going to rain') o planes previos. 'Will' se reserva para predicciones sin base inmediata, promesas y decisiones espontáneas."
    },
    {
      id: "m4_10",
      question: "¿Qué significado adquiere el phrasal verb 'HEAD FOR' visto en los relatos de examen de Sara?",
      options: [
        "Tener dolor de cabeza.",
        "Dirigirse o encaminarse hacia un lugar.",
        "Romperse en mil pedazos.",
        "Buscar a una persona perdida."
      ],
      correctIndex: 1,
      explanation: "En el examen de Sara: 'headed for the kitchen' significa dirigirse / encaminarse hacia la cocina. Es uno de los phrasal verbs clave listados en el temario."
    }
  ]
};

window.EXAM_BANK = EXAM_BANK;
