/* Flashcards with a lightweight spaced-repetition (SM-2 inspired) engine.
 * Progress persists in localStorage per word.
 */
(function () {
  "use strict";

  var els = {
    levelTabs: document.getElementById("fcLevelTabs"),
    reset: document.getElementById("fcReset"),
    card: document.getElementById("flashcard"),
    posFront: document.getElementById("fcPosFront"),
    front: document.getElementById("fcFront"),
    rom: document.getElementById("fcRom"),
    meaning: document.getElementById("fcMeaning"),
    example: document.getElementById("fcExample"),
    rate: document.getElementById("fcRate"),
    counter: document.getElementById("fcCounter"),
    progFill: document.getElementById("fcProgressFill"),
    progText: document.getElementById("fcProgressText")
  };

  var STORE_KEY = "topik_fc_srs_v1";
  var level = "topik1";
  var deck = [];        // ordered list of card indices to study this round
  var pos = 0;          // position in deck
  var srs = load();     // { "<level>:<ko>": {ease, interval, due, reps, mastered} }

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(srs)); } catch (e) {}
  }
  function keyFor(word) { return level + ":" + word.ko; }
  function stateFor(word) {
    var k = keyFor(word);
    if (!srs[k]) srs[k] = { ease: 2.5, interval: 0, due: 0, reps: 0, mastered: false };
    return srs[k];
  }

  // Build a study order: due/unseen first, then by lowest reps. "due" is a logical
  // session counter so the round naturally resurfaces lapsed cards.
  var sessionTick = 0;
  function buildDeck() {
    var words = VOCABULARY[level];
    var order = words.map(function (w, i) { return i; });
    order.sort(function (a, b) {
      var sa = stateFor(words[a]), sb = stateFor(words[b]);
      if (sa.due !== sb.due) return sa.due - sb.due;
      return sa.reps - sb.reps;
    });
    deck = order;
    pos = 0;
    sessionTick = 0;
  }

  function current() { return VOCABULARY[level][deck[pos]]; }

  function render() {
    var w = current();
    els.card.classList.remove("flipped");
    els.rate.classList.remove("show");
    els.posFront.textContent = w.pos;
    els.front.textContent = w.ko;
    els.rom.textContent = w.rom;
    els.meaning.textContent = w.en;
    els.example.innerHTML = w.example.ko + "<small>" + w.example.en + "</small>";
    els.counter.textContent = "Card " + (pos + 1) + " of " + deck.length;
    renderProgress();
  }

  function renderProgress() {
    var words = VOCABULARY[level];
    var mastered = words.reduce(function (n, w) {
      return n + (stateFor(w).mastered ? 1 : 0);
    }, 0);
    var pct = words.length ? Math.round((mastered / words.length) * 100) : 0;
    els.progFill.style.width = pct + "%";
    els.progText.textContent = mastered + " / " + words.length + " mastered";
  }

  function flip() {
    var flipped = els.card.classList.toggle("flipped");
    els.rate.classList.toggle("show", flipped);
  }

  // SM-2 style update. quality: 0 Again, 1 Hard, 2 Good, 3 Easy
  function grade(quality) {
    var w = current();
    var s = stateFor(w);
    sessionTick++;

    if (quality === 0) {           // Again — relapse
      s.reps = 0;
      s.interval = 0;
      s.ease = Math.max(1.3, s.ease - 0.2);
      s.mastered = false;
      s.due = sessionTick + 1;     // resurface very soon
    } else {
      s.reps += 1;
      if (s.reps === 1) s.interval = 1;
      else if (s.reps === 2) s.interval = 3;
      else s.interval = Math.round(s.interval * s.ease) || 1;

      var delta = quality === 1 ? -0.15 : quality === 3 ? 0.12 : 0;
      s.ease = Math.max(1.3, Math.min(2.8, s.ease + delta));
      s.due = sessionTick + s.interval;
      s.mastered = s.reps >= 3 && quality >= 2;
    }
    save();
    next();
  }

  function next() {
    pos++;
    if (pos >= deck.length) {
      // rebuild so lapsed cards (low due) come back around
      buildDeck();
    }
    render();
  }

  // ---- events ----
  els.card.addEventListener("click", flip);
  els.card.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
  });

  els.rate.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-q]");
    if (!btn) return;
    grade(parseInt(btn.dataset.q, 10));
  });

  els.levelTabs.addEventListener("click", function (e) {
    var btn = e.target.closest(".tab");
    if (!btn) return;
    level = btn.dataset.level;
    Array.prototype.forEach.call(els.levelTabs.children, function (t) {
      t.classList.toggle("active", t === btn);
    });
    buildDeck();
    render();
  });

  els.reset.addEventListener("click", function () {
    var words = VOCABULARY[level];
    words.forEach(function (w) { delete srs[keyFor(w)]; });
    save();
    buildDeck();
    render();
  });

  // keyboard shortcuts 1-4 to rate when flipped
  document.addEventListener("keydown", function (e) {
    if (!els.card.classList.contains("flipped")) return;
    if (e.key >= "1" && e.key <= "4") grade(parseInt(e.key, 10) - 1);
  });

  buildDeck();
  render();
})();
