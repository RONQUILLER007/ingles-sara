// Banco oficial completo de 836 ejercicios (100% Offline) para Inglés Sara
const EXAM_BANK = {
  "mode1": [
    {
      "id": 1,
      "sentence": "Have you been on holiday this year? No, I {{gap1}} (break) my leg in August and I {{gap2}} (have) to stay in hospital for 2 months.",
      "answer": "broke / had",
      "alternatives": [
        "had",
        "have had",
        "had to",
        "have had to"
      ],
      "gapAlternatives": [
        [],
        [
          "have had",
          "had to",
          "have had to"
        ]
      ],
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 2,
      "sentence": "{{gap1}} (you / visit) the museum yet? Yes, I {{gap2}} (be) there three times so far.",
      "answer": "Have you visited / have been",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 3,
      "sentence": "You look exhausted! What {{gap1}} (you / do)? I {{gap2}} (run) for an hour.",
      "answer": "have you been doing / have been running",
      "category": "Present Perfect Continuous"
    },
    {
      "id": 4,
      "sentence": "I {{gap1}} (run) for one hour and today I {{gap2}} (run) 8 kilometres in total.",
      "answer": "have been running / have run",
      "category": "Present Perfect Simple vs Continuous"
    },
    {
      "id": 5,
      "sentence": "I can't see anything because I {{gap1}} (lose) my glasses. I {{gap2}} (put) them on the table one minute ago.",
      "answer": "have lost / put",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 6,
      "sentence": "We {{gap1}} (study) English for more than ten years and we still enjoy it.",
      "answer": "have been studying",
      "gapAlternatives": [
        [
          "have studied"
        ]
      ],
      "category": "Present Perfect Continuous"
    },
    {
      "id": 7,
      "sentence": "She {{gap1}} (write) text messages for two hours and she {{gap2}} (already / write) eighteen messages.",
      "answer": "has been writing / has already written",
      "category": "Present Perfect Simple vs Continuous"
    },
    {
      "id": 8,
      "sentence": "I {{gap1}} (repair) my bike all day, but I {{gap2}} (not finish) it yet.",
      "answer": "have been repairing / haven't finished",
      "category": "Present Perfect Simple vs Continuous"
    },
    {
      "id": 9,
      "sentence": "The lift {{gap1}} (break) down, so we have to use the stairs now.",
      "answer": "has broken",
      "alternatives": [
        "has broken down"
      ],
      "gapAlternatives": [
        [
          "has broken down"
        ]
      ],
      "category": "Present Perfect Simple"
    },
    {
      "id": 10,
      "sentence": "I {{gap1}} (just / see) Mary at the café and I {{gap2}} (write) three letters this morning.",
      "answer": "have just seen / have written",
      "category": "Present Perfect Simple"
    },
    {
      "id": 11,
      "sentence": "He {{gap1}} (wait) for an hour in the rain and she still {{gap2}} (not turn) up.",
      "answer": "has been waiting / hasn't turned",
      "gapAlternatives": [
        [
          "has waited"
        ],
        [
          "hasn't turned up",
          "has not turned",
          "has not turned up"
        ]
      ],
      "category": "Present Perfect Simple vs Continuous"
    },
    {
      "id": 12,
      "sentence": "Louis Pasteur {{gap1}} (die) in 1895, whereas this scientist {{gap2}} (publish) three papers this year.",
      "answer": "died / has published",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 13,
      "sentence": "I {{gap1}} (not see) Anne since she {{gap2}} (move) to Paris two years ago.",
      "answer": "haven't seen / moved",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 14,
      "sentence": "She {{gap1}} (work) in the same company for three years, though she {{gap2}} (start) as an intern in 2023.",
      "answer": "has worked / started",
      "gapAlternatives": [
        [
          "has been working"
        ],
        []
      ],
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 15,
      "sentence": "The band {{gap1}} (record) two albums so far, and they {{gap2}} (release) their first single three years ago.",
      "answer": "has recorded / released",
      "gapAlternatives": [
        [
          "have recorded"
        ],
        []
      ],
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 16,
      "sentence": "I {{gap1}} (speak) to the manager recently, and he {{gap2}} (be) very busy lately.",
      "answer": "have spoken / has been",
      "category": "Present Perfect Simple"
    },
    {
      "id": 17,
      "sentence": "When {{gap1}} (she / phone)? She {{gap2}} (phone) an hour ago.",
      "answer": "did she phone / phoned",
      "category": "Past Simple"
    },
    {
      "id": 18,
      "sentence": "Elvis Presley {{gap1}} (die) in 1977, but his music {{gap2}} (remain) popular up to now.",
      "answer": "died / has remained",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 19,
      "sentence": "How long {{gap1}} (you / learn) German? I {{gap2}} (begin) attending classes last October.",
      "answer": "have you been learning / began",
      "category": "Past Simple vs Present Perfect Continuous"
    },
    {
      "id": 20,
      "sentence": "My neighbours {{gap1}} (argue) for the last two hours and they {{gap2}} (wake) up the baby ten minutes ago.",
      "answer": "have been arguing / woke",
      "gapAlternatives": [
        [],
        [
          "woke up"
        ]
      ],
      "category": "Past Simple vs Present Perfect Continuous"
    },
    {
      "id": 21,
      "sentence": "This is the best book I {{gap1}} (ever / read); the author {{gap2}} (win) an award for it last month.",
      "answer": "have ever read / won",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 22,
      "sentence": "It {{gap1}} (rain) heavily since morning, so the match {{gap2}} (just / be) cancelled.",
      "answer": "has been raining / has just been",
      "gapAlternatives": [
        [
          "has rained"
        ],
        [
          "has just been cancelled",
          "has just been canceled"
        ]
      ],
      "category": "Present Perfect Simple vs Continuous"
    },
    {
      "id": 23,
      "sentence": "I {{gap1}} (never / travel) to Russia in my life, although my brother {{gap2}} (go) to Moscow in 2019.",
      "answer": "have never travelled / went",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 24,
      "sentence": "She {{gap1}} (tidy) her room, so now she can go out; yesterday she {{gap2}} (not have) time to do it.",
      "answer": "has tidied / didn't have",
      "category": "Past Simple vs Present Perfect"
    },
    {
      "id": 25,
      "sentence": "Why are your hands so dirty? I {{gap1}} (plant) roses in the garden all afternoon and I {{gap2}} (plant) twelve bushes so far.",
      "answer": "have been planting / have planted",
      "category": "Present Perfect Simple vs Continuous"
    },
    {
      "id": 26,
      "sentence": "Last night I {{gap1}} (lie) on my bed and watching TV when I {{gap2}} (hear) a strange noise.",
      "answer": "was lying / heard",
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 27,
      "sentence": "While I {{gap1}} (cook) dinner, my husband {{gap2}} (lay) the table.",
      "answer": "was cooking / was laying",
      "category": "Past Continuous"
    },
    {
      "id": 28,
      "sentence": "I {{gap1}} (have) a shower when the telephone {{gap2}} (ring).",
      "answer": "was having / rang",
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 29,
      "sentence": "He {{gap1}} (search) in the fridge when I {{gap2}} (open) the kitchen door very slowly.",
      "answer": "was searching / opened",
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 30,
      "sentence": "I was so frightened that I {{gap1}} (drop) the heavy vase I {{gap2}} (carry).",
      "answer": "dropped / was carrying",
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 31,
      "sentence": "I {{gap1}} (cycle) to work when I suddenly {{gap2}} (fall) off my bike.",
      "answer": "was cycling / fell",
      "gapAlternatives": [
        [],
        [
          "fell off"
        ]
      ],
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 32,
      "sentence": "While she {{gap1}} (fly) to Paris, the sun {{gap2}} (shine) brightly outside.",
      "answer": "was flying / was shining",
      "category": "Past Continuous"
    },
    {
      "id": 33,
      "sentence": "While I {{gap1}} (get) dressed in my bedroom, the doorbell {{gap2}} (ring).",
      "answer": "was getting / rang",
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 34,
      "sentence": "While I {{gap1}} (sunbathe) on the beach, Tim {{gap2}} (swim) in the sea.",
      "answer": "was sunbathing / was swimming",
      "category": "Past Continuous"
    },
    {
      "id": 35,
      "sentence": "He {{gap1}} (get) into the plane, started the engine and {{gap2}} (fly) off into the clouds.",
      "answer": "got / flew",
      "gapAlternatives": [
        [
          "got into"
        ],
        [
          "flew off"
        ]
      ],
      "category": "Past Simple"
    },
    {
      "id": 36,
      "sentence": "We {{gap1}} (tell) horror stories at 12:00 last night when the lights {{gap2}} (go) out.",
      "answer": "were telling / went",
      "gapAlternatives": [
        [],
        [
          "went out"
        ]
      ],
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 37,
      "sentence": "When Angie {{gap1}} (open) the fridge, she found that her flatmate Lucy {{gap2}} (drink) all the milk.",
      "answer": "opened / had drunk",
      "category": "Past Simple vs Past Perfect"
    },
    {
      "id": 38,
      "sentence": "When she {{gap1}} (turn) the key in the ignition, nothing happened because someone {{gap2}} (leave) the headlights on.",
      "answer": "turned / had left",
      "category": "Past Simple vs Past Perfect"
    },
    {
      "id": 39,
      "sentence": "By the time the police {{gap1}} (arrive) at the bank, the robbers {{gap2}} (already / leave).",
      "answer": "arrived / had already left",
      "category": "Past Simple vs Past Perfect"
    },
    {
      "id": 40,
      "sentence": "She {{gap1}} (go) to the doctor because her leg {{gap2}} (ache) for two days.",
      "answer": "went / had been aching",
      "category": "Past Simple vs Past Perfect Continuous"
    },
    {
      "id": 41,
      "sentence": "They {{gap1}} (be) soaking wet because they {{gap2}} (walk) in the rain for two hours.",
      "answer": "were / had been walking",
      "category": "Past Simple vs Past Perfect Continuous"
    },
    {
      "id": 42,
      "sentence": "When I {{gap1}} (enter) the house, something smelled awful because someone {{gap2}} (burn) the meal.",
      "answer": "entered / had burned",
      "category": "Past Simple vs Past Perfect"
    },
    {
      "id": 43,
      "sentence": "It {{gap1}} (rain) for hours and all the curtains {{gap2}} (be) wet and dirty because the windows were open.",
      "answer": "had been raining / were",
      "category": "Past Simple vs Past Perfect Continuous"
    },
    {
      "id": 44,
      "sentence": "The film {{gap1}} (already / start) by the time we finally {{gap2}} (arrive) at the cinema.",
      "answer": "had already started / arrived",
      "category": "Past Simple vs Past Perfect"
    },
    {
      "id": 45,
      "sentence": "While the passengers {{gap1}} (wait) at the gate, the airline {{gap2}} (announce) a two-hour delay.",
      "answer": "were waiting / announced",
      "category": "Past Continuous vs Past Simple"
    },
    {
      "id": 46,
      "sentence": "At this time next year, Annie {{gap1}} (live) in London.",
      "answer": "will be living",
      "category": "Future Continuous"
    },
    {
      "id": 47,
      "sentence": "By the end of this course, you {{gap1}} (learn) over a thousand new English words.",
      "answer": "will have learned",
      "category": "Future Perfect"
    },
    {
      "id": 48,
      "sentence": "By next Friday, I {{gap1}} (complete) my final research project.",
      "answer": "will have completed",
      "category": "Future Perfect"
    },
    {
      "id": 49,
      "sentence": "Tom broke his ankle yesterday, so he {{gap1}} (not play) in tomorrow's football match at 5 o'clock.",
      "answer": "won't be playing",
      "category": "Future Continuous"
    },
    {
      "id": 50,
      "sentence": "Don't phone me at 8 p.m. tonight because I {{gap1}} (work) on my presentation then.",
      "answer": "will be working",
      "category": "Future Continuous"
    },
    {
      "id": 51,
      "sentence": "We are driving too slowly; we {{gap1}} (not finish) the journey before midnight.",
      "answer": "won't have finished",
      "category": "Future Perfect"
    },
    {
      "id": 52,
      "sentence": "How many chapters {{gap1}} (you / write) by the end of this month?",
      "answer": "will you have written",
      "category": "Future Perfect"
    },
    {
      "id": 53,
      "sentence": "I have to study for my PAU exams this weekend, so I {{gap1}} (not come) to the beach with you on Sunday morning.",
      "answer": "won't be coming",
      "category": "Future Continuous"
    },
    {
      "id": 54,
      "sentence": "This time tomorrow, we {{gap1}} (fly) over the Atlantic Ocean, and by midnight we {{gap2}} (land) in New York.",
      "answer": "will be flying / will have landed",
      "category": "Future Continuous vs Future Perfect"
    },
    {
      "id": 55,
      "sentence": "By 2030, scientists {{gap1}} (discover) new treatments, while millions of people {{gap2}} (use) smart medical devices daily.",
      "answer": "will have discovered / will be using",
      "category": "Future Continuous vs Future Perfect"
    },
    {
      "id": 56,
      "sentence": "By the time you get home tonight, I {{gap1}} (cook) dinner, and at 10 p.m. we {{gap2}} (watch) our favourite series.",
      "answer": "will have cooked / will be watching",
      "category": "Future Continuous vs Future Perfect"
    },
    {
      "id": 57,
      "sentence": "Next Monday at 10 a.m. she {{gap1}} (take) her driving test, and by noon she {{gap2}} (know) the result.",
      "answer": "will be taking / will have known",
      "category": "Future Continuous vs Future Perfect"
    },
    {
      "id": 58,
      "sentence": "By the time the guests arrive, we {{gap1}} (clean) the whole house.",
      "answer": "will have cleaned",
      "category": "Future Perfect"
    },
    {
      "id": 59,
      "sentence": "At 4 o'clock tomorrow afternoon, I {{gap1}} (wait) for you outside the central station.",
      "answer": "will be waiting",
      "category": "Future Continuous"
    },
    {
      "id": 60,
      "sentence": "By the end of the decade, electric cars {{gap1}} (replace) most petrol vehicles in city centres.",
      "answer": "will have replaced",
      "category": "Future Perfect"
    },
    {
      "id": 61,
      "sentence": "Don't call her between 2 and 3 p.m. because she {{gap1}} (have) lunch with her boss.",
      "answer": "will be having",
      "category": "Future Continuous"
    },
    {
      "id": 62,
      "sentence": "By the time the train reaches Madrid, we {{gap1}} (travel) for four hours.",
      "answer": "will have travelled",
      "gapAlternatives": [
        [
          "will have been travelling",
          "will have been traveling",
          "will have traveled"
        ]
      ],
      "category": "Future Perfect"
    },
    {
      "id": 63,
      "sentence": "In three years' time, my sister {{gap1}} (graduate) from university and she {{gap2}} (look) for her first job.",
      "answer": "will have graduated / will be looking",
      "category": "Future Continuous vs Future Perfect"
    },
    {
      "id": 64,
      "sentence": "Will you {{gap1}} (use) your laptop this evening, or {{gap2}} (you / finish) your essay by 6 p.m.?",
      "answer": "be using / will you have finished",
      "gapAlternatives": [
        [
          "will be using",
          "will you be using"
        ],
        [
          "have finished"
        ]
      ],
      "category": "Future Continuous vs Future Perfect"
    },
    {
      "id": 65,
      "sentence": "By Saturday evening, the hikers {{gap1}} (reach) the mountain peak, and on Sunday morning they {{gap2}} (descend) the trail.",
      "answer": "will have reached / will be descending",
      "category": "Future Continuous vs Future Perfect"
    },
    {
      "id": 66,
      "sentence": "After living in Norway for five years, she has finally become accustomed {{gap1}} (PREPOSITION) the freezing winters.",
      "answer": "to",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 67,
      "sentence": "All the tourists were amazed {{gap1}} (PREPOSITION) the breathtaking views from the top of the canyon.",
      "answer": "by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 68,
      "sentence": "Our organization is deeply committed {{gap1}} (PREPOSITION) protecting endangered species around the world.",
      "answer": "to",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 69,
      "sentence": "Young children are naturally curious {{gap1}} (PREPOSITION) how the world around them works.",
      "answer": "about",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 70,
      "sentence": "The coach was very disappointed {{gap1}} (PREPOSITION) the team's performance in the second half.",
      "answer": "with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 71,
      "sentence": "We are all really excited {{gap1}} (PREPOSITION) our upcoming trip to Japan next month.",
      "answer": "about",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 72,
      "sentence": "She is highly experienced {{gap1}} (PREPOSITION) dealing with international clients and complex negotiations.",
      "answer": "in",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 73,
      "sentence": "The passengers were frustrated {{gap1}} (PREPOSITION) the lack of information regarding their delayed flight.",
      "answer": "by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 74,
      "sentence": "The interviewers were genuinely impressed {{gap1}} (PREPOSITION) her fluency in three foreign languages.",
      "answer": "with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 75,
      "sentence": "He has always been jealous {{gap1}} (PREPOSITION) his older brother's academic success.",
      "answer": "of",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 76,
      "sentence": "This coastal town is extremely popular {{gap1}} (PREPOSITION) surfers from all over Europe.",
      "answer": "with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 77,
      "sentence": "Who is responsible {{gap1}} (PREPOSITION) organizing the accommodation for the conference?",
      "answer": "for",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 78,
      "sentence": "I am not {{gap1}} (acostumbrado a) waking up so early on Sundays.",
      "answer": "accustomed to",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 79,
      "sentence": "We were {{gap1}} (maravillados por) the magician's incredible tricks.",
      "answer": "amazed by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 80,
      "sentence": "Are you truly {{gap1}} (comprometido con) finishing this degree?",
      "answer": "committed to",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 81,
      "sentence": "She was {{gap1}} (curiosa sobre) the mysterious package left at her door.",
      "answer": "curious about",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 82,
      "sentence": "My parents were {{gap1}} (decepcionados con) my exam results last term.",
      "answer": "disappointed with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 83,
      "sentence": "The kids are {{gap1}} (emocionados por) camping outdoors this weekend.",
      "answer": "excited about",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 84,
      "sentence": "You need a guide who is {{gap1}} (experto en) mountain rescue.",
      "answer": "experienced in",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 85,
      "sentence": "He felt {{gap1}} (frustrado con) his slow recovery after the surgery.",
      "answer": "frustrated by",
      "gapAlternatives": [
        [
          "frustrated with"
        ]
      ],
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 86,
      "sentence": "The critics were {{gap1}} (impresionados con) the young actor's debut.",
      "answer": "impressed with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 87,
      "sentence": "Don't be {{gap1}} (celoso de) your friends when they achieve their goals.",
      "answer": "jealous of",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 88,
      "sentence": "That new coffee shop is very {{gap1}} (famoso entre) university students.",
      "answer": "popular with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 89,
      "sentence": "The airline is {{gap1}} (responsable de) compensating passengers for lost luggage.",
      "answer": "responsible for",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 90,
      "sentence": "She is curious {{gap1}} (PREPOSITION) the job offer, and the company is impressed {{gap2}} (PREPOSITION) her CV.",
      "answer": "about / with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 91,
      "sentence": "Although he is experienced {{gap1}} (PREPOSITION) software design, he is frustrated {{gap2}} (PREPOSITION) the outdated computers.",
      "answer": "in / by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 92,
      "sentence": "The manager is responsible {{gap1}} (PREPOSITION) customer service and committed {{gap2}} (PREPOSITION) improving quality.",
      "answer": "for / to",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 93,
      "sentence": "Instead of being jealous {{gap1}} (PREPOSITION) her sister, she was amazed {{gap2}} (PREPOSITION) her sister's talent.",
      "answer": "of / by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 94,
      "sentence": "Tourists who are not accustomed {{gap1}} (PREPOSITION) spicy food might be disappointed {{gap2}} (PREPOSITION) the local dishes.",
      "answer": "to / with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 95,
      "sentence": "Teenagers are excited {{gap1}} (PREPOSITION) the new festival, which is very popular {{gap2}} (PREPOSITION) local bands.",
      "answer": "about / with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 96,
      "sentence": "He is still not accustomed {{gap1}} (PREPOSITION) driving on the left, so he gets frustrated {{gap2}} (PREPOSITION) heavy traffic.",
      "answer": "to / by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 97,
      "sentence": "Were you disappointed {{gap1}} (PREPOSITION) the hotel, or were you impressed {{gap2}} (PREPOSITION) its facilities?",
      "answer": "with / with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 98,
      "sentence": "The chef is responsible {{gap1}} (PREPOSITION) the menu and experienced {{gap2}} (PREPOSITION) French cuisine.",
      "answer": "for / in",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 99,
      "sentence": "We are committed {{gap1}} (PREPOSITION) helping students who are curious {{gap2}} (PREPOSITION) science.",
      "answer": "to / about",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 100,
      "sentence": "Everyone was amazed {{gap1}} (PREPOSITION) the singer, who has become hugely popular {{gap2}} (PREPOSITION) young audiences.",
      "answer": "by / with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 101,
      "sentence": "If you {{gap1}} (heat) water to 100 degrees Celsius, it boils.",
      "answer": "heat",
      "category": "Zero Conditional"
    },
    {
      "id": 102,
      "sentence": "When people {{gap1}} (not eat) enough iron, they often feel exhausted.",
      "answer": "don't eat",
      "category": "Zero Conditional"
    },
    {
      "id": 103,
      "sentence": "Plants die quickly if they {{gap1}} (not get) sufficient sunlight.",
      "answer": "don't get",
      "category": "Zero Conditional"
    },
    {
      "id": 104,
      "sentence": "If you mix blue and yellow paint, you {{gap1}} (get) green.",
      "answer": "get",
      "category": "Zero Conditional"
    },
    {
      "id": 105,
      "sentence": "Metal {{gap1}} (expand) whenever you expose it to intense heat.",
      "answer": "expands",
      "category": "Zero Conditional"
    },
    {
      "id": 106,
      "sentence": "If my alarm clock {{gap1}} (not ring), I always wake up late for class.",
      "answer": "doesn't ring",
      "category": "Zero Conditional"
    },
    {
      "id": 107,
      "sentence": "When the temperature {{gap1}} (drop) below zero, puddles freeze overnight.",
      "answer": "drops",
      "category": "Zero Conditional"
    },
    {
      "id": 108,
      "sentence": "If a student {{gap1}} (plagiarise) an essay, the university automatically fails them.",
      "answer": "plagiarises",
      "category": "Zero Conditional"
    },
    {
      "id": 109,
      "sentence": "Ice {{gap1}} (melt) rapidly if you leave it in direct sunlight.",
      "answer": "melts",
      "category": "Zero Conditional"
    },
    {
      "id": 110,
      "sentence": "If you {{gap1}} (press) this red button, the emergency system shuts down.",
      "answer": "press",
      "category": "Zero Conditional"
    },
    {
      "id": 111,
      "sentence": "Dogs usually bark if a stranger {{gap1}} (approach) the front gate.",
      "answer": "approaches",
      "category": "Zero Conditional"
    },
    {
      "id": 112,
      "sentence": "If you {{gap1}} (drink) too much coffee at night, you {{gap2}} (not sleep) well.",
      "answer": "drink / don't sleep",
      "category": "Zero Conditional"
    },
    {
      "id": 113,
      "sentence": "If you {{gap1}} (study) consistently this month, you will pass the Bachillerato exams easily.",
      "answer": "study",
      "category": "First Conditional"
    },
    {
      "id": 114,
      "sentence": "We {{gap1}} (miss) the early train if we don't leave the apartment right now.",
      "answer": "will miss",
      "category": "First Conditional"
    },
    {
      "id": 115,
      "sentence": "If it {{gap1}} (rain) tomorrow afternoon, the outdoor concert may be cancelled.",
      "answer": "rains",
      "category": "First Conditional"
    },
    {
      "id": 116,
      "sentence": "You {{gap1}} (can / borrow) my notes if you promise to return them before Friday.",
      "answer": "can borrow",
      "category": "First Conditional"
    },
    {
      "id": 117,
      "sentence": "If she {{gap1}} (not apologise) soon, he won't forgive her for what she said.",
      "answer": "doesn't apologise",
      "category": "First Conditional"
    },
    {
      "id": 118,
      "sentence": "They {{gap1}} (may / arrive) earlier if the motorway traffic clears up.",
      "answer": "may arrive",
      "category": "First Conditional"
    },
    {
      "id": 119,
      "sentence": "If I {{gap1}} (finish) my lab report before eight, I'll join you at the cinema.",
      "answer": "finish",
      "category": "First Conditional"
    },
    {
      "id": 120,
      "sentence": "Unless you {{gap1}} (book) your ticket in advance, you won't find a cheap seat.",
      "answer": "book",
      "category": "First Conditional"
    },
    {
      "id": 121,
      "sentence": "If the company {{gap1}} (offer) him the internship, he will move to Madrid in September.",
      "answer": "offers",
      "category": "First Conditional"
    },
    {
      "id": 122,
      "sentence": "You {{gap1}} (not improve) your pronunciation unless you practise speaking aloud every day.",
      "answer": "won't improve",
      "category": "First Conditional"
    },
    {
      "id": 123,
      "sentence": "If the weather {{gap1}} (stay) warm this weekend, we can go hiking in the mountains.",
      "answer": "stays",
      "category": "First Conditional"
    },
    {
      "id": 124,
      "sentence": "Take an umbrella in case it {{gap1}} (start) pouring on your way home.",
      "answer": "starts",
      "category": "First Conditional"
    },
    {
      "id": 125,
      "sentence": "If the players {{gap1}} (keep) training this hard, they may win the regional championship.",
      "answer": "keep",
      "category": "First Conditional"
    },
    {
      "id": 126,
      "sentence": "Provided that you {{gap1}} (submit) the form on time, the scholarship committee will consider your application.",
      "answer": "submit",
      "category": "First Conditional"
    },
    {
      "id": 127,
      "sentence": "If he {{gap1}} (not reduce) his screen time, his eyesight {{gap2}} (get) worse.",
      "answer": "doesn't reduce / will get",
      "category": "First Conditional"
    },
    {
      "id": 128,
      "sentence": "As long as we {{gap1}} (stick) to the budget, we can afford a longer stay.",
      "answer": "stick",
      "category": "First Conditional"
    },
    {
      "id": 129,
      "sentence": "If you {{gap1}} (tell) anyone about this surprise party, I {{gap2}} (never / trust) you again.",
      "answer": "tell / will never trust",
      "category": "First Conditional"
    },
    {
      "id": 130,
      "sentence": "If the battery {{gap1}} (run) out during the presentation, we can switch to the backup laptop.",
      "answer": "runs",
      "gapAlternatives": [
        [
          "runs out"
        ]
      ],
      "category": "First Conditional"
    },
    {
      "id": 131,
      "sentence": "If I {{gap1}} (have) more free time, I would learn to play the cello.",
      "answer": "had",
      "category": "Second Conditional"
    },
    {
      "id": 132,
      "sentence": "She {{gap1}} (travel) around Japan for a month if she won the lottery.",
      "answer": "would travel",
      "gapAlternatives": [
        [
          "could travel",
          "might travel"
        ]
      ],
      "category": "Second Conditional"
    },
    {
      "id": 133,
      "sentence": "If I {{gap1}} (be) you, I wouldn't sign that contract without reading the small print.",
      "answer": "were",
      "gapAlternatives": [
        [
          "was"
        ]
      ],
      "category": "Second Conditional"
    },
    {
      "id": 134,
      "sentence": "We {{gap1}} (could / buy) a larger flat if housing prices weren't so inflated.",
      "answer": "could buy",
      "category": "Second Conditional"
    },
    {
      "id": 135,
      "sentence": "If he {{gap1}} (know) her phone number, he would call her immediately.",
      "answer": "knew",
      "category": "Second Conditional"
    },
    {
      "id": 136,
      "sentence": "They might accept the proposal if you {{gap1}} (explain) the financial benefits more clearly.",
      "answer": "explained",
      "category": "Second Conditional"
    },
    {
      "id": 137,
      "sentence": "If there {{gap1}} (not be) so much noise outside, I could concentrate on my essay.",
      "answer": "weren't",
      "gapAlternatives": [
        [
          "wasn't",
          "were not",
          "was not"
        ]
      ],
      "category": "Second Conditional"
    },
    {
      "id": 138,
      "sentence": "What {{gap1}} (you / do) if you suddenly found a wallet full of cash on the street?",
      "answer": "would you do",
      "category": "Second Conditional"
    },
    {
      "id": 139,
      "sentence": "If Clara {{gap1}} (speak) fluent German, she could apply for the position in Berlin.",
      "answer": "spoke",
      "category": "Second Conditional"
    },
    {
      "id": 140,
      "sentence": "I wouldn't complain about the commute if the trains {{gap1}} (be) more punctual.",
      "answer": "were",
      "category": "Second Conditional"
    },
    {
      "id": 141,
      "sentence": "If humans {{gap1}} (not depend) so heavily on fossil fuels, air quality would improve dramatically.",
      "answer": "didn't depend",
      "category": "Second Conditional"
    },
    {
      "id": 142,
      "sentence": "He {{gap1}} (might / feel) less stressed if he didn't check his work emails at midnight.",
      "answer": "might feel",
      "category": "Second Conditional"
    },
    {
      "id": 143,
      "sentence": "If my parents {{gap1}} (live) closer to the university, I would visit them every Sunday.",
      "answer": "lived",
      "category": "Second Conditional"
    },
    {
      "id": 144,
      "sentence": "You {{gap1}} (save) a lot of money if you {{gap2}} (cook) at home instead of ordering takeaway.",
      "answer": "would save / cooked",
      "gapAlternatives": [
        [
          "could save",
          "might save"
        ],
        []
      ],
      "category": "Second Conditional"
    },
    {
      "id": 145,
      "sentence": "If she {{gap1}} (not be) afraid of heights, she would try paragliding with us.",
      "answer": "weren't",
      "gapAlternatives": [
        [
          "wasn't",
          "were not",
          "was not"
        ]
      ],
      "category": "Second Conditional"
    },
    {
      "id": 146,
      "sentence": "I could help you fix the code if I {{gap1}} (understand) how that framework works.",
      "answer": "understood",
      "category": "Second Conditional"
    },
    {
      "id": 147,
      "sentence": "If the city council {{gap1}} (build) more bike lanes, fewer residents {{gap2}} (drive) to work.",
      "answer": "built / would drive",
      "gapAlternatives": [
        [],
        [
          "could drive",
          "might drive"
        ]
      ],
      "category": "Second Conditional"
    },
    {
      "id": 148,
      "sentence": "If you {{gap1}} (can) live in any historical era, which century would you choose?",
      "answer": "could",
      "category": "Second Conditional"
    },
    {
      "id": 149,
      "sentence": "We {{gap1}} (not stay) in this noisy hostel if there were any other rooms available.",
      "answer": "wouldn't stay",
      "category": "Second Conditional"
    },
    {
      "id": 150,
      "sentence": "If he {{gap1}} (practise) his speech one more time, he might sound much more confident.",
      "answer": "practised",
      "category": "Second Conditional"
    },
    {
      "id": 151,
      "sentence": "If you {{gap1}} (revise) the irregular verbs, you wouldn't have made so many mistakes.",
      "answer": "had revised",
      "category": "Third Conditional"
    },
    {
      "id": 152,
      "sentence": "She {{gap1}} (pass) the driving test if she hadn't panicked at the roundabout.",
      "answer": "would have passed",
      "gapAlternatives": [
        [
          "could have passed",
          "might have passed"
        ]
      ],
      "category": "Third Conditional"
    },
    {
      "id": 153,
      "sentence": "If we {{gap1}} (leave) ten minutes earlier, we would have caught the ferry.",
      "answer": "had left",
      "category": "Third Conditional"
    },
    {
      "id": 154,
      "sentence": "They {{gap1}} (could / win) the match if the goalkeeper hadn't injured his shoulder.",
      "answer": "could have won",
      "category": "Third Conditional"
    },
    {
      "id": 155,
      "sentence": "If I {{gap1}} (know) you were in hospital, I would have visited you right away.",
      "answer": "had known",
      "category": "Third Conditional"
    },
    {
      "id": 156,
      "sentence": "He might have got the job if he {{gap1}} (prepare) better for the technical interview.",
      "answer": "had prepared",
      "category": "Third Conditional"
    },
    {
      "id": 157,
      "sentence": "If it {{gap1}} (not snow) so heavily last night, the mountain pass wouldn't have closed.",
      "answer": "hadn't snowed",
      "category": "Third Conditional"
    },
    {
      "id": 158,
      "sentence": "We {{gap1}} (not get) lost in the old town if we had downloaded an offline map.",
      "answer": "wouldn't have got",
      "gapAlternatives": [
        [
          "wouldn't have gotten",
          "would not have got",
          "would not have gotten",
          "mightn't have got",
          "might not have got",
          "couldn't have got",
          "could not have got"
        ]
      ],
      "category": "Third Conditional"
    },
    {
      "id": 159,
      "sentence": "If Sarah {{gap1}} (listen) to her doctor's advice, she would have recovered much faster.",
      "answer": "had listened",
      "category": "Third Conditional"
    },
    {
      "id": 160,
      "sentence": "You {{gap1}} (might / spot) the error if you had proofread the final paragraph.",
      "answer": "might have spotted",
      "category": "Third Conditional"
    },
    {
      "id": 161,
      "sentence": "If the referee {{gap1}} (see) that foul, he would have awarded a penalty.",
      "answer": "had seen",
      "category": "Third Conditional"
    },
    {
      "id": 162,
      "sentence": "I {{gap1}} (not buy) that second-hand console if I {{gap2}} (realise) the fan was broken.",
      "answer": "wouldn't have bought / had realised",
      "category": "Third Conditional"
    },
    {
      "id": 163,
      "sentence": "If they {{gap1}} (save) the receipt, they could have returned the faulty headphones.",
      "answer": "had saved",
      "category": "Third Conditional"
    },
    {
      "id": 164,
      "sentence": "The expedition {{gap1}} (fail) if the local guides hadn't known an alternative route.",
      "answer": "would have failed",
      "gapAlternatives": [
        [
          "could have failed",
          "might have failed"
        ]
      ],
      "category": "Third Conditional"
    },
    {
      "id": 165,
      "sentence": "If you {{gap1}} (not forget) your passport at home, we {{gap2}} (board) the flight on time.",
      "answer": "hadn't forgotten / would have boarded",
      "gapAlternatives": [
        [],
        [
          "could have boarded",
          "might have boarded"
        ]
      ],
      "category": "Third Conditional"
    },
    {
      "id": 166,
      "sentence": "She could have avoided the fine if she {{gap1}} (renew) her library books online.",
      "answer": "had renewed",
      "category": "Third Conditional"
    },
    {
      "id": 167,
      "sentence": "If the fire brigade {{gap1}} (arrive) five minutes later, the entire warehouse would have burned down.",
      "answer": "had arrived",
      "category": "Third Conditional"
    },
    {
      "id": 168,
      "sentence": "He {{gap1}} (not crash) the car if he hadn't been looking at his phone.",
      "answer": "wouldn't have crashed",
      "category": "Third Conditional"
    },
    {
      "id": 169,
      "sentence": "If I {{gap1}} (accept) that scholarship in 2023, my career path would have been completely different.",
      "answer": "had accepted",
      "category": "Third Conditional"
    },
    {
      "id": 170,
      "sentence": "They {{gap1}} (might / not miss) the opening ceremony if their flight {{gap2}} (not be) delayed.",
      "answer": "might not have missed / hadn't been",
      "category": "Third Conditional"
    },
    {
      "id": 171,
      "sentence": "If I had studied medicine ten years ago, I {{gap1}} (be) a doctor today.",
      "answer": "would be",
      "gapAlternatives": [
        [
          "could be",
          "might be"
        ]
      ],
      "category": "Mixed Conditional"
    },
    {
      "id": 172,
      "sentence": "She wouldn't be so tired right now if she {{gap1}} (go) to bed earlier last night.",
      "answer": "had gone",
      "category": "Mixed Conditional"
    },
    {
      "id": 173,
      "sentence": "If he {{gap1}} (be) more organised, he wouldn't have missed yesterday's deadline.",
      "answer": "were",
      "gapAlternatives": [
        [
          "was"
        ]
      ],
      "category": "Mixed Conditional"
    },
    {
      "id": 174,
      "sentence": "We wouldn't have missed the concert unless the train {{gap1}} (break) down.",
      "answer": "had broken",
      "gapAlternatives": [
        [
          "had broken down"
        ]
      ],
      "category": "Conditional Connectors"
    },
    {
      "id": 175,
      "sentence": "You won't be allowed into the lab {{gap1}} (unless / if) you wear safety goggles.",
      "answer": "unless",
      "category": "Conditional Connectors"
    },
    {
      "id": 176,
      "sentence": "I'll lend you my bike on condition that you {{gap1}} (lock) it securely.",
      "answer": "lock",
      "category": "Conditional Connectors"
    },
    {
      "id": 177,
      "sentence": "Suppose you {{gap1}} (lose) your passport abroad; who would you contact first?",
      "answer": "lost",
      "category": "Conditional Connectors"
    },
    {
      "id": 178,
      "sentence": "If they hadn't spent all their savings last summer, they {{gap1}} (can / afford) a new laptop now.",
      "answer": "could afford",
      "category": "Mixed Conditional"
    },
    {
      "id": 179,
      "sentence": "Bring a spare jacket in case the temperature {{gap1}} (drop) after sunset.",
      "answer": "drops",
      "category": "Conditional Connectors"
    },
    {
      "id": 180,
      "sentence": "We'll start the hike at dawn provided that everyone {{gap1}} (be) ready by six.",
      "answer": "is",
      "category": "Conditional Connectors"
    },
    {
      "id": 181,
      "sentence": "I don't see my friends very often. I wish I {{gap1}} (see) my friends very often.",
      "answer": "saw",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 182,
      "sentence": "I hate living in the city centre. I wish I {{gap1}} (not live) in the city centre.",
      "answer": "didn't live",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 183,
      "sentence": "If only I {{gap1}} (have) enough money to travel across Europe this summer.",
      "answer": "had",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 184,
      "sentence": "Marta wishes she {{gap1}} (speak) Japanese fluently so she could read manga in the original.",
      "answer": "spoke",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 185,
      "sentence": "I wish I {{gap1}} (be) taller; I can never reach the top shelf.",
      "answer": "were",
      "gapAlternatives": [
        [
          "was"
        ]
      ],
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 186,
      "sentence": "If only we {{gap1}} (not have) so many exams in the same week!",
      "answer": "didn't have",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 187,
      "sentence": "He wishes he {{gap1}} (can) play the piano like his sister.",
      "answer": "could",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 188,
      "sentence": "I wish my commute to university {{gap1}} (not take) almost an hour every morning.",
      "answer": "didn't take",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 189,
      "sentence": "If only there {{gap1}} (be) a quiet study room near my house.",
      "answer": "were",
      "gapAlternatives": [
        [
          "was"
        ]
      ],
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 190,
      "sentence": "She wishes she {{gap1}} (know) how to code mobile apps without asking for help.",
      "answer": "knew",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 191,
      "sentence": "I wish the days {{gap1}} (be) longer during the winter months.",
      "answer": "were",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 192,
      "sentence": "If only my laptop {{gap1}} (not weigh) so much in my backpack.",
      "answer": "didn't weigh",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 193,
      "sentence": "I failed the exam. I wish I {{gap1}} (study) more.",
      "answer": "had studied",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 194,
      "sentence": "If only we {{gap1}} (book) the hotel earlier; now every room is sold out.",
      "answer": "had booked",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 195,
      "sentence": "She wishes she {{gap1}} (not say) those harsh words during the argument.",
      "answer": "hadn't said",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 196,
      "sentence": "I wish I {{gap1}} (listen) to my parents before spending all my savings.",
      "answer": "had listened",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 197,
      "sentence": "If only you {{gap1}} (tell) me about the schedule change yesterday!",
      "answer": "had told",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 198,
      "sentence": "They wish they {{gap1}} (not sell) their vintage guitar two years ago.",
      "answer": "hadn't sold",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 199,
      "sentence": "I wish I {{gap1}} (back up) my files before the hard drive crashed.",
      "answer": "had backed up",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 200,
      "sentence": "If only he {{gap1}} (check) the weather forecast before setting off on the trail.",
      "answer": "had checked",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 201,
      "sentence": "We wish we {{gap1}} (take) more photographs during our graduation trip.",
      "answer": "had taken",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 202,
      "sentence": "She wishes she {{gap1}} (not eat) so much spicy food before the flight.",
      "answer": "hadn't eaten",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 203,
      "sentence": "If only I {{gap1}} (apply) for that exchange programme before the deadline closed.",
      "answer": "had applied",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 204,
      "sentence": "He wishes he {{gap1}} (bring) a warmer coat to Edinburgh last November.",
      "answer": "had brought",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 205,
      "sentence": "My brother snores every night. I wish he {{gap1}} (not snore).",
      "answer": "wouldn't snore",
      "category": "I wish / If only + Would"
    },
    {
      "id": 206,
      "sentence": "I wish my neighbours {{gap1}} (turn) their music down after midnight.",
      "answer": "would turn",
      "category": "I wish / If only + Would"
    },
    {
      "id": 207,
      "sentence": "If only it {{gap1}} (stop) raining so we could finally go outside!",
      "answer": "would stop",
      "category": "I wish / If only + Would"
    },
    {
      "id": 208,
      "sentence": "She wishes her flatmate {{gap1}} (not leave) dirty dishes in the sink.",
      "answer": "wouldn't leave",
      "category": "I wish / If only + Would"
    },
    {
      "id": 209,
      "sentence": "I wish you {{gap1}} (listen) to me when I'm trying to explain something important.",
      "answer": "would listen",
      "category": "I wish / If only + Would"
    },
    {
      "id": 210,
      "sentence": "If only the bus {{gap1}} (arrive) on time for once this week!",
      "answer": "would arrive",
      "category": "I wish / If only + Would"
    },
    {
      "id": 211,
      "sentence": "They wish their boss {{gap1}} (not send) urgent messages on Sunday evenings.",
      "answer": "wouldn't send",
      "category": "I wish / If only + Would"
    },
    {
      "id": 212,
      "sentence": "I wish people {{gap1}} (not talk) loudly during films at the cinema.",
      "answer": "wouldn't talk",
      "category": "I wish / If only + Would"
    },
    {
      "id": 213,
      "sentence": "If only my dog {{gap1}} (stop) chewing on my trainers whenever I leave the room.",
      "answer": "would stop",
      "category": "I wish / If only + Would"
    },
    {
      "id": 214,
      "sentence": "He wishes his little sister {{gap1}} (not borrow) his charger without asking.",
      "answer": "wouldn't borrow",
      "category": "I wish / If only + Would"
    },
    {
      "id": 215,
      "sentence": "I wish the Wi-Fi connection {{gap1}} (stop) dropping in the middle of online classes.",
      "answer": "would stop",
      "category": "I wish / If only + Would"
    },
    {
      "id": 216,
      "sentence": "Wait a second, this parcel is heavy. {{gap1}} (it / belong) to the new neighbours?",
      "answer": "Does it belong",
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 217,
      "sentence": "Usually Lucas {{gap1}} (commute) by train, but this week he {{gap2}} (cycle) to university because of the strike.",
      "answer": "commutes / is cycling",
      "gapAlternatives": [
        [],
        [
          "'s cycling"
        ]
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 218,
      "sentence": "Look at the chef in the kitchen: he {{gap1}} (taste) the sauce to check if it {{gap2}} (need) more salt.",
      "answer": "is tasting / needs",
      "gapAlternatives": [
        [
          "'s tasting"
        ],
        []
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 219,
      "sentence": "This homemade lemonade {{gap1}} (taste) quite sour; you should add a little honey.",
      "answer": "tastes",
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 220,
      "sentence": "I {{gap1}} (think) about applying for the summer internship in Dublin, though my parents {{gap2}} (think) the rent is too high.",
      "answer": "am thinking / think",
      "gapAlternatives": [
        [
          "'m thinking"
        ],
        []
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 221,
      "sentence": "Be quiet, please! I {{gap1}} (try) to follow the instructions, and I still {{gap2}} (not understand) the final step.",
      "answer": "am trying / do not understand",
      "gapAlternatives": [
        [
          "'m trying"
        ],
        [
          "don't understand"
        ]
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 222,
      "sentence": "Clara {{gap1}} (have) two older brothers in Madrid, and right now she {{gap2}} (have) lunch with them.",
      "answer": "has / is having",
      "gapAlternatives": [
        [],
        [
          "'s having"
        ]
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 223,
      "sentence": "Your flatmate {{gap1}} (always / leave) dirty dishes in the sink, which drives everyone crazy.",
      "answer": "is always leaving",
      "alternatives": [
        "'s always leaving"
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 224,
      "sentence": "Why {{gap1}} (the clerk / weigh) your suitcase again? Because it {{gap2}} (weigh) more than twenty kilos.",
      "answer": "is the clerk weighing / weighs",
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 225,
      "sentence": "Marc {{gap1}} (seem) exhausted today because he rarely {{gap2}} (sleep) eight hours during exam week.",
      "answer": "seems / sleeps",
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 226,
      "sentence": "I {{gap1}} (see) my dentist tomorrow at 11:00 because I {{gap2}} (have) a terrible toothache.",
      "answer": "am seeing / have",
      "gapAlternatives": [
        [
          "'m seeing"
        ],
        [
          "'ve got",
          "have got"
        ]
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 227,
      "sentence": "Who {{gap1}} (own) the electric scooter parked outside? It {{gap2}} (look) brand new.",
      "answer": "owns / looks",
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 228,
      "sentence": "More and more teenagers {{gap1}} (become) aware of climate issues, and most students {{gap2}} (agree) that recycling matters.",
      "answer": "are becoming / agree",
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 229,
      "sentence": "What {{gap1}} (you / look) at through the binoculars? There {{gap2}} (appear) to be a hawk on that branch.",
      "answer": "are you looking / appears",
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 230,
      "sentence": "Nora {{gap1}} (prefer) herbal tea in the morning, so she {{gap2}} (not drink) coffee right now.",
      "answer": "prefers / is not drinking",
      "gapAlternatives": [
        [],
        [
          "isn't drinking",
          "'s not drinking"
        ]
      ],
      "category": "Present Simple vs Present Continuous & Stative Verbs"
    },
    {
      "id": 231,
      "sentence": "Look at those dark storm clouds gathering over the stadium! It {{gap1}} (rain) heavily any minute now.",
      "answer": "is going to rain",
      "alternatives": [
        "'s going to rain"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 232,
      "sentence": "Oh no, I left my charger upstairs! Don't worry, I {{gap1}} (fetch) it for you right now.",
      "answer": "will fetch",
      "alternatives": [
        "'ll fetch"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 233,
      "sentence": "According to the official timetable, the high-speed train to Zaragoza {{gap1}} (depart) at 07:45 sharp.",
      "answer": "departs",
      "alternatives": [
        "leaves"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 234,
      "sentence": "We {{gap1}} (repaint) the living room next Saturday; we have already bought four tins of white paint.",
      "answer": "are going to repaint",
      "alternatives": [
        "'re going to repaint",
        "are repainting"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 235,
      "sentence": "Watch out! That boy on the skateboard is going too fast and he {{gap1}} (crash) into the lamppost.",
      "answer": "is going to crash",
      "alternatives": [
        "'s going to crash"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 236,
      "sentence": "I promise I {{gap1}} (not tell) anyone the surprise before Maya's birthday party.",
      "answer": "will not tell",
      "alternatives": [
        "won't tell"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 237,
      "sentence": "The art exhibition {{gap1}} (open) at 10:00 tomorrow morning, so I {{gap2}} (meet) Lucia outside at 9:45.",
      "answer": "opens / am going to meet",
      "gapAlternatives": [
        [],
        [
          "'m going to meet",
          "am meeting",
          "'m meeting"
        ]
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 238,
      "sentence": "In my opinion, remote medical consultations {{gap1}} (become) much more common in the next decade.",
      "answer": "will become",
      "alternatives": [
        "'ll become"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 239,
      "sentence": "Waiter, this soup is completely cold. I am sorry, madam, I {{gap1}} (bring) you a fresh bowl immediately.",
      "answer": "will bring",
      "alternatives": [
        "'ll bring"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 240,
      "sentence": "What time {{gap1}} (the last ferry / leave) the port tonight?",
      "answer": "does the last ferry leave",
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 241,
      "sentence": "David has saved enough money because he {{gap1}} (study) architecture in Milan next autumn.",
      "answer": "is going to study",
      "alternatives": [
        "'s going to study"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 242,
      "sentence": "The coffee machine is making a strange noise; I think it {{gap1}} (break) down if you don't switch it off.",
      "answer": "is going to break",
      "alternatives": [
        "'s going to break",
        "will break",
        "'ll break"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 243,
      "sentence": "Someone is knocking at the front door. Stay seated, I {{gap1}} (open) it.",
      "answer": "will open",
      "alternatives": [
        "'ll open"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 244,
      "sentence": "Hurry up! Our Biology lecture {{gap1}} (start) at 8:30 and the bus is late.",
      "answer": "starts",
      "alternatives": [
        "begins"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 245,
      "sentence": "Sara {{gap1}} (join) a robotics club this term; she has already filled in the registration form.",
      "answer": "is going to join",
      "alternatives": [
        "'s going to join",
        "is joining"
      ],
      "category": "Future Simple (will) vs Be going to / Timetables"
    },
    {
      "id": 246,
      "sentence": "When Elena {{gap1}} (reach) the box office, the concert tickets {{gap2}} (already / sell) out.",
      "answer": "reached / had already sold",
      "gapAlternatives": [
        [],
        [
          "'d already sold"
        ]
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 247,
      "sentence": "While the technicians {{gap1}} (test) the microphones on stage, the audience {{gap2}} (enter) the hall.",
      "answer": "were testing / entered",
      "gapAlternatives": [
        [],
        [
          "was entering",
          "were entering"
        ]
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 248,
      "sentence": "Tom's fingers were covered in ink because he {{gap1}} (repair) his fountain pen all afternoon.",
      "answer": "had been repairing",
      "alternatives": [
        "'d been repairing"
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 249,
      "sentence": "I {{gap1}} (not recognise) my cousin at first because he {{gap2}} (grow) a thick beard.",
      "answer": "did not recognise / had grown",
      "gapAlternatives": [
        [
          "didn't recognise",
          "did not recognize",
          "didn't recognize"
        ],
        [
          "'d grown"
        ]
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 250,
      "sentence": "We {{gap1}} (drive) along a narrow coastal road when a deer suddenly {{gap2}} (jump) in front of the car.",
      "answer": "were driving / jumped",
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 251,
      "sentence": "How long {{gap1}} (you / wait) in the freezing wind before the rescue van finally {{gap2}} (arrive)?",
      "answer": "had you been waiting / arrived",
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 252,
      "sentence": "Julia {{gap1}} (realise) at the checkout that she {{gap2}} (leave) her wallet at home.",
      "answer": "realised / had left",
      "gapAlternatives": [
        [
          "realized"
        ],
        [
          "'d left"
        ]
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 253,
      "sentence": "While I {{gap1}} (revise) irregular verbs in my bedroom, my sister {{gap2}} (practise) the violin downstairs.",
      "answer": "was revising / was practising",
      "gapAlternatives": [
        [],
        [
          "was practicing"
        ]
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 254,
      "sentence": "The marathon runners were completely exhausted as they {{gap1}} (run) for over three hours in the heat.",
      "answer": "had been running",
      "alternatives": [
        "'d been running"
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 255,
      "sentence": "Before last summer's trip to Galway, Leo {{gap1}} (never / see) the Atlantic Ocean in person.",
      "answer": "had never seen",
      "alternatives": [
        "'d never seen"
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 256,
      "sentence": "Sorry I missed your call at 9 p.m.; I {{gap1}} (jog) in the park and my phone {{gap2}} (be) on silent.",
      "answer": "was jogging / was",
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 257,
      "sentence": "By the time the firefighters {{gap1}} (put) out the blaze, the warehouse roof {{gap2}} (collapse).",
      "answer": "put / had collapsed",
      "gapAlternatives": [
        [],
        [
          "'d collapsed"
        ]
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 258,
      "sentence": "She {{gap1}} (sprain) her ankle yesterday afternoon while she {{gap2}} (climb) down the rocky trail.",
      "answer": "sprained / was climbing",
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 259,
      "sentence": "Our eyes ached last night because we {{gap1}} (stare) at spreadsheets on the screen since morning.",
      "answer": "had been staring",
      "alternatives": [
        "'d been staring"
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    },
    {
      "id": 260,
      "sentence": "Once all the guests {{gap1}} (depart), the hosts {{gap2}} (sit) down on the sofa with a cup of tea.",
      "answer": "had departed / sat",
      "gapAlternatives": [
        [
          "'d departed",
          "departed"
        ],
        []
      ],
      "category": "Past Simple / Past Continuous / Past Perfect (Simple & Continuous)"
    }
  ],
  "mode2": [
    {
      "id": 1,
      "original": "The girl was so beautiful that everyone stared at her.",
      "key_word": "SUCH",
      "transformed": "She was such a beautiful girl that everyone stared at her.",
      "category": "So / Such"
    },
    {
      "id": 2,
      "original": "It was such hot weather that I sat in the garden all day.",
      "key_word": "SO",
      "transformed": "The weather was so hot that I sat in the garden all day.",
      "category": "So / Such"
    },
    {
      "id": 3,
      "original": "The box was so heavy that we couldn't lift it.",
      "key_word": "SUCH",
      "transformed": "It was such a heavy box that we couldn't lift it.",
      "category": "So / Such"
    },
    {
      "id": 4,
      "original": "They were such naughty children that the teacher punished them.",
      "key_word": "SO",
      "transformed": "The children were so naughty that the teacher punished them.",
      "category": "So / Such"
    },
    {
      "id": 5,
      "original": "The English language is so important that everyone studies it.",
      "key_word": "SUCH",
      "transformed": "English is such an important language that everyone studies it.",
      "category": "So / Such"
    },
    {
      "id": 6,
      "original": "Sara was such a young girl when she won the competition.",
      "key_word": "SO",
      "transformed": "Sara was so young when she won the competition.",
      "category": "So / Such"
    },
    {
      "id": 7,
      "original": "The film was so boring that I fell asleep.",
      "key_word": "SUCH",
      "transformed": "It was such a boring film that I fell asleep.",
      "category": "So / Such"
    },
    {
      "id": 8,
      "original": "The weather was so bad that we stayed at home.",
      "key_word": "SUCH",
      "transformed": "It was such bad weather that we stayed at home.",
      "category": "So / Such"
    },
    {
      "id": 9,
      "original": "He is such a fast runner that nobody can beat him.",
      "key_word": "SO",
      "transformed": "He is so fast that nobody can beat him.",
      "category": "So / Such"
    },
    {
      "id": 10,
      "original": "The question was so difficult that I couldn't answer it.",
      "key_word": "SUCH",
      "transformed": "It was such a difficult question that I couldn't answer it.",
      "category": "So / Such"
    },
    {
      "id": 11,
      "original": "The book was so interesting that I read it in one day.",
      "key_word": "SUCH",
      "transformed": "It was such an interesting book that I read it in one day.",
      "category": "So / Such"
    },
    {
      "id": 12,
      "original": "The traffic was so heavy that we missed our flight.",
      "key_word": "SUCH",
      "transformed": "It was such heavy traffic that we missed our flight.",
      "category": "So / Such"
    },
    {
      "id": 13,
      "original": "It was such an expensive deal that we decided not to book it.",
      "key_word": "SO",
      "transformed": "The deal was so expensive that we decided not to book it.",
      "category": "So / Such"
    },
    {
      "id": 14,
      "original": "The mountain trail was so steep that we had to turn back.",
      "key_word": "SUCH",
      "transformed": "It was such a steep mountain trail that we had to turn back.",
      "category": "So / Such"
    },
    {
      "id": 15,
      "original": "They are such friendly people that everyone feels welcome.",
      "key_word": "SO",
      "transformed": "The people are so friendly that everyone feels welcome.",
      "category": "So / Such"
    },
    {
      "id": 16,
      "original": "The music at the club was so loud that we couldn't talk.",
      "key_word": "SUCH",
      "transformed": "It was such loud music at the club that we couldn't talk.",
      "category": "So / Such"
    },
    {
      "id": 17,
      "original": "She gave such a brilliant speech that the audience stood up.",
      "key_word": "SO",
      "transformed": "Her speech was so brilliant that the audience stood up.",
      "category": "So / Such"
    },
    {
      "id": 18,
      "original": "The fog was so thick that the airport delayed all flights.",
      "key_word": "SUCH",
      "transformed": "It was such thick fog that the airport delayed all flights.",
      "category": "So / Such"
    },
    {
      "id": 19,
      "original": "It was such a long stopover that we visited the city centre.",
      "key_word": "SO",
      "transformed": "The stopover was so long that we visited the city centre.",
      "category": "So / Such"
    },
    {
      "id": 20,
      "original": "The exam was so easy that everyone passed with high marks.",
      "key_word": "SUCH",
      "transformed": "It was such an easy exam that everyone passed with high marks.",
      "category": "So / Such"
    },
    {
      "id": 21,
      "original": "He is too young to drive a car.",
      "key_word": "ENOUGH",
      "transformed": "He isn't old enough to drive a car.",
      "category": "Too / Enough"
    },
    {
      "id": 22,
      "original": "This flat is too small for our family.",
      "key_word": "ENOUGH",
      "transformed": "This flat isn't big enough for our family.",
      "category": "Too / Enough"
    },
    {
      "id": 23,
      "original": "The road is too wet to drive fast.",
      "key_word": "ENOUGH",
      "transformed": "The road isn't dry enough to drive fast.",
      "category": "Too / Enough"
    },
    {
      "id": 24,
      "original": "The box is too heavy for me to carry.",
      "key_word": "ENOUGH",
      "transformed": "The box isn't light enough for me to carry.",
      "category": "Too / Enough"
    },
    {
      "id": 25,
      "original": "The coffee is too hot to drink right now.",
      "key_word": "ENOUGH",
      "transformed": "The coffee isn't cold enough to drink right now.",
      "category": "Too / Enough"
    },
    {
      "id": 26,
      "original": "The girl is too young to vote.",
      "key_word": "OLD",
      "transformed": "The girl isn't old enough to vote.",
      "category": "Too / Enough"
    },
    {
      "id": 27,
      "original": "This suitcase isn't light enough for me to lift.",
      "key_word": "TOO",
      "transformed": "This suitcase is too heavy for me to lift.",
      "category": "Too / Enough"
    },
    {
      "id": 28,
      "original": "The hotel room wasn't cheap enough for us to book.",
      "key_word": "TOO",
      "transformed": "The hotel room was too expensive for us to book.",
      "category": "Too / Enough"
    },
    {
      "id": 29,
      "original": "The river is too dangerous to swim in.",
      "key_word": "SAFE",
      "transformed": "The river isn't safe enough to swim in.",
      "category": "Too / Enough"
    },
    {
      "id": 30,
      "original": "The instructions were too complicated for the children to understand.",
      "key_word": "EASY",
      "transformed": "The instructions weren't easy enough for the children to understand.",
      "category": "Too / Enough"
    },
    {
      "id": 31,
      "original": "He wasn't fast enough to catch the early train.",
      "key_word": "SLOW",
      "transformed": "He was too slow to catch the early train.",
      "category": "Too / Enough"
    },
    {
      "id": 32,
      "original": "That shelf is too high for me to reach.",
      "key_word": "LOW",
      "transformed": "That shelf isn't low enough for me to reach.",
      "category": "Too / Enough"
    },
    {
      "id": 33,
      "original": "The carry-on bag was too big to fit under the seat.",
      "key_word": "SMALL",
      "transformed": "The carry-on bag wasn't small enough to fit under the seat.",
      "category": "Too / Enough"
    },
    {
      "id": 34,
      "original": "The water in the pool isn't warm enough to swim today.",
      "key_word": "COLD",
      "transformed": "The water in the pool is too cold to swim today.",
      "category": "Too / Enough"
    },
    {
      "id": 35,
      "original": "The street was too narrow for the tour bus to pass.",
      "key_word": "WIDE",
      "transformed": "The street wasn't wide enough for the tour bus to pass.",
      "category": "Too / Enough"
    },
    {
      "id": 36,
      "original": "My voice isn't loud enough for the people at the back to hear.",
      "key_word": "QUIET",
      "transformed": "My voice is too quiet for the people at the back to hear.",
      "category": "Too / Enough"
    },
    {
      "id": 37,
      "original": "The patient is too weak to walk without assistance.",
      "key_word": "STRONG",
      "transformed": "The patient isn't strong enough to walk without assistance.",
      "category": "Too / Enough"
    },
    {
      "id": 38,
      "original": "We arrived too late to get seats in the front row.",
      "key_word": "EARLY",
      "transformed": "We didn't arrive early enough to get seats in the front row.",
      "category": "Too / Enough"
    },
    {
      "id": 39,
      "original": "The lake is too shallow for boats to sail across.",
      "key_word": "DEEP",
      "transformed": "The lake isn't deep enough for boats to sail across.",
      "category": "Too / Enough"
    },
    {
      "id": 40,
      "original": "The room wasn't bright enough to take good photos.",
      "key_word": "DARK",
      "transformed": "The room was too dark to take good photos.",
      "category": "Too / Enough"
    },
    {
      "id": 41,
      "original": "He prefers dating online to going out with a girl.",
      "key_word": "RATHER",
      "transformed": "He'd rather date online than go out with a girl.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 42,
      "original": "Many people would rather chat online than talk face to face.",
      "key_word": "PREFER",
      "transformed": "Many people prefer chatting online to talking face to face.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 43,
      "original": "Most children would rather live with their parents than live alone.",
      "key_word": "PREFER",
      "transformed": "Most children prefer living with their parents to living alone.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 44,
      "original": "I prefer going out to watching TV.",
      "key_word": "RATHER",
      "transformed": "I'd rather go out than watch TV.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 45,
      "original": "I prefer reading to watching TV.",
      "key_word": "RATHER",
      "transformed": "I'd rather read than watch TV.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 46,
      "original": "She would rather travel abroad than stay in her own country.",
      "key_word": "PREFERS",
      "transformed": "She prefers travelling abroad to staying in her own country.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 47,
      "original": "We prefer camping outdoors to sleeping in luxury hotels.",
      "key_word": "RATHER",
      "transformed": "We would rather camp outdoors than sleep in luxury hotels.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 48,
      "original": "They'd rather book flights in advance than buy tickets at the last minute.",
      "key_word": "PREFER",
      "transformed": "They prefer booking flights in advance to buying tickets at the last minute.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 49,
      "original": "My brother prefers hiking on a mountain trail to sunbathing on the beach.",
      "key_word": "RATHER",
      "transformed": "My brother would rather hike on a mountain trail than sunbathe on the beach.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 50,
      "original": "I would rather take a carry-on bag than check in a large suitcase.",
      "key_word": "PREFER",
      "transformed": "I prefer taking a carry-on bag to checking in a large suitcase.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 51,
      "original": "Tourists often prefer visiting cities off season to travelling in August.",
      "key_word": "RATHER",
      "transformed": "Tourists would often rather visit cities off season than travel in August.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 52,
      "original": "He'd rather drive overnight than have a long stopover.",
      "key_word": "PREFERS",
      "transformed": "He prefers driving overnight to having a long stopover.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 53,
      "original": "Sarah prefers cooking at home to eating at expensive restaurants.",
      "key_word": "RATHER",
      "transformed": "Sarah would rather cook at home than eat at expensive restaurants.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 54,
      "original": "I'd rather walk to work than wait for a delayed bus.",
      "key_word": "PREFER",
      "transformed": "I prefer walking to work to waiting for a delayed bus.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 55,
      "original": "Students prefer doing practical experiments to memorizing long theories.",
      "key_word": "RATHER",
      "transformed": "Students would rather do practical experiments than memorize long theories.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 56,
      "original": "She would rather send a voice message than write a long email.",
      "key_word": "PREFERS",
      "transformed": "She prefers sending a voice message to writing a long email.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 57,
      "original": "We prefer living in a quiet location to renting a flat in the city centre.",
      "key_word": "RATHER",
      "transformed": "We'd rather live in a quiet location than rent a flat in the city centre.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 58,
      "original": "David would rather play tennis than go jogging in the rain.",
      "key_word": "PREFERS",
      "transformed": "David prefers playing tennis to going jogging in the rain.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 59,
      "original": "I prefer drinking tea in the morning to having coffee.",
      "key_word": "RATHER",
      "transformed": "I would rather drink tea in the morning than have coffee.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 60,
      "original": "They would rather work as a team than compete against each other.",
      "key_word": "PREFER",
      "transformed": "They prefer working as a team to competing against each other.",
      "category": "Prefer / Would rather"
    },
    {
      "id": 61,
      "original": "Although she hated travelling, she went to visit her cousin in Brazil.",
      "key_word": "SPITE",
      "transformed": "In spite of hating travelling, she went to visit her cousin in Brazil.",
      "category": "Although / Despite"
    },
    {
      "id": 62,
      "original": "Even though the movie received negative reviews, it was a success.",
      "key_word": "DESPITE",
      "transformed": "Despite receiving negative reviews, the movie was a success.",
      "category": "Although / Despite"
    },
    {
      "id": 63,
      "original": "Even though the movie received negative reviews, it was a success.",
      "key_word": "FACT",
      "transformed": "Despite the fact that the movie received negative reviews, it was a success.",
      "category": "Although / Despite"
    },
    {
      "id": 64,
      "original": "In spite of the heavy rain, we went for a walk in the park.",
      "key_word": "ALTHOUGH",
      "transformed": "Although it was raining heavily, we went for a walk in the park.",
      "category": "Although / Despite"
    },
    {
      "id": 65,
      "original": "Despite feeling nervous, she gave a flawless presentation.",
      "key_word": "EVEN",
      "transformed": "Even though she was feeling nervous, she gave a flawless presentation.",
      "category": "Although / Despite"
    },
    {
      "id": 66,
      "original": "She has plenty of money, but she is very mean.",
      "key_word": "ALTHOUGH",
      "transformed": "Although she has plenty of money, she is very mean.",
      "category": "Although / Despite"
    },
    {
      "id": 67,
      "original": "I didn't buy the car, even though I had the money.",
      "key_word": "DESPITE",
      "transformed": "Despite having the money, I didn't buy the car.",
      "category": "Although / Despite"
    },
    {
      "id": 68,
      "original": "She never takes any kind of exercise, but she is quite fit and healthy.",
      "key_word": "THOUGH",
      "transformed": "Even though she never takes any kind of exercise, she is quite fit and healthy.",
      "category": "Although / Despite"
    },
    {
      "id": 69,
      "original": "Although our flight was delayed for four hours, we didn't miss our connection.",
      "key_word": "DESPITE",
      "transformed": "Despite the four-hour flight delay, we didn't miss our connection.",
      "category": "Although / Despite"
    },
    {
      "id": 70,
      "original": "In spite of booking in advance, we didn't get a good deal.",
      "key_word": "ALTHOUGH",
      "transformed": "Although we booked in advance, we didn't get a good deal.",
      "category": "Although / Despite"
    },
    {
      "id": 71,
      "original": "Even though he is experienced in management, he wasn't hired for the position.",
      "key_word": "SPITE",
      "transformed": "In spite of being experienced in management, he wasn't hired for the position.",
      "category": "Although / Despite"
    },
    {
      "id": 72,
      "original": "Despite the remote location of the hotel, it is very popular with tourists.",
      "key_word": "ALTHOUGH",
      "transformed": "Although the location of the hotel is remote, it is very popular with tourists.",
      "category": "Although / Despite"
    },
    {
      "id": 73,
      "original": "Although she was exhausted after the overnight flight, she went straight to the office.",
      "key_word": "DESPITE",
      "transformed": "Despite being exhausted after the overnight flight, she went straight to the office.",
      "category": "Although / Despite"
    },
    {
      "id": 74,
      "original": "In spite of the fact that he apologized, she remained disappointed with him.",
      "key_word": "EVEN",
      "transformed": "Even though he apologized, she remained disappointed with him.",
      "category": "Although / Despite"
    },
    {
      "id": 75,
      "original": "Although the trail was covered in snow, the climbers reached the summit.",
      "key_word": "SPITE",
      "transformed": "In spite of the snow on the trail, the climbers reached the summit.",
      "category": "Although / Despite"
    },
    {
      "id": 76,
      "original": "Despite having a valid ticket, he wasn't allowed to board the train.",
      "key_word": "ALTHOUGH",
      "transformed": "Although he had a valid ticket, he wasn't allowed to board the train.",
      "category": "Although / Despite"
    },
    {
      "id": 77,
      "original": "Even though the traffic was terrible, they arrived at the airport on time.",
      "key_word": "DESPITE",
      "transformed": "Despite the terrible traffic, they arrived at the airport on time.",
      "category": "Although / Despite"
    },
    {
      "id": 78,
      "original": "Although he was frustrated by the results, he kept trying.",
      "key_word": "FACT",
      "transformed": "In spite of the fact that he was frustrated by the results, he kept trying.",
      "category": "Although / Despite"
    },
    {
      "id": 79,
      "original": "Despite his fear of heights, he climbed to the top of the tower.",
      "key_word": "EVEN",
      "transformed": "Even though he was afraid of heights, he climbed to the top of the tower.",
      "category": "Although / Despite"
    },
    {
      "id": 80,
      "original": "Although she lives abroad, she visits her parents every two months.",
      "key_word": "DESPITE",
      "transformed": "Despite living abroad, she visits her parents every two months.",
      "category": "Although / Despite"
    },
    {
      "id": 81,
      "original": "The film started before we arrived at the cinema.",
      "key_word": "TIME",
      "transformed": "By the time we arrived at the cinema, the film had already started.",
      "category": "By the time"
    },
    {
      "id": 82,
      "original": "The thief escaped before the police got to the scene.",
      "key_word": "TIME",
      "transformed": "By the time the police got to the scene, the thief had already escaped.",
      "category": "By the time"
    },
    {
      "id": 83,
      "original": "I will finish my homework before my parents come home at 9 p.m.",
      "key_word": "TIME",
      "transformed": "By the time my parents come home at 9 p.m., I will have finished my homework.",
      "category": "By the time"
    },
    {
      "id": 84,
      "original": "Lucy drank all the milk before Angie opened the fridge.",
      "key_word": "TIME",
      "transformed": "By the time Angie opened the fridge, Lucy had drunk all the milk.",
      "category": "By the time"
    },
    {
      "id": 85,
      "original": "We will complete the project before the deadline next Friday.",
      "key_word": "TIME",
      "transformed": "By the time the deadline arrives next Friday, we will have completed the project.",
      "category": "By the time"
    },
    {
      "id": 86,
      "original": "The train left the station before we reached the platform.",
      "key_word": "TIME",
      "transformed": "By the time we reached the platform, the train had already left the station.",
      "category": "By the time"
    },
    {
      "id": 87,
      "original": "She will learn to speak fluent Japanese before she moves to Tokyo.",
      "key_word": "TIME",
      "transformed": "By the time she moves to Tokyo, she will have learned to speak fluent Japanese.",
      "category": "By the time"
    },
    {
      "id": 88,
      "original": "The rain stopped before the outdoor concert began.",
      "key_word": "TIME",
      "transformed": "By the time the outdoor concert began, the rain had stopped.",
      "category": "By the time"
    },
    {
      "id": 89,
      "original": "They will build the new terminal before the summer season starts.",
      "key_word": "TIME",
      "transformed": "By the time the summer season starts, they will have built the new terminal.",
      "category": "By the time"
    },
    {
      "id": 90,
      "original": "All the cheap deals sold out before I logged into the website.",
      "key_word": "TIME",
      "transformed": "By the time I logged into the website, all the cheap deals had sold out.",
      "category": "By the time"
    },
    {
      "id": 91,
      "original": "You will read the entire book before the plane lands.",
      "key_word": "TIME",
      "transformed": "By the time the plane lands, you will have read the entire book.",
      "category": "By the time"
    },
    {
      "id": 92,
      "original": "The battery went flat before Angie tried to start the car.",
      "key_word": "TIME",
      "transformed": "By the time Angie tried to start the car, the battery had gone flat.",
      "category": "By the time"
    },
    {
      "id": 93,
      "original": "The sun will set before we reach the end of the mountain trail.",
      "key_word": "TIME",
      "transformed": "By the time we reach the end of the mountain trail, the sun will have set.",
      "category": "By the time"
    },
    {
      "id": 94,
      "original": "The guests ate all the food before Paul arrived at the party.",
      "key_word": "TIME",
      "transformed": "By the time Paul arrived at the party, the guests had eaten all the food.",
      "category": "By the time"
    },
    {
      "id": 95,
      "original": "I will save enough money for my trip abroad before July.",
      "key_word": "TIME",
      "transformed": "By the time July arrives, I will have saved enough money for my trip abroad.",
      "category": "By the time"
    },
    {
      "id": 96,
      "original": "The snow melted before the skiers got to the resort.",
      "key_word": "TIME",
      "transformed": "By the time the skiers got to the resort, the snow had melted.",
      "category": "By the time"
    },
    {
      "id": 97,
      "original": "The mechanic will repair the car before we need it on Monday.",
      "key_word": "TIME",
      "transformed": "By the time we need the car on Monday, the mechanic will have repaired it.",
      "category": "By the time"
    },
    {
      "id": 98,
      "original": "The children fell asleep before their father came back from work.",
      "key_word": "TIME",
      "transformed": "By the time their father came back from work, the children had fallen asleep.",
      "category": "By the time"
    },
    {
      "id": 99,
      "original": "She will write twenty pages of her novel before the weekend ends.",
      "key_word": "TIME",
      "transformed": "By the time the weekend ends, she will have written twenty pages of her novel.",
      "category": "By the time"
    },
    {
      "id": 100,
      "original": "The shop closed before I could buy a present for my friend.",
      "key_word": "TIME",
      "transformed": "By the time I got to the shop to buy a present for my friend, it had closed.",
      "category": "By the time"
    },
    {
      "id": 101,
      "original": "She started learning English three years ago.",
      "key_word": "BEEN",
      "transformed": "She has been learning English for three years.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 102,
      "original": "I last saw Tom in 2024.",
      "key_word": "SEEN",
      "transformed": "I haven't seen Tom since 2024.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 103,
      "original": "They arrived at the station a moment ago.",
      "key_word": "JUST",
      "transformed": "They have just arrived at the station.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 104,
      "original": "I began doing my homework two hours ago and I'm still doing it.",
      "key_word": "BEEN",
      "transformed": "I have been doing my homework for two hours and I'm still doing it.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 105,
      "original": "She has never visited London before.",
      "key_word": "FIRST",
      "transformed": "This is the first time she has visited London.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 106,
      "original": "We moved into this apartment five years ago.",
      "key_word": "LIVED",
      "transformed": "We have lived in this apartment for five years.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 107,
      "original": "It started raining three hours ago and it hasn't stopped yet.",
      "key_word": "FOR",
      "transformed": "It has been raining for three hours.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 108,
      "original": "The last time I travelled abroad was two years ago.",
      "key_word": "FOR",
      "transformed": "I haven't travelled abroad for two years.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 109,
      "original": "He bought his car in April.",
      "key_word": "HAD",
      "transformed": "He has had his car since April.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 110,
      "original": "They met each other ten years ago.",
      "key_word": "KNOWN",
      "transformed": "They have known each other for ten years.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 111,
      "original": "I last spoke to Claire when we finished high school.",
      "key_word": "SINCE",
      "transformed": "I haven't spoken to Claire since we finished high school.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 112,
      "original": "The plane landed a few seconds ago.",
      "key_word": "JUST",
      "transformed": "The plane has just landed.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 113,
      "original": "He started working at the hospital in 2020.",
      "key_word": "WORKING",
      "transformed": "He has been working at the hospital since 2020.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 114,
      "original": "I have never flown with only a carry-on bag before.",
      "key_word": "TIME",
      "transformed": "This is the first time I have flown with only a carry-on bag.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 115,
      "original": "When did you start waiting for the bus?",
      "key_word": "LONG",
      "transformed": "How long have you been waiting for the bus?",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 116,
      "original": "She last went camping outdoors three summers ago.",
      "key_word": "BEEN",
      "transformed": "She hasn't been camping outdoors for three summers.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 117,
      "original": "We got married six months ago.",
      "key_word": "FOR",
      "transformed": "We have been married for six months.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 118,
      "original": "The concert finished a minute ago.",
      "key_word": "JUST",
      "transformed": "The concert has just finished.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 119,
      "original": "He has never eaten snails before.",
      "key_word": "EVER",
      "transformed": "This is the first time he has ever eaten snails.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 120,
      "original": "I started repairing my bike at 9 a.m. and I'm still working on it.",
      "key_word": "SINCE",
      "transformed": "I have been repairing my bike since 9 a.m.",
      "category": "Present Perfect (For / Since)"
    },
    {
      "id": 121,
      "original": "They are building a new bridge across the river.",
      "key_word": "BEING",
      "transformed": "A new bridge is being built across the river.",
      "alternatives": [
        "A new bridge is being built across the river by them."
      ],
      "category": "Passive Voice",
      "explanation": "Voz pasiva en Present Continuous: 'are building' pasa a 'is being built' (am/is/are + being + participio pasado)."
    },
    {
      "id": 122,
      "original": "Someone has stolen my carry-on bag at the airport.",
      "key_word": "BEEN",
      "transformed": "My carry-on bag has been stolen at the airport.",
      "alternatives": [],
      "category": "Passive Voice",
      "explanation": "Voz pasiva en Present Perfect: 'has stolen' pasa a 'has been stolen' (have/has + been + participio). Se omite 'by someone'."
    },
    {
      "id": 123,
      "original": "The airline cancelled all flights because of the storm.",
      "key_word": "WERE",
      "transformed": "All flights were cancelled because of the storm.",
      "alternatives": [
        "All flights were cancelled by the airline because of the storm.",
        "because of the storm all flights were cancelled"
      ],
      "category": "Passive Voice",
      "explanation": "Voz pasiva en Past Simple: el objeto plural 'All flights' pasa a sujeto seguido de 'were cancelled' (was/were + participio)."
    },
    {
      "id": 124,
      "original": "They will announce the exam results tomorrow morning.",
      "key_word": "BE",
      "transformed": "The exam results will be announced tomorrow morning.",
      "alternatives": [
        "The exam results will be announced by them tomorrow morning."
      ],
      "category": "Passive Voice",
      "explanation": "Voz pasiva en Future Simple: 'will announce' se transforma en 'will be announced' (will + be + participio)."
    },
    {
      "id": 125,
      "original": "People speak English all over the world.",
      "key_word": "SPOKEN",
      "transformed": "English is spoken all over the world.",
      "alternatives": [],
      "category": "Passive Voice",
      "explanation": "Voz pasiva en Present Simple: 'speak' pasa a 'is spoken' (am/is/are + participio). No se añade 'by people' por ser sujeto genérico."
    },
    {
      "id": 126,
      "original": "The mechanic was repairing my car when I arrived.",
      "key_word": "BEING",
      "transformed": "My car was being repaired when I arrived.",
      "alternatives": [
        "My car was being repaired by the mechanic when I arrived."
      ],
      "category": "Passive Voice",
      "explanation": "Voz pasiva en Past Continuous: 'was repairing' se transforma en 'was being repaired' (was/were + being + participio)."
    },
    {
      "id": 127,
      "original": "'I am studying for my final exams now,' Sara said.",
      "key_word": "WAS",
      "transformed": "Sara said that she was studying for her final exams then.",
      "alternatives": [
        "Sara said she was studying for her final exams then.",
        "Sara said that she was studying for her final exams."
      ],
      "category": "Reported Speech",
      "explanation": "Estilo indirecto (Reported Speech): el Present Continuous ('am studying') retrocede a Past Continuous ('was studying'), 'my' cambia a 'her' y 'now' pasa a 'then'."
    },
    {
      "id": 128,
      "original": "'We have already booked our tickets in advance,' they told me.",
      "key_word": "HAD",
      "transformed": "They told me that they had already booked their tickets in advance.",
      "alternatives": [
        "They told me they had already booked their tickets in advance."
      ],
      "category": "Reported Speech",
      "explanation": "Estilo indirecto: el Present Perfect ('have booked') retrocede a Past Perfect ('had booked') y 'our' pasa a 'their'."
    },
    {
      "id": 129,
      "original": "'Where did you buy that jacket?' Anna asked me.",
      "key_word": "WHERE",
      "transformed": "Anna asked me where I had bought that jacket.",
      "alternatives": [],
      "category": "Reported Speech",
      "explanation": "Preguntas en estilo indirecto (Reported Questions): se mantiene la partícula 'where', el Past Simple ('did you buy') pasa a Past Perfect ('I had bought') y se elimina el orden interrogativo (Sujeto + Verbo)."
    },
    {
      "id": 130,
      "original": "'Don't forget to pack your passport,' my mother told me.",
      "key_word": "NOT",
      "transformed": "My mother told me not to forget to pack my passport.",
      "alternatives": [],
      "category": "Reported Speech",
      "explanation": "Órdenes negativas en estilo indirecto (Reported Commands): 'Don't + infinitivo' se transforma en 'told + objeto + NOT TO + infinitivo'."
    },
    {
      "id": 131,
      "original": "'I will call you as soon as I land,' Tom promised.",
      "key_word": "WOULD",
      "transformed": "Tom promised that he would call me as soon as he landed.",
      "alternatives": [
        "Tom promised he would call me as soon as he landed."
      ],
      "category": "Reported Speech",
      "explanation": "Estilo indirecto: 'will call' retrocede a 'would call' y el Present Simple 'land' retrocede a Past Simple 'landed'."
    },
    {
      "id": 132,
      "original": "'Have you ever travelled abroad?' the teacher asked us.",
      "key_word": "IF",
      "transformed": "The teacher asked us if we had ever travelled abroad.",
      "alternatives": [
        "The teacher asked us whether we had ever travelled abroad."
      ],
      "category": "Reported Speech",
      "explanation": "Preguntas de Sí/No en estilo indirecto: se introducen con 'if' (o 'whether') + Sujeto ('we') + Past Perfect ('had ever travelled') en orden afirmativo."
    },
    {
      "id": 133,
      "original": "I didn't study hard enough, so I failed the exam.",
      "key_word": "HAD",
      "transformed": "If I had studied hard enough, I wouldn't have failed the exam.",
      "alternatives": [
        "If I had studied hard enough, I would not have failed the exam."
      ],
      "category": "Conditionals",
      "explanation": "Tercer Condicional (pasado irreal): 'If + Past Perfect (had studied), would/wouldn't have + participio (wouldn't have failed)'."
    },
    {
      "id": 134,
      "original": "We missed the train because we left home too late.",
      "key_word": "HADN'T",
      "transformed": "If we hadn't left home too late, we wouldn't have missed the train.",
      "alternatives": [
        "We wouldn't have missed the train if we hadn't left home too late.",
        "If we had not left home too late, we would not have missed the train."
      ],
      "category": "Conditionals",
      "explanation": "Tercer Condicional: invertimos la causa y el efecto en pasado usando 'If + Past Perfect (hadn't left), wouldn't have + participio (wouldn't have missed)'."
    },
    {
      "id": 135,
      "original": "You won't pass the driving test if you don't practise every day.",
      "key_word": "UNLESS",
      "transformed": "You won't pass the driving test unless you practise every day.",
      "alternatives": [
        "Unless you practise every day, you won't pass the driving test."
      ],
      "category": "Conditionals",
      "explanation": "Primer Condicional con 'unless': 'unless' significa 'a menos que / si no' y equivale a 'if + verbo negativo', por lo que el verbo detrás de 'unless' va en AFIRMATIVA ('unless you practise')."
    },
    {
      "id": 136,
      "original": "I don't have enough money, so I can't buy this tablet.",
      "key_word": "HAD",
      "transformed": "If I had enough money, I would buy this tablet.",
      "alternatives": [
        "If I had enough money, I could buy this tablet."
      ],
      "category": "Conditionals",
      "explanation": "Segundo Condicional (hipótesis en el presente): 'If + Past Simple (had), would/could + infinitivo (would/could buy)'."
    },
    {
      "id": 137,
      "original": "She didn't know you were in hospital, so she didn't visit you.",
      "key_word": "KNOWN",
      "transformed": "If she had known you were in hospital, she would have visited you.",
      "alternatives": [
        "She would have visited you if she had known you were in hospital."
      ],
      "category": "Conditionals",
      "explanation": "Tercer Condicional: 'If she had known (Past Perfect)..., she would have visited (would have + participio)'."
    },
    {
      "id": 138,
      "original": "In your position, I would book the flights in advance.",
      "key_word": "WERE",
      "transformed": "If I were you, I would book the flights in advance.",
      "alternatives": [],
      "category": "Conditionals",
      "explanation": "Segundo Condicional para dar consejo: 'In your position' equivale siempre a la estructura fija 'If I were you, I would + infinitivo'."
    },
    {
      "id": 139,
      "original": "She started working here two years ago.",
      "key_word": "WORKING",
      "transformed": "She has been working here for two years.",
      "alternatives": [],
      "category": "Verb Tenses Transformation",
      "explanation": "Transformación de Past Simple ('started + V-ing + ago') a Present Perfect Continuous ('has been working + for + periodo de tiempo')."
    },
    {
      "id": 140,
      "original": "The last time I saw Miguel was in 2022.",
      "key_word": "SEEN",
      "transformed": "I haven't seen Miguel since 2022.",
      "alternatives": [
        "I have not seen Miguel since 2022."
      ],
      "category": "Verb Tenses Transformation",
      "explanation": "'The last time + Past Simple + was in [año]' se transforma en Present Perfect negativo: 'haven't + participio (seen) + since + [año]'."
    },
    {
      "id": 141,
      "original": "First the train left, and then we arrived at the station.",
      "key_word": "BY",
      "transformed": "By the time we arrived at the station, the train had already left.",
      "alternatives": [
        "By the time we arrived at the station, the train had left.",
        "The train had already left by the time we arrived at the station."
      ],
      "category": "Verb Tenses Transformation",
      "explanation": "Secuencia de pasado con 'By the time': la acción que ocurrió primero va en Past Perfect ('the train had left') y la posterior en Past Simple ('by the time we arrived')."
    },
    {
      "id": 142,
      "original": "We began studying English when we were six years old.",
      "key_word": "STUDIED",
      "transformed": "We have studied English since we were six years old.",
      "alternatives": [
        "We have been studying English since we were six years old."
      ],
      "category": "Verb Tenses Transformation",
      "explanation": "Transformación de inicio en el pasado ('began ... when') a Present Perfect ('have studied') + 'since' + cláusula en Past Simple ('since we were six')."
    },
    {
      "id": 143,
      "original": "During my walk in the park, I met an old school friend.",
      "key_word": "WALKING",
      "transformed": "While I was walking in the park, I met an old school friend.",
      "alternatives": [
        "I met an old school friend while I was walking in the park."
      ],
      "category": "Verb Tenses Transformation",
      "explanation": "'During + sustantivo posesivo (During my walk)' equivale a 'While + Sujeto + Past Continuous (While I was walking)'."
    },
    {
      "id": 144,
      "original": "They will finish building the stadium before next June.",
      "key_word": "FINISHED",
      "transformed": "By next June, they will have finished building the stadium.",
      "alternatives": [
        "They will have finished building the stadium by next June."
      ],
      "category": "Verb Tenses Transformation",
      "explanation": "Acción que habrá concluido antes de una fecha futura ('before next June'): se transforma a Future Perfect ('will have finished') con 'by next June'."
    },
    {
      "id": 145,
      "original": "Don't touch that wire or you will get an electric shock.",
      "key_word": "IF",
      "transformed": "If you touch that wire, you will get an electric shock.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 146,
      "original": "If you don't hurry up, we will miss the beginning of the play.",
      "key_word": "UNLESS",
      "transformed": "Unless you hurry up, we will miss the beginning of the play.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 147,
      "original": "We won't go to the beach if the weather doesn't improve.",
      "key_word": "UNLESS",
      "transformed": "We won't go to the beach unless the weather improves.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 148,
      "original": "You can borrow my tablet, but you must return it tonight.",
      "key_word": "LONG",
      "transformed": "You can borrow my tablet as long as you return it tonight.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 149,
      "original": "I'll help you with the essay on condition that you write the outline first.",
      "key_word": "PROVIDED",
      "transformed": "I'll help you with the essay provided that you write the outline first.",
      "alternatives": [
        "I'll help you with the essay provided you write the outline first."
      ],
      "category": "Zero & First Conditional"
    },
    {
      "id": 150,
      "original": "Take some extra cash because the card machine might not work.",
      "key_word": "CASE",
      "transformed": "Take some extra cash in case the card machine doesn't work.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 151,
      "original": "If she doesn't submit the project by Friday, she will lose two marks.",
      "key_word": "UNLESS",
      "transformed": "Unless she submits the project by Friday, she will lose two marks.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 152,
      "original": "Study the vocabulary list thoroughly or you won't understand the reading text.",
      "key_word": "IF",
      "transformed": "If you don't study the vocabulary list thoroughly, you won't understand the reading text.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 153,
      "original": "Heating ice to above zero degrees always makes it melt.",
      "key_word": "IF",
      "transformed": "If you heat ice to above zero degrees, it always melts.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 154,
      "original": "You can enter the laboratory only if you wear protective glasses.",
      "key_word": "UNLESS",
      "transformed": "You cannot enter the laboratory unless you wear protective glasses.",
      "alternatives": [
        "You can't enter the laboratory unless you wear protective glasses.",
        "You will not be able to enter the laboratory unless you wear protective glasses."
      ],
      "category": "Zero & First Conditional"
    },
    {
      "id": 155,
      "original": "If they offer a student discount, we might visit the museum today.",
      "key_word": "MAY",
      "transformed": "If they offer a student discount, we may visit the museum today.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 156,
      "original": "We'll cancel the picnic if it starts raining heavily.",
      "key_word": "UNLESS",
      "transformed": "We won't cancel the picnic unless it starts raining heavily.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 157,
      "original": "Save a copy on a USB drive because the cloud server might fail.",
      "key_word": "CASE",
      "transformed": "Save a copy on a USB drive in case the cloud server fails.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 158,
      "original": "If you don't water those ferns regularly, they die.",
      "key_word": "UNLESS",
      "transformed": "Unless you water those ferns regularly, they die.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 159,
      "original": "Finish your chores and you can go out with your friends.",
      "key_word": "IF",
      "transformed": "If you finish your chores, you can go out with your friends.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 160,
      "original": "The alarm only rings if someone opens the door without the code.",
      "key_word": "UNLESS",
      "transformed": "The alarm doesn't ring unless someone opens the door without the code.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 161,
      "original": "You'll get into the degree course if your final average is above nine.",
      "key_word": "PROVIDED",
      "transformed": "You'll get into the degree course provided that your final average is above nine.",
      "alternatives": [
        "You'll get into the degree course provided your final average is above nine."
      ],
      "category": "Zero & First Conditional"
    },
    {
      "id": 162,
      "original": "If the traffic isn't heavy, we will reach Seville before noon.",
      "key_word": "UNLESS",
      "transformed": "Unless the traffic is heavy, we will reach Seville before noon.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 163,
      "original": "Bring a power bank because your phone battery might run out.",
      "key_word": "CASE",
      "transformed": "Bring a power bank in case your phone battery runs out.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 164,
      "original": "Press the green switch to start the generator automatically.",
      "key_word": "IF",
      "transformed": "If you press the green switch, the generator starts automatically.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 165,
      "original": "He won't accept the transfer unless they raise his salary.",
      "key_word": "IF",
      "transformed": "He won't accept the transfer if they don't raise his salary.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 166,
      "original": "If you don't reserve a table in advance, we won't get seated.",
      "key_word": "UNLESS",
      "transformed": "Unless you reserve a table in advance, we won't get seated.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 167,
      "original": "You can use the sports centre for free if you show your student card.",
      "key_word": "LONG",
      "transformed": "You can use the sports centre for free as long as you show your student card.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 168,
      "original": "Leave your phone in silent mode or the examiner will disqualify you.",
      "key_word": "IF",
      "transformed": "If you don't leave your phone in silent mode, the examiner will disqualify you.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 169,
      "original": "Unless she practises more often, she won't make the national team.",
      "key_word": "IF",
      "transformed": "If she doesn't practise more often, she won't make the national team.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 170,
      "original": "I'll lend you my coat because it might get freezing after midnight.",
      "key_word": "CASE",
      "transformed": "I'll lend you my coat in case it gets freezing after midnight.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 171,
      "original": "You only pass this module if you attend at least eighty percent of classes.",
      "key_word": "UNLESS",
      "transformed": "You don't pass this module unless you attend at least eighty percent of classes.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 172,
      "original": "If we leave right now, we can catch the 8:15 metro.",
      "key_word": "CAN",
      "transformed": "We can catch the 8:15 metro if we leave right now.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 173,
      "original": "Don't forget to stretch after running or your muscles will ache.",
      "key_word": "IF",
      "transformed": "If you forget to stretch after running, your muscles will ache.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 174,
      "original": "They won't approve the loan unless you provide proof of income.",
      "key_word": "IF",
      "transformed": "They won't approve the loan if you don't provide proof of income.",
      "category": "Zero & First Conditional"
    },
    {
      "id": 175,
      "original": "I don't have a car, so I can't drive to the coast this weekend.",
      "key_word": "IF",
      "transformed": "If I had a car, I could drive to the coast this weekend.",
      "alternatives": [
        "If I had a car, I would be able to drive to the coast this weekend.",
        "If I had a car, I would drive to the coast this weekend."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 176,
      "original": "She doesn't know his address, so she can't send him an invitation.",
      "key_word": "IF",
      "transformed": "If she knew his address, she could send him an invitation.",
      "alternatives": [
        "If she knew his address, she would be able to send him an invitation.",
        "If she knew his address, she would send him an invitation."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 177,
      "original": "I advise you to talk to your tutor about the deadline.",
      "key_word": "WERE",
      "transformed": "If I were you, I would talk to your tutor about the deadline.",
      "category": "Second Conditional"
    },
    {
      "id": 178,
      "original": "We live far from the beach, so we don't swim every morning.",
      "key_word": "IF",
      "transformed": "If we didn't live far from the beach, we would swim every morning.",
      "category": "Second Conditional"
    },
    {
      "id": 179,
      "original": "He isn't fluent in French, so he won't apply for the Brussels internship.",
      "key_word": "WERE",
      "transformed": "If he were fluent in French, he would apply for the Brussels internship.",
      "category": "Second Conditional"
    },
    {
      "id": 180,
      "original": "I can't buy that monitor because it is too expensive.",
      "key_word": "IF",
      "transformed": "If that monitor weren't so expensive, I could buy it.",
      "alternatives": [
        "If that monitor wasn't so expensive, I could buy it.",
        "If that monitor weren't so expensive, I would be able to buy it.",
        "If that monitor weren't so expensive, I would buy it."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 181,
      "original": "They don't have enough space, so they can't adopt a second dog.",
      "key_word": "IF",
      "transformed": "If they had enough space, they could adopt a second dog.",
      "alternatives": [
        "If they had enough space, they would be able to adopt a second dog.",
        "If they had enough space, they would adopt a second dog."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 182,
      "original": "You shouldn't ignore that warning light on the dashboard.",
      "key_word": "WERE",
      "transformed": "If I were you, I wouldn't ignore that warning light on the dashboard.",
      "category": "Second Conditional"
    },
    {
      "id": 183,
      "original": "She works late every night, so she doesn't have time to exercise.",
      "key_word": "WOULD",
      "transformed": "If she didn't work late every night, she would have time to exercise.",
      "category": "Second Conditional"
    },
    {
      "id": 184,
      "original": "I'm not tall enough to play centre on the basketball team.",
      "key_word": "WERE",
      "transformed": "If I were taller, I could play centre on the basketball team.",
      "category": "Second Conditional"
    },
    {
      "id": 185,
      "original": "He doesn't save any money, so he can't afford a summer trip abroad.",
      "key_word": "IF",
      "transformed": "If he saved some money, he could afford a summer trip abroad.",
      "alternatives": [
        "If he saved some money, he would be able to afford a summer trip abroad."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 186,
      "original": "It's raining right now, so we can't eat lunch in the courtyard.",
      "key_word": "IF",
      "transformed": "If it weren't raining right now, we could eat lunch in the courtyard.",
      "alternatives": [
        "If it wasn't raining right now, we could eat lunch in the courtyard.",
        "If it weren't raining right now, we would be able to eat lunch in the courtyard."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 187,
      "original": "I don't understand advanced calculus, so I can't help you with this integral.",
      "key_word": "COULD",
      "transformed": "If I understood advanced calculus, I could help you with this integral.",
      "category": "Second Conditional"
    },
    {
      "id": 188,
      "original": "We don't own a projector, so we have to watch the film on a small screen.",
      "key_word": "IF",
      "transformed": "If we owned a projector, we wouldn't have to watch the film on a small screen.",
      "category": "Second Conditional"
    },
    {
      "id": 189,
      "original": "My laptop is too slow to run that video editor smoothly.",
      "key_word": "WERE",
      "transformed": "If my laptop were faster, it could run that video editor smoothly.",
      "category": "Second Conditional"
    },
    {
      "id": 190,
      "original": "You don't read the instructions carefully, so you keep making the same error.",
      "key_word": "WOULD",
      "transformed": "If you read the instructions carefully, you wouldn't keep making the same error.",
      "category": "Second Conditional"
    },
    {
      "id": 191,
      "original": "She doesn't like crowded places, so she never goes to music festivals.",
      "key_word": "IF",
      "transformed": "If she liked crowded places, she might go to music festivals.",
      "category": "Second Conditional"
    },
    {
      "id": 192,
      "original": "I strongly recommend that you back up your thesis tonight.",
      "key_word": "WERE",
      "transformed": "If I were you, I would back up my thesis tonight.",
      "category": "Second Conditional"
    },
    {
      "id": 193,
      "original": "There aren't enough scholarships, so many talented students can't study abroad.",
      "key_word": "IF",
      "transformed": "If there were more scholarships, many talented students could study abroad.",
      "category": "Second Conditional"
    },
    {
      "id": 194,
      "original": "He has a broken wrist, so he can't compete in Saturday's tournament.",
      "key_word": "IF",
      "transformed": "If he didn't have a broken wrist, he could compete in Saturday's tournament.",
      "alternatives": [
        "If he didn't have a broken wrist, he would be able to compete in Saturday's tournament."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 195,
      "original": "I don't speak Italian, which is why I need subtitles for this film.",
      "key_word": "SPOKE",
      "transformed": "If I spoke Italian, I wouldn't need subtitles for this film.",
      "category": "Second Conditional"
    },
    {
      "id": 196,
      "original": "The flat is too noisy, so I can't sleep without earplugs.",
      "key_word": "WERE",
      "transformed": "If the flat weren't so noisy, I could sleep without earplugs.",
      "alternatives": [
        "If the flat were quieter, I could sleep without earplugs.",
        "If the flat weren't so noisy, I would be able to sleep without earplugs."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 197,
      "original": "She doesn't trust him, so she won't tell him the secret.",
      "key_word": "IF",
      "transformed": "If she trusted him, she would tell him the secret.",
      "category": "Second Conditional"
    },
    {
      "id": 198,
      "original": "We don't have a spare key, so we must wait for the locksmith.",
      "key_word": "HAD",
      "transformed": "If we had a spare key, we wouldn't have to wait for the locksmith.",
      "category": "Second Conditional"
    },
    {
      "id": 199,
      "original": "He isn't old enough to rent a van for the move.",
      "key_word": "WERE",
      "transformed": "If he were older, he could rent a van for the move.",
      "category": "Second Conditional"
    },
    {
      "id": 200,
      "original": "I'm allergic to nuts, so I can't try that homemade cake.",
      "key_word": "IF",
      "transformed": "If I weren't allergic to nuts, I could try that homemade cake.",
      "alternatives": [
        "If I wasn't allergic to nuts, I could try that homemade cake.",
        "If I weren't allergic to nuts, I would be able to try that homemade cake."
      ],
      "category": "Second Conditional"
    },
    {
      "id": 201,
      "original": "They don't train regularly, so their stamina is poor.",
      "key_word": "WOULD",
      "transformed": "If they trained regularly, their stamina would be better.",
      "category": "Second Conditional"
    },
    {
      "id": 202,
      "original": "You shouldn't spend all your savings on a single cryptocurrency.",
      "key_word": "WERE",
      "transformed": "If I were you, I wouldn't spend all my savings on a single cryptocurrency.",
      "category": "Second Conditional"
    },
    {
      "id": 203,
      "original": "The library closes at eight, so we can't stay there until midnight.",
      "key_word": "DIDN'T",
      "transformed": "If the library didn't close at eight, we could stay there until midnight.",
      "category": "Second Conditional"
    },
    {
      "id": 204,
      "original": "He lacks confidence, so he rarely speaks in public.",
      "key_word": "HAD",
      "transformed": "If he had more confidence, he would speak in public more often.",
      "category": "Second Conditional"
    },
    {
      "id": 205,
      "original": "I didn't set my alarm, so I overslept and missed the first lecture.",
      "key_word": "IF",
      "transformed": "If I had set my alarm, I wouldn't have overslept and missed the first lecture.",
      "category": "Third Conditional"
    },
    {
      "id": 206,
      "original": "She didn't wear a coat, so she caught a terrible cold.",
      "key_word": "WOULD",
      "transformed": "If she had worn a coat, she wouldn't have caught a terrible cold.",
      "category": "Third Conditional"
    },
    {
      "id": 207,
      "original": "We arrived late at the airport, so we missed our connecting flight.",
      "key_word": "HAD",
      "transformed": "If we hadn't arrived late at the airport, we wouldn't have missed our connecting flight.",
      "category": "Third Conditional"
    },
    {
      "id": 208,
      "original": "He forgot his umbrella, so he got completely soaked on the way home.",
      "key_word": "IF",
      "transformed": "If he hadn't forgotten his umbrella, he wouldn't have got soaked on the way home.",
      "alternatives": [
        "If he hadn't forgotten his umbrella, he wouldn't have gotten soaked on the way home."
      ],
      "category": "Third Conditional"
    },
    {
      "id": 209,
      "original": "They didn't check the oil level, so the engine broke down on the motorway.",
      "key_word": "WOULD",
      "transformed": "If they had checked the oil level, the engine wouldn't have broken down on the motorway.",
      "category": "Third Conditional"
    },
    {
      "id": 210,
      "original": "I didn't know you were vegetarian, so I cooked chicken pasta.",
      "key_word": "KNOWN",
      "transformed": "If I had known you were vegetarian, I wouldn't have cooked chicken pasta.",
      "category": "Third Conditional"
    },
    {
      "id": 211,
      "original": "She twisted her ankle during warm-up, so she couldn't finish the marathon.",
      "key_word": "COULD",
      "transformed": "If she hadn't twisted her ankle during warm-up, she could have finished the marathon.",
      "category": "Third Conditional"
    },
    {
      "id": 212,
      "original": "We didn't book tickets online, so we had to queue for two hours.",
      "key_word": "IF",
      "transformed": "If we had booked tickets online, we wouldn't have had to queue for two hours.",
      "category": "Third Conditional"
    },
    {
      "id": 213,
      "original": "He drove too fast in the rain and skidded off the road.",
      "key_word": "HADN'T",
      "transformed": "If he hadn't driven too fast in the rain, he wouldn't have skidded off the road.",
      "category": "Third Conditional"
    },
    {
      "id": 214,
      "original": "I lost my notes, so I couldn't revise properly for the history test.",
      "key_word": "COULD",
      "transformed": "If I hadn't lost my notes, I could have revised properly for the history test.",
      "category": "Third Conditional"
    },
    {
      "id": 215,
      "original": "The shop closed early, so we didn't manage to buy the present.",
      "key_word": "MIGHT",
      "transformed": "If the shop hadn't closed early, we might have managed to buy the present.",
      "category": "Third Conditional"
    },
    {
      "id": 216,
      "original": "She didn't read the email carefully, so she went to the wrong building.",
      "key_word": "IF",
      "transformed": "If she had read the email carefully, she wouldn't have gone to the wrong building.",
      "category": "Third Conditional"
    },
    {
      "id": 217,
      "original": "They spent too much money on souvenirs, so they ran out of cash.",
      "key_word": "WOULD",
      "transformed": "If they hadn't spent so much money on souvenirs, they wouldn't have run out of cash.",
      "category": "Third Conditional"
    },
    {
      "id": 218,
      "original": "I didn't charge my camera, so I couldn't take any photos at the concert.",
      "key_word": "HAD",
      "transformed": "If I had charged my camera, I could have taken photos at the concert.",
      "category": "Third Conditional"
    },
    {
      "id": 219,
      "original": "He didn't take the shortcut, so he got stuck in the traffic jam.",
      "key_word": "IF",
      "transformed": "If he had taken the shortcut, he wouldn't have got stuck in the traffic jam.",
      "alternatives": [
        "If he had taken the shortcut, he wouldn't have gotten stuck in the traffic jam."
      ],
      "category": "Third Conditional"
    },
    {
      "id": 220,
      "original": "We didn't hear the announcement, so we waited at the wrong gate.",
      "key_word": "WOULD",
      "transformed": "If we had heard the announcement, we wouldn't have waited at the wrong gate.",
      "category": "Third Conditional"
    },
    {
      "id": 221,
      "original": "She stayed up until three playing games, so she fell asleep in class.",
      "key_word": "HADN'T",
      "transformed": "If she hadn't stayed up until three playing games, she wouldn't have fallen asleep in class.",
      "category": "Third Conditional"
    },
    {
      "id": 222,
      "original": "I didn't double-check the bank transfer, so I sent the wrong amount.",
      "key_word": "IF",
      "transformed": "If I had double-checked the bank transfer, I wouldn't have sent the wrong amount.",
      "category": "Third Conditional"
    },
    {
      "id": 223,
      "original": "The goalkeeper slipped on the wet grass, so the opposing team scored.",
      "key_word": "MIGHT",
      "transformed": "If the goalkeeper hadn't slipped on the wet grass, the opposing team might not have scored.",
      "category": "Third Conditional"
    },
    {
      "id": 224,
      "original": "They didn't ask for directions, so they walked two miles in the wrong direction.",
      "key_word": "WOULD",
      "transformed": "If they had asked for directions, they wouldn't have walked two miles in the wrong direction.",
      "category": "Third Conditional"
    },
    {
      "id": 225,
      "original": "He didn't apply before the deadline, so he wasn't invited to the interview.",
      "key_word": "HAD",
      "transformed": "If he had applied before the deadline, he would have been invited to the interview.",
      "category": "Third Conditional"
    },
    {
      "id": 226,
      "original": "I ate the expired yoghurt and got food poisoning.",
      "key_word": "IF",
      "transformed": "If I hadn't eaten the expired yoghurt, I wouldn't have got food poisoning.",
      "alternatives": [
        "If I hadn't eaten the expired yoghurt, I wouldn't have gotten food poisoning."
      ],
      "category": "Third Conditional"
    },
    {
      "id": 227,
      "original": "She didn't lock her bicycle, so someone stole it outside the library.",
      "key_word": "WOULD",
      "transformed": "If she had locked her bicycle, nobody would have stolen it outside the library.",
      "alternatives": [
        "If she had locked her bicycle, no one would have stolen it outside the library."
      ],
      "category": "Third Conditional"
    },
    {
      "id": 228,
      "original": "We didn't bring a torch, so we couldn't explore the cave.",
      "key_word": "COULD",
      "transformed": "If we had brought a torch, we could have explored the cave.",
      "category": "Third Conditional"
    },
    {
      "id": 229,
      "original": "He ignored the warning signs and stepped onto the thin ice.",
      "key_word": "HADN'T",
      "transformed": "If he hadn't ignored the warning signs, he wouldn't have stepped onto the thin ice.",
      "category": "Third Conditional"
    },
    {
      "id": 230,
      "original": "I didn't save the document before the power cut, so I lost three pages.",
      "key_word": "IF",
      "transformed": "If I had saved the document before the power cut, I wouldn't have lost three pages.",
      "category": "Third Conditional"
    },
    {
      "id": 231,
      "original": "She missed the last bus, so she had to walk five kilometres home.",
      "key_word": "WOULD",
      "transformed": "If she hadn't missed the last bus, she wouldn't have had to walk five kilometres home.",
      "category": "Third Conditional"
    },
    {
      "id": 232,
      "original": "They didn't insure their luggage, so they didn't receive any compensation.",
      "key_word": "COULD",
      "transformed": "If they had insured their luggage, they could have received compensation.",
      "category": "Third Conditional"
    },
    {
      "id": 233,
      "original": "He spoke rudely to the manager, so he was fired on the spot.",
      "key_word": "HADN'T",
      "transformed": "If he hadn't spoken rudely to the manager, he wouldn't have been fired on the spot.",
      "category": "Third Conditional"
    },
    {
      "id": 234,
      "original": "We left the window open all night, so the living room got flooded.",
      "key_word": "IF",
      "transformed": "If we hadn't left the window open all night, the living room wouldn't have got flooded.",
      "alternatives": [
        "If we hadn't left the window open all night, the living room wouldn't have gotten flooded."
      ],
      "category": "Third Conditional"
    },
    {
      "id": 235,
      "original": "I don't see my friends very often.",
      "key_word": "WISH",
      "transformed": "I wish I saw my friends very often.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 236,
      "original": "I hate living in the city centre.",
      "key_word": "WISH",
      "transformed": "I wish I didn't live in the city centre.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 237,
      "original": "It's a pity I don't have a bigger bedroom.",
      "key_word": "ONLY",
      "transformed": "If only I had a bigger bedroom.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 238,
      "original": "I'm sorry I can't play the guitar well.",
      "key_word": "WISH",
      "transformed": "I wish I could play the guitar well.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 239,
      "original": "She hates having to wear a uniform at work.",
      "key_word": "WISHES",
      "transformed": "She wishes she didn't have to wear a uniform at work.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 240,
      "original": "It's a shame we don't live closer to the mountains.",
      "key_word": "ONLY",
      "transformed": "If only we lived closer to the mountains.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 241,
      "original": "I don't know how to swim properly, and I'm sad about it.",
      "key_word": "WISH",
      "transformed": "I wish I knew how to swim properly.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 242,
      "original": "My flat is too small to host dinner parties.",
      "key_word": "WISH",
      "transformed": "I wish my flat were bigger so I could host dinner parties.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 243,
      "original": "It's a pity there aren't more direct trains to Granada.",
      "key_word": "ONLY",
      "transformed": "If only there were more direct trains to Granada.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 244,
      "original": "He regrets not being tall enough for the volleyball team.",
      "key_word": "WISHES",
      "transformed": "He wishes he were tall enough for the volleyball team.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 245,
      "original": "I'm frustrated because I don't have enough time to read novels.",
      "key_word": "WISH",
      "transformed": "I wish I had enough time to read novels.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 246,
      "original": "It's a shame you live so far away from Seville.",
      "key_word": "ONLY",
      "transformed": "If only you didn't live so far away from Seville.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 247,
      "original": "She would love to speak Mandarin without an accent.",
      "key_word": "WISHES",
      "transformed": "She wishes she spoke Mandarin without an accent.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 248,
      "original": "I hate being so shy when I meet new people.",
      "key_word": "WISH",
      "transformed": "I wish I weren't so shy when I meet new people.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 249,
      "original": "It's a pity our weekend is only two days long.",
      "key_word": "ONLY",
      "transformed": "If only our weekend were longer than two days.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 250,
      "original": "I failed the exam because I didn't study enough.",
      "key_word": "WISH",
      "transformed": "I wish I had studied more.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 251,
      "original": "I regret not buying that concert ticket when it was cheap.",
      "key_word": "WISH",
      "transformed": "I wish I had bought that concert ticket when it was cheap.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 252,
      "original": "It was a mistake to tell him about our secret plan.",
      "key_word": "ONLY",
      "transformed": "If only I hadn't told him about our secret plan.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 253,
      "original": "She regrets leaving her job without having another offer.",
      "key_word": "WISHES",
      "transformed": "She wishes she hadn't left her job without having another offer.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 254,
      "original": "We are sorry we didn't visit the Alhambra during our trip.",
      "key_word": "WISH",
      "transformed": "We wish we had visited the Alhambra during our trip.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 255,
      "original": "I shouldn't have drunk three espressos before going to bed.",
      "key_word": "ONLY",
      "transformed": "If only I hadn't drunk three espressos before going to bed.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 256,
      "original": "He regrets not apologising to his coach after the match.",
      "key_word": "WISHES",
      "transformed": "He wishes he had apologised to his coach after the match.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 257,
      "original": "It's a pity you didn't call me before leaving the station.",
      "key_word": "WISH",
      "transformed": "I wish you had called me before leaving the station.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 258,
      "original": "They regret spending all their budget on the first two days.",
      "key_word": "ONLY",
      "transformed": "If only they hadn't spent all their budget on the first two days.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 259,
      "original": "I'm sorry I forgot to wish my grandmother a happy birthday.",
      "key_word": "WISH",
      "transformed": "I wish I hadn't forgotten to wish my grandmother a happy birthday.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 260,
      "original": "She shouldn't have trusted that suspicious website with her password.",
      "key_word": "WISHES",
      "transformed": "She wishes she hadn't trusted that suspicious website with her password.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 261,
      "original": "It was a mistake not to take a jacket to the stadium.",
      "key_word": "ONLY",
      "transformed": "If only I had taken a jacket to the stadium.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 262,
      "original": "We regret selling our old mountain bikes last spring.",
      "key_word": "WISH",
      "transformed": "We wish we hadn't sold our old mountain bikes last spring.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 263,
      "original": "He is sorry he missed the opportunity to study in Ireland.",
      "key_word": "WISHES",
      "transformed": "He wishes he hadn't missed the opportunity to study in Ireland.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 264,
      "original": "I shouldn't have dropped German after my first year of high school.",
      "key_word": "WISH",
      "transformed": "I wish I hadn't dropped German after my first year of high school.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 265,
      "original": "My brother snores and it really annoys me.",
      "key_word": "WISH",
      "transformed": "I wish he wouldn't snore.",
      "alternatives": [
        "I wish my brother wouldn't snore.",
        "I wish he would stop snoring."
      ],
      "category": "I wish / If only + Would"
    },
    {
      "id": 266,
      "original": "It annoys me that my neighbour plays the drums at midnight.",
      "key_word": "WISH",
      "transformed": "I wish my neighbour wouldn't play the drums at midnight.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 267,
      "original": "Please stop interrupting me while I'm trying to concentrate.",
      "key_word": "WISH",
      "transformed": "I wish you would stop interrupting me while I'm trying to concentrate.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 268,
      "original": "It really bothers her that her brother leaves wet towels on the floor.",
      "key_word": "WISHES",
      "transformed": "She wishes her brother wouldn't leave wet towels on the floor.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 269,
      "original": "I'm fed up with this rain not stopping all week.",
      "key_word": "ONLY",
      "transformed": "If only this rain would stop.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 270,
      "original": "It irritates me when people check their bright phones in the cinema.",
      "key_word": "WISH",
      "transformed": "I wish people wouldn't check their bright phones in the cinema.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 271,
      "original": "I hate it when the teacher gives us extra homework on Fridays.",
      "key_word": "WISH",
      "transformed": "I wish the teacher wouldn't give us extra homework on Fridays.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 272,
      "original": "It annoys us that the bus never arrives on schedule.",
      "key_word": "ONLY",
      "transformed": "If only the bus would arrive on schedule.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 273,
      "original": "Stop tapping your pen on the desk, please!",
      "key_word": "WISH",
      "transformed": "I wish you wouldn't tap your pen on the desk.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 274,
      "original": "It frustrates him that his teammates don't pass the ball sooner.",
      "key_word": "WISHES",
      "transformed": "He wishes his teammates would pass the ball sooner.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 275,
      "original": "I'm tired of my roommate borrowing my headphones without asking.",
      "key_word": "WISH",
      "transformed": "I wish my roommate wouldn't borrow my headphones without asking.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 276,
      "original": "It really gets on my nerves that the dogs next door bark all night.",
      "key_word": "ONLY",
      "transformed": "If only the dogs next door wouldn't bark all night.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 277,
      "original": "She is annoyed because her friend always cancels plans at the last minute.",
      "key_word": "WISHES",
      "transformed": "She wishes her friend wouldn't always cancel plans at the last minute.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 278,
      "original": "I hate how slowly this old printer works when I'm in a rush.",
      "key_word": "ONLY",
      "transformed": "If only this old printer would work faster when I'm in a rush.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 279,
      "original": "It bothers me that drivers don't slow down near pedestrian crossings.",
      "key_word": "WISH",
      "transformed": "I wish drivers would slow down near pedestrian crossings.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 280,
      "original": "Local artisans manufacture these ceramic tiles in Valencia.",
      "key_word": "MANUFACTURED",
      "transformed": "These ceramic tiles are manufactured in Valencia by local artisans.",
      "alternatives": [
        "These ceramic tiles are manufactured by local artisans in Valencia."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 281,
      "original": "The jury awarded Clara the first prize for her documentary.",
      "key_word": "AWARDED",
      "transformed": "Clara was awarded the first prize for her documentary by the jury.",
      "alternatives": [
        "Clara was awarded the first prize for her documentary."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 282,
      "original": "Nobody has repaired the broken lift in our building yet.",
      "key_word": "BEEN",
      "transformed": "The broken lift in our building has not been repaired yet.",
      "alternatives": [
        "The broken lift in our building hasn't been repaired yet."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 283,
      "original": "Visitors must wear safety helmets inside the laboratory.",
      "key_word": "BE",
      "transformed": "Safety helmets must be worn by visitors inside the laboratory.",
      "alternatives": [
        "Safety helmets must be worn inside the laboratory by visitors.",
        "Safety helmets must be worn inside the laboratory."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 284,
      "original": "The university will publish the scholarship list next Monday.",
      "key_word": "PUBLISHED",
      "transformed": "The scholarship list will be published by the university next Monday.",
      "alternatives": [
        "The scholarship list will be published next Monday by the university.",
        "The scholarship list will be published next Monday."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 285,
      "original": "A famous journalist was interviewing the marathon winner live on TV.",
      "key_word": "BEING",
      "transformed": "The marathon winner was being interviewed live on TV by a famous journalist.",
      "alternatives": [
        "The marathon winner was being interviewed by a famous journalist live on TV."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 286,
      "original": "The headteacher gave our class an extra week to hand in the essay.",
      "key_word": "GIVEN",
      "transformed": "Our class was given an extra week to hand in the essay by the headteacher.",
      "alternatives": [
        "Our class was given an extra week by the headteacher to hand in the essay.",
        "Our class was given an extra week to hand in the essay."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 287,
      "original": "People say that this historic theatre dates back to 1790.",
      "key_word": "SAID",
      "transformed": "This historic theatre is said to date back to 1790.",
      "alternatives": [
        "It is said that this historic theatre dates back to 1790."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 288,
      "original": "Experts believe that regular sleep improves memory retention.",
      "key_word": "BELIEVED",
      "transformed": "It is believed that regular sleep improves memory retention.",
      "alternatives": [
        "Regular sleep is believed to improve memory retention."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 289,
      "original": "A plumber is fixing our bathroom tap tomorrow afternoon.",
      "key_word": "HAVING",
      "transformed": "We are having our bathroom tap fixed tomorrow afternoon.",
      "alternatives": [
        "We are having our bathroom tap fixed by a plumber tomorrow afternoon.",
        "We're having our bathroom tap fixed tomorrow afternoon."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 290,
      "original": "Burglars broke into the museum during last night's power cut.",
      "key_word": "INTO",
      "transformed": "The museum was broken into during last night's power cut.",
      "alternatives": [
        "The museum was broken into by burglars during last night's power cut."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 291,
      "original": "Staff should not leave confidential files on reception desks.",
      "key_word": "ALLOWED",
      "transformed": "Confidential files should not be allowed to be left on reception desks.",
      "alternatives": [
        "Staff should not be allowed to leave confidential files on reception desks."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 292,
      "original": "Engineers are redesigning the old railway station this year.",
      "key_word": "BEING",
      "transformed": "The old railway station is being redesigned by engineers this year.",
      "alternatives": [
        "The old railway station is being redesigned this year."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 293,
      "original": "An optician tested Sara's eyes before she got her driving licence.",
      "key_word": "TESTED",
      "transformed": "Sara had her eyes tested before she got her driving licence.",
      "alternatives": [
        "Sara got her eyes tested before she got her driving licence.",
        "Sara had her eyes tested by an optician before she got her driving licence."
      ],
      "category": "Passive Voice"
    },
    {
      "id": 294,
      "original": "'I finished reviewing all my notes an hour ago,' Marco told Lucia.",
      "key_word": "TOLD",
      "transformed": "Marco told Lucia that he had finished reviewing all his notes an hour before.",
      "alternatives": [
        "Marco told Lucia he had finished reviewing all his notes an hour earlier."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 295,
      "original": "'I bought these hiking boots yesterday,' said Alba.",
      "key_word": "BEFORE",
      "transformed": "Alba said that she had bought those hiking boots the day before.",
      "alternatives": [
        "Alba said she had bought those hiking boots the day before."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 296,
      "original": "'Our flight will take off tomorrow morning,' the captain announced.",
      "key_word": "FOLLOWING",
      "transformed": "The captain announced that their flight would take off the following morning.",
      "alternatives": [
        "The captain announced their flight would take off the following morning."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 297,
      "original": "'What time does the museum close on Sundays?' the tourist asked me.",
      "key_word": "WHAT",
      "transformed": "The tourist asked me what time the museum closed on Sundays.",
      "category": "Reported Speech"
    },
    {
      "id": 298,
      "original": "'Did you remember to lock the back door?' Dad asked my brother.",
      "key_word": "WHETHER",
      "transformed": "Dad asked my brother whether he had remembered to lock the back door.",
      "alternatives": [
        "Dad asked my brother whether he remembered to lock the back door."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 299,
      "original": "'Why don't we take the night train instead of flying?' said Paula.",
      "key_word": "SUGGESTED",
      "transformed": "Paula suggested taking the night train instead of flying.",
      "alternatives": [
        "Paula suggested that we take the night train instead of flying.",
        "Paula suggested that they take the night train instead of flying."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 300,
      "original": "'You should back up your essay on an external drive,' the tutor told Diego.",
      "key_word": "ADVISED",
      "transformed": "The tutor advised Diego to back up his essay on an external drive.",
      "category": "Reported Speech"
    },
    {
      "id": 301,
      "original": "'I am really sorry I arrived late to the rehearsal,' Leo said to us.",
      "key_word": "APOLOGISED",
      "transformed": "Leo apologised for arriving late to the rehearsal.",
      "alternatives": [
        "Leo apologised to us for arriving late to the rehearsal.",
        "Leo apologised for having arrived late to the rehearsal."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 302,
      "original": "'I did not delete your presentation folder,' Emma insisted.",
      "key_word": "DENIED",
      "transformed": "Emma denied deleting my presentation folder.",
      "alternatives": [
        "Emma denied having deleted my presentation folder.",
        "Emma denied that she had deleted my presentation folder."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 303,
      "original": "'Don't forget to bring your ID card to the exam,' the teacher said to us.",
      "key_word": "REMINDED",
      "transformed": "The teacher reminded us to bring our ID cards to the exam.",
      "alternatives": [
        "The teacher reminded us to bring our ID card to the exam."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 304,
      "original": "'I will not sign the contract until I read every clause,' the singer said.",
      "key_word": "REFUSED",
      "transformed": "The singer refused to sign the contract until she read every clause.",
      "alternatives": [
        "The singer refused to sign the contract until he read every clause."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 305,
      "original": "'Don't swim near the rocks during high tide,' the lifeguard told the teenagers.",
      "key_word": "WARNED",
      "transformed": "The lifeguard warned the teenagers not to swim near the rocks during high tide.",
      "category": "Reported Speech"
    },
    {
      "id": 306,
      "original": "'I cannot attend tomorrow's meeting because of a dental appointment,' said Javier.",
      "key_word": "COULD",
      "transformed": "Javier said that he could not attend the next day's meeting because of a dental appointment.",
      "alternatives": [
        "Javier said he could not attend the following day's meeting because of a dental appointment.",
        "Javier said that he couldn't attend the following day's meeting because of a dental appointment."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 307,
      "original": "'We must submit the lab report before Friday afternoon,' explained Nora.",
      "key_word": "HAD",
      "transformed": "Nora explained that they had to submit the lab report before Friday afternoon.",
      "alternatives": [
        "Nora explained that we had to submit the lab report before Friday afternoon."
      ],
      "category": "Reported Speech"
    },
    {
      "id": 308,
      "original": "Daniel began training for the half marathon four months ago.",
      "key_word": "BEEN",
      "transformed": "Daniel has been training for the half marathon for four months.",
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 309,
      "original": "The last time we visited Lisbon was in 2021.",
      "key_word": "SINCE",
      "transformed": "We have not visited Lisbon since 2021.",
      "alternatives": [
        "We haven't visited Lisbon since 2021.",
        "We have not been to Lisbon since 2021."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 310,
      "original": "I have never tasted Japanese ramen before.",
      "key_word": "FIRST",
      "transformed": "This is the first time I have ever tasted Japanese ramen.",
      "alternatives": [
        "It is the first time I have ever tasted Japanese ramen.",
        "This is the first time I have tasted Japanese ramen."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 311,
      "original": "During the documentary, the Wi-Fi connection dropped twice.",
      "key_word": "WHILE",
      "transformed": "The Wi-Fi connection dropped twice while we were watching the documentary.",
      "alternatives": [
        "While we were watching the documentary, the Wi-Fi connection dropped twice."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 312,
      "original": "First Clara packed her carry-on bag, and then she ordered a taxi.",
      "key_word": "AFTER",
      "transformed": "After Clara had packed her carry-on bag, she ordered a taxi.",
      "alternatives": [
        "Clara ordered a taxi after she had packed her carry-on bag."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 313,
      "original": "Ten years ago, people bought physical train tickets at the counter.",
      "key_word": "USED",
      "transformed": "Ten years ago, people used to buy physical train tickets at the counter.",
      "alternatives": [
        "People used to buy physical train tickets at the counter ten years ago."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 314,
      "original": "The parcel is supposed to arrive today, but it is not here.",
      "key_word": "YET",
      "transformed": "The parcel has not arrived yet.",
      "alternatives": [
        "The parcel hasn't arrived yet."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 315,
      "original": "How long ago did Sara move into her shared flat?",
      "key_word": "LONG",
      "transformed": "How long has Sara lived in her shared flat?",
      "alternatives": [
        "How long has Sara been living in her shared flat?"
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 316,
      "original": "Lucas hasn't played chess for nearly six years.",
      "key_word": "SINCE",
      "transformed": "It has been nearly six years since Lucas last played chess.",
      "alternatives": [
        "It is nearly six years since Lucas last played chess.",
        "It's been nearly six years since Lucas played chess."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 317,
      "original": "Elena plans to study Biomedical Engineering after Bachillerato.",
      "key_word": "GOING",
      "transformed": "Elena is going to study Biomedical Engineering after Bachillerato.",
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 318,
      "original": "Tomorrow at 9 p.m., we will be in the middle of watching the final match.",
      "key_word": "BE",
      "transformed": "Tomorrow at 9 p.m., we will be watching the final match.",
      "alternatives": [
        "We will be watching the final match tomorrow at 9 p.m."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 319,
      "original": "The mechanics will finish repairing the tram before next Friday.",
      "key_word": "HAVE",
      "transformed": "By next Friday, the mechanics will have finished repairing the tram.",
      "alternatives": [
        "The mechanics will have finished repairing the tram by next Friday."
      ],
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 320,
      "original": "When my grandfather was young, he walked five kilometres to school daily.",
      "key_word": "USED",
      "transformed": "When my grandfather was young, he used to walk five kilometres to school daily.",
      "category": "Verb Tenses Transformation"
    },
    {
      "id": 321,
      "original": "The board has just announced the new academic calendar.",
      "key_word": "AGO",
      "transformed": "The board announced the new academic calendar a moment ago.",
      "alternatives": [
        "The board announced the new academic calendar a few moments ago.",
        "The board announced the new academic calendar just a moment ago."
      ],
      "category": "Verb Tenses Transformation"
    }
  ],
  "mode3": [
    {
      "id": 1,
      "title": "A Smart Autumn Getaway",
      "text": "Planning a trip {{gap1}} requires good organization if you want to save money. Last year, my sister and I decided to book our tickets three months {{gap2}} to find a great {{gap3}} on flights to Rome. We chose to travel {{gap4}} in November so we could avoid the massive summer crowds. Since it was a short trip, we only packed {{gap5}} luggage to avoid paying extra airport fees. Our hotel was in a fantastic {{gap6}} right next to the Colosseum. Unfortunately, on our way back, our flight got {{gap7}} for four hours due to a storm.",
      "blanks": [
        {
          "index": 1,
          "answer": "abroad",
          "hint": "OVERSEAS"
        },
        {
          "index": 2,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 3,
          "answer": "deal",
          "hint": "BARGAIN"
        },
        {
          "index": 4,
          "answer": "off season",
          "hint": "LOW SEASON"
        },
        {
          "index": 5,
          "answer": "carry-on",
          "hint": "HAND LUGGAGE"
        },
        {
          "index": 6,
          "answer": "location",
          "hint": "PLACE"
        },
        {
          "index": 7,
          "answer": "delayed",
          "hint": "LATE"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 2,
      "title": "Hiking in the Scottish Highlands",
      "text": "If you love spending time {{gap1}}, Scotland is an unforgettable destination. Last spring, my friends and I followed a famous mountain {{gap2}} through the Highlands. Because the weather there is unpredictable, we reserved our mountain cabins {{gap3}} before leaving Spain. We also found a cheap flight {{gap4}} online because we travelled {{gap5}} instead of waiting for July. We didn't bring heavy suitcases; we just carried a small {{gap6}} backpack with warm clothes. On the third day, we had an {{gap7}} stay in a tiny village surrounded by lakes.",
      "blanks": [
        {
          "index": 1,
          "answer": "outdoors",
          "hint": "OUTSIDE"
        },
        {
          "index": 2,
          "answer": "trail",
          "hint": "PATH"
        },
        {
          "index": 3,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 4,
          "answer": "deal",
          "hint": "BARGAIN"
        },
        {
          "index": 5,
          "answer": "off season",
          "hint": "LOW SEASON"
        },
        {
          "index": 6,
          "answer": "carry-on",
          "hint": "HAND LUGGAGE"
        },
        {
          "index": 7,
          "answer": "overnight",
          "hint": "ONE-NIGHT"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 3,
      "title": "The Long Journey to Australia",
      "text": "Studying {{gap1}} in Sydney was the best experience of my life, although the journey there was exhausting. I bought my plane ticket six months {{gap2}}, which helped me get a reasonable {{gap3}}. Because Australia is so far away, I had a twelve-hour {{gap4}} in Singapore. Instead of sleeping at the terminal, I booked an {{gap5}} hotel near the airport. I kept my toothbrush and clean clothes in my {{gap6}} bag so I wouldn't need my big suitcase. Thankfully, none of my flights were {{gap7}}, and I arrived on time.",
      "blanks": [
        {
          "index": 1,
          "answer": "abroad",
          "hint": "OVERSEAS"
        },
        {
          "index": 2,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 3,
          "answer": "deal",
          "hint": "BARGAIN"
        },
        {
          "index": 4,
          "answer": "stopover",
          "hint": "FLIGHT BREAK"
        },
        {
          "index": 5,
          "answer": "overnight",
          "hint": "ONE-NIGHT"
        },
        {
          "index": 6,
          "answer": "carry-on",
          "hint": "HAND LUGGAGE"
        },
        {
          "index": 7,
          "answer": "delayed",
          "hint": "LATE"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 4,
      "title": "An Unexpected Night in Lisbon",
      "text": "Last month I flew to Lisbon on my way to Brazil. Originally, I only had a two-hour {{gap1}} at the airport, so I didn't book a hotel {{gap2}}. However, due to technical problems, our connecting flight was {{gap3}} until the next morning. The airline gave all passengers an {{gap4}} voucher for a hotel in a lovely {{gap5}} overlooking the river. Since I had my essentials in my {{gap6}} bag, I felt comfortable. The next day, before flying {{gap7}} to South America, I even walked along a coastal {{gap8}}.",
      "blanks": [
        {
          "index": 1,
          "answer": "stopover",
          "hint": "FLIGHT BREAK"
        },
        {
          "index": 2,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 3,
          "answer": "delayed",
          "hint": "LATE"
        },
        {
          "index": 4,
          "answer": "overnight",
          "hint": "ONE-NIGHT"
        },
        {
          "index": 5,
          "answer": "location",
          "hint": "PLACE"
        },
        {
          "index": 6,
          "answer": "carry-on",
          "hint": "HAND LUGGAGE"
        },
        {
          "index": 7,
          "answer": "abroad",
          "hint": "OVERSEAS"
        },
        {
          "index": 8,
          "answer": "trail",
          "hint": "PATH"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 5,
      "title": "Camping in the Pyrenees",
      "text": "Many people prefer luxury resorts, but I would rather sleep {{gap1}} under the stars. Every October, when resorts operate {{gap2}}, my brother and I look for a good {{gap3}} on train tickets to the Pyrenees. We always plan our route {{gap4}} so we don't get lost. Last year, we followed a steep forest {{gap5}} that led to a peaceful {{gap6}} by a waterfall. We spent an {{gap7}} camp there before walking back down the next morning.",
      "blanks": [
        {
          "index": 1,
          "answer": "outdoors",
          "hint": "OUTSIDE"
        },
        {
          "index": 2,
          "answer": "off season",
          "hint": "LOW SEASON"
        },
        {
          "index": 3,
          "answer": "deal",
          "hint": "BARGAIN"
        },
        {
          "index": 4,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 5,
          "answer": "trail",
          "hint": "PATH"
        },
        {
          "index": 6,
          "answer": "location",
          "hint": "PLACE"
        },
        {
          "index": 7,
          "answer": "overnight",
          "hint": "ONE-NIGHT"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 6,
      "title": "Tips for Budget Travellers",
      "text": "Travelling {{gap1}} doesn't have to be expensive if you follow a few simple rules. First, never buy tickets at the last minute; always book {{gap2}} to secure the best {{gap3}}. Second, try to travel {{gap4}}, such as in February or November, when hotels lower their prices. Third, choose flights with a short {{gap5}} instead of expensive direct flights, and pack only a {{gap6}} suitcase. Finally, pick a central {{gap7}} so you can walk everywhere.",
      "blanks": [
        {
          "index": 1,
          "answer": "abroad",
          "hint": "OVERSEAS"
        },
        {
          "index": 2,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 3,
          "answer": "deal",
          "hint": "BARGAIN"
        },
        {
          "index": 4,
          "answer": "off season",
          "hint": "LOW SEASON"
        },
        {
          "index": 5,
          "answer": "stopover",
          "hint": "FLIGHT BREAK"
        },
        {
          "index": 6,
          "answer": "carry-on",
          "hint": "HAND LUGGAGE"
        },
        {
          "index": 7,
          "answer": "location",
          "hint": "PLACE"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 7,
      "title": "A Rainy Adventure in Costa Rica",
      "text": "When we travelled {{gap1}} to Costa Rica, we wanted to explore the rainforest {{gap2}}. We booked a local guide {{gap3}} because the jungle {{gap4}} can be difficult to follow alone. Although we went {{gap5}} during the rainy month of October, we got an amazing {{gap6}} on a cabin in a remote {{gap7}}. Even when our return bus was {{gap8}} by a mudslide, we enjoyed every minute.",
      "blanks": [
        {
          "index": 1,
          "answer": "abroad",
          "hint": "OVERSEAS"
        },
        {
          "index": 2,
          "answer": "outdoors",
          "hint": "OUTSIDE"
        },
        {
          "index": 3,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 4,
          "answer": "trail",
          "hint": "PATH"
        },
        {
          "index": 5,
          "answer": "off season",
          "hint": "LOW SEASON"
        },
        {
          "index": 6,
          "answer": "deal",
          "hint": "BARGAIN"
        },
        {
          "index": 7,
          "answer": "location",
          "hint": "PLACE"
        },
        {
          "index": 8,
          "answer": "delayed",
          "hint": "LATE"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 8,
      "title": "Chaos at the Airport",
      "text": "Last Friday, my flight to Berlin was {{gap1}} for six hours because of heavy snow. I was glad I had checked in online {{gap2}} and only had a small {{gap3}} bag with me. Because we missed our connection during the {{gap4}} in Frankfurt, the airline had to pay for an {{gap5}} stay at an airport hotel. Even though the hotel's {{gap6}} was noisy, it was better than sleeping on a bench before arriving {{gap7}}.",
      "blanks": [
        {
          "index": 1,
          "answer": "delayed",
          "hint": "LATE"
        },
        {
          "index": 2,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 3,
          "answer": "carry-on",
          "hint": "HAND LUGGAGE"
        },
        {
          "index": 4,
          "answer": "stopover",
          "hint": "FLIGHT BREAK"
        },
        {
          "index": 5,
          "answer": "overnight",
          "hint": "ONE-NIGHT"
        },
        {
          "index": 6,
          "answer": "location",
          "hint": "PLACE"
        },
        {
          "index": 7,
          "answer": "abroad",
          "hint": "OVERSEAS"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 9,
      "title": "Walking the Camino",
      "text": "Walking a historic {{gap1}} in northern Spain attracts thousands of visitors from {{gap2}} every year. Most pilgrims prefer walking {{gap3}} in spring or autumn rather than in August. Walking {{gap4}} means hostels are quieter and you don't need to book every bed weeks {{gap5}}. Each pilgrim carries a light {{gap6}} backpack for each {{gap7}} stop along the way.",
      "blanks": [
        {
          "index": 1,
          "answer": "trail",
          "hint": "PATH"
        },
        {
          "index": 2,
          "answer": "abroad",
          "hint": "OVERSEAS"
        },
        {
          "index": 3,
          "answer": "outdoors",
          "hint": "OUTSIDE"
        },
        {
          "index": 4,
          "answer": "off season",
          "hint": "LOW SEASON"
        },
        {
          "index": 5,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 6,
          "answer": "carry-on",
          "hint": "HAND LUGGAGE"
        },
        {
          "index": 7,
          "answer": "overnight",
          "hint": "ONE-NIGHT"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 10,
      "title": "The Perfect Island Escape",
      "text": "We found an incredible holiday {{gap1}} to Greece by booking four months {{gap2}}. Our flight included a brief {{gap3}} in Athens before reaching the island. Despite a slightly {{gap4}} ferry, we arrived at our villa, which was in a cliffside {{gap5}} with sea views. We spent our days {{gap6}} exploring a hidden coastal {{gap7}}.",
      "blanks": [
        {
          "index": 1,
          "answer": "deal",
          "hint": "BARGAIN"
        },
        {
          "index": 2,
          "answer": "in advance",
          "hint": "BEFOREHAND"
        },
        {
          "index": 3,
          "answer": "stopover",
          "hint": "FLIGHT BREAK"
        },
        {
          "index": 4,
          "answer": "delayed",
          "hint": "LATE"
        },
        {
          "index": 5,
          "answer": "location",
          "hint": "PLACE"
        },
        {
          "index": 6,
          "answer": "outdoors",
          "hint": "OUTSIDE"
        },
        {
          "index": 7,
          "answer": "trail",
          "hint": "PATH"
        }
      ],
      "generalRule": "Vocabulario clave de viajes (Travel): abroad (en el extranjero), in advance (con antelación), deal (oferta), off season (temporada baja), carry-on (de mano), location (ubicación), delayed (retrasado), outdoors (al aire libre), trail (sendero), overnight (de una noche) y stopover (escala)."
    },
    {
      "id": 11,
      "title": "The Missed Flight to Lisbon",
      "text": "Last Friday turned into a disaster at the airport. I woke up late because my phone battery died overnight. If I {{gap1}} plugged it in before bed, my alarm {{gap2}} have rung on time. I rushed out without breakfast, hoping to catch the express bus, yet heavy traffic blocked the ring road. If only I {{gap3}} taken the metro instead! By the time I reached Terminal Two, boarding had already closed. The attendant said I could take the evening flight {{gap4}} that I paid a rebooking fee. Now I {{gap5}} I were more organised before trips. From now on, {{gap6}} I pack the night before, I won't go to sleep.",
      "blanks": [
        {
          "index": 1,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 2,
          "answer": "would",
          "alternatives": [
            "could",
            "might"
          ],
          "hint": "MODAL"
        },
        {
          "index": 3,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 4,
          "answer": "provided",
          "hint": "CONNECTOR (IF)"
        },
        {
          "index": 5,
          "answer": "wish",
          "hint": "WISH"
        },
        {
          "index": 6,
          "answer": "unless",
          "hint": "CONNECTOR (IF NOT)"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 12,
      "title": "Life in a Noisy Flat",
      "text": "Moving to the historic centre sounded exciting at first, yet living above a busy square has become exhausting. Every night, delivery trucks rumble past my window at four in the morning. I {{gap1}} I didn't live on such a noisy street! If my bedroom {{gap2}} facing the inner courtyard instead, I {{gap3}} sleep through the night without earplugs. To make things worse, my upstairs neighbour practises the electric guitar after midnight. If {{gap4}} he {{gap5}} use headphones when everyone else is resting! I've already started checking rental listings in quieter neighbourhoods. If I {{gap6}} a reasonably priced apartment near the park next month, I {{gap7}} sign the lease immediately without thinking twice.",
      "blanks": [
        {
          "index": 1,
          "answer": "wish",
          "hint": "WISH"
        },
        {
          "index": 2,
          "answer": "were",
          "alternatives": [
            "was"
          ],
          "hint": "BE"
        },
        {
          "index": 3,
          "answer": "could",
          "alternatives": [
            "would",
            "might"
          ],
          "hint": "MODAL (ABILITY)"
        },
        {
          "index": 4,
          "answer": "only",
          "hint": "IF ___ (REGRET)"
        },
        {
          "index": 5,
          "answer": "would",
          "hint": "MODAL"
        },
        {
          "index": 6,
          "answer": "find",
          "hint": "FIND"
        },
        {
          "index": 7,
          "answer": "will",
          "hint": "FUTURE MODAL"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 13,
      "title": "Preparing for the Final Exams",
      "text": "Two weeks before the university entrance exams, Elena realised she had fallen behind in mathematics and English. She wished she {{gap1}} started revising in April instead of leaving everything until May. Her tutor offered a clear plan: 'If you {{gap2}} four focused hours every afternoon, you {{gap3}} still reach the grade you need.' Research proves that if students {{gap4}} regularly and sleep eight hours, their brains retain far more information. Elena silenced her social media notifications in {{gap5}} they distracted her during mock tests. She knew she wouldn't feel ready {{gap6}} she practised twenty rephrasing exercises daily. If only she {{gap7}} stop panicking and trust her preparation!",
      "blanks": [
        {
          "index": 1,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 2,
          "answer": "study",
          "hint": "STUDY"
        },
        {
          "index": 3,
          "answer": "can",
          "alternatives": [
            "will",
            "may"
          ],
          "hint": "MODAL"
        },
        {
          "index": 4,
          "answer": "revise",
          "hint": "REVISE"
        },
        {
          "index": 5,
          "answer": "case",
          "hint": "IN ___"
        },
        {
          "index": 6,
          "answer": "unless",
          "hint": "CONNECTOR (IF NOT)"
        },
        {
          "index": 7,
          "answer": "could",
          "alternatives": [
            "would"
          ],
          "hint": "MODAL (ABILITY)"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 14,
      "title": "A Rainy Mountain Hike",
      "text": "Our autumn hike in Sierra Nevada taught us a lesson about mountain weather. Whenever the temperature {{gap1}} rapidly at high altitude, thick fog forms within minutes. Unfortunately, nobody checked the forecast before setting off. If we {{gap2}} looked at the radar, we {{gap3}} have packed waterproof trousers and extra fleece layers. Halfway up the ridge, freezing rain began to pour relentlessly. We huddled beneath a rocky overhang, shivering and wishing the storm {{gap4}} pass quickly. If our guide hadn't carried a thermal blanket and compass, we {{gap5}} have faced serious trouble. Next time, we won't climb that trail {{gap6}} the sky is clear, and I wish we {{gap7}} listened to the ranger.",
      "blanks": [
        {
          "index": 1,
          "answer": "drops",
          "hint": "DROP"
        },
        {
          "index": 2,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 3,
          "answer": "would",
          "alternatives": [
            "could",
            "might"
          ],
          "hint": "MODAL"
        },
        {
          "index": 4,
          "answer": "would",
          "hint": "MODAL"
        },
        {
          "index": 5,
          "answer": "might",
          "alternatives": [
            "would",
            "could"
          ],
          "hint": "MODAL (POSSIBILITY)"
        },
        {
          "index": 6,
          "answer": "unless",
          "hint": "CONNECTOR (IF NOT)"
        },
        {
          "index": 7,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 15,
      "title": "Dreaming of a Gap Year",
      "text": "Every time Daniel scrolls through travel blogs, he imagines taking a year off before starting his master's degree. If he {{gap1}} enough money saved in his account, he {{gap2}} buy a one-way ticket to New Zealand tomorrow. He wishes he {{gap3}} work part-time remotely so that he could fund his journey while exploring the coast. If I {{gap4}} in his shoes, I {{gap5}} probably apply for a working holiday visa right away. However, his parents remind him that {{gap6}} he completes his internships first, finding a stable job later may be tougher. Daniel knows they have a point, yet he still thinks to himself: if {{gap7}} I had more courage to take the leap right now!",
      "blanks": [
        {
          "index": 1,
          "answer": "had",
          "hint": "HAVE"
        },
        {
          "index": 2,
          "answer": "would",
          "alternatives": [
            "could",
            "might"
          ],
          "hint": "MODAL"
        },
        {
          "index": 3,
          "answer": "could",
          "hint": "MODAL (ABILITY)"
        },
        {
          "index": 4,
          "answer": "were",
          "alternatives": [
            "was"
          ],
          "hint": "BE"
        },
        {
          "index": 5,
          "answer": "would",
          "hint": "MODAL"
        },
        {
          "index": 6,
          "answer": "unless",
          "hint": "CONNECTOR (IF NOT)"
        },
        {
          "index": 7,
          "answer": "only",
          "hint": "IF ___ (REGRET)"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 16,
      "title": "The Broken Console Experiment",
      "text": "Last Saturday, Marco decided to clean the cooling fan of his old games console by himself. He knew that if dust {{gap1}} up inside the vents, the processor overheats and slows down. He watched a quick tutorial online, though he skipped the final three minutes. If he {{gap2}} watched the whole video, he wouldn't {{gap3}} snapped the tiny ribbon cable near the power supply. When the screen stayed black, he sighed and muttered, 'I {{gap4}} I hadn't rushed this repair!' Luckily, his friend Lucas repairs electronics on weekends. Lucas promised he {{gap5}} solder a replacement connector on Sunday as {{gap6}} as Marco ordered the spare part. If everything {{gap7}} well, they will test it together tonight.",
      "blanks": [
        {
          "index": 1,
          "answer": "builds",
          "hint": "BUILD"
        },
        {
          "index": 2,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 3,
          "answer": "have",
          "hint": "AUXILIARY"
        },
        {
          "index": 4,
          "answer": "wish",
          "hint": "WISH"
        },
        {
          "index": 5,
          "answer": "would",
          "hint": "MODAL"
        },
        {
          "index": 6,
          "answer": "long",
          "hint": "AS ___ AS"
        },
        {
          "index": 7,
          "answer": "goes",
          "hint": "GO"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 17,
      "title": "The Championship Penalty",
      "text": "With only two minutes remaining in the regional final, Sofia stepped up to take the decisive penalty kick. The crowd fell silent; everyone knew that if she {{gap1}}, her team {{gap2}} lift the trophy. Unfortunately, the pitch was slippery after an hour of drizzle, and her shot struck the crossbar. After the final whistle, she sat on the bench thinking about what might {{gap3}} happened. If she {{gap4}} aimed slightly lower, the goalkeeper wouldn't have reached the ball. 'If {{gap5}} I hadn't hesitated for that split second,' she told her captain. Her coach comforted her gently: 'If you {{gap6}} yourself up forever, you won't be ready for next season. I {{gap7}} I could erase the disappointment, but you played brilliantly.'",
      "blanks": [
        {
          "index": 1,
          "answer": "scored",
          "hint": "SCORE"
        },
        {
          "index": 2,
          "answer": "would",
          "hint": "MODAL"
        },
        {
          "index": 3,
          "answer": "have",
          "hint": "AUXILIARY"
        },
        {
          "index": 4,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 5,
          "answer": "only",
          "hint": "IF ___ (REGRET)"
        },
        {
          "index": 6,
          "answer": "beat",
          "hint": "BEAT"
        },
        {
          "index": 7,
          "answer": "wish",
          "hint": "WISH"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 18,
      "title": "Surviving a Shared Kitchen",
      "text": "Sharing a student apartment saves money, yet it certainly tests your patience every single day. My flatmate Tom is genuinely friendly, but his habits drive the rest of us crazy. I really {{gap1}} he {{gap2}} wash his frying pans instead of leaving them soaking for three days. If anyone {{gap3}} dirty plates in the sink overnight, ants inevitably appear by sunrise. Yesterday we finally held a house meeting to set clear rules. We told him that {{gap4}} he starts sticking to the cleaning rota, we won't renew the contract together in June. If only he {{gap5}} a little more considerate! Still, if we {{gap6}} a cleaner system starting this Monday, the kitchen {{gap7}} definitely become a much happier space.",
      "blanks": [
        {
          "index": 1,
          "answer": "wish",
          "hint": "WISH"
        },
        {
          "index": 2,
          "answer": "would",
          "hint": "MODAL"
        },
        {
          "index": 3,
          "answer": "leaves",
          "hint": "LEAVE"
        },
        {
          "index": 4,
          "answer": "unless",
          "hint": "CONNECTOR (IF NOT)"
        },
        {
          "index": 5,
          "answer": "were",
          "alternatives": [
            "was"
          ],
          "hint": "BE"
        },
        {
          "index": 6,
          "answer": "follow",
          "hint": "FOLLOW"
        },
        {
          "index": 7,
          "answer": "will",
          "hint": "FUTURE MODAL"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 19,
      "title": "A Startup Pitch Gone Wrong",
      "text": "When Clara and Leo presented their eco-friendly delivery app to local investors, almost everything went off script. Five minutes into the pitch, the projector froze because Leo had forgotten to bring the right HDMI adapter. If they {{gap1}} tested the equipment beforehand, the demonstration {{gap2}} have run without a hitch. Clara wished she {{gap3}} brought printed handouts as a backup in {{gap4}} the technology failed. Despite the awkward silence, she improvised smoothly and explained their revenue model on a whiteboard. Later, one investor remarked that if their numbers {{gap5}} realistic, her fund {{gap6}} consider backing them next quarter. Now Clara jokes that if {{gap7}} Leo stopped relying on luck, their next meeting would be stress-free!",
      "blanks": [
        {
          "index": 1,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 2,
          "answer": "would",
          "alternatives": [
            "could",
            "might"
          ],
          "hint": "MODAL"
        },
        {
          "index": 3,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 4,
          "answer": "case",
          "hint": "IN ___"
        },
        {
          "index": 5,
          "answer": "were",
          "hint": "BE"
        },
        {
          "index": 6,
          "answer": "might",
          "alternatives": [
            "would",
            "could"
          ],
          "hint": "MODAL (POSSIBILITY)"
        },
        {
          "index": 7,
          "answer": "only",
          "hint": "IF ___ (REGRET)"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 20,
      "title": "Learning a Foreign Language",
      "text": "Many teenagers complain that mastering a second language feels impossible inside a traditional classroom. Linguists point out that if learners {{gap1}} themselves in podcasts and films daily, their listening skills improve naturally. Last summer, Javier turned down a two-week exchange in Bristol because he felt nervous about speaking. Now he deeply regrets it: if he {{gap2}} accepted the invitation, he {{gap3}} have gained tremendous confidence. He often tells his classmates, 'I {{gap4}} I weren't so afraid of making silly grammar mistakes.' His teacher reassures him that he will pass the C1 exam easily {{gap5}} that he practises speaking aloud every week. After all, {{gap6}} you take risks in real conversation, you {{gap7}} hardly ever reach true fluency.",
      "blanks": [
        {
          "index": 1,
          "answer": "immerse",
          "hint": "IMMERSE"
        },
        {
          "index": 2,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 3,
          "answer": "would",
          "alternatives": [
            "could",
            "might"
          ],
          "hint": "MODAL"
        },
        {
          "index": 4,
          "answer": "wish",
          "hint": "WISH"
        },
        {
          "index": 5,
          "answer": "provided",
          "hint": "CONNECTOR (IF)"
        },
        {
          "index": 6,
          "answer": "unless",
          "hint": "CONNECTOR (IF NOT)"
        },
        {
          "index": 7,
          "answer": "will",
          "hint": "FUTURE MODAL"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 21,
      "title": "The Forgotten Anniversary",
      "text": "Mateo was completely absorbed in his coding project all week and forgot that Thursday was his parents' wedding anniversary. When he walked into the dining room and saw the flowers on the table, his stomach sank immediately. If he {{gap1}} written a reminder on his calendar, he wouldn't {{gap2}} arrived empty-handed! He whispered to his sister, 'If {{gap3}} I {{gap4}} remembered this morning, I could have ordered their favourite cake.' Thinking quickly, he offered to cook a three-course Italian dinner on Saturday instead. His mother smiled and said, 'It's fine, as {{gap5}} as you don't burn the risotto!' Mateo promised himself that from now on, if an important family date {{gap6}} up, he {{gap7}} set three alarms.",
      "blanks": [
        {
          "index": 1,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 2,
          "answer": "have",
          "hint": "AUXILIARY"
        },
        {
          "index": 3,
          "answer": "only",
          "hint": "IF ___ (REGRET)"
        },
        {
          "index": 4,
          "answer": "had",
          "hint": "AUXILIARY (PAST PERFECT)"
        },
        {
          "index": 5,
          "answer": "long",
          "hint": "AS ___ AS"
        },
        {
          "index": 6,
          "answer": "comes",
          "hint": "COME"
        },
        {
          "index": 7,
          "answer": "will",
          "hint": "FUTURE MODAL"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 22,
      "title": "Designing a Greener City",
      "text": "Urban planners across Europe are rethinking how residents travel during rush hour. Data confirms that when cities {{gap1}} safe cycling networks, car congestion falls significantly. If Seville {{gap2}} even more shaded pedestrian avenues, walking across town in July {{gap3}} feel far more pleasant. Many commuters say they {{gap4}} public buses {{gap5}} run more frequently after eleven at night. If local councils had invested in electric trams thirty years ago, urban air quality today would {{gap6}} noticeably cleaner. Citizens are willing to leave their cars at home {{gap7}} that public transport remains affordable and punctual. After all, unless everyone {{gap8}} small daily habits, tackling urban pollution will remain an uphill battle.",
      "blanks": [
        {
          "index": 1,
          "answer": "expand",
          "hint": "EXPAND"
        },
        {
          "index": 2,
          "answer": "had",
          "hint": "HAVE"
        },
        {
          "index": 3,
          "answer": "would",
          "alternatives": [
            "could",
            "might"
          ],
          "hint": "MODAL"
        },
        {
          "index": 4,
          "answer": "wish",
          "hint": "WISH"
        },
        {
          "index": 5,
          "answer": "would",
          "hint": "MODAL"
        },
        {
          "index": 6,
          "answer": "be",
          "hint": "BE"
        },
        {
          "index": 7,
          "answer": "provided",
          "hint": "CONNECTOR (IF)"
        },
        {
          "index": 8,
          "answer": "changes",
          "hint": "CHANGE"
        }
      ],
      "generalRule": "Condicionales (Zero, 1st, 2nd, 3rd, Mixed), conectores condicionales (unless, provided that, as long as, in case) y deseos o quejas con I wish / If only (+ Past Simple, Past Perfect o would)."
    },
    {
      "id": 23,
      "title": "A Breakdown in the Pyrenees",
      "text": "Last November, my brother and I {{gap1}} early at dawn to drive across the Pyrenees before the first snowstorm arrived. Everything went smoothly for two hours while we {{gap2}} up the winding mountain road. Suddenly, the engine started coughing loudly and {{gap3}} near a deserted tunnel. Because I {{gap4}} to charge my power bank the night before, my phone battery stood at three per cent. Luckily, a local forest ranger soon appeared while he {{gap5}} the fallen branches along the pass. After he {{gap6}} us to the nearest village, a kind mechanic fixed our alternator in less than an hour.",
      "blanks": [
        {
          "index": 1,
          "answer": "set off",
          "alternatives": [
            "set out"
          ],
          "hint": "SET OFF"
        },
        {
          "index": 2,
          "answer": "were driving",
          "alternatives": [
            "were climbing"
          ],
          "hint": "DRIVE"
        },
        {
          "index": 3,
          "answer": "broke down",
          "hint": "BREAK DOWN"
        },
        {
          "index": 4,
          "answer": "had forgotten",
          "alternatives": [
            "'d forgotten"
          ],
          "hint": "FORGET"
        },
        {
          "index": 5,
          "answer": "was clearing",
          "alternatives": [
            "was checking",
            "was removing"
          ],
          "hint": "CLEAR"
        },
        {
          "index": 6,
          "answer": "had driven",
          "alternatives": [
            "drove",
            "'d driven"
          ],
          "hint": "DRIVE"
        }
      ],
      "generalRule": "Narración en pasado (Past Simple para hechos principales, Past Continuous para acciones en desarrollo y Past Perfect para acciones anteriores) combinada con phrasal verbs de viaje: set off (salir de viaje) y break down (averiarse)."
    },
    {
      "id": 24,
      "title": "The Lost Camera on the Ferry",
      "text": "When Claudia boarded the ferry back from Mallorca, she realised she {{gap1}} her vintage camera in the harbour café. She rushed back towards the exit ramp, yet the crew {{gap2}} the heavy iron gates already. She thought she would never get it back and almost {{gap3}} hope. However, a waiter {{gap4}} the black leather case under a wooden chair while he was tidying the terrace. He immediately {{gap5}} the ferry office and handed it to the security guard. By the time Claudia {{gap6}} on shore two hours later, an official message was already waiting on her phone, and she gratefully {{gap7}} up her camera at lost property.",
      "blanks": [
        {
          "index": 1,
          "answer": "had left",
          "alternatives": [
            "'d left",
            "had forgotten"
          ],
          "hint": "LEAVE"
        },
        {
          "index": 2,
          "answer": "were closing",
          "alternatives": [
            "had closed"
          ],
          "hint": "CLOSE"
        },
        {
          "index": 3,
          "answer": "gave up",
          "hint": "GIVE UP"
        },
        {
          "index": 4,
          "answer": "came across",
          "alternatives": [
            "found"
          ],
          "hint": "COME ACROSS"
        },
        {
          "index": 5,
          "answer": "called up",
          "alternatives": [
            "phoned",
            "rang",
            "contacted"
          ],
          "hint": "CALL UP"
        },
        {
          "index": 6,
          "answer": "got off",
          "alternatives": [
            "arrived",
            "landed"
          ],
          "hint": "GET OFF"
        },
        {
          "index": 7,
          "answer": "picked",
          "hint": "PICK"
        }
      ],
      "generalRule": "Contraste narrativo entre Past Perfect (had left), Past Continuous (were closing) y phrasal verbs en pasado: give up (rendirse/perder la esperanza), come across (encontrarse por casualidad), get off (bajar de un transporte) y pick up (recoger)."
    },
    {
      "id": 25,
      "title": "An Unexpected Power Cut",
      "text": "At nine o'clock last Tuesday, Sara {{gap1}} her Chemistry summary while heavy thunder echoed outside. All of a sudden, every streetlamp in the neighbourhood {{gap2}} out, plunging the entire flat into silence. Earlier that afternoon, electricians {{gap3}} to repair the old transformer on the corner, yet the storm proved far stronger than expected. Since Sara had saved her notes online, she decided not to {{gap4}} studying and lit two candles on the kitchen table. Her parents {{gap5}} twenty minutes later with hot chocolate. While they {{gap6}} by candlelight, the lights finally flickered back on across the whole street.",
      "blanks": [
        {
          "index": 1,
          "answer": "was finishing",
          "alternatives": [
            "was writing",
            "was typing"
          ],
          "hint": "FINISH"
        },
        {
          "index": 2,
          "answer": "went",
          "hint": "GO"
        },
        {
          "index": 3,
          "answer": "had tried",
          "alternatives": [
            "had worked",
            "had been trying"
          ],
          "hint": "TRY"
        },
        {
          "index": 4,
          "answer": "put off",
          "alternatives": [
            "give up"
          ],
          "hint": "PUT OFF"
        },
        {
          "index": 5,
          "answer": "turned up",
          "alternatives": [
            "came back",
            "arrived",
            "showed up"
          ],
          "hint": "TURN UP"
        },
        {
          "index": 6,
          "answer": "were chatting",
          "alternatives": [
            "were talking",
            "were sitting"
          ],
          "hint": "CHAT"
        }
      ],
      "generalRule": "Narrativa con Past Continuous (was finishing, were chatting), Past Perfect (had tried) y phrasal verbs cotidianos: go out (apagarse la luz), put off (posponer) y turn up (aparecer/llegar)."
    },
    {
      "id": 26,
      "title": "The Last-Minute Science Presentation",
      "text": "Diego and I {{gap1}} our robotics slides for nearly three weeks before the regional contest began. On the morning of the final, we arrived early at the auditorium, only to {{gap2}} that the projector cable did not fit our laptop. Panic struck because we {{gap3}} any spare adapter in our backpack. Fortunately, while I {{gap4}} frantically through the equipment boxes backstage, Diego stayed calm and {{gap5}} up with a clever plan to stream the slides from his tablet. Thanks to his quick thinking, our demonstration {{gap6}} off smoothly and the judges praised our teamwork.",
      "blanks": [
        {
          "index": 1,
          "answer": "had been preparing",
          "alternatives": [
            "had prepared"
          ],
          "hint": "PREPARE"
        },
        {
          "index": 2,
          "answer": "find out",
          "alternatives": [
            "discover",
            "realise"
          ],
          "hint": "FIND OUT"
        },
        {
          "index": 3,
          "answer": "had not packed",
          "alternatives": [
            "hadn't packed",
            "had not brought",
            "hadn't brought"
          ],
          "hint": "NOT PACK"
        },
        {
          "index": 4,
          "answer": "was looking",
          "alternatives": [
            "was searching"
          ],
          "hint": "LOOK"
        },
        {
          "index": 5,
          "answer": "came",
          "hint": "COME"
        },
        {
          "index": 6,
          "answer": "went",
          "alternatives": [
            "came"
          ],
          "hint": "GO"
        }
      ],
      "generalRule": "Uso de Past Perfect Continuous (had been preparing para duración previa a un evento pasado), Past Perfect negativo (hadn't packed), Past Continuous (was looking) y phrasal verbs: find out (descubrir), come up [with] (idear) y go off (salir bien/desarrollarse)."
    },
    {
      "id": 27,
      "title": "Midnight Rescue on the Coast",
      "text": "The coastguard team received an emergency alert just as the wind {{gap1}} stronger along the cliffs. A small fishing boat {{gap2}} out of fuel three miles offshore while the crew were trying to return to port. Earlier that evening, the harbour office {{gap3}} out a severe weather warning, yet the sailors had missed the radio broadcast. Captain Navarro {{gap4}} on his waterproof jacket and led the rescue launch through dark waves. After the crew {{gap5}} for two hours in rough waters, the spotlight finally caught the drifting hull. Everyone breathed out in relief once the boat {{gap6}} up safely at the pier.",
      "blanks": [
        {
          "index": 1,
          "answer": "was growing",
          "alternatives": [
            "was getting"
          ],
          "hint": "GROW"
        },
        {
          "index": 2,
          "answer": "had run",
          "alternatives": [
            "ran"
          ],
          "hint": "RUN"
        },
        {
          "index": 3,
          "answer": "had put",
          "alternatives": [
            "had sent",
            "sent"
          ],
          "hint": "PUT"
        },
        {
          "index": 4,
          "answer": "put",
          "alternatives": [
            "pulled"
          ],
          "hint": "PUT"
        },
        {
          "index": 5,
          "answer": "had been searching",
          "alternatives": [
            "had searched",
            "had been looking"
          ],
          "hint": "SEARCH"
        },
        {
          "index": 6,
          "answer": "ended",
          "alternatives": [
            "tied",
            "turned"
          ],
          "hint": "END"
        }
      ],
      "generalRule": "Past Perfect Simple y Continuous (had run, had put, had been searching) junto a Past Continuous (was growing) y phrasal verbs: run out of (quedarse sin), put out (emitir), put on (ponerse ropa) y end up (terminar)."
    },
    {
      "id": 28,
      "title": "Moving into a Shared Flat",
      "text": "Moving to Granada for university sounded exciting until I started unpacking ten cardboard boxes in my tiny bedroom. My two flatmates {{gap1}} already before noon and were hanging posters in the hallway. While I {{gap2}} the kitchen cupboards, I found out that nobody had remembered to buy cleaning sponges. So I {{gap3}} out to the corner shop right away. By the time I came back, Marta {{gap4}} dinner from scratch and Pablo had set up the Wi-Fi router. Although we felt exhausted because we {{gap5}} heavy furniture up three flights of stairs all afternoon, we quickly {{gap6}} on well and celebrated our first night together.",
      "blanks": [
        {
          "index": 1,
          "answer": "had arrived",
          "alternatives": [
            "'d arrived",
            "had moved in"
          ],
          "hint": "ARRIVE"
        },
        {
          "index": 2,
          "answer": "was tidying",
          "alternatives": [
            "was cleaning",
            "was organising"
          ],
          "hint": "TIDY"
        },
        {
          "index": 3,
          "answer": "went",
          "alternatives": [
            "headed",
            "set",
            "stepped"
          ],
          "hint": "GO"
        },
        {
          "index": 4,
          "answer": "was cooking",
          "alternatives": [
            "had cooked",
            "was making"
          ],
          "hint": "COOK"
        },
        {
          "index": 5,
          "answer": "had been carrying",
          "alternatives": [
            "had carried"
          ],
          "hint": "CARRY"
        },
        {
          "index": 6,
          "answer": "got",
          "hint": "GET"
        }
      ],
      "generalRule": "Integración de Past Perfect Continuous (had been carrying para explicar el cansancio pasado), Past Perfect (had arrived), Past Continuous (was tidying) y phrasal verbs: find out, set up, go out y get on well (llevarse bien)."
    },
    {
      "id": 29,
      "title": "The Orchestra Audition",
      "text": "Elena {{gap1}} the cello for hours every day before the youth orchestra audition took place in Seville. When she walked into the rehearsal room, the three judges {{gap2}} over her musical score carefully. She felt nervous at first because she {{gap3}} in front of such a strict panel before. However, as soon as the pianist played the opening chord, Elena calmed down and {{gap4}} on with her solo piece without a single mistake. Halfway through the second movement, a string nearly snapped, yet she {{gap5}} out how to adjust her bow pressure seamlessly. Two days later, she was thrilled when an email confirmed she had {{gap6}} in.",
      "blanks": [
        {
          "index": 1,
          "answer": "had been practising",
          "alternatives": [
            "had been practicing",
            "had practised"
          ],
          "hint": "PRACTISE"
        },
        {
          "index": 2,
          "answer": "were looking",
          "alternatives": [
            "were reading",
            "were going"
          ],
          "hint": "LOOK"
        },
        {
          "index": 3,
          "answer": "had never played",
          "alternatives": [
            "had never performed"
          ],
          "hint": "NEVER PLAY"
        },
        {
          "index": 4,
          "answer": "carried",
          "alternatives": [
            "went",
            "kept"
          ],
          "hint": "CARRY"
        },
        {
          "index": 5,
          "answer": "worked",
          "alternatives": [
            "figured"
          ],
          "hint": "WORK"
        },
        {
          "index": 6,
          "answer": "got",
          "alternatives": [
            "gotten"
          ],
          "hint": "GET"
        }
      ],
      "generalRule": "Tiempos narrativos del pasado (had been practising, had never played, were looking) y phrasal verbs frecuentes: look over (revisar), carry on (continuar), work out / figure out (descubrir/resolver) y get in (entrar/ser admitido)."
    },
    {
      "id": 30,
      "title": "Reopening the Old Bookshop",
      "text": "For months, neighbours worried that the historic bookshop on Oak Street would close down forever. Its previous owner {{gap1}} away a huge collection of rare novels just before retiring. Fortunately, two local teachers {{gap2}} over the business in April and spent all spring painting the wooden shelves. Yesterday morning, while workers {{gap3}} up colorful banners outside the entrance, dozens of curious readers waited impatiently on the pavement. The new owners {{gap4}} back every single antique armchair to the reading corner. Although opening day demanded nonstop effort because they {{gap5}} hundreds of boxes since dawn, neither teacher wanted to {{gap6}} down a single customer asking for advice.",
      "blanks": [
        {
          "index": 1,
          "answer": "had given",
          "alternatives": [
            "gave"
          ],
          "hint": "GIVE"
        },
        {
          "index": 2,
          "answer": "took",
          "hint": "TAKE"
        },
        {
          "index": 3,
          "answer": "were putting",
          "alternatives": [
            "were hanging"
          ],
          "hint": "PUT"
        },
        {
          "index": 4,
          "answer": "had brought",
          "alternatives": [
            "brought",
            "put"
          ],
          "hint": "BRING"
        },
        {
          "index": 5,
          "answer": "had been unpacking",
          "alternatives": [
            "had been sorting",
            "had unpacked"
          ],
          "hint": "UNPACK"
        },
        {
          "index": 6,
          "answer": "turn",
          "hint": "TURN"
        }
      ],
      "generalRule": "Relato en pasado con Past Perfect (had given, had been unpacking), Past Continuous (were putting) y phrasal verbs con preposición: give away (donar), take over (hacerse cargo), put up (colgar), bring back (devolver) y turn down (rechazar)."
    }
  ],
  "mode4": [
    {
      "id": 1,
      "question": "You look really pale and worried. _______________?",
      "options": [
        "What's the matter",
        "As a matter of fact",
        "A matter of opinion",
        "Mind over matter"
      ],
      "correct_answer": "What's the matter",
      "category": "Expressions with matter"
    },
    {
      "id": 2,
      "question": "Don't worry if you forgot to buy bread; _______________, we have plenty of rice.",
      "options": [
        "it doesn't matter",
        "to make matters worse",
        "a matter of life and death",
        "be no laughing matter"
      ],
      "correct_answer": "it doesn't matter",
      "category": "Expressions with matter"
    },
    {
      "id": 3,
      "question": "The ambulance must get through the traffic immediately; it is _______________!",
      "options": [
        "a matter of life and death",
        "a matter of opinion",
        "as a matter of fact",
        "mind over matter"
      ],
      "correct_answer": "a matter of life and death",
      "category": "Expressions with matter"
    },
    {
      "id": 4,
      "question": "Whether modern art is better than classical painting is simply _______________.",
      "options": [
        "a matter of opinion",
        "a matter of time",
        "the truth of the matter",
        "to make matters worse"
      ],
      "correct_answer": "a matter of opinion",
      "category": "Expressions with matter"
    },
    {
      "id": 5,
      "question": "With the police investigating the clues so closely, it's only _______________ before they catch the thief.",
      "options": [
        "a matter of time",
        "a matter of opinion",
        "no matter",
        "mind over matter"
      ],
      "correct_answer": "a matter of time",
      "category": "Expressions with matter"
    },
    {
      "id": 6,
      "question": "I didn't fail the test; _______________, I got the highest mark in the class!",
      "options": [
        "as a matter of fact",
        "to make matters worse",
        "what's the matter",
        "be no laughing matter"
      ],
      "correct_answer": "as a matter of fact",
      "category": "Expressions with matter"
    },
    {
      "id": 7,
      "question": "Stop giggling! Cyberbullying is a serious issue and it is _______________.",
      "options": [
        "no laughing matter",
        "a matter of opinion",
        "mind over matter",
        "as a matter of fact"
      ],
      "correct_answer": "no laughing matter",
      "category": "Expressions with matter"
    },
    {
      "id": 8,
      "question": "Finishing a marathon when your legs are exhausted is a case of _______________.",
      "options": [
        "mind over matter",
        "a matter of opinion",
        "to make matters worse",
        "it doesn't matter"
      ],
      "correct_answer": "mind over matter",
      "category": "Expressions with matter"
    },
    {
      "id": 9,
      "question": "I will support your decision, _______________ how difficult the consequences might be.",
      "options": [
        "no matter",
        "as a matter of fact",
        "the truth of the matter",
        "a matter of time"
      ],
      "correct_answer": "no matter",
      "category": "Expressions with matter"
    },
    {
      "id": 10,
      "question": "He claimed he was ill, but _______________ is that he hadn't prepared the presentation.",
      "options": [
        "the truth of the matter",
        "a matter of opinion",
        "mind over matter",
        "what's the matter"
      ],
      "correct_answer": "the truth of the matter",
      "category": "Expressions with matter"
    },
    {
      "id": 11,
      "question": "We missed the last train home, and _______________, it started pouring with rain.",
      "options": [
        "to make matters worse",
        "as a matter of fact",
        "mind over matter",
        "it doesn't matter"
      ],
      "correct_answer": "to make matters worse",
      "category": "Expressions with matter"
    },
    {
      "id": 12,
      "question": "Which expression means 'de hecho, en realidad'?",
      "options": [
        "as a matter of fact",
        "the truth of the matter",
        "a matter of opinion",
        "no matter"
      ],
      "correct_answer": "as a matter of fact",
      "category": "Expressions with matter"
    },
    {
      "id": 13,
      "question": "Which expression translates as 'fuerza de voluntad'?",
      "options": [
        "mind over matter",
        "a matter of life and death",
        "be no laughing matter",
        "a matter of time"
      ],
      "correct_answer": "mind over matter",
      "category": "Expressions with matter"
    },
    {
      "id": 14,
      "question": "Which expression translates as 'para colmo'?",
      "options": [
        "to make matters worse",
        "the truth of the matter",
        "what's the matter",
        "no matter"
      ],
      "correct_answer": "to make matters worse",
      "category": "Expressions with matter"
    },
    {
      "id": 15,
      "question": "_______________ how many times I explain it, he still makes the same mistake.",
      "options": [
        "No matter",
        "It doesn't matter",
        "As a matter of fact",
        "A matter of time"
      ],
      "correct_answer": "No matter",
      "category": "Expressions with matter"
    },
    {
      "id": 16,
      "question": "Driving without a seatbelt is _______________; it can cause fatal injuries.",
      "options": [
        "no laughing matter",
        "a matter of opinion",
        "as a matter of fact",
        "mind over matter"
      ],
      "correct_answer": "no laughing matter",
      "category": "Expressions with matter"
    },
    {
      "id": 17,
      "question": "I lost my wallet on holiday and, _______________, my phone battery died right after.",
      "options": [
        "to make matters worse",
        "as a matter of fact",
        "it doesn't matter",
        "a matter of opinion"
      ],
      "correct_answer": "to make matters worse",
      "category": "Expressions with matter"
    },
    {
      "id": 18,
      "question": "Some people prefer the beach while others prefer the mountains; it's just _______________.",
      "options": [
        "a matter of opinion",
        "a matter of life and death",
        "the truth of the matter",
        "no laughing matter"
      ],
      "correct_answer": "a matter of opinion",
      "category": "Expressions with matter"
    },
    {
      "id": 19,
      "question": "They haven't announced the winner yet, but _______________ is that the judges have already decided.",
      "options": [
        "the truth of the matter",
        "to make matters worse",
        "what's the matter",
        "mind over matter"
      ],
      "correct_answer": "the truth of the matter",
      "category": "Expressions with matter"
    },
    {
      "id": 20,
      "question": "'Have you ever been to Italy?' 'Yes, _______________, I lived in Milan for two years.'",
      "options": [
        "as a matter of fact",
        "to make matters worse",
        "no matter",
        "a matter of time"
      ],
      "correct_answer": "as a matter of fact",
      "category": "Expressions with matter"
    },
    {
      "id": 21,
      "question": "If the volcano keeps showing seismic activity, an eruption is only _______________.",
      "options": [
        "a matter of time",
        "a matter of opinion",
        "it doesn't matter",
        "mind over matter"
      ],
      "correct_answer": "a matter of time",
      "category": "Expressions with matter"
    },
    {
      "id": 22,
      "question": "Calm down! Choosing which shirt to wear to the party isn't _______________.",
      "options": [
        "a matter of life and death",
        "as a matter of fact",
        "to make matters worse",
        "no matter"
      ],
      "correct_answer": "a matter of life and death",
      "category": "Expressions with matter"
    },
    {
      "id": 23,
      "question": "_______________ if we arrive five minutes late; the movie starts with twenty minutes of adverts.",
      "options": [
        "It doesn't matter",
        "No matter",
        "What's the matter",
        "To make matters worse"
      ],
      "correct_answer": "It doesn't matter",
      "category": "Expressions with matter"
    },
    {
      "id": 24,
      "question": "Why is the baby crying? _______________ with him?",
      "options": [
        "What's the matter",
        "What's matter",
        "How is the matter",
        "Which is the matter"
      ],
      "correct_answer": "What's the matter",
      "category": "Expressions with matter"
    },
    {
      "id": 25,
      "question": "Ignoring the icy water during the swim test required pure _______________.",
      "options": [
        "mind over matter",
        "matter of opinion",
        "truth of the matter",
        "matter of time"
      ],
      "correct_answer": "mind over matter",
      "category": "Expressions with matter"
    },
    {
      "id": 26,
      "question": "It took him several months to become accustomed ___ working night shifts.",
      "options": [
        "to",
        "with",
        "in",
        "for"
      ],
      "correct_answer": "to",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 27,
      "question": "The scientists were amazed ___ the speed of the new quantum computer.",
      "options": [
        "by",
        "of",
        "about",
        "for"
      ],
      "correct_answer": "by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 28,
      "question": "All members of the team are committed ___ achieving the sustainability targets.",
      "options": [
        "to",
        "with",
        "by",
        "of"
      ],
      "correct_answer": "to",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 29,
      "question": "I have always been curious ___ ancient civilizations and their languages.",
      "options": [
        "about",
        "with",
        "by",
        "in"
      ],
      "correct_answer": "about",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 30,
      "question": "Many customers were disappointed ___ the quality of the new smartphone.",
      "options": [
        "with",
        "of",
        "for",
        "to"
      ],
      "correct_answer": "with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 31,
      "question": "Are you excited ___ starting university next September?",
      "options": [
        "about",
        "with",
        "for",
        "of"
      ],
      "correct_answer": "about",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 32,
      "question": "Our clinic is looking for a nurse who is experienced ___ emergency care.",
      "options": [
        "in",
        "on",
        "with",
        "by"
      ],
      "correct_answer": "in",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 33,
      "question": "Commuters are increasingly frustrated ___ the constant train strikes.",
      "options": [
        "by",
        "of",
        "to",
        "for"
      ],
      "correct_answer": "by",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 34,
      "question": "The judges were deeply impressed ___ the dancer's technical precision.",
      "options": [
        "with",
        "of",
        "for",
        "about"
      ],
      "correct_answer": "with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 35,
      "question": "She felt secretly jealous ___ her colleague's promotion.",
      "options": [
        "of",
        "with",
        "by",
        "about"
      ],
      "correct_answer": "of",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 36,
      "question": "Outdoor music festivals are extremely popular ___ young people in summer.",
      "options": [
        "with",
        "to",
        "by",
        "of"
      ],
      "correct_answer": "with",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 37,
      "question": "The flight attendant is responsible ___ the safety of all passengers on board.",
      "options": [
        "for",
        "of",
        "to",
        "with"
      ],
      "correct_answer": "for",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 38,
      "question": "After living in the desert, he is accustomed ___ _______________ extreme heat.",
      "options": [
        "to / enduring",
        "to / endure",
        "with / enduring",
        "in / endure"
      ],
      "correct_answer": "to / enduring",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 39,
      "question": "The charity is committed ___ _______________ homeless people in the city.",
      "options": [
        "to / helping",
        "to / help",
        "for / helping",
        "with / help"
      ],
      "correct_answer": "to / helping",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 40,
      "question": "Which adjective takes the preposition 'of'?",
      "options": [
        "jealous",
        "amazed",
        "experienced",
        "committed"
      ],
      "correct_answer": "jealous",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 41,
      "question": "Which pair of adjectives BOTH take the preposition 'with'?",
      "options": [
        "disappointed / impressed",
        "curious / excited",
        "accustomed / committed",
        "amazed / frustrated"
      ],
      "correct_answer": "disappointed / impressed",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 42,
      "question": "Which pair of adjectives BOTH take the preposition 'about'?",
      "options": [
        "curious / excited",
        "popular / disappointed",
        "jealous / responsible",
        "experienced / frustrated"
      ],
      "correct_answer": "curious / excited",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 43,
      "question": "Which pair of adjectives BOTH take the preposition 'by'?",
      "options": [
        "amazed / frustrated",
        "accustomed / committed",
        "impressed / popular",
        "curious / jealous"
      ],
      "correct_answer": "amazed / frustrated",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 44,
      "question": "Choose the correct sentence:",
      "options": [
        "He is responsible for managing the budget.",
        "He is responsible of managing the budget.",
        "He is responsible to manage the budget.",
        "He is responsible with managing the budget."
      ],
      "correct_answer": "He is responsible for managing the budget.",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 45,
      "question": "Choose the correct sentence:",
      "options": [
        "This hiking trail is very popular with tourists.",
        "This hiking trail is very popular between tourists.",
        "This hiking trail is very popular by tourists.",
        "This hiking trail is very popular of tourists."
      ],
      "correct_answer": "This hiking trail is very popular with tourists.",
      "category": "Adjectives and Prepositions"
    },
    {
      "id": 46,
      "question": "Choose the correct option: 'It was _______________ that we stayed indoors all weekend.'",
      "options": [
        "such bad weather",
        "such a bad weather",
        "so bad weather",
        "weather so bad"
      ],
      "correct_answer": "such bad weather",
      "category": "Grammar Rules"
    },
    {
      "id": 47,
      "question": "Choose the correct option: 'They were _______________ that everyone loved them.'",
      "options": [
        "such polite children",
        "such a polite children",
        "so polite children",
        "polite enough children"
      ],
      "correct_answer": "such polite children",
      "category": "Grammar Rules"
    },
    {
      "id": 48,
      "question": "Choose the correct option: 'The suitcase isn't _______________ to take as carry-on luggage.'",
      "options": [
        "small enough",
        "enough small",
        "too small",
        "so small"
      ],
      "correct_answer": "small enough",
      "category": "Grammar Rules"
    },
    {
      "id": 49,
      "question": "Choose the correct option: 'I would rather _______________ home tonight than _______________ to the party.'",
      "options": [
        "stay / go",
        "staying / going",
        "to stay / to go",
        "stay / going"
      ],
      "correct_answer": "stay / go",
      "category": "Grammar Rules"
    },
    {
      "id": 50,
      "question": "Choose the correct option: 'She prefers _______________ novels to _______________ films.'",
      "options": [
        "reading / watching",
        "read / watch",
        "reading / watch",
        "to read / watching"
      ],
      "correct_answer": "reading / watching",
      "category": "Grammar Rules"
    },
    {
      "id": 51,
      "question": "Choose the correct connector: '_______________ the heavy snow, all trains were running on time.'",
      "options": [
        "In spite of",
        "Although",
        "Even though",
        "Despite of"
      ],
      "correct_answer": "In spite of",
      "category": "Grammar Rules"
    },
    {
      "id": 52,
      "question": "Choose the correct connector: '_______________ he had booked in advance, there were no rooms available.'",
      "options": [
        "Even though",
        "Despite",
        "In spite of",
        "Despite the fact"
      ],
      "correct_answer": "Even though",
      "category": "Grammar Rules"
    },
    {
      "id": 53,
      "question": "Choose the correct structure after 'Despite':",
      "options": [
        "Despite feeling tired, she finished the race.",
        "Despite she felt tired, she finished the race.",
        "Despite of feeling tired, she finished the race.",
        "Despite that she felt tired, she finished the race."
      ],
      "correct_answer": "Despite feeling tired, she finished the race.",
      "category": "Grammar Rules"
    },
    {
      "id": 54,
      "question": "Which verb is a STATIVE verb and cannot normally be used in continuous tenses when expressing possession?",
      "options": [
        "belong to",
        "repair",
        "travel",
        "wait"
      ],
      "correct_answer": "belong to",
      "category": "Grammar Rules"
    },
    {
      "id": 55,
      "question": "Choose the correct sentence with stative and dynamic verbs:",
      "options": [
        "These flowers smell nice and milk contains lots of vitamins.",
        "These flowers are smelling nice and milk is containing lots of vitamins.",
        "She is knowing the answer and she is wanting a prize.",
        "This bag is weighing ten kilos and is belonging to me."
      ],
      "correct_answer": "These flowers smell nice and milk contains lots of vitamins.",
      "category": "Grammar Rules"
    },
    {
      "id": 56,
      "question": "We use the Present Perfect Continuous rather than the Present Perfect Simple when:",
      "options": [
        "We want to put the emphasis on the duration of the action rather than the result.",
        "We want to emphasize the exact number of things completed.",
        "We use stative verbs like 'know', 'believe' or 'own'.",
        "The action happened at a definite time in the past like 'yesterday'."
      ],
      "correct_answer": "We want to put the emphasis on the duration of the action rather than the result.",
      "category": "Grammar Rules"
    },
    {
      "id": 57,
      "question": "Identify the correct sentence:",
      "options": [
        "She has been writing messages for two hours and has written 18 messages so far.",
        "She has written messages for two hours and has been writing 18 messages so far.",
        "She wrote messages since two hours and writes 18 messages so far.",
        "She is writing messages for two hours and has written 18 messages yesterday."
      ],
      "correct_answer": "She has been writing messages for two hours and has written 18 messages so far.",
      "category": "Grammar Rules"
    },
    {
      "id": 58,
      "question": "When a long action in progress in the past is interrupted by a shorter action, we use:",
      "options": [
        "Past Continuous for the long action and Past Simple for the short action.",
        "Past Simple for the long action and Past Continuous for the short action.",
        "Past Perfect for the long action and Present Perfect for the short action.",
        "Past Continuous for both actions."
      ],
      "correct_answer": "Past Continuous for the long action and Past Simple for the short action.",
      "category": "Grammar Rules"
    },
    {
      "id": 59,
      "question": "Choose the correct time expression: 'I haven't seen my cousin _______________ she moved abroad.'",
      "options": [
        "since",
        "for",
        "ago",
        "yet"
      ],
      "correct_answer": "since",
      "category": "Grammar Rules"
    },
    {
      "id": 60,
      "question": "Choose the correct time expression: 'Have they left the airport _______________?'",
      "options": [
        "yet",
        "already",
        "just",
        "since"
      ],
      "correct_answer": "yet",
      "category": "Grammar Rules"
    },
    {
      "id": 61,
      "question": "Choose the correct tense: 'By the time we arrived at the station, the train _______________.'",
      "options": [
        "had already left",
        "has already left",
        "was already leaving",
        "will have left"
      ],
      "correct_answer": "had already left",
      "category": "Grammar Rules"
    },
    {
      "id": 62,
      "question": "Choose the correct tense: 'Their clothes were wet because they _______________ in the rain for two hours.'",
      "options": [
        "had been walking",
        "have been walking",
        "were walking",
        "walked"
      ],
      "correct_answer": "had been walking",
      "category": "Grammar Rules"
    },
    {
      "id": 63,
      "question": "Choose the correct tense: 'At this time tomorrow, I _______________ on a beach in Thailand.'",
      "options": [
        "will be lying",
        "will have lain",
        "am lying",
        "have been lying"
      ],
      "correct_answer": "will be lying",
      "category": "Grammar Rules"
    },
    {
      "id": 64,
      "question": "Choose the correct tense: 'By the end of this year, she _______________ her medical degree.'",
      "options": [
        "will have completed",
        "will be completing",
        "completes",
        "has completed"
      ],
      "correct_answer": "will have completed",
      "category": "Grammar Rules"
    },
    {
      "id": 65,
      "question": "Which sentence expresses a future action set by an official timetable or schedule?",
      "options": [
        "Our flight leaves London at eight next Tuesday.",
        "Our flight will have left London at eight.",
        "I have lost my boarding pass at the gate.",
        "While I was flying, the sun was shining."
      ],
      "correct_answer": "Our flight leaves London at eight next Tuesday.",
      "category": "Grammar Rules"
    },
    {
      "id": 66,
      "question": "What does the travel term 'stopover' mean?",
      "options": [
        "A break or short stay in a place during a long journey (escala).",
        "A small bag that you can take onto the plane (de mano).",
        "Travelling at a time of year when fewer people travel (temporada baja).",
        "A narrow path through the countryside or mountains (sendero)."
      ],
      "correct_answer": "A break or short stay in a place during a long journey (escala).",
      "category": "Travel Vocabulary"
    },
    {
      "id": 67,
      "question": "What does the travel expression 'in advance' mean?",
      "options": [
        "Before a particular time or event (con antelación, previamente).",
        "In or to a foreign country (en el extranjero).",
        "For the duration of one night (por una noche).",
        "Late or slowed down (retrasado, demorado)."
      ],
      "correct_answer": "Before a particular time or event (con antelación, previamente).",
      "category": "Travel Vocabulary"
    },
    {
      "id": 68,
      "question": "If you travel 'off season', you travel:",
      "options": [
        "At a time of year when fewer tourists travel and prices are lower.",
        "Only with hand luggage and no checked bags.",
        "Outside in nature rather than inside buildings.",
        "Without booking any accommodation beforehand."
      ],
      "correct_answer": "At a time of year when fewer tourists travel and prices are lower.",
      "category": "Travel Vocabulary"
    },
    {
      "id": 69,
      "question": "Choose the correct transformation of: 'The coffee is too hot to drink.'",
      "options": [
        "The coffee isn't cold enough to drink.",
        "The coffee isn't enough cold to drink.",
        "The coffee is cold enough to not drink.",
        "It is such a hot coffee that I can't drink."
      ],
      "correct_answer": "The coffee isn't cold enough to drink.",
      "category": "Grammar Rules"
    },
    {
      "id": 70,
      "question": "Choose the correct transformation of: 'She has never visited London before.'",
      "options": [
        "This is the first time she has visited London.",
        "This is the first time she visited London.",
        "This is the first time she is visiting London.",
        "She hasn't visited London since the first time."
      ],
      "correct_answer": "This is the first time she has visited London.",
      "category": "Grammar Rules"
    },
    {
      "id": 71,
      "question": "Which tense structure is used in the Zero Conditional?",
      "options": [
        "If + Past Simple, would + infinitive",
        "If + Present Simple, will + infinitive",
        "If + Past Perfect, would have + participle",
        "If + Present Simple, Present Simple"
      ],
      "correct_answer": "If + Present Simple, Present Simple",
      "category": "Zero Conditional"
    },
    {
      "id": 72,
      "question": "When do we use the Zero Conditional?",
      "options": [
        "For annoying habits of other people",
        "For unlikely future hypotheses",
        "For general truths, scientific facts, and habits",
        "For regrets about past actions"
      ],
      "correct_answer": "For general truths, scientific facts, and habits",
      "category": "Zero Conditional"
    },
    {
      "id": 73,
      "question": "If you _____ red and blue, you get purple.",
      "options": [
        "will mix",
        "would mix",
        "mixed",
        "mix"
      ],
      "correct_answer": "mix",
      "category": "Zero Conditional"
    },
    {
      "id": 74,
      "question": "Water boils if you _____ it to 100°C.",
      "options": [
        "heated",
        "will heat",
        "heat",
        "had heated"
      ],
      "correct_answer": "heat",
      "category": "Zero Conditional"
    },
    {
      "id": 75,
      "question": "If my sister drinks coffee after 6 p.m., she _____ well.",
      "options": [
        "won't slept",
        "didn't sleep",
        "wouldn't sleep",
        "doesn't sleep"
      ],
      "correct_answer": "doesn't sleep",
      "category": "Zero Conditional"
    },
    {
      "id": 76,
      "question": "When you drop an object on Earth, gravity _____ it downwards.",
      "options": [
        "will pull",
        "would pull",
        "pulled",
        "pulls"
      ],
      "correct_answer": "pulls",
      "category": "Zero Conditional"
    },
    {
      "id": 77,
      "question": "If a battery completely drains, the laptop _____ off automatically.",
      "options": [
        "would shut",
        "shutting",
        "shuts",
        "had shut"
      ],
      "correct_answer": "shuts",
      "category": "Zero Conditional"
    },
    {
      "id": 78,
      "question": "Plants _____ unless they receive enough water and light.",
      "options": [
        "died",
        "had died",
        "die",
        "would die"
      ],
      "correct_answer": "die",
      "category": "Zero Conditional"
    },
    {
      "id": 79,
      "question": "Which modal verbs can replace 'will' in the main clause of a First Conditional?",
      "options": [
        "can / may",
        "would / might have",
        "could / had",
        "must have / ought"
      ],
      "correct_answer": "can / may",
      "category": "First Conditional"
    },
    {
      "id": 80,
      "question": "If it _____ sunny tomorrow, we may go kayaking on the river.",
      "options": [
        "was",
        "would be",
        "is",
        "will be"
      ],
      "correct_answer": "is",
      "category": "First Conditional"
    },
    {
      "id": 81,
      "question": "We'll miss the opening act unless we _____ right now.",
      "options": [
        "will leave",
        "don't leave",
        "left",
        "leave"
      ],
      "correct_answer": "leave",
      "category": "First Conditional"
    },
    {
      "id": 82,
      "question": "If you finish your assignment early, you _____ join us for dinner.",
      "options": [
        "were",
        "had",
        "would",
        "can"
      ],
      "correct_answer": "can",
      "category": "First Conditional"
    },
    {
      "id": 83,
      "question": "What does the First Conditional express?",
      "options": [
        "Wishes about things that annoy us",
        "Impossible events in the past",
        "Real or very probable situations in the future",
        "Scientific laws that never change"
      ],
      "correct_answer": "Real or very probable situations in the future",
      "category": "First Conditional"
    },
    {
      "id": 84,
      "question": "She won't get the scholarship if she _____ all the required documents.",
      "options": [
        "didn't submit",
        "hadn't submitted",
        "won't submit",
        "doesn't submit"
      ],
      "correct_answer": "doesn't submit",
      "category": "First Conditional"
    },
    {
      "id": 85,
      "question": "Take a spare charger _____ your phone runs out of battery.",
      "options": [
        "in case",
        "unless",
        "would rather",
        "if only"
      ],
      "correct_answer": "in case",
      "category": "First Conditional"
    },
    {
      "id": 86,
      "question": "You can borrow my camera _____ you promise to handle it carefully.",
      "options": [
        "in case of",
        "as long as",
        "even if",
        "unless"
      ],
      "correct_answer": "as long as",
      "category": "First Conditional"
    },
    {
      "id": 87,
      "question": "If they _____ the match tonight, they will qualify for the semi-finals.",
      "options": [
        "will win",
        "had won",
        "won",
        "win"
      ],
      "correct_answer": "win",
      "category": "First Conditional"
    },
    {
      "id": 88,
      "question": "Which sentence is grammatically INCORRECT?",
      "options": [
        "If you study hard, you may pass.",
        "Unless you study hard, you won't pass.",
        "If you will study hard, you will pass.",
        "If you study hard, you can pass."
      ],
      "correct_answer": "If you will study hard, you will pass.",
      "category": "First Conditional"
    },
    {
      "id": 89,
      "question": "What is the correct formula for the Second Conditional?",
      "options": [
        "If + Past Simple, will + infinitive",
        "If + Present Simple, would + infinitive",
        "If + Past Perfect, would + infinitive",
        "If + Past Simple, would/could/might + infinitive"
      ],
      "correct_answer": "If + Past Simple, would/could/might + infinitive",
      "category": "Second Conditional"
    },
    {
      "id": 90,
      "question": "When do we use the Second Conditional?",
      "options": [
        "For hypothetical, unreal, or improbable situations in the present/future",
        "For historical facts and scientific rules",
        "For actions that already happened in the past",
        "For scheduled future timetables"
      ],
      "correct_answer": "For hypothetical, unreal, or improbable situations in the present/future",
      "category": "Second Conditional"
    },
    {
      "id": 91,
      "question": "If I _____ you, I would accept that internship offer immediately.",
      "options": [
        "were",
        "would be",
        "had been",
        "am"
      ],
      "correct_answer": "were",
      "category": "Second Conditional"
    },
    {
      "id": 92,
      "question": "She _____ a bigger flat if rent weren't so expensive in the centre.",
      "options": [
        "would rent",
        "would have rented",
        "rented",
        "will rent"
      ],
      "correct_answer": "would rent",
      "category": "Second Conditional"
    },
    {
      "id": 93,
      "question": "If he _____ Japanese, he could work in Tokyo.",
      "options": [
        "speaks",
        "had spoken",
        "would speak",
        "spoke"
      ],
      "correct_answer": "spoke",
      "category": "Second Conditional"
    },
    {
      "id": 94,
      "question": "What _____ if you suddenly inherited a million euros?",
      "options": [
        "did you do",
        "would you have done",
        "would you do",
        "will you do"
      ],
      "correct_answer": "would you do",
      "category": "Second Conditional"
    },
    {
      "id": 95,
      "question": "If there _____ less noise outside, I might finish reading this chapter.",
      "options": [
        "will be",
        "were",
        "is",
        "had been"
      ],
      "correct_answer": "were",
      "category": "Second Conditional"
    },
    {
      "id": 96,
      "question": "We could go skiing this weekend if we _____ our own equipment.",
      "options": [
        "own",
        "had owned",
        "owned",
        "would own"
      ],
      "correct_answer": "owned",
      "category": "Second Conditional"
    },
    {
      "id": 97,
      "question": "Which modal verbs are standard in the main clause of a Second Conditional?",
      "options": [
        "had / did / was",
        "must / shall / need",
        "will / can / may",
        "would / could / might"
      ],
      "correct_answer": "would / could / might",
      "category": "Second Conditional"
    },
    {
      "id": 98,
      "question": "If she didn't have a fear of flying, she _____ Australia next year.",
      "options": [
        "will visit",
        "would have visited",
        "might visit",
        "visited"
      ],
      "correct_answer": "might visit",
      "category": "Second Conditional"
    },
    {
      "id": 99,
      "question": "Choose the correct Second Conditional sentence:",
      "options": [
        "If I had had more free time, I would learn to code.",
        "If I would have more free time, I learned to code.",
        "If I had more free time, I would learn to code.",
        "If I have more free time, I would learn to code."
      ],
      "correct_answer": "If I had more free time, I would learn to code.",
      "category": "Second Conditional"
    },
    {
      "id": 100,
      "question": "If my laptop _____ faster, I wouldn't waste so much time waiting for renders.",
      "options": [
        "were",
        "will be",
        "has been",
        "would be"
      ],
      "correct_answer": "were",
      "category": "Second Conditional"
    },
    {
      "id": 101,
      "question": "What is the correct formula for the Third Conditional?",
      "options": [
        "If + Past Perfect, would + infinitive",
        "If + Past Perfect, would/could/might + have + past participle",
        "If + Present Perfect, will + have + past participle",
        "If + Past Simple, would + have + past participle"
      ],
      "correct_answer": "If + Past Perfect, would/could/might + have + past participle",
      "category": "Third Conditional"
    },
    {
      "id": 102,
      "question": "What does the Third Conditional express?",
      "options": [
        "Hypothetical situations in the past (regrets or things that can no longer change)",
        "Annoying behaviours we want someone to stop",
        "Everyday habits and routines",
        "Probable future consequences"
      ],
      "correct_answer": "Hypothetical situations in the past (regrets or things that can no longer change)",
      "category": "Third Conditional"
    },
    {
      "id": 103,
      "question": "If we _____ earlier, we wouldn't have missed the train.",
      "options": [
        "had left",
        "left",
        "would leave",
        "have left"
      ],
      "correct_answer": "had left",
      "category": "Third Conditional"
    },
    {
      "id": 104,
      "question": "She _____ the exam if she had revised the last two units.",
      "options": [
        "would pass",
        "had passed",
        "would have passed",
        "will have passed"
      ],
      "correct_answer": "would have passed",
      "category": "Third Conditional"
    },
    {
      "id": 105,
      "question": "If I had known you were coming, I _____ a bigger meal.",
      "options": [
        "cooked",
        "would cook",
        "would have cooked",
        "had cooked"
      ],
      "correct_answer": "would have cooked",
      "category": "Third Conditional"
    },
    {
      "id": 106,
      "question": "They _____ the tournament if their star striker hadn't got injured.",
      "options": [
        "could win",
        "will win",
        "had won",
        "could have won"
      ],
      "correct_answer": "could have won",
      "category": "Third Conditional"
    },
    {
      "id": 107,
      "question": "If he _____ the warning email, he wouldn't have clicked the phishing link.",
      "options": [
        "read",
        "had read",
        "would read",
        "was reading"
      ],
      "correct_answer": "had read",
      "category": "Third Conditional"
    },
    {
      "id": 108,
      "question": "We might not have got lost if we _____ an offline map.",
      "options": [
        "had downloaded",
        "would download",
        "downloaded",
        "have downloaded"
      ],
      "correct_answer": "had downloaded",
      "category": "Third Conditional"
    },
    {
      "id": 109,
      "question": "If the fire brigade had arrived ten minutes later, the whole building _____.",
      "options": [
        "would collapse",
        "would have collapsed",
        "had collapsed",
        "collapsed"
      ],
      "correct_answer": "would have collapsed",
      "category": "Third Conditional"
    },
    {
      "id": 110,
      "question": "Choose the grammatically CORRECT Third Conditional sentence:",
      "options": [
        "If you had told me, I had helped you.",
        "If you would have told me, I would have helped you.",
        "If you told me, I would have helped you.",
        "If you had told me, I would have helped you."
      ],
      "correct_answer": "If you had told me, I would have helped you.",
      "category": "Third Conditional"
    },
    {
      "id": 111,
      "question": "Complete the Third Conditional: 'If she hadn't forgotten her passport, she _____ the flight.'",
      "options": [
        "boarded",
        "would board",
        "would have boarded",
        "will board"
      ],
      "correct_answer": "would have boarded",
      "category": "Third Conditional"
    },
    {
      "id": 112,
      "question": "He _____ his phone if he had zipped up his jacket pocket.",
      "options": [
        "didn't lose",
        "wouldn't lose",
        "wouldn't have lost",
        "hadn't lost"
      ],
      "correct_answer": "wouldn't have lost",
      "category": "Third Conditional"
    },
    {
      "id": 113,
      "question": "Which tense follows 'I wish' / 'If only' to express a wish about a PRESENT situation?",
      "options": [
        "Future Simple",
        "Present Simple",
        "Past Perfect",
        "Past Simple"
      ],
      "correct_answer": "Past Simple",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 114,
      "question": "'I don't see my friends very often.' Which wish sentence matches this?",
      "options": [
        "I wish I would see my friends very often.",
        "I wish I saw my friends very often.",
        "I wish I had seen my friends very often.",
        "I wish I see my friends very often."
      ],
      "correct_answer": "I wish I saw my friends very often.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 115,
      "question": "'I hate living in the city centre.' Which transformation is correct?",
      "options": [
        "I wish I don't live in the city centre.",
        "I wish I didn't live in the city centre.",
        "I wish I wouldn't live in the city centre.",
        "I wish I hadn't lived in the city centre."
      ],
      "correct_answer": "I wish I didn't live in the city centre.",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 116,
      "question": "If only I _____ speak fluent German right now!",
      "options": [
        "will",
        "could",
        "had",
        "can"
      ],
      "correct_answer": "could",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 117,
      "question": "She wishes she _____ so much homework this weekend.",
      "options": [
        "wouldn't have",
        "doesn't have",
        "hadn't had",
        "didn't have"
      ],
      "correct_answer": "didn't have",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 118,
      "question": "In formal B2/C1 English, which form of 'be' is preferred after 'I wish I ___'?",
      "options": [
        "am",
        "will be",
        "were",
        "have been"
      ],
      "correct_answer": "were",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 119,
      "question": "I wish there _____ a direct metro line to my university campus.",
      "options": [
        "has been",
        "were",
        "is",
        "will be"
      ],
      "correct_answer": "were",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 120,
      "question": "He wishes he _____ how to repair car engines like his uncle.",
      "options": [
        "knows",
        "will know",
        "had known",
        "knew"
      ],
      "correct_answer": "knew",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 121,
      "question": "If only we _____ closer to the coast!",
      "options": [
        "have lived",
        "live",
        "will live",
        "lived"
      ],
      "correct_answer": "lived",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 122,
      "question": "What does 'If only' mean compared to 'I wish'?",
      "options": [
        "It is only used for First Conditionals",
        "It is used exclusively for negative sentences",
        "It can only be followed by Present Simple",
        "The same meaning ('ojalá'), often with stronger emotion or emphasis"
      ],
      "correct_answer": "The same meaning ('ojalá'), often with stronger emotion or emphasis",
      "category": "I wish / If only + Past Simple"
    },
    {
      "id": 123,
      "question": "Which structure is used after 'I wish / If only' to express REGRET about the PAST?",
      "options": [
        "Past Perfect (had + past participle)",
        "Present Perfect",
        "would + infinitive",
        "Past Simple"
      ],
      "correct_answer": "Past Perfect (had + past participle)",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 124,
      "question": "'I failed the exam.' Which sentence expresses past regret correctly?",
      "options": [
        "I wish I had studied more.",
        "I wish I would study more.",
        "I wish I have studied more.",
        "I wish I studied more."
      ],
      "correct_answer": "I wish I had studied more.",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 125,
      "question": "If only we _____ the tickets earlier; now they are sold out.",
      "options": [
        "have booked",
        "had booked",
        "would book",
        "booked"
      ],
      "correct_answer": "had booked",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 126,
      "question": "She wishes she _____ those rude comments yesterday.",
      "options": [
        "hadn't made",
        "hasn't made",
        "didn't make",
        "wouldn't make"
      ],
      "correct_answer": "hadn't made",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 127,
      "question": "I wish I _____ to my father's advice before buying that used bike.",
      "options": [
        "had listened",
        "listened",
        "would listen",
        "have listened"
      ],
      "correct_answer": "had listened",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 128,
      "question": "If only you _____ me about the change of date last week!",
      "options": [
        "told",
        "would tell",
        "tell",
        "had told"
      ],
      "correct_answer": "had told",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 129,
      "question": "They wish they _____ all their savings on that trip last summer.",
      "options": [
        "wouldn't spend",
        "haven't spent",
        "didn't spend",
        "hadn't spent"
      ],
      "correct_answer": "hadn't spent",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 130,
      "question": "I regret not backing up my files before the crash. -> I wish I _____ my files.",
      "options": [
        "back up",
        "had backed up",
        "would back up",
        "backed up"
      ],
      "correct_answer": "had backed up",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 131,
      "question": "He wishes he _____ for the scholarship before the deadline expired.",
      "options": [
        "applied",
        "would apply",
        "applies",
        "had applied"
      ],
      "correct_answer": "had applied",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 132,
      "question": "If only I _____ my umbrella this morning; now I'm soaked!",
      "options": [
        "bring",
        "would bring",
        "had brought",
        "brought"
      ],
      "correct_answer": "had brought",
      "category": "I wish / If only + Past Perfect"
    },
    {
      "id": 133,
      "question": "When do we use 'I wish / If only + subject + would + bare infinitive'?",
      "options": [
        "To describe scientific facts",
        "To wish for a different permanent state about ourselves (like height)",
        "When someone's habit or an external situation annoys us and we want it to change",
        "To express regret about a completed past event"
      ],
      "correct_answer": "When someone's habit or an external situation annoys us and we want it to change",
      "category": "I wish / If only + Would"
    },
    {
      "id": 134,
      "question": "'My brother snores every night.' Which sentence correctly expresses annoyance?",
      "options": [
        "I wish he wouldn't snore.",
        "I wish he wouldn't snores.",
        "I wish he hadn't snored.",
        "I wish he doesn't snore."
      ],
      "correct_answer": "I wish he wouldn't snore.",
      "category": "I wish / If only + Would"
    },
    {
      "id": 135,
      "question": "I wish my neighbours _____ playing loud music at 2 a.m.",
      "options": [
        "will stop",
        "would stop",
        "had stopped",
        "stopped"
      ],
      "correct_answer": "would stop",
      "category": "I wish / If only + Would"
    },
    {
      "id": 136,
      "question": "If only it _____ raining so we could go for a walk!",
      "options": [
        "will stop",
        "stops",
        "would stop",
        "has stopped"
      ],
      "correct_answer": "would stop",
      "category": "I wish / If only + Would"
    },
    {
      "id": 137,
      "question": "Why is 'I wish I would be taller' INCORRECT?",
      "options": [
        "Because 'taller' needs 'had been'",
        "Because 'wish' cannot be used with 'I'",
        "We do not use 'would' with the same subject ('I wish I would...') or for static states like height",
        "Because 'would' requires '-ing'"
      ],
      "correct_answer": "We do not use 'would' with the same subject ('I wish I would...') or for static states like height",
      "category": "I wish / If only + Would"
    },
    {
      "id": 138,
      "question": "She wishes her brother _____ her headphones without asking.",
      "options": [
        "doesn't borrow",
        "wouldn't borrows",
        "didn't borrowed",
        "wouldn't borrow"
      ],
      "correct_answer": "wouldn't borrow",
      "category": "I wish / If only + Would"
    },
    {
      "id": 139,
      "question": "I wish you _____ interrupting me every time I speak.",
      "options": [
        "would stop",
        "had stopped",
        "will stop",
        "have stopped"
      ],
      "correct_answer": "would stop",
      "category": "I wish / If only + Would"
    },
    {
      "id": 140,
      "question": "If only the bus _____ on time for once!",
      "options": [
        "arrives",
        "would arrive",
        "will arrive",
        "has arrived"
      ],
      "correct_answer": "would arrive",
      "category": "I wish / If only + Would"
    },
    {
      "id": 141,
      "question": "Which sentence is a Mixed Conditional (past condition -> present result)?",
      "options": [
        "If I had studied medicine, I would have been a doctor.",
        "If I studied medicine, I would be a doctor.",
        "If I study medicine, I will be a doctor.",
        "If I had studied medicine, I would be a doctor today."
      ],
      "correct_answer": "If I had studied medicine, I would be a doctor today.",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 142,
      "question": "What type of verb follows 'unless'?",
      "options": [
        "Always a negative verb",
        "Always a gerund (-ing)",
        "An affirmative verb (because 'unless' already means 'if ... not')",
        "Always 'will' + infinitive"
      ],
      "correct_answer": "An affirmative verb (because 'unless' already means 'if ... not')",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 143,
      "question": "Which sentence is grammatically CORRECT?",
      "options": [
        "Unless you will hurry, you'll miss the train.",
        "Unless you hurried, you'll miss the train.",
        "Unless you hurry, you'll miss the train.",
        "Unless you don't hurry, you'll miss the train."
      ],
      "correct_answer": "Unless you hurry, you'll miss the train.",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 144,
      "question": "In which conditional can we use 'could' or 'might' + have + past participle?",
      "options": [
        "First Conditional",
        "Third Conditional",
        "Second Conditional",
        "Zero Conditional"
      ],
      "correct_answer": "Third Conditional",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 145,
      "question": "Choose the sentence with the correct verb form after 'wouldn't':",
      "options": [
        "I wish he wouldn't snoring so loudly.",
        "I wish he wouldn't snore so loudly.",
        "I wish he wouldn't snores so loudly.",
        "I wish he wouldn't snored so loudly."
      ],
      "correct_answer": "I wish he wouldn't snore so loudly.",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 146,
      "question": "Which sentence correctly uses 'provided that'?",
      "options": [
        "You can join the club provided that paying the annual fee.",
        "You can join the club provided that you would pay the annual fee.",
        "You can join the club provided that you will pay the annual fee.",
        "You can join the club provided that you pay the annual fee."
      ],
      "correct_answer": "You can join the club provided that you pay the annual fee.",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 147,
      "question": "What is the difference between 'I wish I knew' and 'I wish I had known'?",
      "options": [
        "'knew' refers to the past; 'had known' refers to the future",
        "'had known' is used for annoying habits",
        "There is no difference in meaning",
        "'knew' refers to a present wish; 'had known' refers to a past regret"
      ],
      "correct_answer": "'knew' refers to a present wish; 'had known' refers to a past regret",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 148,
      "question": "Identify the sentence with NO grammatical error:",
      "options": [
        "If I went to bed earlier last night, I wouldn't have been exhausted now.",
        "If I would have gone to bed earlier, I am not exhausted now.",
        "If I had gone to bed earlier, I won't be exhausted now.",
        "If I had gone to bed earlier last night, I wouldn't be so exhausted now."
      ],
      "correct_answer": "If I had gone to bed earlier last night, I wouldn't be so exhausted now.",
      "category": "Grammar Rules & Common Mistakes"
    },
    {
      "id": 149,
      "question": "If you fly from Madrid to Tokyo with a brief 3-hour wait in Doha, that intermediate pause is called a:",
      "options": [
        "stopover",
        "trail",
        "carry-on",
        "deal"
      ],
      "correct_answer": "stopover",
      "category": "Travel Vocabulary",
      "explanation": "'stopover' significa escala o parada intermedia durante un vuelo largo."
    },
    {
      "id": 150,
      "question": "Which bag are you allowed to take with you into the aircraft cabin instead of checking it in?",
      "options": [
        "Your carry-on luggage",
        "Your overnight suitcase",
        "Your off-season bag",
        "Your delayed parcel"
      ],
      "correct_answer": "Your carry-on luggage",
      "category": "Travel Vocabulary",
      "explanation": "'carry-on' es el equipaje de mano que puedes subir contigo a la cabina del avión."
    },
    {
      "id": 151,
      "question": "What does the phrase 'We stayed overnight at a mountain hut' mean?",
      "options": [
        "We spent one night there before moving on.",
        "We stayed there for three whole weeks.",
        "We travelled abroad without a map.",
        "We booked our flight six months early."
      ],
      "correct_answer": "We spent one night there before moving on.",
      "category": "Travel Vocabulary",
      "explanation": "'overnight' indica pasar una sola noche o una estancia nocturna breve."
    },
    {
      "id": 152,
      "question": "If a train is 'delayed' due to fog on the tracks, what happens to its passengers?",
      "options": [
        "It leaves and arrives later than scheduled.",
        "It leaves ten minutes earlier than planned.",
        "It offers a massive discount deal.",
        "It follows a rural mountain trail."
      ],
      "correct_answer": "It leaves and arrives later than scheduled.",
      "category": "Travel Vocabulary",
      "explanation": "'delayed' significa retrasado o demorado respecto al horario previsto."
    },
    {
      "id": 153,
      "question": "Choose the correct word: 'My cousin wants to study _____ next year, probably in Canada or Ireland.'",
      "options": [
        "abroad",
        "outdoors",
        "overnight",
        "in advance"
      ],
      "correct_answer": "abroad",
      "category": "Travel Vocabulary",
      "explanation": "'abroad' significa 'en el extranjero' o 'al extranjero'."
    },
    {
      "id": 154,
      "question": "If a youth hostel has a 'central location', what is its main advantage?",
      "options": [
        "It is situated right in the heart of the city.",
        "It only opens during the off season.",
        "It has no wifi for guests outdoors.",
        "It charges extra for carry-on bags."
      ],
      "correct_answer": "It is situated right in the heart of the city.",
      "category": "Travel Vocabulary",
      "explanation": "'location' significa ubicación o emplazamiento; 'central location' indica estar bien situado en el centro."
    },
    {
      "id": 155,
      "question": "Which word refers specifically to a marked path for walking through forests or mountains?",
      "options": [
        "trail",
        "stopover",
        "deal",
        "itinerary"
      ],
      "correct_answer": "trail",
      "category": "Travel Vocabulary",
      "explanation": "'trail' significa sendero o ruta marcada en la naturaleza."
    },
    {
      "id": 156,
      "question": "Complete the travel tip: 'Camping is ideal for travellers who enjoy spending time _____.'",
      "options": [
        "outdoors",
        "abroad",
        "overnight",
        "in advance"
      ],
      "correct_answer": "outdoors",
      "category": "Travel Vocabulary",
      "explanation": "'outdoors' significa al aire libre (lo opuesto a 'indoors')."
    },
    {
      "id": 157,
      "question": "When an airline offers a 'great deal' on winter flights to Edinburgh, it is offering:",
      "options": [
        "An attractive bargain price or discount",
        "A sudden mechanical cancellation",
        "An extra carry-on weight limit",
        "A longer stopover at customs"
      ],
      "correct_answer": "An attractive bargain price or discount",
      "category": "Travel Vocabulary",
      "explanation": "'deal' en el contexto de viajes y compras significa una buena oferta o ganga."
    },
    {
      "id": 158,
      "question": "Which sentence uses 'travel', 'trip' or 'journey' INCORRECTLY?",
      "options": [
        "We went on a lovely three-day travel to Seville.",
        "The train journey from Madrid to Córdoba took two hours.",
        "Did you enjoy your school trip to Toledo?",
        "Foreign travel broadens teenagers' horizons."
      ],
      "correct_answer": "We went on a lovely three-day travel to Seville.",
      "category": "Travel Vocabulary",
      "explanation": "'travel' como sustantivo es incontable y no lleva 'a'; para una estancia breve de ida y vuelta se dice 'a trip'."
    },
    {
      "id": 159,
      "question": "What should you show at the airport 'check-in desk' before passing through security?",
      "options": [
        "Your passport and booking reference to drop hold luggage",
        "Only your hotel deal brochure",
        "A map of a hiking trail",
        "Your car's emergency warning triangle"
      ],
      "correct_answer": "Your passport and booking reference to drop hold luggage",
      "category": "Travel Vocabulary",
      "explanation": "'check-in desk' es el mostrador de facturación donde presentas el pasaporte y entregas el equipaje que va en bodega."
    },
    {
      "id": 160,
      "question": "Why is it wiser to book popular museum tickets 'in advance' during Easter?",
      "options": [
        "To secure entry before all time slots sell out",
        "To pay double at the entrance gate",
        "To cancel your carry-on baggage allowance",
        "To avoid travelling off season"
      ],
      "correct_answer": "To secure entry before all time slots sell out",
      "category": "Travel Vocabulary",
      "explanation": "'in advance' significa con antelación o previamente."
    },
    {
      "id": 161,
      "question": "Choose the correct passive form: 'The final exam results _____ tomorrow at noon.'",
      "options": [
        "will be published",
        "will publish",
        "are publishing",
        "have been published"
      ],
      "correct_answer": "will be published",
      "category": "Passive Voice",
      "explanation": "Los resultados no se publican solos (sujeto paciente) y 'tomorrow' marca futuro -> pasiva futura 'will be published'."
    },
    {
      "id": 162,
      "question": "Which sentence correctly uses the Present Continuous Passive?",
      "options": [
        "A new cycle lane is being built along the river.",
        "A new cycle lane is building along the river.",
        "A new cycle lane has being built along the river.",
        "A new cycle lane was been built along the river."
      ],
      "correct_answer": "A new cycle lane is being built along the river.",
      "category": "Passive Voice",
      "explanation": "La pasiva de Present Continuous sigue la fórmula: am/is/are + being + participio pasado ('is being built')."
    },
    {
      "id": 163,
      "question": "Identify the correct passive transformation of 'Someone has stolen my backpack':",
      "options": [
        "My backpack has been stolen.",
        "My backpack was stolen by someone.",
        "My backpack has stolen.",
        "My backpack is been stolen."
      ],
      "correct_answer": "My backpack has been stolen.",
      "category": "Passive Voice",
      "explanation": "Active Present Perfect ('has stolen') pasa a Passive Present Perfect ('has been stolen'); cuando el agente es 'someone', se omite."
    },
    {
      "id": 164,
      "question": "Complete with the correct causative structure: 'Before our road trip, Dad _____ at the local garage.'",
      "options": [
        "had the brakes checked",
        "had checked the brakes by himself",
        "got the brakes check",
        "was checked the brakes"
      ],
      "correct_answer": "had the brakes checked",
      "category": "Passive Voice",
      "explanation": "El causativo para encargar un servicio a un profesional sigue la fórmula: have/get + objeto + participio pasado ('had the brakes checked')."
    },
    {
      "id": 165,
      "question": "Choose the accurate impersonal passive: 'People think that the castle holds hidden tunnels.'",
      "options": [
        "The castle is thought to hold hidden tunnels.",
        "The castle is thought holding hidden tunnels.",
        "It is thought the castle to hold hidden tunnels.",
        "People are thought to hold hidden tunnels."
      ],
      "correct_answer": "The castle is thought to hold hidden tunnels.",
      "category": "Passive Voice",
      "explanation": "Pasiva impersonal personal: Sujeto ('The castle') + is/are + participio ('thought') + infinitivo con to ('to hold')."
    },
    {
      "id": 166,
      "question": "Select the correct passive form with a modal verb: 'Seatbelts _____ during take-off and landing.'",
      "options": [
        "must be fastened",
        "must fastened",
        "must to be fastened",
        "have to fasten"
      ],
      "correct_answer": "must be fastened",
      "category": "Passive Voice",
      "explanation": "Con modales en voz pasiva se usa siempre: modal + be + participio pasado ('must be fastened')."
    },
    {
      "id": 167,
      "question": "In 'The broken window was smashed by a hailstorm', why do we use 'by' instead of 'with'?",
      "options": [
        "Because 'a hailstorm' is the agent/cause that performed the action, not a tool used by someone.",
        "Because 'with' is never allowed after a past participle.",
        "Because 'by' introduces instruments held in the hand.",
        "Because 'hailstorm' is an uncountable plural noun."
      ],
      "correct_answer": "Because 'a hailstorm' is the agent/cause that performed the action, not a tool used by someone.",
      "category": "Passive Voice",
      "explanation": "En pasiva usamos 'by' para el agente o fuerza natural causante, y 'with' para el instrumento o material utilizado."
    },
    {
      "id": 168,
      "question": "Choose the best indirect-object passive for 'The committee gave Marta a grant':",
      "options": [
        "Marta was given a grant by the committee.",
        "A grant was gave to Marta by the committee.",
        "Marta gave a grant to the committee.",
        "Marta was giving a grant by the committee."
      ],
      "correct_answer": "Marta was given a grant by the committee.",
      "category": "Passive Voice",
      "explanation": "En inglés es más natural convertir el objeto indirecto ('Marta') en sujeto de la pasiva: 'Marta was given a grant'."
    },
    {
      "id": 169,
      "question": "Which option keeps the preposition correctly in passive voice for 'Nobody looks after those stray dogs'?",
      "options": [
        "Those stray dogs are never looked after.",
        "Those stray dogs are never looked.",
        "After those stray dogs is never looked.",
        "Those stray dogs aren't looked after by nobody."
      ],
      "correct_answer": "Those stray dogs are never looked after.",
      "category": "Passive Voice",
      "explanation": "En los phrasal verbs en pasiva ('look after'), la preposición/partícula debe mantenerse inmediatamente detrás del participio ('looked after')."
    },
    {
      "id": 170,
      "question": "Spot the grammatical error in passive voice:",
      "options": [
        "English and French are spoke in Canada.",
        "All passengers were asked to board quickly.",
        "The roof is going to be repaired next week.",
        "She got her hair cut yesterday afternoon."
      ],
      "correct_answer": "English and French are spoke in Canada.",
      "category": "Passive Voice",
      "explanation": "El participio pasado de 'speak' es 'spoken' (no el Past Simple 'spoke'): debe decir 'are spoken'."
    },
    {
      "id": 171,
      "question": "Choose the grammatically correct reported question for \"Where do you live?\" (asked by Tom):",
      "options": [
        "Tom asked me where I lived.",
        "Tom asked me where did I live.",
        "Tom asked me where do I live.",
        "Tom told me where I lived."
      ],
      "correct_answer": "Tom asked me where I lived.",
      "category": "Reported Speech",
      "explanation": "En preguntas en estilo indirecto desaparece el auxiliar 'do/did' y se usa el orden afirmativo: where + Sujeto + Verbo en pasado."
    },
    {
      "id": 172,
      "question": "How do you report the time phrase 'yesterday' when shifting tenses back in Reported Speech?",
      "options": [
        "the day before / the previous day",
        "the following day",
        "a day later",
        "that day"
      ],
      "correct_answer": "the day before / the previous day",
      "category": "Reported Speech",
      "explanation": "'yesterday' cambia a 'the day before' o 'the previous day' en estilo indirecto."
    },
    {
      "id": 173,
      "question": "Select the correct difference between 'say' and 'tell':",
      "options": [
        "Clara told me that she was tired.",
        "Clara said me that she was tired.",
        "Clara told that she was tired.",
        "Clara told to me that she was tired."
      ],
      "correct_answer": "Clara told me that she was tired.",
      "category": "Reported Speech",
      "explanation": "'tell' exige un objeto indirecto de persona sin 'to' ('told me'), mientras que 'say' no lleva objeto directo personal sin 'to' ('said that...' o 'said to me that...')."
    },
    {
      "id": 174,
      "question": "Which reporting verb correctly follows the pattern 'verb + -ing' for 'Why don't we take the metro?'",
      "options": [
        "Paula suggested taking the metro.",
        "Paula suggested us to take the metro.",
        "Paula suggested to taking the metro.",
        "Paula refused taking the metro."
      ],
      "correct_answer": "Paula suggested taking the metro.",
      "category": "Reported Speech",
      "explanation": "'suggest' se construye con gerundio (-ing: 'suggested taking') o 'that + sujeto + verbo base', nunca con 'object + to + infinitivo'."
    },
    {
      "id": 175,
      "question": "Report this warning accurately: \"Don't touch that hot wire!\" the electrician said to the interns.",
      "options": [
        "The electrician warned the interns not to touch that hot wire.",
        "The electrician warned the interns to not touch that hot wire.",
        "The electrician warned that not touch that hot wire.",
        "The electrician said the interns didn't touch that hot wire."
      ],
      "correct_answer": "The electrician warned the interns not to touch that hot wire.",
      "category": "Reported Speech",
      "explanation": "Las órdenes y advertencias negativas en Reported Speech usan 'object + not to + infinitivo' ('not to touch')."
    },
    {
      "id": 176,
      "question": "Complete the reported sentence with backshift: \"I must finish this essay tonight,\" Leo said.",
      "options": [
        "Leo said that he had to finish that essay that night.",
        "Leo said that he musted finish that essay tonight.",
        "Leo said that he has to finish this essay that night.",
        "Leo told that he had to finish that essay tomorrow."
      ],
      "correct_answer": "Leo said that he had to finish that essay that night.",
      "category": "Reported Speech",
      "explanation": "En Reported Speech, 'must' (obligación) retrocede a 'had to', 'this' pasa a 'that' y 'tonight' pasa a 'that night'."
    },
    {
      "id": 177,
      "question": "Choose the right structure for 'apologise': \"Sorry I broke your mug,\" Sara told me.",
      "options": [
        "Sara apologised for breaking my mug.",
        "Sara apologised to breaking my mug.",
        "Sara apologised me for breaking her mug.",
        "Sara apologised that she breaks my mug."
      ],
      "correct_answer": "Sara apologised for breaking my mug.",
      "category": "Reported Speech",
      "explanation": "La estructura correcta es 'apologise (to someone) for + -ing / sustantivo' ('apologised for breaking')."
    },
    {
      "id": 178,
      "question": "Which word properly introduces a reported Yes/No question like \"Are you ready?\"?",
      "options": [
        "if / whether",
        "that",
        "what",
        "which"
      ],
      "correct_answer": "if / whether",
      "category": "Reported Speech",
      "explanation": "Las preguntas cerradas (Yes/No) se introducen en estilo indirecto mediante 'if' o 'whether', nunca con 'that'."
    },
    {
      "id": 179,
      "question": "When shifting from Direct to Reported Speech, what does 'two days ago' usually become?",
      "options": [
        "two days before / two days earlier",
        "two days later",
        "in two days",
        "two days hence"
      ],
      "correct_answer": "two days before / two days earlier",
      "category": "Reported Speech",
      "explanation": "'ago' cambia a 'before' o 'earlier' al retroceder la referencia temporal en estilo indirecto."
    },
    {
      "id": 180,
      "question": "Select the reported sentence with a true backshift error:",
      "options": [
        "She asked me whether had I seen her keys.",
        "He denied stealing the bicycle.",
        "They promised to arrive on time.",
        "The teacher reminded us to revise the conditionals."
      ],
      "correct_answer": "She asked me whether had I seen her keys.",
      "category": "Reported Speech",
      "explanation": "Tras 'whether' o 'if' debe ir primero el sujeto y luego el verbo ('whether I had seen'), no inversión de pregunta ('had I seen')."
    },
    {
      "id": 181,
      "question": "Which sentence uses the verb 'have' as an ACTION (and therefore correctly in Continuous)?",
      "options": [
        "Be quiet, Dad is having an online interview right now.",
        "She is having two younger sisters in Seville.",
        "They are having a very expensive electric car.",
        "This flat is having three sunny balconies."
      ],
      "correct_answer": "Be quiet, Dad is having an online interview right now.",
      "category": "Present / Future Tenses & Stative Verbs",
      "explanation": "'have' como posesión ('tener') es estático y no va en -ing, pero en expresiones de acción/actividad ('have a shower / dinner / interview') sí admite continuo."
    },
    {
      "id": 182,
      "question": "Choose the right tense for a fixed official schedule: 'Hurry up! Our plane _____ at 16:20.'",
      "options": [
        "takes off",
        "is going to taking off",
        "is taken off",
        "will have taking off"
      ],
      "correct_answer": "takes off",
      "category": "Present / Future Tenses & Stative Verbs",
      "explanation": "Para horarios fijos oficiales de trenes, vuelos, clases o espectáculos en el futuro usamos Present Simple ('takes off')."
    },
    {
      "id": 183,
      "question": "Your friend trips carrying heavy books. Which spontaneous offer is most natural in English?",
      "options": [
        "Wait, I'll help you carry those!",
        "Wait, I am going to helping you carry those!",
        "Wait, I carry those according to the timetable!",
        "Wait, I will have helped you by yesterday!"
      ],
      "correct_answer": "Wait, I'll help you carry those!",
      "category": "Present / Future Tenses & Stative Verbs",
      "explanation": "Las decisiones espontáneas y ofrecimientos tomados en el momento de hablar se expresan siempre con 'will' ('I'll help')."
    },
    {
      "id": 184,
      "question": "Identify the sentence that correctly contrasts a stative opinion with a temporary thought process:",
      "options": [
        "I think electric buses are quieter, and I'm thinking of buying an e-bike.",
        "I'm thinking electric buses are quieter every day.",
        "I thought electric buses are tomorrow.",
        "I am believing that electric buses are quieter."
      ],
      "correct_answer": "I think electric buses are quieter, and I'm thinking of buying an e-bike.",
      "category": "Present / Future Tenses & Stative Verbs",
      "explanation": "'think' como opinión ('creer/opinar') va en Present Simple; como acción mental ('estar pensando en / considerando') sí va en continuo ('am thinking of')."
    },
    {
      "id": 185,
      "question": "Why do we say 'Look at those black clouds — it's going to pour' instead of 'it'll pour'?",
      "options": [
        "Because there is visible physical evidence in the present showing what is about to happen.",
        "Because weather forecasts are official train timetables.",
        "Because 'pour' is a stative verb that forbids 'will'.",
        "Because 'be going to' is only used for sudden offers."
      ],
      "correct_answer": "Because there is visible physical evidence in the present showing what is about to happen.",
      "category": "Present / Future Tenses & Stative Verbs",
      "explanation": "'be going to' se usa para predicciones basadas en pruebas o indicios claros del presente (nubes negras), mientras 'will' expresa predicciones basadas en opinión personal."
    }
  ],
  "mode5": [
    {
      "id": 1,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Nowadays everyone uses technology, and this has good things and bad things.",
      "target_connectors": [
        "Although",
        "undeniable",
        "drawbacks"
      ],
      "model_answers": [
        "Although modern technology offers undeniable advantages in daily life, it also presents several significant drawbacks that deserve careful consideration.",
        "It is undeniable that modern technology brings numerous benefits, although its widespread adoption also entails notable drawbacks."
      ],
      "explanation": "Se eleva el vocabulario vago ('good things and bad things') usando colocaciones formales de B2/C1 ('undeniable advantages', 'significant drawbacks') y una subordinada concesiva con 'Although' ideal para introducir un ensayo For and Against."
    },
    {
      "id": 2,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "I think artificial intelligence is very helpful for students if they use it well.",
      "target_connectors": [
        "In my view",
        "Provided that",
        "indispensable"
      ],
      "model_answers": [
        "In my view, artificial intelligence can prove to be an indispensable tool for students, provided that they use it responsibly.",
        "Provided that learners employ it ethically, artificial intelligence becomes, in my view, an indispensable educational resource."
      ],
      "explanation": "Se sustituye 'I think' y 'very helpful' por la expresión formal de opinión 'In my view' y el adjetivo preciso 'indispensable', incorporando además la condicional formal 'provided that' (siempre y cuando)."
    },
    {
      "id": 3,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Remote work is popular because people save time, but some workers feel lonely.",
      "target_connectors": [
        "Despite",
        "On the other hand",
        "isolation"
      ],
      "model_answers": [
        "Despite allowing employees to save considerable commuting time, remote working can, on the other hand, lead to a sense of social isolation.",
        "Remote work has gained popularity because it saves time; on the other hand, many employees experience social isolation despite working from the comfort of their homes."
      ],
      "explanation": "Se sustituyen 'because' y 'feel lonely' por el conector concesivo 'Despite + -ing', el marcador de contraste 'On the other hand' y el sustantivo abstracto 'social isolation', propios de un registro académico."
    },
    {
      "id": 4,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Social media makes teenagers compare themselves to others, so it hurts their self-esteem.",
      "target_connectors": [
        "Consequently",
        "undermine",
        "foster"
      ],
      "model_answers": [
        "Social media platforms frequently foster unrealistic comparisons among teenagers; consequently, this constant pressure can severely undermine their self-esteem.",
        "Because social networks tend to foster constant social comparison, they consequently undermine young people's self-esteem and emotional well-being."
      ],
      "explanation": "Se reemplazan verbos básicos ('makes', 'hurts') por colocaciones precisas ('foster comparisons', 'undermine self-esteem') y se enlaza causa y efecto mediante el conector formal 'consequently'."
    },
    {
      "id": 5,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Social networks help us talk to friends far away, and they also give us news fast.",
      "target_connectors": [
        "Not only",
        "Furthermore",
        "instantaneous"
      ],
      "model_answers": [
        "Not only do social networks enable users to stay in touch with distant friends, but they also provide instantaneous access to global news.",
        "Social networks allow people to communicate effortlessly across distances; furthermore, they offer instantaneous updates on current events."
      ],
      "explanation": "Se evita la repetición simple de 'and also' mediante la inversión enfática 'Not only do...' o el conector aditivo 'Furthermore', además de sustituir 'fast' por el adjetivo culto 'instantaneous'."
    },
    {
      "id": 6,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Parents should check how much time kids spend on TikTok or Instagram.",
      "target_connectors": [
        "From my perspective",
        "crucial",
        "excessive"
      ],
      "model_answers": [
        "From my perspective, it is crucial for parents to monitor their children's screen habits in order to prevent excessive exposure to social media.",
        "It is crucial, from my perspective, that parents regulate minors' digital routines so that they avoid excessive use of platforms such as TikTok or Instagram."
      ],
      "explanation": "Se introduce la postura personal con 'From my perspective' y se sustituyen términos coloquiales por 'crucial', 'monitor' y 'excessive exposure', elevando el tono del Opinion Essay."
    },
    {
      "id": 7,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Governments must do more to stop climate change before it is too late.",
      "target_connectors": [
        "urgent measures",
        "Unless",
        "irreversible"
      ],
      "model_answers": [
        "Unless governments implement urgent measures immediately, the consequences of climate change will become completely irreversible.",
        "Governments ought to adopt urgent measures against climate change; unless decisive action is taken now, global ecosystems will suffer irreversible damage."
      ],
      "explanation": "Se convierte una petición genérica ('do more') en una estructura condicional de gran impacto ('Unless + Present Simple') acompañada de vocabulario específico de medio ambiente ('urgent measures', 'irreversible')."
    },
    {
      "id": 8,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Public transport is cheap and good for nature, even though buses are sometimes late.",
      "target_connectors": [
        "In spite of",
        "environmentally friendly",
        "cost-effective"
      ],
      "model_answers": [
        "In spite of occasional delays, public transport remains both a cost-effective and an environmentally friendly alternative to private vehicles.",
        "Public transport is undeniably cost-effective and environmentally friendly, in spite of the fact that delays can occasionally frustrate commuters."
      ],
      "explanation": "Se reemplazan adjetivos básicos ('cheap', 'good for nature') por adjetivos compuestos de nivel B2/C1 ('cost-effective', 'environmentally friendly') y 'even though' por 'In spite of + sustantivo'."
    },
    {
      "id": 9,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Recycling plastic helps reduce rubbish, and using fewer bags helps too.",
      "target_connectors": [
        "Moreover",
        "curb",
        "single-use"
      ],
      "model_answers": [
        "Recycling plastic waste helps reduce landfill pollution; moreover, cutting down on single-use bags can significantly curb environmental damage.",
        "Recycling contributes substantially to waste reduction; moreover, avoiding single-use plastic bags enables citizens to curb pollution effectively."
      ],
      "explanation": "Se elimina el cierre informal ('helps too') utilizando el conector aditivo 'moreover', el adjetivo compuesto 'single-use' y el verbo formal 'curb' (frenar/reducir)."
    },
    {
      "id": 10,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Studying online is comfortable, but some students do not pay attention at home.",
      "target_connectors": [
        "Whereas",
        "flexibility",
        "distractions"
      ],
      "model_answers": [
        "Whereas online learning offers remarkable flexibility, studying from home can expose students to numerous distractions that hinder concentration.",
        "Online education provides undeniable flexibility for learners; whereas studying at home is convenient, it often involves frequent distractions."
      ],
      "explanation": "Se contraponen las dos caras del argumento mediante la conjunción de contraste 'Whereas' y sustantivos precisos como 'flexibility' y 'distractions' en lugar de expresiones sencillas."
    },
    {
      "id": 11,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Schools should teach students practical skills for life, not just theory.",
      "target_connectors": [
        "I firmly believe that",
        "rather than",
        "equip"
      ],
      "model_answers": [
        "I firmly believe that schools should equip students with practical life skills rather than focusing exclusively on theoretical memorisation.",
        "Educational institutions should equip young people for real-world challenges rather than relying solely on theory, which I firmly believe is essential."
      ],
      "explanation": "Se refuerza la tesis con la fórmula enfática 'I firmly believe that', la estructura contrastiva 'rather than + -ing' y el verbo formal 'equip students with'."
    },
    {
      "id": 12,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Exams are stressful for teenagers, yet they show what students know.",
      "target_connectors": [
        "Nevertheless",
        "assess",
        "anxiety"
      ],
      "model_answers": [
        "Standardised exams often trigger considerable anxiety among teenagers; nevertheless, they remain an effective method to assess students' academic progress.",
        "Although final exams generate significant anxiety for learners, they nevertheless provide teachers with a reliable way to assess knowledge."
      ],
      "explanation": "Se sustituyen 'stressful' y 'show what students know' por 'trigger anxiety' y 'assess academic progress', articulando el giro argumentativo con 'nevertheless'."
    },
    {
      "id": 13,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Doing sport every day is good for your body and also helps your mind.",
      "target_connectors": [
        "Not only",
        "mental well-being",
        "vital"
      ],
      "model_answers": [
        "Regular physical exercise is not only vital for maintaining physical health, but it also significantly enhances mental well-being.",
        "Engaging in daily sport is vital for bodily fitness; not only does it strengthen muscles, but it also improves overall mental well-being."
      ],
      "explanation": "Se cambia 'good for your body / helps your mind' por la construcción correlativa 'not only ... but also' junto a vocabulario de salud de Bachillerato ('vital', 'mental well-being')."
    },
    {
      "id": 14,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Fast food is quick to buy, however it causes health problems if you eat it a lot.",
      "target_connectors": [
        "Admittedly",
        "detrimental",
        "However"
      ],
      "model_answers": [
        "Admittedly, fast food is extremely convenient when people are short on time; however, consuming it regularly has a detrimental impact on long-term health.",
        "Fast food offers undeniable convenience; admittedly it saves time, however excessive consumption proves deeply detrimental to cardiovascular health."
      ],
      "explanation": "Se evita el fallo de puntuación ('comma splice' antes de however usando '; however,') y se emplea 'Admittedly' para conceder el punto a favor antes de introducir 'detrimental impact'."
    },
    {
      "id": 15,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "To finish, sleeping eight hours is very important if you want to get good marks.",
      "target_connectors": [
        "In conclusion",
        "essential",
        "academic performance"
      ],
      "model_answers": [
        "In conclusion, getting eight hours of quality sleep is essential for students who wish to optimise their academic performance.",
        "In conclusion, sufficient rest is absolutely essential if learners aim to achieve strong academic performance during examinations."
      ],
      "explanation": "Se sustituye 'To finish' y 'get good marks' por el marcador conclusivo estándar 'In conclusion', el adjetivo formal 'essential' y la colocación académica 'academic performance'."
    },
    {
      "id": 16,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Introduction",
      "scrambled_sentences": [
        "Consequently, there is an ongoing debate regarding whether these emerging technologies represent a blessing or a threat.",
        "This essay will carefully examine both the main advantages and the potential drawbacks of artificial intelligence.",
        "Over the past two decades, artificial intelligence has transformed the way society works, studies, and communicates.",
        "While supporters praise the unprecedented efficiency of automated tools, critics worry about privacy and job displacement."
      ],
      "correct_order": [
        2,
        0,
        3,
        1
      ],
      "explanation": "Una buena introducción de For and Against sigue el orden: gancho general actual ('Over the past two decades...') ➔ consecuencia y debate ('Consequently...') ➔ contraste inicial de posturas ('While supporters...') ➔ propósito del ensayo sin adelantar opinión personal ('This essay will carefully examine...')."
    },
    {
      "id": 17,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Body Paragraph (For)",
      "scrambled_sentences": [
        "In addition, interactive platforms allow teachers to adapt exercises to each student's individual pace.",
        "First and foremost, digital devices give students instant access to vast educational resources worldwide.",
        "Therefore, integrating technology into classrooms undeniably enriches the learning experience.",
        "For instance, learners in remote areas can attend virtual lectures and download peer-reviewed articles within seconds."
      ],
      "correct_order": [
        1,
        3,
        0,
        2
      ],
      "explanation": "El párrafo argumentativo empieza con la idea principal ('First and foremost...'), continúa con un ejemplo concreto ('For instance...'), añade un segundo beneficio ('In addition...') y cierra sintetizando la idea ('Therefore...')."
    },
    {
      "id": 18,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Body Paragraph (Against)",
      "scrambled_sentences": [
        "As a consequence, many experts warn that unregulated technology can gradually erode individual privacy.",
        "Furthermore, sophisticated algorithms frequently collect personal data without users being fully aware of it.",
        "On the other hand, excessive reliance on smartphones and laptops poses serious concerns.",
        "To begin with, constant connectivity blurs the boundary between working hours and personal rest, leading to burnout."
      ],
      "correct_order": [
        2,
        3,
        1,
        0
      ],
      "explanation": "Para introducir los argumentos en contra tras el párrafo a favor, abrimos con la transición de contraste ('On the other hand...'), enumeramos dos razones ('To begin with...' y 'Furthermore...') y cerramos con su efecto ('As a consequence...')."
    },
    {
      "id": 19,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Introduction",
      "scrambled_sentences": [
        "Platforms such as Instagram and TikTok shape how young people communicate, consume news, and perceive themselves.",
        "In my opinion, social media does more harm than good when used without clear age limits or supervision.",
        "Although these networks facilitate instant communication, their psychological impact on adolescents is increasingly worrying.",
        "Nowadays, social media platforms have become an integral part of teenagers' daily routines."
      ],
      "correct_order": [
        3,
        0,
        2,
        1
      ],
      "explanation": "La introducción del Opinion Essay va de lo general a tu tesis: contexto actual ('Nowadays...') ➔ concreción con ejemplos ('Platforms such as...') ➔ concesión del problema ('Although...') ➔ declaración clara de tu postura ('In my opinion...')."
    },
    {
      "id": 20,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Body Paragraph (Against)",
      "scrambled_sentences": [
        "Consequently, many adolescents suffer from anxiety and low self-esteem when comparing themselves with influencers.",
        "Despite its benefits, excessive use of social media carries notable disadvantages for mental health.",
        "Moreover, online anonymity can facilitate cyberbullying, making the digital environment stressful for vulnerable teens.",
        "Firstly, curated and heavily edited photos often encourage unrealistic beauty standards among young users."
      ],
      "correct_order": [
        1,
        3,
        0,
        2
      ],
      "explanation": "La frase temática ('Despite its benefits...') presenta el bloque en contra; luego 'Firstly' introduce la primera causa, 'Consequently' explica su resultado directo en los jóvenes y 'Moreover' añade un segundo problema grave."
    },
    {
      "id": 21,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Conclusion",
      "scrambled_sentences": [
        "For this reason, both schools and families should promote healthier digital habits and critical media literacy.",
        "Only through balanced and conscious usage can young people enjoy the benefits of networks safely.",
        "In conclusion, while social media offers valuable opportunities to stay connected, its risks cannot be ignored.",
        "As discussed above, addictive algorithms and constant social comparison frequently undermine adolescents' emotional stability."
      ],
      "correct_order": [
        2,
        3,
        0,
        1
      ],
      "explanation": "La conclusión abre con 'In conclusion' retomando la tesis, resume brevemente las razones previas ('As discussed above...'), propone una medida lógica ('For this reason...') y finaliza con una reflexión de cierre enfática ('Only through...')."
    },
    {
      "id": 22,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Body Paragraph (For)",
      "scrambled_sentences": [
        "By reducing toxic exhaust emissions, citizens face a much lower risk of developing respiratory illnesses.",
        "First of all, banning private petrol cars from city centres significantly improves urban air quality.",
        "Thus, restricting polluting vehicles benefits both the environment and public health simultaneously.",
        "Additionally, quieter pedestrian streets encourage residents to walk or cycle, fostering healthier lifestyles."
      ],
      "correct_order": [
        1,
        0,
        3,
        2
      ],
      "explanation": "'First of all' plantea la idea principal (calidad del aire), la segunda frase desarrolla ese beneficio explicando cómo reduce enfermedades, 'Additionally' suma un segundo argumento y 'Thus' engloba ambas ideas."
    },
    {
      "id": 23,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Introduction",
      "scrambled_sentences": [
        "Therefore, it is worth weighing both the arguments in favour of strict bans and the practical objections against them.",
        "While plastic packaging is undeniably cheap and hygienic, millions of tonnes end up in our oceans every year.",
        "Plastic pollution has become one of the most pressing environmental challenges of the twenty-first century.",
        "Some experts argue that a total ban on single-use plastics is necessary, whereas others worry about higher food costs."
      ],
      "correct_order": [
        2,
        1,
        3,
        0
      ],
      "explanation": "En un ensayo For and Against partimos del problema global ('Plastic pollution...'), señalamos la paradoja actual ('While plastic packaging...'), reflejamos las dos posturas ('Some experts... whereas others...') y cerramos anunciando el análisis equilibrado ('Therefore, it is worth weighing...')."
    },
    {
      "id": 24,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Conclusion",
      "scrambled_sentences": [
        "Unless we act decisively today, future generations will inherit an irreversibly damaged planet.",
        "Investing in renewable energy and expanding public transport remain the most effective ways to cut carbon emissions.",
        "Nevertheless, individual daily choices, such as reducing waste and conserving water, also play a vital role.",
        "To sum up, tackling climate change requires urgent commitment from both governments and ordinary citizens."
      ],
      "correct_order": [
        3,
        1,
        2,
        0
      ],
      "explanation": "'To sum up' menciona a dos actores (gobiernos y ciudadanos); a continuación se detalla primero el papel institucional ('Investing in renewable energy...'), luego el individual ('Nevertheless, individual daily choices...') y se cierra con una advertencia condicional ('Unless we act decisively...')."
    },
    {
      "id": 25,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Body Paragraph (For)",
      "scrambled_sentences": [
        "In addition, achieving fluency in a second language substantially boosts their future employability.",
        "For these reasons, international exchange programmes are widely regarded as a worthwhile investment.",
        "On the one hand, studying a university degree abroad provides students with unforgettable cultural enrichment.",
        "Living in a foreign country forces young adults to become independent and overcome everyday challenges on their own."
      ],
      "correct_order": [
        2,
        3,
        0,
        1
      ],
      "explanation": "Comenzamos con 'On the one hand' presentando el enriquecimiento cultural, explicamos cómo vivir fuera fomenta la autonomía, añadimos la ventaja laboral con 'In addition' y cerramos refiriéndonos en plural a esos dos motivos ('For these reasons...')."
    },
    {
      "id": 26,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Body Paragraph (Against)",
      "scrambled_sentences": [
        "However, excessive homework often leaves teenagers exhausted and deprives them of essential sleep and family time.",
        "Consequently, replacing heavy evening workloads with active classroom practice would create a fairer system.",
        "Furthermore, learners from disadvantaged backgrounds may lack a quiet space or parental support to complete tasks effectively.",
        "Admittedly, some critics claim that assigning daily homework helps reinforce concepts taught in class."
      ],
      "correct_order": [
        3,
        0,
        2,
        1
      ],
      "explanation": "Excelente párrafo contraargumentativo para Opinion Essay: se concede brevemente la postura contraria ('Admittedly...'), se refuta de inmediato con 'However', se refuerza con otro problema ('Furthermore') y se propone una alternativa ('Consequently...')."
    },
    {
      "id": 27,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Conclusion",
      "scrambled_sentences": [
        "Conversely, final examinations remain useful for measuring individual performance under standardised conditions.",
        "All things considered, replacing traditional paper exams with continuous assessment offers both advantages and drawbacks.",
        "Ultimately, combining both approaches seems the fairest way to evaluate students accurately.",
        "On the positive side, continuous evaluation reduces extreme test anxiety and rewards steady effort throughout the year."
      ],
      "correct_order": [
        1,
        3,
        0,
        2
      ],
      "explanation": "La conclusión equilibrada inicia con 'All things considered', recuerda el lado positivo ('On the positive side...'), contrapone el valor de los exámenes con 'Conversely' y cierra con una postura integradora ('Ultimately...')."
    },
    {
      "id": 28,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Introduction",
      "scrambled_sentences": [
        "While supporters believe higher prices discourage unhealthy habits, opponents argue that such taxes unfairly affect low-income families.",
        "This essay will analyse the arguments for and against introducing a sugar tax.",
        "In recent years, sedentary lifestyles and processed diets have raised serious concerns about teenage health.",
        "To address this trend, several governments have proposed imposing extra taxes on sugary drinks and ultra-processed snacks."
      ],
      "correct_order": [
        2,
        3,
        0,
        1
      ],
      "explanation": "La progresión referencial marca el orden exacto: primero aparece 'sedentary lifestyles and processed diets' ➔ luego 'To address this trend' remite a ello ➔ 'While supporters... opponents...' introduce el debate sobre 'such taxes' ➔ y se cierra presentando el ensayo."
    },
    {
      "id": 29,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Body Paragraph (For)",
      "scrambled_sentences": [
        "Therefore, prioritising sport at school directly enhances both physical health and classroom concentration.",
        "For example, just three weekly hours of structured sport strengthen cardiovascular fitness and improve posture.",
        "First and foremost, making physical education mandatory until the end of Bachillerato combats the rise in youth obesity.",
        "Moreover, regular exercise releases endorphins that help teenagers manage academic stress during exam seasons."
      ],
      "correct_order": [
        2,
        1,
        3,
        0
      ],
      "explanation": "'First and foremost' introduce la tesis física, 'For example' la ilustra con datos concretos, 'Moreover' amplía el argumento hacia la salud mental y el estrés, y 'Therefore' sintetiza ambos planos (físico y concentración)."
    },
    {
      "id": 30,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Conclusion",
      "scrambled_sentences": [
        "As outlined earlier, adolescent anxiety and sleep deprivation have escalated dramatically over the past decade.",
        "If educational authorities invest in students' emotional well-being today, society will gain healthier and happier adults tomorrow.",
        "Providing access to school psychologists and teaching stress-management techniques can prevent long-term psychological issues.",
        "In conclusion, I strongly believe that prioritising mental health in high schools is just as vital as academic achievement."
      ],
      "correct_order": [
        3,
        0,
        2,
        1
      ],
      "explanation": "'In conclusion, I strongly believe...' reafirma la tesis personal, 'As outlined earlier...' recuerda el problema de base, 'Providing access...' ofrece una solución concreta y la oración condicional final ('If educational authorities...') proyecta el beneficio a futuro."
    },
    {
      "id": 31,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Artificial intelligence in schools has good and bad sides, and students should not depend on it too much.",
      "target_connectors": [
        "double-edged sword",
        "foster",
        "over-reliance"
      ],
      "model_answers": [
        "Artificial intelligence in education represents a double-edged sword: while it can foster personalised learning, over-reliance on automated tools threatens students' critical thinking.",
        "In classrooms, artificial intelligence acts as a double-edged sword because it may foster independent study, yet an over-reliance on such software undermines genuine academic effort."
      ],
      "explanation": "En ensayos sobre tecnología e IA, sustituir 'good and bad sides' por 'a double-edged sword' y usar vocabulario preciso como 'foster' (fomentar) y 'over-reliance' (dependencia excesiva) eleva inmediatamente la nota de léxico a B2/C1."
    },
    {
      "id": 32,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Renting a flat is very expensive for young people now because there are not enough cheap houses.",
      "target_connectors": [
        "prohibitive",
        "stemming from",
        "in light of"
      ],
      "model_answers": [
        "In light of rising urban demand, housing costs have become prohibitive for young adults, a crisis largely stemming from the acute shortage of affordable accommodation.",
        "In light of stagnant wages, rental prices have reached prohibitive levels for younger generations, a problem stemming from insufficient public housing and speculative investment."
      ],
      "explanation": "Sustituir 'very expensive' por 'prohibitive' y enlazar la causa con 'stemming from' (derivado de) o contextualizar con 'in light of' (a la luz de / teniendo en cuenta) evita estructuras B1 repetitivas con 'because'."
    },
    {
      "id": 33,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Buying cheap fast-fashion clothes every month is bad for the planet and we need to stop.",
      "target_connectors": [
        "short-sighted",
        "imperative",
        "carbon footprint"
      ],
      "model_answers": [
        "Continuing to consume disposable fast fashion is deeply short-sighted, making it imperative for citizens to shrink their carbon footprint through sustainable habits.",
        "Treating clothing as disposable is environmentally short-sighted; therefore, adopting ethical consumption patterns is imperative if we aim to cut our collective carbon footprint."
      ],
      "explanation": "En ensayos medioambientales, 'short-sighted' (cortoplacista/irresponsable), 'imperative' (imprescindible) y la colocación exacta 'carbon footprint' (huella de carbono) muestran un dominio léxico sobresaliente."
    },
    {
      "id": 34,
      "type": "upgrading",
      "essay_type": "For and Against",
      "basic_sentence": "Working from home gives people free time, but sometimes you never stop thinking about your job.",
      "target_connectors": [
        "work-life balance",
        "blur the boundaries",
        "nonetheless"
      ],
      "model_answers": [
        "Remote employment can significantly enhance employees' work-life balance; nonetheless, constant digital connectivity often tends to blur the boundaries between professional duties and rest.",
        "Although teleworking improves flexibility and work-life balance for many staff members, it can nonetheless blur the boundaries between office hours and personal life."
      ],
      "explanation": "Usar la colocación 'work-life balance', el conector concesivo formal 'nonetheless' y la expresión idiomática C1 'blur the boundaries' (difuminar los límites) resume la idea con gran precisión académica."
    },
    {
      "id": 35,
      "type": "upgrading",
      "essay_type": "Opinion Essay",
      "basic_sentence": "Many teenagers feel very sad or stressed today and schools should care more about this problem.",
      "target_connectors": [
        "prevalent",
        "address",
        "prioritise"
      ],
      "model_answers": [
        "Because chronic stress and burnout have become increasingly prevalent among adolescents, educational institutions must address this issue and prioritise psychological support.",
        "Emotional distress is now worryingly prevalent in secondary schools; consequently, authorities should prioritise prevention programmes to address teenagers' needs effectively."
      ],
      "explanation": "Reemplazar 'very common' o 'care more' por verbos y adjetivos formales como 'prevalent' (extendido), 'address' (abordar un problema) y 'prioritise' (priorizar) aporta madurez y registro formal."
    },
    {
      "id": 36,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Body Paragraph (For) — IA en educación",
      "scrambled_sentences": [
        "For example, adaptive language software can detect a learner's recurring grammar mistakes and generate targeted exercises instantly.",
        "Firstly, integrating artificial intelligence into secondary schools offers remarkable opportunities for personalised learning.",
        "As a result, both struggling pupils and advanced students are able to progress at a pace suited to their individual abilities.",
        "Unlike traditional classrooms where one pace fits everyone, smart digital tutors provide immediate, tailored feedback outside school hours."
      ],
      "correct_order": [
        1,
        3,
        0,
        2
      ],
      "explanation": "Orden lógico de argumento a favor: 1) Idea principal ('Firstly...'), 2) Explicación comparativa ('Unlike traditional classrooms...'), 3) Ejemplo concreto ('For example...'), 4) Consecuencia final ('As a result...')."
    },
    {
      "id": 37,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Introduction — Vivienda y jóvenes",
      "scrambled_sentences": [
        "In my opinion, unless governments regulate short-term tourist rentals and expand affordable housing, young adults will remain unable to gain independence.",
        "Over the past decade, soaring property prices and stagnant entry-level salaries have transformed housing into one of Europe's sharpest social concerns.",
        "Consequently, thousands of qualified university graduates are forced to share cramped rooms or remain with their parents well into their thirties.",
        "While some economists argue that private construction alone will eventually balance the market, this delayed optimism ignores present hardship."
      ],
      "correct_order": [
        1,
        2,
        3,
        0
      ],
      "explanation": "Introducción de Opinion Essay: 1) Contexto general del problema ('Over the past decade...'), 2) Consecuencia inmediata ('Consequently...'), 3) Matiz/Postura contraria ('While some economists...'), 4) Tesis propia clara ('In my opinion, unless...')."
    },
    {
      "id": 38,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Body Paragraph (Against) — Sostenibilidad",
      "scrambled_sentences": [
        "Consequently, low-income families frequently cannot afford green appliances or electric cars despite wanting to protect the environment.",
        "On the other hand, transitioning rapidly to strictly sustainable products entails steep financial costs that deepen economic inequality.",
        "Unless public subsidies make eco-friendly alternatives truly accessible to everyone, strict environmental taxes may provoke widespread social backlash.",
        "In the short term, organic groceries, solar panels, and zero-emission vehicles carry significantly higher price tags than conventional options."
      ],
      "correct_order": [
        1,
        3,
        0,
        2
      ],
      "explanation": "Párrafo en contra bien estructurado: 1) Marcador de contraste e idea central ('On the other hand...'), 2) Desarrollo concreto ('In the short term...'), 3) Efecto directo ('Consequently...'), 4) Advertencia condicional ('Unless public subsidies...')."
    },
    {
      "id": 39,
      "type": "builder",
      "essay_type": "Opinion Essay",
      "paragraph_role": "Conclusion — Trabajo remoto",
      "scrambled_sentences": [
        "However, companies must establish clear disconnection policies so that employees do not feel compelled to answer emails late at night.",
        "To sum up, remote work has undeniably proved to be an efficient, modern alternative to rigid daily commuting.",
        "By combining flexible home-office schedules with regular team meetings, society can build healthier workplaces without sacrificing human connection.",
        "Not only does it spare workers exhausting hours in traffic, but it also lowers urban air pollution across major cities."
      ],
      "correct_order": [
        1,
        3,
        0,
        2
      ],
      "explanation": "Conclusión equilibrada de ensayo: 1) Síntesis inicial ('To sum up...'), 2) Reafirmación con inversión formal ('Not only does it...'), 3) Matiz/condición necesaria ('However...'), 4) Reflexión final de cierre ('By combining...')."
    },
    {
      "id": 40,
      "type": "builder",
      "essay_type": "For and Against",
      "paragraph_role": "Introduction — Salud mental",
      "scrambled_sentences": [
        "While some people claim that schools should focus strictly on academic subjects, others insist emotional education is equally crucial.",
        "In recent years, rising anxiety levels and digital burnout among teenagers have sparked urgent debate regarding youth mental health.",
        "Therefore, it is essential to examine both the advantages and the potential limitations of introducing mandatory well-being workshops in high schools.",
        "Faced with intense academic pressure and constant online comparison, many adolescents feel overwhelmed long before entering university."
      ],
      "correct_order": [
        1,
        3,
        0,
        2
      ],
      "explanation": "Introducción de For & Against: 1) Contextualización actual ('In recent years...'), 2) Causas principales ('Faced with...'), 3) Dos posturas enfrentadas ('While some... others...'), 4) Propósito objetivo del ensayo ('Therefore, it is essential to examine both...')."
    }
  ]
};

window.EXAM_BANK = EXAM_BANK;
