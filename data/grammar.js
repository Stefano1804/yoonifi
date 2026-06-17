/* TOPIK I & II Grammar Patterns
 * Each entry: { level, pattern, romanization, meaning, explanation, examples: [{ ko, en }] }
 * Exposed as global `GRAMMAR`.
 */
const GRAMMAR = [
  // ---------------------- TOPIK I ----------------------
  {
    level: "TOPIK I",
    pattern: "-이에요/예요",
    romanization: "-ieyo / -yeyo",
    meaning: "to be (polite present)",
    explanation: "Attached to a noun to mean 'is/am/are.' Use -이에요 after a consonant and -예요 after a vowel. It is the polite informal form of the copula 이다.",
    examples: [
      { ko: "저는 학생이에요.", en: "I am a student." },
      { ko: "이것은 사과예요.", en: "This is an apple." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-아요/어요",
    romanization: "-ayo / -eoyo",
    meaning: "polite present tense ending",
    explanation: "The standard polite informal verb/adjective ending. Use -아요 when the last vowel of the stem is ㅏ or ㅗ, otherwise -어요. 하다 verbs become 해요.",
    examples: [
      { ko: "저는 매일 책을 읽어요.", en: "I read a book every day." },
      { ko: "친구를 만나요.", en: "I meet a friend." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-았/었어요",
    romanization: "-ass/eosseoyo",
    meaning: "past tense (polite)",
    explanation: "Marks the past tense. Use -았어요 after stems with ㅏ/ㅗ, and -었어요 otherwise. 하다 becomes 했어요.",
    examples: [
      { ko: "어제 영화를 봤어요.", en: "I watched a movie yesterday." },
      { ko: "밥을 먹었어요.", en: "I ate." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-(으)ㄹ 거예요",
    romanization: "-(eu)l geoyeyo",
    meaning: "will / future intention",
    explanation: "Expresses future tense or intention. Add -ㄹ 거예요 after a vowel and -을 거예요 after a consonant.",
    examples: [
      { ko: "내일 여행을 갈 거예요.", en: "I will go on a trip tomorrow." },
      { ko: "주말에 집에서 쉴 거예요.", en: "I will rest at home this weekend." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-고 싶다",
    romanization: "-go sipda",
    meaning: "to want to (do)",
    explanation: "Attached to a verb stem to express the speaker's desire to do something. With third persons, use -고 싶어하다.",
    examples: [
      { ko: "한국에 가고 싶어요.", en: "I want to go to Korea." },
      { ko: "물을 마시고 싶어요.", en: "I want to drink water." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-지 않다 / 안",
    romanization: "-ji anta / an",
    meaning: "negation (do not)",
    explanation: "Two ways to make a verb/adjective negative. '안' goes before the verb; '-지 않다' attaches to the stem. Both are common and interchangeable.",
    examples: [
      { ko: "오늘은 학교에 안 가요.", en: "I don't go to school today." },
      { ko: "저는 커피를 마시지 않아요.", en: "I don't drink coffee." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-(으)세요",
    romanization: "-(eu)seyo",
    meaning: "polite request / honorific command",
    explanation: "Used to make a polite request or command, and also as an honorific present ending. Add -세요 after a vowel, -으세요 after a consonant.",
    examples: [
      { ko: "여기 앉으세요.", en: "Please sit here." },
      { ko: "안녕히 가세요.", en: "Goodbye (to someone leaving)." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-(으)ㄹ 수 있다/없다",
    romanization: "-(eu)l su itda/eopda",
    meaning: "can / cannot (ability or possibility)",
    explanation: "Expresses ability or possibility. 있다 = can, 없다 = cannot. Add -ㄹ 수 after a vowel, -을 수 after a consonant.",
    examples: [
      { ko: "저는 한국어를 할 수 있어요.", en: "I can speak Korean." },
      { ko: "오늘은 갈 수 없어요.", en: "I can't go today." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-아서/어서",
    romanization: "-aseo/eoseo",
    meaning: "because / and then (sequence)",
    explanation: "Connects clauses to show reason ('because') or sequence ('and then'). The two actions are closely linked.",
    examples: [
      { ko: "배가 아파서 병원에 갔어요.", en: "I went to the hospital because my stomach hurt." },
      { ko: "친구를 만나서 영화를 봤어요.", en: "I met my friend and (then) watched a movie." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-(으)러 가다/오다",
    romanization: "-(eu)reo gada/oda",
    meaning: "to go/come in order to",
    explanation: "Expresses the purpose of going or coming somewhere. Attaches to a verb stem and is followed by a movement verb.",
    examples: [
      { ko: "밥을 먹으러 식당에 가요.", en: "I go to the restaurant to eat." },
      { ko: "책을 사러 서점에 갔어요.", en: "I went to the bookstore to buy a book." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-고",
    romanization: "-go",
    meaning: "and (listing / sequence)",
    explanation: "Connects two verbs or clauses to list actions or states, or to show simple sequence without a tight cause relationship.",
    examples: [
      { ko: "저는 밥을 먹고 학교에 가요.", en: "I eat and go to school." },
      { ko: "이 옷은 싸고 예뻐요.", en: "These clothes are cheap and pretty." }
    ]
  },
  {
    level: "TOPIK I",
    pattern: "-지만",
    romanization: "-jiman",
    meaning: "but / although",
    explanation: "Connects two contrasting clauses. Attaches directly to a verb or adjective stem.",
    examples: [
      { ko: "한국어는 어렵지만 재미있어요.", en: "Korean is hard but fun." },
      { ko: "비가 오지만 나가야 해요.", en: "It's raining, but I have to go out." }
    ]
  },
  // ---------------------- TOPIK II ----------------------
  {
    level: "TOPIK II",
    pattern: "-(으)ㄴ/는 편이다",
    romanization: "-(eu)n/neun pyeonida",
    meaning: "tends to be / is rather",
    explanation: "Indicates a general tendency rather than an absolute fact. Use -는 편이다 with verbs, -(으)ㄴ 편이다 with adjectives.",
    examples: [
      { ko: "저는 매운 음식을 잘 먹는 편이에요.", en: "I tend to eat spicy food well." },
      { ko: "이 식당은 가격이 비싼 편이에요.", en: "This restaurant is rather expensive." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-기 때문에",
    romanization: "-gi ttaemune",
    meaning: "because of / due to",
    explanation: "Expresses a strong, objective reason. Attaches to verb/adjective stems. With nouns use 때문에.",
    examples: [
      { ko: "시험이 있기 때문에 공부해야 해요.", en: "I have to study because there is an exam." },
      { ko: "눈이 많이 오기 때문에 길이 막혀요.", en: "The roads are jammed because it's snowing heavily." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-(으)ㄴ/는데",
    romanization: "-(eu)n/neunde",
    meaning: "background / contrast / and",
    explanation: "A versatile connector giving background information, soft contrast, or context for the following clause. Very common in natural speech.",
    examples: [
      { ko: "어제 백화점에 갔는데 사람이 정말 많았어요.", en: "I went to the department store yesterday, and there were really many people." },
      { ko: "이 옷이 예쁜데 좀 비싸요.", en: "These clothes are pretty, but a bit expensive." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-(으)면서",
    romanization: "-(eu)myeonseo",
    meaning: "while doing (simultaneously)",
    explanation: "Indicates that two actions happen at the same time by the same subject. Attaches to a verb stem.",
    examples: [
      { ko: "음악을 들으면서 공부해요.", en: "I study while listening to music." },
      { ko: "그는 웃으면서 이야기했어요.", en: "He talked while smiling." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-(으)ㄹ수록",
    romanization: "-(eu)lsurok",
    meaning: "the more ... the more",
    explanation: "Expresses that as one thing increases, another changes accordingly. Often paired with -(으)면: -(으)면 -(으)ㄹ수록.",
    examples: [
      { ko: "한국어는 공부할수록 재미있어요.", en: "The more I study Korean, the more fun it is." },
      { ko: "높이 올라갈수록 추워져요.", en: "The higher you climb, the colder it gets." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-(으)ㄴ/는 척하다",
    romanization: "-(eu)n/neun cheokhada",
    meaning: "to pretend to",
    explanation: "Expresses pretending to do or be something. Use -는 척하다 with present verbs, -(으)ㄴ 척하다 with past verbs or adjectives.",
    examples: [
      { ko: "그는 모르는 척했어요.", en: "He pretended not to know." },
      { ko: "아이가 자는 척해요.", en: "The child is pretending to sleep." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-는 바람에",
    romanization: "-neun barame",
    meaning: "as a result of (unexpected/negative cause)",
    explanation: "Indicates an unexpected, usually negative, cause that led to a result. Attaches to verb stems.",
    examples: [
      { ko: "늦잠을 자는 바람에 지각했어요.", en: "I was late because I overslept." },
      { ko: "비가 오는 바람에 경기가 취소됐어요.", en: "The match was canceled because of the rain." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-더라도",
    romanization: "-deorado",
    meaning: "even if / even though",
    explanation: "Expresses a strong concession: 'even if' the situation were true, the result holds. Stronger and more hypothetical than -아도/어도.",
    examples: [
      { ko: "아무리 바쁘더라도 운동은 해야 해요.", en: "No matter how busy you are, you must exercise." },
      { ko: "실패하더라도 다시 도전할 거예요.", en: "Even if I fail, I will try again." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-(으)ㄴ/는 데다가",
    romanization: "-(eu)n/neun dedaga",
    meaning: "in addition to / on top of",
    explanation: "Adds an additional, reinforcing point to the previous clause. Often the two clauses share the same direction (both positive or both negative).",
    examples: [
      { ko: "그 식당은 음식이 맛있는 데다가 값도 싸요.", en: "That restaurant has tasty food, and on top of that it's cheap." },
      { ko: "비가 오는 데다가 바람도 불어요.", en: "It's raining, and on top of that the wind is blowing." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-기 위해서",
    romanization: "-gi wihaeseo",
    meaning: "in order to / for the purpose of",
    explanation: "Expresses purpose or goal. Attaches to verb stems. With nouns use 을/를 위해서.",
    examples: [
      { ko: "건강을 지키기 위해서 운동을 해요.", en: "I exercise in order to stay healthy." },
      { ko: "시험에 합격하기 위해서 열심히 공부했어요.", en: "I studied hard in order to pass the exam." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-(으)ㄹ 뻔하다",
    romanization: "-(eu)l ppeonhada",
    meaning: "almost did / nearly happened",
    explanation: "Describes something that almost happened but did not. Always used in the past tense (-ㄹ 뻔했다).",
    examples: [
      { ko: "넘어질 뻔했어요.", en: "I almost fell." },
      { ko: "약속을 잊어버릴 뻔했어요.", en: "I almost forgot the appointment." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-(느)ㄴ다고 하다",
    romanization: "-(neu)ndago hada",
    meaning: "reported/indirect speech (says that)",
    explanation: "Used to report what someone said. Verbs take -ㄴ다고/는다고 하다, adjectives take -다고 하다, nouns take -(이)라고 하다.",
    examples: [
      { ko: "친구가 내일 온다고 했어요.", en: "My friend said he will come tomorrow." },
      { ko: "그 영화가 재미있다고 해요.", en: "They say that movie is fun." }
    ]
  },
  {
    level: "TOPIK II",
    pattern: "-았/었더라면",
    romanization: "-ass/eotdeoramyeon",
    meaning: "if (only) ... had (counterfactual)",
    explanation: "Expresses regret or a counterfactual condition about the past — 'if only I had...'. Usually followed by -(으)ㄹ 텐데 or -았/었을 거예요.",
    examples: [
      { ko: "조금 더 일찍 출발했더라면 늦지 않았을 거예요.", en: "If I had left a little earlier, I wouldn't have been late." },
      { ko: "그때 공부했더라면 좋았을 텐데.", en: "If only I had studied back then." }
    ]
  }
];

if (typeof window !== "undefined") window.GRAMMAR = GRAMMAR;
