// Motor de validación gramatical flexible, generador de explicaciones y extractor 100% Offline desde window.EXAM_BANK
const GeminiClient = {
  // Normalizar apóstrofos tipográficos a rectos
  normalizeApostrophes(str) {
    if (!str) return '';
    return String(str).replace(/[’‘`´]/g, "'");
  },

  // Normalizador básico de texto (ignora mayúsculas, espacios extra y puntuación)
  normalizeText(str) {
    if (!str) return '';
    return this.normalizeApostrophes(str)
      .toLowerCase()
      .trim()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_~()?"'\[\]¡¿—–«»…]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // Mapa unificado de ortografía UK <-> US bidireccional
  canonicalizeSpelling(str) {
    if (!str) return '';
    return String(str)
      .replace(/\bcan\s+not\b/g, 'cannot')
      .replace(/\bno\s+one\b/g, 'nobody')
      .replace(/\b(have|has|had|not)\s+gotten\b/g, '$1 got')
      .replace(/\bapologis(e|ed|es|ing)\b/g, 'apologiz$1')
      .replace(/\brealis(e|ed|es|ing)\b/g, 'realiz$1')
      .replace(/\bplagiaris(e|ed|es|ing)\b/g, 'plagiariz$1')
      .replace(/\borganis(e|ed|es|ing)\b/g, 'organiz$1')
      .replace(/\brecognis(e|ed|es|ing)\b/g, 'recogniz$1')
      .replace(/\bmemoris(e|ed|es|ing)\b/g, 'memoriz$1')
      .replace(/\bmemorisation\b/g, 'memorization')
      .replace(/\bpractis(e|ed|es|ing)\b/g, 'practic$1')
      .replace(/\bprioritis(e|ed|es|ing)\b/g, 'prioritiz$1')
      .replace(/\boptimis(e|ed|es|ing)\b/g, 'optimiz$1')
      .replace(/\bstandardis(e|ed|es|ing)\b/g, 'standardiz$1')
      .replace(/\banalys(e|ed|es|ing)\b/g, 'analyz$1')
      .replace(/\bcriticis(e|ed|es|ing)\b/g, 'criticiz$1')
      .replace(/\bspecialis(e|ed|es|ing)\b/g, 'specializ$1')
      .replace(/\bemphas(ise|ised|ises|ising)\b/g, (m, suf) => 'emphas' + suf.replace('is', 'iz'))
      .replace(/\bfavourite(s)?\b/g, 'favorite$1')
      .replace(/\bneighbour(s|hood|hoods)?\b/g, 'neighbor$1')
      .replace(/\bcolour(s|ed|ing)?\b/g, 'color$1')
      .replace(/\bfavour(s|ed|ing)?\b/g, 'favor$1')
      .replace(/\bbehaviour(s)?\b/g, 'behavior$1')
      .replace(/\bcentre(s)?\b/g, 'center$1')
      .replace(/\b(kilo)?metre(s)?\b/g, '$1meter$2')
      .replace(/\btheatre(s)?\b/g, 'theater$1')
      .replace(/\byoghurt(s)?\b/g, 'yogurt$1')
      .replace(/\bprogramme(s)?\b/g, 'program$1')
      .replace(/\bgrey\b/g, 'gray')
      .replace(/\btravelled\b/g, 'traveled')
      .replace(/\btravelling\b/g, 'traveling')
      .replace(/\btraveller(s)?\b/g, 'traveler$1')
      .replace(/\bcancelled\b/g, 'canceled')
      .replace(/\bcancelling\b/g, 'canceling')
      .replace(/\blearnt\b/g, 'learned')
      .replace(/\bburnt\b/g, 'burned');
  },

  // Expansión de contracciones estándar (y limpieza de puntuación)
  expandContractions(str, dReplacement = null, sReplacement = null) {
    if (!str) return '';
    let s = this.normalizeApostrophes(str).toLowerCase();

    // Negativas estándar bidireccionales
    s = s
      .replace(/\bcan't\b/g, 'cannot')
      .replace(/\bcan\s+not\b/g, 'cannot')
      .replace(/\bwon't\b/g, 'will not')
      .replace(/\bshan't\b/g, 'shall not')
      .replace(/\bneedn't\b/g, 'need not')
      .replace(/n't\b/g, ' not')
      .replace(/\bdo\s+not\b/g, 'do not')
      .replace(/\bdoes\s+not\b/g, 'does not')
      .replace(/\bdid\s+not\b/g, 'did not')
      .replace(/\bis\s+not\b/g, 'is not')
      .replace(/\bare\s+not\b/g, 'are not')
      .replace(/\bwas\s+not\b/g, 'was not')
      .replace(/\bwere\s+not\b/g, 'were not')
      .replace(/\bhave\s+not\b/g, 'have not')
      .replace(/\bhas\s+not\b/g, 'has not')
      .replace(/\bhad\s+not\b/g, 'had not')
      .replace(/\bwill\s+not\b/g, 'will not')
      .replace(/\bwould\s+not\b/g, 'would not')
      .replace(/\bcould\s+not\b/g, 'could not')
      .replace(/\bshould\s+not\b/g, 'should not')
      .replace(/\bmight\s+not\b/g, 'might not')
      .replace(/\bmust\s+not\b/g, 'must not')
      // Pronombres / modales no ambiguos
      .replace(/'m\b/g, ' am')
      .replace(/'ll\b/g, ' will')
      .replace(/'re\b/g, ' are')
      .replace(/'ve\b/g, ' have')
      .replace(/\blet's\b/g, 'let us')
      .replace(/\bgonna\b/g, 'going to')
      .replace(/\bwanna\b/g, 'want to')
      // 'd inequívoco
      .replace(/'d\s+rather\b/g, ' would rather')
      .replace(/'d\s+better\b/g, ' had better')
      .replace(/'d\s+have\b/g, ' would have');

    // 'd restante (distinción contextual 'd + participio -> had frente a 'd + infinitivo -> would)
    if (dReplacement) {
      s = s.replace(/'d\b/g, ` ${dReplacement}`);
    } else {
      const pastParticiples = 'been|had|done|gone|seen|known|taken|given|made|come|become|begun|broken|brought|built|bought|caught|chosen|cost|cut|dealt|drawn|driven|drunk|eaten|fallen|felt|fought|found|flown|forgotten|forgiven|frozen|got|gotten|grown|heard|held|hidden|hit|hurt|kept|laid|led|left|lent|let|lain|lit|lost|meant|met|paid|put|quit|read|ridden|rung|risen|run|said|sat|sent|set|shaken|shone|shot|shown|shut|sung|sunk|slept|spoken|spent|stood|stolen|stuck|swum|taught|thought|thrown|told|understood|woken|worn|won|written|learnt|burnt|dreamt|spelt|spoilt';
      const optAdv = '(?:(?:not|never|already|just|always|ever|still|really|probably|certainly|almost|hardly|barely)\\s+)?';
      const nonParticipleEd = new Set(['need', 'feed', 'bleed', 'speed', 'breed', 'heed', 'succeed', 'proceed', 'exceed', 'shed', 'wed', 'embed', 'shred', 'sled', 'fled']);

      s = s.replace(new RegExp(`'d\\s+(${optAdv}(?:${pastParticiples}))\\b`, 'g'), ' had $1');
      s = s.replace(new RegExp(`'d\\s+(${optAdv})([a-z]{3,}ed)\\b`, 'g'), (match, adv, verb) => {
        if (nonParticipleEd.has(verb)) {
          return ` would ${adv}${verb}`;
        }
        return ` had ${adv}${verb}`;
      });
      s = s.replace(/'d\b/g, ' would');
    }

    // 's tras palabras clave (is / has) o delante de participios
    if (sReplacement) {
      s = s.replace(/\b(he|she|it|there|that|what|who|here|where)'s\b/g, `$1 ${sReplacement}`);
    }
    s = s
      .replace(/'s\s+(been|just|already|never|ever|got|gotten|broken|written|worked|recorded|remained|tidied|started|left|gone|done|seen|lost|finished|stolen|told|taken|made|had)\b/g, ' has $1')
      .replace(/\b(he|she|it|there|that|what|who|here|where)'s\b/g, '$1 is');

    s = this.canonicalizeSpelling(s);

    return s
      .replace(/[.,\/#!$%\^&\*;:{}=\-_~()?"'\[\]¡¿—–«»…]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // Genera variantes normalizadas válidas (resolviendo contracciones ambiguas 'd y 's en ambos sentidos)
  getNormalizedVariants(str) {
    if (!str) return [];
    const raw = this.normalizeApostrophes(str).toLowerCase();
    const variants = new Set();

    variants.add(this.canonicalizeSpelling(this.normalizeText(raw)));
    variants.add(this.expandContractions(raw));

    const hasAmbiguousD = /'d\b/.test(raw);
    const hasAmbiguousS = /\b(he|she|it|there|that|what|who|here|where)'s\b/.test(raw);

    const dOpts = hasAmbiguousD ? ['would', 'had'] : [null];
    const sOpts = hasAmbiguousS ? ['is', 'has'] : [null];

    for (const dOpt of dOpts) {
      for (const sOpt of sOpts) {
        variants.add(this.expandContractions(raw, dOpt, sOpt));
      }
    }

    return Array.from(variants).filter(Boolean);
  },

  // Diccionario de significados y explicaciones detalladas en español para expresiones, preposiciones y vocabulario
  MEANINGS_DICT: {
    // Expressions with matter
    "what's the matter": "'What's the matter?' significa '¿qué pasa? / ¿qué te ocurre?' (se usa al ver a alguien pálido, triste o preocupado)",
    "it doesn't matter": "'It doesn't matter' significa 'no importa / no pasa nada / da igual'",
    "a matter of life and death": "'A matter of life and death' significa 'una cuestión de vida o muerte' (máxima urgencia)",
    "a matter of opinion": "'A matter of opinion' significa 'una cuestión de opinión o de gustos' (algo subjetivo)",
    "a matter of time": "'A matter of time' significa 'una cuestión de tiempo' (algo que ocurrirá tarde o temprano)",
    "as a matter of fact": "'As a matter of fact' significa 'de hecho / en realidad' (para dar un dato exacto o desmentir algo)",
    "no laughing matter": "'No laughing matter' significa 'no es broma / no es cosa de risa / es un asunto muy serio'",
    "be no laughing matter": "'Be no laughing matter' significa 'no ser broma / no ser cosa de risa / ser un asunto muy serio'",
    "mind over matter": "'Mind over matter' significa 'fuerza de voluntad / la mente sobre la materia' (superar el cansancio o dolor físico con determinación mental)",
    "no matter": "'No matter' significa 'sin importar / da igual' (seguido de how, what, where, who...)",
    "the truth of the matter": "'The truth of the matter' significa 'la verdad del asunto / la realidad es que...'",
    "to make matters worse": "'To make matters worse' significa 'para colmo / para empeorar las cosas'",

    // Adjectives and Prepositions
    "accustomed to": "'accustomed to' significa 'acostumbrado a' (siempre con la preposición 'to', seguido de sustantivo o verbo en -ing)",
    "amazed by": "'amazed by' significa 'maravillado / asombrado por' (lleva la preposición 'by')",
    "committed to": "'committed to' significa 'comprometido con' (lleva la preposición 'to' seguida de sustantivo o verbo en -ing: committed to helping)",
    "curious about": "'curious about' significa 'curioso por / sobre' (lleva la preposición 'about')",
    "disappointed with": "'disappointed with' significa 'decepcionado con' (lleva la preposición 'with')",
    "excited about": "'excited about' significa 'emocionado / ilusionado por' (lleva la preposición 'about')",
    "experienced in": "'experienced in' significa 'experto / con experiencia en' (lleva la preposición 'in')",
    "frustrated by": "'frustrated by' significa 'frustrado por' (lleva la preposición 'by')",
    "impressed with": "'impressed with' significa 'impresionado con' (lleva la preposición 'with')",
    "jealous of": "'jealous of' significa 'celoso / envidioso de' (lleva la preposición 'of')",
    "popular with": "'popular with' significa 'popular / famoso entre' (lleva la preposición 'with')",
    "responsible for": "'responsible for' significa 'responsable de' (lleva la preposición 'for' seguida de sustantivo o -ing)",
    "jealous": "'jealous' va siempre con la preposición 'of' (jealous of = celoso de)",
    "amazed": "'amazed' va con la preposición 'by' (amazed by = asombrado por)",
    "experienced": "'experienced' va con la preposición 'in' (experienced in = experto en)",
    "committed": "'committed' va con la preposición 'to' (committed to = comprometido con)",
    "curious / excited": "tanto 'curious' (curious about = curioso por) como 'excited' (excited about = emocionado por) se construyen con la preposición 'about'",
    "disappointed / impressed": "tanto 'disappointed' (disappointed with = decepcionado con) como 'impressed' (impressed with = impresionado con) se construyen con la preposición 'with'",
    "accustomed / committed": "tanto 'accustomed' (accustomed to = acostumbrado a) como 'committed' (committed to = comprometido con) llevan la preposición 'to' (+ sustantivo o -ing)",
    "amazed / frustrated": "tanto 'amazed' (amazed by = maravillado por) como 'frustrated' (frustrated by = frustrado por) llevan la preposición 'by'",
    "popular / disappointed": "'popular' y 'disappointed' llevan la preposición 'with' (popular with, disappointed with), no 'about'",
    "jealous / responsible": "'jealous' lleva 'of' (jealous of = celoso de) y 'responsible' lleva 'for' (responsible for = responsable de)",
    "experienced / frustrated": "'experienced' lleva 'in' (experienced in = experto en) y 'frustrated' lleva 'by' (frustrated by = frustrado por)",
    "impressed / popular": "tanto 'impressed' como 'popular' llevan la preposición 'with' (impressed with, popular with)",
    "curious / jealous": "'curious' lleva 'about' (curious about) mientras que 'jealous' lleva 'of' (jealous of)",
    "to / enduring": "'accustomed to' tiene 'to' como preposición, por lo que el verbo que sigue debe ir en gerundio (-ing): 'accustomed to enduring'",
    "to / endure": "detrás de 'accustomed to', 'to' es una preposición y exige gerundio (-ing: enduring), no infinitivo",
    "to / helping": "'committed to' tiene 'to' como preposición, por lo que exige gerundio (-ing): 'committed to helping'",
    "to / help": "detrás de 'committed to', 'to' es preposición y obliga a usar verbo en -ing ('helping'), no infinitivo",

    // Travel vocabulary
    "abroad": "'abroad' significa 'en el extranjero / al extranjero'",
    "in advance": "'in advance' significa 'con antelación / previamente'",
    "deal": "'deal' significa 'oferta / buen precio'",
    "off season": "'off season' significa 'en temporada baja' (época con menos turistas y precios más bajos)",
    "carry-on": "'carry-on' significa 'equipaje de mano' (el que subes contigo a la cabina del avión)",
    "location": "'location' significa 'ubicación / emplazamiento'",
    "delayed": "'delayed' significa 'retrasado / demorado'",
    "outdoors": "'outdoors' significa 'al aire libre / en la naturaleza'",
    "trail": "'trail' significa 'sendero / ruta de montaña'",
    "overnight": "'overnight' significa 'de una noche / estancia nocturna'",
    "stopover": "'stopover' significa 'escala' (parada breve durante un viaje largo en avión)"
  },

  // Reglas explicativas en español por categoría para feedback inmediato
  getCategoryRule(category, modeKey, answerText = '') {
    const rules = {
      'Past Simple vs Present Perfect': 'Usa Past Simple para acciones terminadas en una fecha pasada concreta (in August, ago, in 1977, yesterday) y Present Perfect (have/has + participio) para acciones con resultado en el presente o periodos no terminados (so far, this year, yet, since).',
      'Present Perfect Continuous': 'El Present Perfect Continuous (have/has been + -ing) enfatiza la duración acumulada de una actividad que continúa o cuyo efecto (cansancio, suciedad) es visible ahora.',
      'Present Perfect Simple vs Continuous': 'El Present Perfect Continuous (have/has been + -ing) enfatiza la duración del proceso (for two hours, all day), mientras que el Present Perfect Simple (have/has + participio) enfatiza la cantidad o el resultado completado (eighteen messages, 8 km).',
      'Present Perfect Simple': 'El Present Perfect Simple (have/has + participio) conecta una acción pasada reciente (just, already, yet, recently, lately) con su consecuencia en el presente.',
      'Past Simple': 'El Past Simple se emplea para acciones completadas en un momento definido del pasado (ago, last night, yesterday) o secuencias narrativas de hechos pasados.',
      'Past Simple vs Present Perfect Continuous': 'Con "How long...?" o acciones continuadas hasta hoy usamos Present Perfect Continuous (have/has been + -ing); para el momento exacto del pasado (last October, ten minutes ago) usamos Past Simple.',
      'Past Continuous vs Past Simple': 'La acción larga en desarrollo en el pasado va en Past Continuous (was/were + -ing, a menudo con while/as), y la acción corta que la interrumpe va en Past Simple (con when).',
      'Past Continuous': 'Dos acciones largas que ocurrían simultáneamente en el pasado se expresan ambas en Past Continuous (was/were + -ing) unidas por "while".',
      'Past Simple vs Past Perfect': 'El Past Perfect Simple (had + participio) expresa una acción que ocurrió ANTES que otra acción pasada en Past Simple (By the time + Past Simple, Past Perfect).',
      'Past Simple vs Past Perfect Continuous': 'El Past Perfect Continuous (had been + -ing) enfatiza la duración de un proceso previo que explica una consecuencia visible en el pasado (were wet because they had been walking).',
      'Future Continuous': 'El Future Continuous (will be / won\'t be + -ing) expresa una acción que estará en pleno desarrollo en un momento específico del futuro (at this time next year, at 8 p.m. tomorrow).',
      'Future Perfect': 'El Future Perfect (will have + participio) indica una acción que ya habrá concluido antes de una fecha o evento futuro (by Friday, by the end of this month, by the time...).',
      'Future Continuous vs Future Perfect': 'Usa Future Continuous (will be + -ing) para acciones en curso en una hora futura (this time tomorrow, at 10 p.m.) y Future Perfect (will have + participio) para acciones que ya habrán terminado antes de una fecha límite (by midnight, by 2030).',
      'Adjectives and Prepositions': 'Colocaciones fijas de adjetivo + preposición: accustomed to (acostumbrado a), amazed by (asombrado por), committed to (comprometido con), curious about (curioso por), disappointed with (decepcionado con), excited about (emocionado por), experienced in (experto en), frustrated by (frustrado por), impressed with (impresionado con), jealous of (celoso de), popular with (popular entre), responsible for (responsable de).',
      'So / Such': 'Fórmula So / Such: "so + adjetivo/adverbio + that" se transforma en "such + (a/an) + adjetivo + sustantivo + that". Recuerda: con sustantivos incontables (weather, traffic, music, fog) o plurales NO se pone "a/an".',
      'Too / Enough': 'Fórmula Too / Enough: "too + adjetivo + to + infinitivo" equivale a "not + adjetivo opuesto + enough + to + infinitivo" (ej: too heavy ➔ isn\'t light enough; too young ➔ isn\'t old enough).',
      'Prefer / Would rather': 'Fórmula Prefer / Would rather: "prefer + V-ing + to + V-ing" equivale a "would rather (\'d rather) + infinitivo sin to + than + infinitivo sin to".',
      'Although / Despite': 'Concesivas: "Although / Even though + Sujeto + Verbo" equivale a "Despite / In spite of + Sustantivo / V-ing (gerundio) / the fact that + oración". Nunca pongas "of" detrás de "despite".',
      'By the time': 'Fórmula By the time: en pasado "By the time + Past Simple, Past Perfect (had + participio)"; en futuro "By the time + Present Simple, Future Perfect (will have + participio)".',
      'Present Perfect (For / Since)': 'Transformación Past Simple + ago / last ➔ Present Perfect con for (duración), since (inicio), just (acaba de ocurrir) o "This is the first time + Present Perfect".',
      'Passive Voice': 'Voz Pasiva: El complemento directo pasa a sujeto + verbo "to be" en el mismo tiempo verbal que la activa + participio pasado del verbo principal (+ by + agente si es relevante).',
      'Reported Speech': 'Estilo Indirecto (Reported Speech): El tiempo verbal retrocede un paso hacia el pasado (Present ➔ Past, Past Simple / Present Perfect ➔ Past Perfect, will ➔ would). En preguntas se usa orden afirmativo (if/where + Sujeto + Verbo) y en órdenes "told + objeto + (not) to + infinitivo".',
      'Conditionals': 'Condicionales: 1ª (If/Unless + Present Simple, will + inf); 2ª (If + Past Simple, would + inf — hipotesis presente/consejo "If I were you"); 3ª (If + Past Perfect "had + participio", would have + participio — pasado irreal).',
      'Zero Conditional': 'Zero Conditional (If / When + Present Simple, Present Simple): expresa verdades universales, leyes científicas, hechos inevitables o hábitos que siempre se cumplen.',
      'First Conditional': 'First Conditional (If / Unless + Present Simple, will / can / may + infinitivo): expresa situaciones reales o muy probables en el futuro. Nunca pongas "will" dentro de la cláusula con "if" o "unless".',
      'Zero & First Conditional': 'Zero Conditional (Present Simple + Present Simple) para hechos generales y First Conditional (If/Unless/Provided that/As long as/In case + Present Simple, will/can/may + inf) para situaciones futuras probables. Recuerda: "unless" = "if ... not" (va seguido de verbo afirmativo).',
      'Second Conditional': 'Second Conditional (If + Past Simple, would / could / might + infinitivo): expresa situaciones hipotéticas, irreales o improbables en el presente o futuro, así como consejos ("If I were you, I would..."). Se prefiere "were" en lugar de "was".',
      'Third Conditional': 'Third Conditional (If + Past Perfect [had + participio], would / could / might + have + participio): expresa situaciones pasadas irreales o arrepentimientos sobre algo que ya no se puede cambiar.',
      'Mixed Conditional': 'Condicional Mixto: combina una condición pasada irreal (If + Past Perfect) con un resultado en el presente (would / could + infinitivo), o una condición permanente (Past Simple) con una consecuencia pasada (would have + participio).',
      'Conditional Connectors': 'Conectores condicionales: "unless" (a menos que, siempre con verbo afirmativo), "provided that / as long as / on condition that" (siempre y cuando), "in case" (por si acaso) y "suppose" (supón que). Todos introducen la condición en presente (1ª) o pasado (2ª/3ª).',
      'I wish / If only + Past Simple': 'Deseos sobre el presente: "I wish / If only + Past Simple" (ej. "I wish I saw / didn\'t live / could / were"). Expresa algo que nos gustaría que fuera diferente ahora mismo. En inglés formal se usa "were" para todas las personas.',
      'I wish / If only + Past Perfect': 'Arrepentimiento sobre el pasado: "I wish / If only + Past Perfect (had + participio)" (ej. "I wish I had studied more"). Lamenta algo que ocurrió o dejó de ocurrir en el pasado y ya no puede cambiarse.',
      'I wish / If only + Would': 'Queja o molestia: "I wish / If only + sujeto + would + infinitivo sin to" (ej. "I wish he wouldn\'t snore"). Expresa irritación por un hábito ajeno o situación externa que queremos que cambie. Nunca se usa con el mismo sujeto ("I wish I would..." es incorrecto).',
      'Grammar Rules & Common Mistakes': 'Repasa los errores típicos de condicionales y deseos: nunca pongas "will/would" en la cláusula con "if/unless", usa verbo afirmativo tras "unless", distingue "I wish + Past Simple" (presente) de "Past Perfect" (pasado) y "would" (queja sobre otros o el tiempo).',
      'Verb Tenses Transformation': 'Transformación de tiempos verbales: "started/began + ago/when" pasa a Present Perfect (Simple o Continuous) con "for/since"; "During + sustantivo" pasa a "While + Past Continuous"; "First... then..." pasa a "By the time + Past Simple, Past Perfect".',
      'Expressions with matter': 'Expresiones con "matter": What\'s the matter? (¿qué pasa?), it doesn\'t matter (no importa), a matter of life and death (vida o muerte), a matter of opinion (cuestión de opinión), a matter of time (cuestión de tiempo), as a matter of fact (de hecho), no laughing matter (no es broma / asunto serio), mind over matter (fuerza de voluntad), no matter (sin importar), the truth of the matter (la verdad del asunto), to make matters worse (para colmo).',
      'Present Simple vs Present Continuous & Stative Verbs': 'Usa Present Simple para hábitos, rutinas, verdades generales y verbos estáticos (know, understand, belong, seem, own, prefer, believe). Usa Present Continuous (am/is/are + -ing) para acciones en curso ahora o planes temporales. Algunos verbos (think, have, smell, taste, look, see, weigh) cambian de significado según sean estáticos o dinámicos.',
      'Future Simple (will) vs Be going to / Timetables': 'Usa Future Simple (will/won\'t + inf) para decisiones espontáneas en el momento, promesas, ofertas o predicciones basadas en opinión (I think, probably). Usa "be going to + inf" para planes ya decididos y predicciones con evidencia física visible. Usa Present Simple para horarios oficiales fijos (trenes, vuelos, clases, tiendas).',
      'Past Simple / Past Continuous / Past Perfect (Simple & Continuous)': 'Combina Past Simple (acción puntual o completada) con Past Continuous (acción larga en curso o interrumpida), Past Perfect Simple (had + participio para la acción anterior a otra pasada) y Past Perfect Continuous (had been + -ing para enfatizar la duración previa a un punto del pasado).',
      'Present / Future Tenses & Stative Verbs': 'Distingue acciones en progreso frente a estados permanentes (stative verbs nunca van en -ing cuando expresan posesión, mente o sentidos pasivos) y elige entre will (espontáneo/opinión), be going to (intención/evidencia) y Present Simple (horarios fijos).',
      'Grammar Rules': 'Repasa la estructura gramatical clave: So + adj vs Such + (a/an) + adj + noun (sin "a" en incontables/plurales); adj + enough; would rather + inf + than + inf; prefer + -ing + to + -ing; Despite/In spite of + sustantivo/-ing vs Although/Even though + oración.',
      'Travel Vocabulary': 'Vocabulario de viajes: abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (equipaje de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala).'
    };

    if (category && rules[category]) {
      return rules[category];
    }
    return answerText
      ? `Respuesta correcta del temario: "${answerText}".`
      : 'Revisa la estructura gramatical y el vocabulario clave del temario de Sara.';
  },

  // Generador de explicación específica para cada pregunta de Modo 4 (acierto y fallo)
  buildMode4DetailedExplanation(ex, selectedOptionText, isCorrect) {
    const correctAns = ex.correct_answer || '';
    const normCorrect = correctAns.toLowerCase().trim();
    const normSelected = (selectedOptionText || '').toLowerCase().trim();
    const q = (ex.question || '').toLowerCase();

    // 1. Explicación específica de la respuesta correcta
    let correctReason = ex.explanation || '';

    if (!correctReason || correctReason.startsWith('Expresiones con "matter":') || correctReason.startsWith('Colocaciones fijas') || correctReason.startsWith('Respuesta esperada')) {
      if (this.MEANINGS_DICT[normCorrect]) {
        correctReason = `La opción correcta es "${correctAns}" porque ${this.MEANINGS_DICT[normCorrect]}.`;
      } else if (q.includes('both take the preposition')) {
        const prepMatch = ex.question.match(/'([^']+)'/);
        const prep = prepMatch ? prepMatch[1] : '';
        correctReason = `"${correctAns}" es correcta porque ambos adjetivos se construyen con la preposición '${prep}'.`;
      } else if (ex.category === 'Adjectives and Prepositions' && ['to', 'by', 'about', 'with', 'in', 'of', 'for'].includes(normCorrect)) {
        const adjMatch = ex.question.match(/\b(accustomed|amazed|committed|curious|disappointed|excited|experienced|frustrated|impressed|jealous|popular|responsible)\b/i);
        const adj = adjMatch ? adjMatch[1].toLowerCase() : '';
        const key = `${adj} ${normCorrect}`;
        if (this.MEANINGS_DICT[key]) {
          correctReason = `Se usa la preposición "${correctAns}" porque ${this.MEANINGS_DICT[key]}.`;
        } else {
          correctReason = `La preposición obligatoria aquí es "${correctAns}".`;
        }
      } else if (normCorrect === 'such bad weather') {
        correctReason = `"weather" es un sustantivo incontable, por lo que se usa "such + adjetivo + sustantivo incontable" ("such bad weather") SIN el artículo "a".`;
      } else if (normCorrect === 'such polite children') {
        correctReason = `"children" es un sustantivo plural, por lo que se usa "such + adjetivo + sustantivo plural" ("such polite children") SIN "a".`;
      } else if (normCorrect === 'small enough') {
        correctReason = `"enough" se coloca siempre DETRÁS del adjetivo ("small enough" = suficientemente pequeña), nunca delante.`;
      } else if (normCorrect === 'stay / go') {
        correctReason = `La estructura "would rather" va seguida de infinitivo SIN "to" en ambos verbos: "would rather stay ... than go".`;
      } else if (normCorrect === 'reading / watching') {
        correctReason = `La estructura "prefer ... to ..." exige gerundio (-ing) en ambos verbos: "prefers reading novels to watching films".`;
      } else if (normCorrect === 'in spite of') {
        correctReason = `Delante de un grupo nominal ("the heavy snow") se usa "In spite of" o "Despite" (sin "of"). "Although" y "Even though" exigen Sujeto + Verbo.`;
      } else if (normCorrect === 'even though') {
        correctReason = `Delante de una oración con Sujeto + Verbo ("he had booked") se usa "Even though" o "Although". "Despite" e "In spite of" no pueden ir seguidos directamente de una oración.`;
      } else if (normCorrect.startsWith('despite feeling tired')) {
        correctReason = `Detrás de "Despite" va un gerundio (-ing: "Despite feeling tired") o un sustantivo, nunca "of" ni Sujeto + Verbo directo.`;
      } else if (normCorrect === 'belong to') {
        correctReason = `"belong to" (pertenecer a) es un verbo estático (stative verb) de posesión y NO se usa en tiempos continuos (-ing).`;
      } else if (normCorrect === 'since') {
        correctReason = `Usamos "since" para indicar el punto de inicio en el pasado ("since she moved abroad"), mientras que "for" indica duración.`;
      } else if (normCorrect === 'yet') {
        correctReason = `Usamos "yet" al final de preguntas y oraciones negativas en Present Perfect ("Have they left ... yet?").`;
      } else if (normCorrect === 'had already left') {
        correctReason = `Con "By the time + Past Simple (arrived)", la acción que había ocurrido antes va en Past Perfect ("had already left").`;
      } else if (normCorrect === 'had been walking') {
        correctReason = `Usamos Past Perfect Continuous ("had been walking") para expresar la duración de una acción previa que explica una consecuencia pasada ("Their clothes were wet").`;
      } else if (normCorrect === 'will be lying') {
        correctReason = `"At this time tomorrow" indica una acción que estará en pleno progreso en un momento futuro: Future Continuous ("will be lying").`;
      } else if (normCorrect === 'will have completed') {
        correctReason = `"By the end of this year" indica una acción que ya habrá finalizado antes de una fecha límite futura: Future Perfect ("will have completed").`;
      } else {
        correctReason = `${this.getCategoryRule(ex.category, 'mode4', correctAns)}`;
      }
    }

    // 2. Si el usuario falló, añadir qué significa o por qué falla la opción que marcó
    let wrongOptionNote = '';
    if (!isCorrect && normSelected && normSelected !== normCorrect) {
      if (this.MEANINGS_DICT[normSelected]) {
        wrongOptionNote = ` Tu respuesta ("${selectedOptionText}") no encaja aquí porque ${this.MEANINGS_DICT[normSelected]}.`;
      } else if (ex.category === 'Adjectives and Prepositions' && ['to', 'by', 'about', 'with', 'in', 'of', 'for'].includes(normSelected)) {
        wrongOptionNote = ` Marcaste la preposición "${selectedOptionText}", pero esta colocación adjetival rige "${correctAns}".`;
      } else if (normSelected === 'despite of') {
        wrongOptionNote = ` Recuerda la trampa de examen: "Despite" NUNCA lleva "of" detrás (se dice "Despite" o "In spite of").`;
      } else if (normSelected === 'such a bad weather' || normSelected === 'such a polite children') {
        wrongOptionNote = ` Cuidado: nunca se pone el artículo "a" delante de sustantivos incontables ("weather") o plurales ("children").`;
      } else if (normSelected === 'enough small') {
        wrongOptionNote = ` Recuerda que con adjetivos el orden es siempre "adjetivo + enough" ("small enough"), nunca "enough + adjetivo".`;
      } else {
        wrongOptionNote = ` Marcaste "${selectedOptionText}", pero la opción correcta es "${correctAns}".`;
      }
    }

    return `${correctReason}${wrongOptionNote}`;
  },

  // Normalizador modular de ejercicios para soportar todos los ejercicios de EXAM_BANK sin re-barajar
  normalizeExercise(modeKey, rawEx) {
    if (!rawEx) return rawEx;
    if (rawEx._isNormalized) return rawEx;

    const ex = { ...rawEx };

    // MODO 1: Soporta 1 o 2 huecos ({{gap1}}, {{gap2}}) con respuestas separadas por " / "
    if (modeKey === 'mode1' || (!ex.gaps && ex.sentence && ex.answer)) {
      if (!Array.isArray(ex.gaps) || ex.gaps.length === 0) {
        const answers = String(ex.answer)
          .split(/\s*\/\s*/)
          .map(a => a.trim())
          .filter(Boolean);

        const gapMatches = [...ex.sentence.matchAll(/\{\{gap(\d+)\}\}(?:\s*\(([^)]+)\))?/gi)];

        if (gapMatches.length > 0) {
          ex.gaps = gapMatches.map((match, idx) => {
            const gapNum = match[1] || String(idx + 1);
            const parenHint = match[2] ? match[2].trim() : '';
            const fallbackHint = /preposition/i.test(ex.category || '') ? 'PREPOSITION' : 'VERB / WORD';
            const ans = answers[idx] !== undefined ? answers[idx] : (answers[0] || ex.answer);
            const perGapAlts = (Array.isArray(ex.gapAlternatives) && Array.isArray(ex.gapAlternatives[idx]))
              ? ex.gapAlternatives[idx]
              : (Array.isArray(ex.alternatives) ? ex.alternatives : []);
            return {
              id: `gap${gapNum}`,
              infinitive: parenHint || fallbackHint,
              answer: ans,
              alternatives: perGapAlts,
              acceptedAnswers: Array.isArray(ex.acceptedAnswers) ? ex.acceptedAnswers : [],
              hint: ex.category || ''
            };
          });
        } else {
          const parenMatch = ex.sentence.match(/_____\s*\(([^)]+)\)/);
          const fallbackHint = /preposition/i.test(ex.category || '') ? 'PREPOSITION' : 'VERB / WORD';
          const extractedInf = parenMatch ? parenMatch[1].trim() : fallbackHint;
          ex.gaps = [
            {
              id: 'gap1',
              infinitive: extractedInf,
              answer: answers[0] || ex.answer,
              alternatives: Array.isArray(ex.alternatives) ? ex.alternatives : [],
              acceptedAnswers: Array.isArray(ex.acceptedAnswers) ? ex.acceptedAnswers : [],
              hint: ex.category || ''
            }
          ];
        }
      }

      // Saneamiento de ejercicios guardados previamente en el Banco de Errores (ej. frase del hospital con "to stay")
      if (Array.isArray(ex.gaps)) {
        ex.gaps = ex.gaps.map((g, idx) => {
          const gap = { ...g };
          const baseAlts = Array.isArray(gap.alternatives) ? [...gap.alternatives] : [];
          if (Array.isArray(ex.alternatives)) {
            ex.alternatives.forEach(a => {
              if (!baseAlts.includes(a)) baseAlts.push(a);
            });
          }
          const normAns = this.normalizeText(gap.answer);
          if (normAns === 'have had to' || normAns === 'had to' || (ex.sentence && /to stay in hospital/i.test(ex.sentence) && idx === 1)) {
            gap.answer = 'had';
            if (gap.infinitive && gap.infinitive.toUpperCase() === 'HAVE TO') {
              gap.infinitive = 'HAVE';
            }
            ['had', 'have had', 'had to', 'have had to'].forEach(alt => {
              if (!baseAlts.includes(alt)) baseAlts.push(alt);
            });
          }
          gap.alternatives = baseAlts;
          return gap;
        });
      }

      if (!ex.rule) {
        ex.rule = this.getCategoryRule(ex.category, 'mode1', ex.answer);
      }
    }

    // MODO 2: Rephrasing (144 ejercicios incluyendo Voz Pasiva, Reported Speech, Condicionales y Tiempos)
    if (modeKey === 'mode2' || ex.original) {
      if (!ex.keyword && ex.key_word) ex.keyword = ex.key_word;
      if (!ex.key_word && ex.keyword) ex.key_word = ex.keyword;
      if (!ex.target && ex.transformed) ex.target = ex.transformed;
      if (!ex.transformed && ex.target) ex.transformed = ex.target;
      if (!Array.isArray(ex.alternatives)) ex.alternatives = [];

      if (!ex.category) {
        const idNum = Number(ex.id) || 0;
        if (idNum >= 1 && idNum <= 20) ex.category = 'So / Such';
        else if (idNum >= 21 && idNum <= 40) ex.category = 'Too / Enough';
        else if (idNum >= 41 && idNum <= 60) ex.category = 'Prefer / Would rather';
        else if (idNum >= 61 && idNum <= 80) ex.category = 'Although / Despite';
        else if (idNum >= 81 && idNum <= 100) ex.category = 'By the time';
        else if (idNum >= 101 && idNum <= 120) ex.category = 'Present Perfect (For / Since)';
      }

      if (!ex.rule) {
        ex.rule = ex.explanation || this.getCategoryRule(ex.category, 'mode2', ex.target);
      }
    }

    // MODO 3: Cloze Test (30 relatos)
    if (modeKey === 'mode3' || ex.blanks || ex.textTemplate || ex.text) {
      if (!Array.isArray(ex.gaps) && Array.isArray(ex.blanks)) {
        ex.gaps = ex.blanks.map((b, idx) => ({
          id: `gap${b.index || idx + 1}`,
          infinitive: b.hint || `GAP ${idx + 1}`,
          answer: b.answer,
          alternatives: b.alternatives || [],
          acceptedAnswers: b.acceptedAnswers || [],
          explanation: b.hint ? `"${b.hint}" -> "${b.answer}".` : `Respuesta: "${b.answer}".`
        }));
      }
      if (!ex.textTemplate && ex.text) {
        ex.textTemplate = ex.text;
      }
      if (!ex.generalRule) {
        ex.generalRule = 'Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala).';
      }
    }

    // MODO 5: Writing Lab (Sentence Upgrading y Paragraph Builder)
    if (modeKey === 'mode5' || ex.type === 'upgrading' || ex.type === 'builder') {
      ex.type = ex.type || (ex.scrambled_sentences ? 'builder' : 'upgrading');
      ex.essay_type = ex.essay_type || 'Opinion Essay';

      if (ex.type === 'upgrading') {
        ex.basic_sentence = ex.basic_sentence || '';
        ex.target_connectors = Array.isArray(ex.target_connectors) ? ex.target_connectors : [];
        ex.model_answers = Array.isArray(ex.model_answers) ? ex.model_answers : [];
      } else {
        ex.paragraph_role = ex.paragraph_role || 'Body Paragraph';
        ex.scrambled_sentences = Array.isArray(ex.scrambled_sentences) ? ex.scrambled_sentences : [];
        ex.correct_order = Array.isArray(ex.correct_order) ? ex.correct_order : [0, 1, 2, 3];
      }

      if (!ex.explanation) {
        ex.explanation = 'Revisa la cohesión lógica y el uso de conectores formales B2/C1 propios de Bachillerato.';
      }

      ex._isNormalized = true;
      return ex;
    }

    // MODO 4: Test Teórico (barajado único por ejercicio, validación basada en el texto exacto de correct_answer)
    if (modeKey === 'mode4' || Array.isArray(ex.options)) {
      const correctAns = ex.correct_answer || (typeof ex.correctIndex === 'number' ? ex.options[ex.correctIndex] : ex.options[0]);
      const shuffledOptions = [...ex.options];
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
      ex.options = shuffledOptions;
      ex.correct_answer = correctAns;
      const idx = ex.options.findIndex(
        opt => this.normalizeText(opt) === this.normalizeText(correctAns)
      );
      ex.correctIndex = idx >= 0 ? idx : 0;

      if (!ex.explanation) {
        ex.explanation = this.buildMode4DetailedExplanation(ex, '', true);
      }
    }

    ex._isNormalized = true;
    return ex;
  },

  // Equivalentes formales directos para conectores de Writing Lab (Modo 5)
  WRITING_CONNECTOR_EQUIVALENTS: {
    'although': ['even though', 'though', 'despite', 'in spite of', 'while', 'whereas'],
    'undeniable': ['indisputable', 'unquestionable', 'clear', 'obvious', 'evident', 'undeniably'],
    'drawbacks': ['disadvantages', 'downsides', 'shortcomings', 'negative aspects', 'cons'],
    'in my view': ['in my opinion', 'from my perspective', 'from my point of view', 'i firmly believe that', 'i firmly believe', 'i strongly believe that', 'i strongly believe', 'to my mind', 'personally'],
    'provided that': ['as long as', 'on condition that', 'so long as', 'provided'],
    'indispensable': ['essential', 'vital', 'crucial', 'invaluable', 'fundamental'],
    'despite': ['in spite of', 'although', 'even though'],
    'on the other hand': ['conversely', 'by contrast', 'in contrast', 'however', 'nonetheless', 'nevertheless'],
    'isolation': ['loneliness', 'alienation', 'solitude', 'isolated'],
    'consequently': ['therefore', 'thus', 'hence', 'as a result', 'as a consequence', 'for this reason'],
    'undermine': ['weaken', 'damage', 'harm', 'erode', 'impair'],
    'foster': ['encourage', 'promote', 'stimulate', 'cultivate', 'boost'],
    'not only': ['not just', 'moreover', 'furthermore'],
    'furthermore': ['moreover', 'in addition', 'additionally', 'besides', 'what is more'],
    'instantaneous': ['instant', 'immediate', 'rapid', 'prompt', 'instantaneously'],
    'from my perspective': ['in my view', 'in my opinion', 'from my point of view', 'i firmly believe that', 'i firmly believe', 'to my mind'],
    'crucial': ['essential', 'vital', 'fundamental', 'imperative', 'critical'],
    'excessive': ['uncontrolled', 'disproportionate', 'immoderate', 'excessively'],
    'urgent measures': ['decisive action', 'immediate measures', 'effective measures', 'urgent action', 'strict measures'],
    'unless': ['except if', 'if not'],
    'irreversible': ['permanent', 'irreparable', 'unavoidable', 'lasting', 'irreversibly'],
    'in spite of': ['despite', 'although', 'even though'],
    'environmentally friendly': ['eco friendly', 'ecofriendly', 'sustainable', 'green', 'ecological'],
    'cost-effective': ['affordable', 'economical', 'economically viable', 'budget friendly'],
    'moreover': ['furthermore', 'in addition', 'additionally', 'what is more', 'besides'],
    'curb': ['reduce', 'limit', 'mitigate', 'cut down on', 'combat', 'tackle', 'restrain'],
    'single-use': ['disposable', 'throwaway'],
    'whereas': ['while', 'on the other hand', 'by contrast', 'conversely', 'although'],
    'flexibility': ['adaptability', 'convenience', 'versatility', 'flexible'],
    'distractions': ['interruptions', 'diversions', 'distracted'],
    'i firmly believe that': ['i strongly believe that', 'i firmly believe', 'i strongly believe', 'in my view', 'in my opinion', 'from my perspective', 'it is my conviction that'],
    'rather than': ['instead of', 'as opposed to'],
    'equip': ['provide', 'prepare', 'empower', 'train'],
    'nevertheless': ['nonetheless', 'however', 'yet', 'even so', 'still'],
    'assess': ['evaluate', 'measure', 'test', 'gauge'],
    'anxiety': ['stress', 'apprehension', 'nervousness', 'pressure', 'anxious'],
    'mental well-being': ['mental health', 'psychological well being', 'emotional well being', 'psychological health'],
    'vital': ['essential', 'crucial', 'fundamental', 'indispensable'],
    'admittedly': ['granted', 'it is true that', 'undoubtedly', 'certainly'],
    'detrimental': ['harmful', 'damaging', 'injurious', 'adverse', 'negative'],
    'however': ['nevertheless', 'nonetheless', 'yet', 'conversely', 'on the other hand'],
    'in conclusion': ['to conclude', 'to sum up', 'all things considered', 'in summary', 'ultimately'],
    'essential': ['vital', 'crucial', 'indispensable', 'fundamental', 'imperative'],
    'academic performance': ['academic achievement', 'academic results', 'school performance', 'academic success'],
    'double-edged sword': ['mixed blessing', 'two-edged sword', 'both benefits and risks'],
    'over-reliance': ['excessive dependence', 'overdependence', 'excessive reliance'],
    'prohibitive': ['unaffordable', 'excessively expensive', 'exorbitant', 'unattainable'],
    'stemming from': ['resulting from', 'caused by', 'arising from', 'due to'],
    'in light of': ['given', 'considering', 'in view of', 'taking into account'],
    'short-sighted': ['irresponsible', 'reckless', 'myopic', 'ill-considered'],
    'imperative': ['essential', 'vital', 'crucial', 'urgent', 'necessary'],
    'carbon footprint': ['greenhouse gas emissions', 'carbon emissions', 'environmental impact'],
    'work-life balance': ['personal and professional balance', 'balance between work and personal life'],
    'blur the boundaries': ['erase the line', 'make the division unclear', 'overlap boundaries'],
    'nonetheless': ['nevertheless', 'however', 'yet', 'even so'],
    'prevalent': ['widespread', 'commonplace', 'common', 'pervasive'],
    'address': ['tackle', 'confront', 'deal with', 'combat'],
    'prioritise': ['give priority to', 'put first', 'emphasise']
  },

  // Cuenta palabras negativas para evitar falsos positivos con polaridad opuesta
  countNegations(normText) {
    const tokens = String(normText || '').split(/\s+/).filter(Boolean);
    const negWords = new Set(['not', 'never', 'nobody', 'nothing', 'nowhere', 'neither', 'nor', 'unless', 'without', 'hardly', 'barely', 'scarcely', 'no']);
    return tokens.filter(t => negWords.has(t)).length;
  },

  // Construye variantes equivalentes de una frase completa (puntuación, comas, orden de cláusulas, 'that' opcional y was/were)
  buildRephrasingVariants(text, allowWasWereSwap = false) {
    const seedForms = new Set();
    const raw = this.normalizeApostrophes(text || '').trim();
    if (!raw) return [];

    seedForms.add(raw);

    // 1. Inversión por coma (ej: "If X, Y" <-> "Y if X")
    const commaParts = raw.split(/\s*,\s*/);
    if (commaParts.length === 2 && commaParts[0] && commaParts[1]) {
      const p0Clean = commaParts[0].replace(/[.!?]+$/, '').trim();
      const p1Clean = commaParts[1].replace(/[.!?]+$/, '').trim();
      seedForms.add(`${p1Clean} ${p0Clean}`);
    }

    // 2. Inversión por conjunción subordinada sin coma (solo si no hubo ya división por coma)
    if (commaParts.length === 1) {
      const subConjRegex = /^(.+?)\s+\b(if|unless|provided that|provided|on condition that|as long as|so long as|in case|while|when|although|even though|despite the fact that|in spite of the fact that|despite|in spite of|by the time)\b\s+(.+)$/i;
      const conjMatch = raw.replace(/[.!?]+$/, '').trim().match(subConjRegex);
      if (conjMatch) {
        seedForms.add(`${conjMatch[2]} ${conjMatch[3]} ${conjMatch[1]}`);
      }
    }

    // 3. Manejo de 'that' opcional (provided that, on condition that, wish that, reported speech, so/such ... that)
    const expandedSeeds = new Set();
    for (const form of seedForms) {
      expandedSeeds.add(form);
      expandedSeeds.add(form.replace(/\bprovided\s+that\b/gi, 'provided'));
      expandedSeeds.add(form.replace(/\bprovided\b(?!\s+that)/gi, 'provided that'));
      expandedSeeds.add(form.replace(/\bon\s+condition\s+that\b/gi, 'on condition'));
      expandedSeeds.add(form.replace(/\b(wish|wishes|wished)\s+that\b/gi, '$1'));
      expandedSeeds.add(form.replace(/\b(said|told\s+\w+|replied|explained|promised|mentioned|thought|believed|knew|asked|added)\s+that\b/gi, '$1'));
      expandedSeeds.add(form.replace(/\b(so|such)\b([^.!?\n]+?)\bthat\b/gi, '$1$2'));
    }

    // 4. Normalización completa de contracciones y ortografía UK/US + intercambio was/were singular
    const canonicalSet = new Set();
    for (const f of expandedSeeds) {
      for (const normV of this.getNormalizedVariants(f)) {
        canonicalSet.add(normV);
        if (allowWasWereSwap) {
          canonicalSet.add(normV.replace(/\b(i|he|she|it|there)\s+were\b/g, '$1 was'));
          canonicalSet.add(normV.replace(/\b(i|he|she|it|there)\s+was\b/g, '$1 were'));
          canonicalSet.add(normV.replace(/\b(i|he|she|it|there)\s+were\s+not\b/g, '$1 was not'));
          canonicalSet.add(normV.replace(/\b(i|he|she|it|there)\s+was\s+not\b/g, '$1 were not'));
        }
      }
    }

    return Array.from(canonicalSet).filter(Boolean);
  },

  // Comprueba si un texto contiene una palabra o frase de manera segura
  containsNormalizedPhrase(paddedNormalizedTexts, phrase) {
    const phraseVariants = this.getNormalizedVariants(phrase);
    return phraseVariants.some(pv =>
      pv && paddedNormalizedTexts.some(pt => pt.includes(` ${pv} `))
    );
  },

  // Validación flexible para ejercicios de Rephrasing (Modo 2)
  validateRephrasing(userAnswer, targetAnswer, alternatives = [], keyword = '') {
    const rawUser = (userAnswer || '').trim();
    if (!rawUser) {
      return { isValid: false, isPartial: false, feedback: 'Por favor, escribe una respuesta.' };
    }

    const allowWasWereSwap = !keyword || this.normalizeText(keyword) !== 'were';
    const userCanonicalVariants = this.buildRephrasingVariants(rawUser, allowWasWereSwap);
    const userPadded = userCanonicalVariants.map(v => ` ${v} `);

    // Verificar inclusión obligatoria de la palabra clave (incluyendo contracciones / variantes ortográficas)
    const hasKeywordConstraint = Boolean(keyword && keyword.toLowerCase() !== 'repaso');
    const containsKeyword = !hasKeywordConstraint || this.containsNormalizedPhrase(userPadded, keyword) ||
      this.getNormalizedVariants(keyword).some(kwV => userCanonicalVariants.some(uv => uv.includes(kwV)));

    const candidates = [targetAnswer, ...(alternatives || [])].filter(Boolean);

    // 1. Coincidencia exacta con target o alternatives tras contracciones, puntuación y ortografía
    const exactUserSet = new Set(this.getNormalizedVariants(rawUser));
    for (const cand of candidates) {
      const candExactSet = this.getNormalizedVariants(cand);
      if (containsKeyword && candExactSet.some(cv => exactUserSet.has(cv))) {
        return {
          isValid: true,
          isPartial: false,
          feedback: '¡Excelente! Respuesta perfectamente formulada.'
        };
      }
    }

    // 2. Coincidencia con cláusulas invertidas, 'that' opcional o was/were singular equivalente
    const userSetAll = new Set(userCanonicalVariants);
    for (const cand of candidates) {
      const candVariants = this.buildRephrasingVariants(cand, allowWasWereSwap);
      if (containsKeyword && candVariants.some(cv => userSetAll.has(cv))) {
        return {
          isValid: true,
          isPartial: false,
          feedback: '¡Correcto! Formulación gramaticalmente equivalente y 100% válida.'
        };
      }
    }

    // Si falta la palabra clave obligatoria, avisar antes del heurístico de similitud
    if (!containsKeyword) {
      return {
        isValid: false,
        isPartial: false,
        feedback: `Recuerda que debes incluir obligatoriamente la palabra clave: "(${keyword})".`
      };
    }

    // 3. Similitud léxica alta (>=88%) sobre cualquiera de las candidatas CON guardia de polaridad negativa
    const stopWords = new Set(['a', 'an', 'the', 'to', 'of', 'in', 'on', 'at']);
    const primaryUserNorm = userCanonicalVariants[0] || this.expandContractions(rawUser);
    const userNegCount = this.countNegations(primaryUserNorm);
    const userContentWords = primaryUserNorm.split(' ').filter(w => w.length > 2 && !stopWords.has(w));
    const userTotalLen = primaryUserNorm.split(' ').filter(Boolean).length;

    for (const cand of candidates) {
      const candNorm = this.expandContractions(cand);
      if (userNegCount !== this.countNegations(candNorm)) continue;

      const candContentWords = candNorm.split(' ').filter(w => w.length > 2 && !stopWords.has(w));
      const candTotalLen = candNorm.split(' ').filter(Boolean).length;
      const matchCount = candContentWords.filter(w => userContentWords.includes(w)).length;
      const similarityRatio = candContentWords.length > 0 ? matchCount / candContentWords.length : 0;

      if (similarityRatio >= 0.88 && Math.abs(userTotalLen - candTotalLen) <= 2) {
        return {
          isValid: true,
          isPartial: true,
          feedback: '¡Casi perfecta! Tu respuesta es válida, aunque la formulación estándar del examen es la mostrada.'
        };
      }
    }

    return {
      isValid: false,
      isPartial: false,
      feedback: 'Respuesta no coincidente con la transformación requerida en el examen.'
    };
  },

  // Validación para huecos individuales (Modo 1 y Modo 3) con contracciones, partículas y variantes UK/US
  validateGap(userAnswer, correctAnswer, alternatives = []) {
    const trimmedUser = String(userAnswer || '').trim();
    if (!trimmedUser) return false;

    const rawCandidates = [correctAnswer, ...(Array.isArray(alternatives) ? alternatives : [])].filter(Boolean);
    const expandedCandidateRawSet = new Set(rawCandidates);

    // Si algún candidato es "had", "have had", "had to" o "have had to", permitir todas esas variantes con/sin "to"
    for (const c of rawCandidates) {
      for (const exp of this.getNormalizedVariants(c)) {
        if (exp === 'had' || exp === 'have had' || exp === 'had to' || exp === 'have had to') {
          expandedCandidateRawSet.add('had');
          expandedCandidateRawSet.add('have had');
          expandedCandidateRawSet.add('had to');
          expandedCandidateRawSet.add('have had to');
        }
        if (/\s+to$/.test(exp)) {
          expandedCandidateRawSet.add(exp.replace(/\s+to$/, '').trim());
        }
      }
    }

    const candidateVariantSet = new Set();
    for (const c of expandedCandidateRawSet) {
      for (const v of this.getNormalizedVariants(c)) {
        candidateVariantSet.add(v);
        if (/\s+to$/.test(v)) {
          candidateVariantSet.add(v.replace(/\s+to$/, '').trim());
        }
      }
    }

    const userVariantSet = new Set();
    for (const uv of this.getNormalizedVariants(trimmedUser)) {
      userVariantSet.add(uv);
      const noSubj = uv.replace(/^(i|you|he|she|it|we|they)\s+/, '');
      const noPart = uv.replace(/\s+(to|up|down|out|into|off|back|away|over)$/, '').trim();
      const noSubjNoPart = noSubj.replace(/\s+(to|up|down|out|into|off|back|away|over)$/, '').trim();
      if (noSubj) userVariantSet.add(noSubj);
      if (noPart) userVariantSet.add(noPart);
      if (noSubjNoPart) userVariantSet.add(noSubjNoPart);
    }

    for (const uv of userVariantSet) {
      if (candidateVariantSet.has(uv)) {
        return true;
      }
    }
    return false;
  },

  // Validación laxa y flexible para modo "Sin pista" (acepta alternativas válidas o respuestas coherentes en contexto)
  validateGapRelaxed(userAnswer, gap, contextText = '', category = '') {
    const trimmedUser = String(userAnswer || '').trim();
    if (!trimmedUser) {
      return { isValid: false, isFlexibleMatch: false };
    }

    const candidates = [
      gap?.answer,
      ...(Array.isArray(gap?.alternatives) ? gap.alternatives : []),
      ...(Array.isArray(gap?.acceptedAnswers) ? gap.acceptedAnswers : [])
    ].filter(Boolean);

    // 1. Coincidencia estándar con answer / alternatives / acceptedAnswers
    if (candidates.length > 0 && this.validateGap(trimmedUser, candidates[0], candidates.slice(1))) {
      return { isValid: true, isFlexibleMatch: false };
    }

    // 2. Comprobación de plausibilidad inglesa y coherencia gramatical en modo Sin pista
    const rawClean = this.normalizeApostrophes(trimmedUser).toLowerCase().trim();
    if (!/^[a-z'\-\s]+$/.test(rawClean)) {
      return { isValid: false, isFlexibleMatch: false };
    }

    const normUser = this.expandContractions(trimmedUser);
    if (!normUser) {
      return { isValid: false, isFlexibleMatch: false };
    }

    const words = normUser.split(' ').filter(Boolean);
    const expectedWordCount = this.normalizeText(gap?.answer || '').split(' ').filter(Boolean).length || 1;
    const maxWords = Math.max(5, expectedWordCount + 3);
    const letterCount = normUser.replace(/[^a-z]/g, '').length;

    if (words.length === 0 || words.length > maxWords) {
      return { isValid: false, isFlexibleMatch: false };
    }
    if (letterCount < 2 && !['a', 'i'].includes(normUser)) {
      return { isValid: false, isFlexibleMatch: false };
    }
    if (!words.every(w => /[aeiouy]/.test(w)) || words.some(w => /(.)\1{3,}/.test(w))) {
      return { isValid: false, isFlexibleMatch: false };
    }

    const spanishWords = new Set([
      'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
      'porque', 'pero', 'muy', 'hola', 'prueba', 'nada', 'nose',
      'si', 'que', 'como', 'cuando', 'donde', 'para', 'por',
      'respuesta', 'hueco', 'verbo', 'pasado', 'futuro'
    ]);
    if (/^no\s+se$/.test(normUser) || words.some(w => spanishWords.has(w))) {
      return { isValid: false, isFlexibleMatch: false };
    }

    const normExpected = this.expandContractions(gap?.answer || '');
    const expWords = normExpected.split(' ').filter(Boolean);

    const PREPOSITIONS = new Set([
      'to', 'by', 'about', 'with', 'in', 'of', 'for', 'at', 'on', 'from', 'into',
      'over', 'under', 'through', 'during', 'after', 'before', 'between', 'among',
      'against', 'without', 'towards', 'toward', 'across', 'along', 'around',
      'behind', 'beside', 'beyond', 'upon', 'onto', 'off', 'out', 'up', 'down',
      'back', 'away', 'as', 'like'
    ]);

    const FUNCTIONAL_CONNECTORS = new Set([
      'unless', 'if', 'provided', 'providing', 'whether', 'although', 'though',
      'while', 'whereas', 'when', 'until', 'till', 'before', 'after', 'because',
      'since', 'as', 'so', 'yet', 'but', 'only', 'case', 'long', 'even', 'ever',
      'condition', 'not'
    ]);

    const AUXILIARIES_MODALS = new Set([
      'had', 'would', 'could', 'might', 'will', 'can', 'may', 'should', 'must',
      'have', 'has', 'was', 'were', 'be', 'being', 'been', 'did', 'do', 'does',
      'is', 'are', 'am', 'shall', 'ought', 'not', 'never'
    ]);

    const DETERMINERS_ONLY = new Set(['the', 'a', 'an', 'this', 'that', 'these', 'those']);

    // Hueco de preposición pura
    if (expWords.length === 1 && PREPOSITIONS.has(expWords[0])) {
      const multiPreps = new Set(['in front of', 'next to', 'because of', 'due to', 'according to', 'out of', 'instead of']);
      const isValidPrep = (words.length === 1 && PREPOSITIONS.has(words[0])) || multiPreps.has(normUser);
      return { isValid: isValidPrep, isFlexibleMatch: isValidPrep };
    }

    // Hueco de conector condicional / locución breve
    if (expWords.length === 1 && ['unless', 'provided', 'case', 'long', 'only'].includes(expWords[0])) {
      const isValidConn = words.length <= 2 && words.every(w => FUNCTIONAL_CONNECTORS.has(w));
      return { isValid: isValidConn, isFlexibleMatch: isValidConn };
    }

    // Hueco de auxiliar / modal aislado
    if (expWords.length === 1 && AUXILIARIES_MODALS.has(expWords[0])) {
      const isValidAux = words.length <= 3 && (
        AUXILIARIES_MODALS.has(words[0]) ||
        (words.length >= 2 && AUXILIARIES_MODALS.has(words[words.length - 1]))
      );
      return { isValid: isValidAux, isFlexibleMatch: isValidAux };
    }

    // Huecos abiertos verbales o léxicos (rechazar determinantes aislados sin contenido)
    if (words.length === 1 && DETERMINERS_ONLY.has(words[0])) {
      return { isValid: false, isFlexibleMatch: false };
    }

    return { isValid: true, isFlexibleMatch: true };
  },

  // Contar palabras en tiempo real para Writing Lab (Modo 5)
  countWords(text) {
    const trimmed = String(text || '').trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).filter(Boolean).length;
  },

  // Detectar contracciones informales en redacciones formales (sin confundir con genitivo sajón)
  detectInformalContractions(text) {
    const normalized = this.normalizeApostrophes(text);
    if (!normalized) return [];

    const pattern = /\b(?:don't|doesn't|didn't|won't|wouldn't|can't|couldn't|shouldn't|mustn't|needn't|mightn't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't|ain't|i'm|you're|we're|they're|he's|she's|it's|that's|there's|here's|who's|what's|i've|you've|we've|they've|i'll|you'll|we'll|they'll|i'd|you'd|we'd|they'd|let's|gonna|wanna)\b/gi;
    const matches = normalized.match(pattern) || [];
    const seen = new Set();
    const unique = [];
    matches.forEach(m => {
      const lower = m.toLowerCase();
      if (!seen.has(lower)) {
        seen.add(lower);
        unique.push(m);
      }
    });
    return unique;
  },

  // Validación local para Sentence Upgrading (Modo 5)
  validateWritingUpgrading(userText, exercise) {
    const rawUser = String(userText || '').trim();
    const wordCount = this.countWords(rawUser);

    if (!rawUser) {
      return {
        isValid: false,
        isPartial: false,
        hasContractions: false,
        contractionsFound: [],
        matchedConnectors: [],
        wordCount: 0,
        feedback: 'Por favor, escribe una versión mejorada de la frase.'
      };
    }

    const normUser = this.normalizeText(rawUser);
    const expandedUser = this.expandContractions(rawUser);
    const normBasic = this.normalizeText(exercise?.basic_sentence || '');
    const expBasic = this.expandContractions(exercise?.basic_sentence || '');

    if (normBasic && (normUser === normBasic || expandedUser === expBasic)) {
      return {
        isValid: false,
        isPartial: false,
        hasContractions: false,
        contractionsFound: [],
        matchedConnectors: [],
        wordCount,
        feedback: 'Has escrito exactamente la frase básica B1 sin mejorarla. Reescríbela usando vocabulario formal y al menos un conector objetivo.'
      };
    }

    if (wordCount < 6) {
      return {
        isValid: false,
        isPartial: false,
        hasContractions: false,
        contractionsFound: [],
        matchedConnectors: [],
        wordCount,
        feedback: `Tu frase es demasiado corta (${wordCount} palabra${wordCount === 1 ? '' : 's'}). Escribe una oración completa de al menos 6 palabras.`
      };
    }

    const targetConnectors = Array.isArray(exercise?.target_connectors) ? exercise.target_connectors : [];
    const acceptedEquivs = Array.isArray(exercise?.accepted_equivalents) ? exercise.accepted_equivalents : [];
    const userPaddedVariants = this.getNormalizedVariants(rawUser).map(v => ` ${v} `);

    const matchedConnectors = [];
    for (const conn of targetConnectors) {
      if (this.containsNormalizedPhrase(userPaddedVariants, conn)) {
        matchedConnectors.push(conn);
        continue;
      }
      const eqList = this.WRITING_CONNECTOR_EQUIVALENTS[String(conn).toLowerCase()] || [];
      const foundEq = eqList.find(eq => this.containsNormalizedPhrase(userPaddedVariants, eq));
      if (foundEq) {
        matchedConnectors.push(`${foundEq} (equiv. a ${conn})`);
      }
    }

    if (matchedConnectors.length === 0 && acceptedEquivs.length > 0) {
      const directEq = acceptedEquivs.find(eq => this.containsNormalizedPhrase(userPaddedVariants, eq));
      if (directEq) matchedConnectors.push(directEq);
    }

    if (targetConnectors.length > 0 && matchedConnectors.length === 0) {
      return {
        isValid: false,
        isPartial: false,
        hasContractions: false,
        contractionsFound: [],
        matchedConnectors: [],
        wordCount,
        feedback: `Debes incluir al menos uno de los conectores o términos objetivo (o un equivalente formal directo): ${targetConnectors.map(c => `"${c}"`).join(', ')}.`
      };
    }

    const contractionsFound = this.detectInformalContractions(rawUser);
    if (contractionsFound.length > 0) {
      return {
        isValid: true,
        isPartial: true,
        hasContractions: true,
        contractionsFound,
        matchedConnectors,
        wordCount,
        feedback: `¡Buena mejora usando "${matchedConnectors.join('", "')}"! Ojo: evita contracciones informales (${contractionsFound.join(', ')}) en redacciones formales de examen (escribe la forma completa).`
      };
    }

    return {
      isValid: true,
      isPartial: false,
      hasContractions: false,
      contractionsFound: [],
      matchedConnectors,
      wordCount,
      feedback: `¡Excelente mejora formal (${wordCount} palabras)! Has integrado correctamente: ${matchedConnectors.map(c => `"${c}"`).join(', ')}.`
    };
  },

  // Extracción aleatoria sin repetición usando el historial de IDs vistos
  getRandomLocalExercises(modeKey, count = 5, seenIds = []) {
    const list = window.EXAM_BANK?.[modeKey] || [];
    const seenSet = new Set(Array.isArray(seenIds) ? seenIds : []);
    let available = list.filter(ex => !seenSet.has(ex.id));

    // Si quedan menos preguntas sin usar que las necesarias para la ronda, se reinicia el ciclo
    if (available.length < count) {
      available = [...list];
    }

    const copy = [...available];
    // Barajado Fisher-Yates para aleatoriedad real
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count).map(ex => this.normalizeExercise(modeKey, ex));
  },

  async getMode1Exercises(count = 5) {
    return this.getRandomLocalExercises('mode1', count);
  },

  async getMode2Exercises(count = 5) {
    return this.getRandomLocalExercises('mode2', count);
  },

  async getMode3Exercise() {
    const list = this.getRandomLocalExercises('mode3', 1);
    return list[0];
  },

  async getMode4Exercises(count = 5) {
    return this.getRandomLocalExercises('mode4', count);
  },

  async getMode5Exercises(count = 5) {
    return this.getRandomLocalExercises('mode5', count);
  },

  async getExercisesForMode(modeKey, count = 5) {
    if (modeKey === 'mode3') {
      const single = await this.getMode3Exercise();
      return [single];
    }
    return this.getRandomLocalExercises(modeKey, count);
  }
};

window.GeminiClient = GeminiClient;
