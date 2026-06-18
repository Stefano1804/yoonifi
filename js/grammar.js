/* Grammar reference: renders GRAMMAR cards, filterable by level + free-text search. */
(function () {
  "use strict";

  var list = document.getElementById("grammarList");
  var tabs = document.getElementById("grLevelTabs");
  var search = document.getElementById("grSearch");

  var level = "all";      // "all" | "TOPIK I" | "TOPIK II"
  var query = "";

  function badgeClass(lvl) { return lvl === "TOPIK I" ? "l1" : "l2"; }

  function matches(g) {
    if (level !== "all" && g.level !== level) return false;
    if (!query) return true;
    var hay = (g.pattern + " " + g.romanization + " " + g.meaning + " " + g.explanation).toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function exampleHTML(ex) {
    return '<div class="gr-ex">' +
      '<div class="gr-ex-ko">' + ex.ko + "</div>" +
      '<div class="gr-ex-en">' + ex.en + "</div>" +
      "</div>";
  }

  function cardHTML(g) {
    return '<article class="grammar-card">' +
      '<div class="gr-top">' +
        '<span class="gr-pattern">' + g.pattern + "</span>" +
        '<span class="gr-badge ' + badgeClass(g.level) + '">' + g.level + "</span>" +
      "</div>" +
      '<div class="gr-rom">' + g.romanization + "</div>" +
      '<div class="gr-meaning">' + g.meaning + "</div>" +
      '<p class="gr-explain">' + g.explanation + "</p>" +
      '<div class="gr-examples">' + g.examples.map(exampleHTML).join("") + "</div>" +
    "</article>";
  }

  function render() {
    var hits = GRAMMAR.filter(matches);
    if (!hits.length) {
      list.innerHTML = '<p class="empty-state">No patterns match your search.</p>';
      return;
    }
    list.innerHTML = hits.map(cardHTML).join("");
  }

  tabs.addEventListener("click", function (e) {
    var btn = e.target.closest(".tab");
    if (!btn) return;
    level = btn.dataset.level;
    Array.prototype.forEach.call(tabs.children, function (t) {
      t.classList.toggle("active", t === btn);
    });
    render();
  });

  search.addEventListener("input", function () {
    query = search.value.trim().toLowerCase();
    render();
  });

  render();
})();
