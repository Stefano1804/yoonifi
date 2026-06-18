/* Multiple-choice vocabulary quiz with score tracking.
 * 10 questions: show the Korean word, pick the correct English meaning.
 */
(function () {
  "use strict";

  var QUESTION_COUNT = 10;
  var OPTION_COUNT = 4;

  var els = {
    levelTabs: document.getElementById("qzLevelTabs"),
    startBtn: document.getElementById("qzStartBtn"),
    start: document.getElementById("quizStart"),
    game: document.getElementById("quizGame"),
    result: document.getElementById("quizResult"),
    count: document.getElementById("qzCount"),
    score: document.getElementById("qzScore"),
    progFill: document.getElementById("qzProgressFill"),
    question: document.getElementById("qzQuestion"),
    options: document.getElementById("qzOptions"),
    ring: document.getElementById("qzRing"),
    finalScore: document.getElementById("qzFinalScore"),
    verdict: document.getElementById("qzVerdict"),
    verdictSub: document.getElementById("qzVerdictSub"),
    restart: document.getElementById("qzRestart")
  };

  var level = "topik1";   // "topik1" | "topik2" | "mixed"
  var questions = [];
  var current = 0;
  var score = 0;
  var locked = false;     // prevent double answering

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function poolFor(lvl) {
    if (lvl === "mixed") return VOCABULARY.topik1.concat(VOCABULARY.topik2);
    return VOCABULARY[lvl];
  }

  function buildQuestions() {
    var pool = poolFor(level);
    var picked = shuffle(pool).slice(0, Math.min(QUESTION_COUNT, pool.length));
    return picked.map(function (word) {
      var distractors = shuffle(pool.filter(function (w) { return w.en !== word.en; }))
        .slice(0, OPTION_COUNT - 1)
        .map(function (w) { return w.en; });
      return { word: word, options: shuffle([word.en].concat(distractors)) };
    });
  }

  function show(el) { el.classList.remove("hidden"); }
  function hide(el) { el.classList.add("hidden"); }

  function startQuiz() {
    questions = buildQuestions();
    current = 0;
    score = 0;
    locked = false;
    hide(els.start);
    hide(els.result);
    show(els.game);
    renderQuestion();
  }

  function renderQuestion() {
    locked = false;
    var q = questions[current];
    els.count.textContent = "Question " + (current + 1) + " / " + questions.length;
    els.score.textContent = "Score: " + score;
    els.progFill.style.width = Math.round((current / questions.length) * 100) + "%";
    els.question.textContent = q.word.ko;

    els.options.innerHTML = q.options.map(function (opt) {
      return '<button class="quiz-opt" data-en="' +
        opt.replace(/&/g, "&amp;").replace(/"/g, "&quot;") + '">' +
        opt.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</button>";
    }).join("");
  }

  function answer(btn) {
    if (locked) return;
    locked = true;
    var q = questions[current];
    var chosen = btn.dataset.en;
    var correct = q.word.en;

    Array.prototype.forEach.call(els.options.children, function (b) {
      b.disabled = true;
      if (b.dataset.en === correct) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });

    if (chosen === correct) score++;
    els.score.textContent = "Score: " + score;

    setTimeout(function () {
      current++;
      if (current >= questions.length) finish();
      else renderQuestion();
    }, 900);
  }

  function finish() {
    hide(els.game);
    show(els.result);
    var pct = Math.round((score / questions.length) * 100);
    els.finalScore.textContent = score;
    els.ring.style.setProperty("--pct", pct + "%");

    var verdict, sub;
    if (pct === 100) { verdict = "Perfect! 완벽해요! 🎉"; sub = "Every answer correct. Excellent work."; }
    else if (pct >= 80) { verdict = "Great job! 잘했어요!"; sub = "You know these words well."; }
    else if (pct >= 50) { verdict = "Good effort! 좋아요!"; sub = "Keep reviewing and try again."; }
    else { verdict = "Keep practicing! 화이팅!"; sub = "Run through the flashcards, then retry."; }
    els.verdict.textContent = verdict;
    els.verdictSub.textContent = sub;
  }

  // ---- events ----
  els.levelTabs.addEventListener("click", function (e) {
    var btn = e.target.closest(".tab");
    if (!btn) return;
    level = btn.dataset.level;
    Array.prototype.forEach.call(els.levelTabs.children, function (t) {
      t.classList.toggle("active", t === btn);
    });
  });

  els.startBtn.addEventListener("click", startQuiz);
  els.restart.addEventListener("click", startQuiz);

  els.options.addEventListener("click", function (e) {
    var btn = e.target.closest(".quiz-opt");
    if (btn) answer(btn);
  });
})();
