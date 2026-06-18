/* Reading practice: renders passages with clickable glossed words.
 * Passages live here as fixtures (the spec'd data/ folder only holds vocab + grammar).
 * A token is either a plain string or { w, rom, en } for a clickable, glossed word.
 */
(function () {
  "use strict";

  var PASSAGES = {
    topik1: [
      {
        title: "내 친구 (My Friend)",
        tokens: [
          "저는 ", { w: "학생", rom: "haksaeng", en: "student" }, "이에요. 제 ",
          { w: "친구", rom: "chingu", en: "friend" }, " 이름은 민수예요. 민수는 매일 ",
          { w: "학교", rom: "hakgyo", en: "school" }, "에 ", { w: "가요", rom: "gayo", en: "to go" },
          ". 우리는 같이 ", { w: "밥", rom: "bap", en: "rice, meal" }, "을 ",
          { w: "먹어요", rom: "meogeoyo", en: "to eat" }, ". 점심에는 보통 한국 ",
          { w: "음식", rom: "eumsik", en: "food" }, "을 먹어요. 민수는 아주 좋은 친구예요."
        ]
      },
      {
        title: "주말 (The Weekend)",
        tokens: [
          { w: "오늘", rom: "oneul", en: "today" }, "은 토요일이에요. ",
          { w: "지금", rom: "jigeum", en: "now" }, " ", { w: "집", rom: "jip", en: "house, home" },
          "에 있어요. 날씨가 좋아서 ", { w: "친구", rom: "chingu", en: "friend" }, "를 ",
          { w: "만나요", rom: "mannayo", en: "to meet" }, ". 우리는 카페에서 ",
          { w: "물", rom: "mul", en: "water" }, "하고 커피를 ", { w: "마셔요", rom: "masyeoyo", en: "to drink" },
          ". ", { w: "내일", rom: "naeil", en: "tomorrow" }, "은 일요일이에요. 또 만나고 싶어요."
        ]
      }
    ],
    topik2: [
      {
        title: "한국어 공부 (Studying Korean)",
        tokens: [
          "저는 한국어를 공부한 지 일 년이 ", { w: "되었어요", rom: "doeeosseoyo", en: "it has become" },
          ". 처음에는 ", { w: "문법", rom: "munbeop", en: "grammar" }, "이 너무 ",
          { w: "어려웠어요", rom: "eoryeowosseoyo", en: "was difficult" }, ". 하지만 매일 ",
          { w: "연습", rom: "yeonseup", en: "practice" }, "하니까 ", { w: "실력", rom: "sillyeok", en: "skill, ability" },
          "이 ", { w: "늘었어요", rom: "neureosseoyo", en: "improved, increased" },
          ". 이제는 한국 ", { w: "뉴스", rom: "nyuseu", en: "news" }, "도 조금 이해할 수 있어요. ",
          "앞으로도 ", { w: "꾸준히", rom: "kkujunhi", en: "steadily" }, " 공부할 거예요."
        ]
      },
      {
        title: "환경 보호 (Protecting the Environment)",
        tokens: [
          "요즘 ", { w: "환경", rom: "hwangyeong", en: "environment" }, " ",
          { w: "오염", rom: "oyeom", en: "pollution" }, "이 심각한 ", { w: "문제", rom: "munje", en: "problem" },
          "예요. 우리는 ", { w: "쓰레기", rom: "sseuregi", en: "trash, garbage" }, "를 줄이고 ",
          { w: "재활용", rom: "jaehwaryong", en: "recycling" }, "을 ",
          { w: "실천해야", rom: "silcheonhaeya", en: "must practice" }, " 해요. 작은 ",
          { w: "노력", rom: "noryeok", en: "effort" }, "이 모이면 큰 ",
          { w: "변화", rom: "byeonhwa", en: "change" }, "를 만들 수 있어요."
        ]
      }
    ]
  };

  var els = {
    tabs: document.getElementById("rdTabs"),
    title: document.getElementById("rdTitle"),
    body: document.getElementById("rdBody"),
    pop: document.getElementById("wordPop"),
    popKo: document.getElementById("wpKo"),
    popRom: document.getElementById("wpRom"),
    popEn: document.getElementById("wpEn")
  };

  var LEVELS = [
    { key: "topik1", label: "TOPIK I" },
    { key: "topik2", label: "TOPIK II" }
  ];

  var level = "topik1";
  var index = 0;          // which passage within the level
  var activeWord = null;  // currently glossed .rd-word element

  function buildTabs() {
    // one tab per passage across both levels, grouped by label
    var html = "";
    LEVELS.forEach(function (lvl) {
      PASSAGES[lvl.key].forEach(function (p, i) {
        var active = lvl.key === level && i === index;
        html += '<button class="tab' + (active ? " active" : "") + '" ' +
          'data-level="' + lvl.key + '" data-index="' + i + '">' +
          lvl.label + " · " + p.title.replace(/\s*\(.*\)\s*/, "") + "</button>";
      });
    });
    els.tabs.innerHTML = html;
  }

  function render() {
    hidePop();
    var p = PASSAGES[level][index];
    els.title.textContent = p.title;
    els.body.innerHTML = p.tokens.map(function (tok) {
      if (typeof tok === "string") return escapeText(tok);
      return '<span class="rd-word" data-ko="' + attr(tok.w) +
        '" data-rom="' + attr(tok.rom) + '" data-en="' + attr(tok.en) + '">' +
        escapeText(tok.w) + "</span>";
    }).join("");
    Array.prototype.forEach.call(els.tabs.children, function (t) {
      t.classList.toggle("active", t.dataset.level === level && +t.dataset.index === index);
    });
  }

  function escapeText(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function attr(s) { return escapeText(s).replace(/"/g, "&quot;"); }

  function showPop(wordEl) {
    if (activeWord) activeWord.classList.remove("active");
    activeWord = wordEl;
    wordEl.classList.add("active");

    els.popKo.textContent = wordEl.dataset.ko;
    els.popRom.textContent = wordEl.dataset.rom;
    els.popEn.textContent = wordEl.dataset.en;
    els.pop.hidden = false;

    var r = wordEl.getBoundingClientRect();
    els.pop.style.left = (window.scrollX + r.left + r.width / 2) + "px";
    els.pop.style.top = (window.scrollY + r.top - 8) + "px";
  }

  function hidePop() {
    els.pop.hidden = true;
    if (activeWord) { activeWord.classList.remove("active"); activeWord = null; }
  }

  // ---- events ----
  els.tabs.addEventListener("click", function (e) {
    var btn = e.target.closest(".tab");
    if (!btn) return;
    level = btn.dataset.level;
    index = +btn.dataset.index;
    render();
  });

  els.body.addEventListener("click", function (e) {
    var word = e.target.closest(".rd-word");
    if (!word) { hidePop(); return; }
    e.stopPropagation();
    if (word === activeWord) { hidePop(); return; }
    showPop(word);
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".rd-word") && !e.target.closest(".word-pop")) hidePop();
  });
  window.addEventListener("scroll", hidePop, { passive: true });
  window.addEventListener("resize", hidePop);

  buildTabs();
  render();
})();
