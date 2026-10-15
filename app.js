(function () {
  "use strict";

  const TYPE_LABELS = { video: "Video", figure: "Web-Figure", audio: "Audio" };
  const state = { type: "all", chapter: "all", q: "" };

  const listEl    = document.getElementById("supplement-list");
  const emptyEl   = document.getElementById("empty-state");
  const searchEl  = document.getElementById("search");
  const chapterEl = document.getElementById("chapter-filter");

  document.getElementById("year").textContent = new Date().getFullYear();

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  /* ---- chapter metadata helpers ---- */
  function chapterLabel(n) {
    const meta = CHAPTERS[n] || {};
    return meta.label || ("Chapter " + n);
  }

  function chapterHeading(n) {
    const meta = CHAPTERS[n] || {};
    const label = chapterLabel(n);
    const bits = [];

    if (meta.title) bits.push('<span class="ch-title">' + esc(meta.title) + '</span>');

    if (meta.film) {
      const yr = meta.year ? ' (' + esc(meta.year) + ')' : '';
      bits.push('<span class="ch-film"><em>' + esc(meta.film) + '</em>' + yr + '</span>');
    }

    if (meta.pages) bits.push('<span class="ch-pages">pp. ' + esc(meta.pages) + '</span>');

    return esc(label) + bits.join(" ");
  }

  /* ---- populate the chapter dropdown from the data ---- */
  const chapters = [...new Set(SUPPLEMENTS.map((s) => s.chapter))]
    .sort((a, b) => a - b);

  chapters.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    const meta = CHAPTERS[c] || {};
    const suffix = meta.film ? " — " + meta.film : (meta.title ? " — " + meta.title : "");
    opt.textContent = chapterLabel(c) + suffix;
    chapterEl.appendChild(opt);
  });

  /* ---- filtering ---- */
  function visible() {
    const q = state.q.trim().toLowerCase();
    return SUPPLEMENTS
      .filter((s) => state.type === "all" || s.type === state.type)
      .filter((s) => state.chapter === "all" || String(s.chapter) === String(state.chapter))
      .filter((s) => {
        if (!q) return true;
        const meta = CHAPTERS[s.chapter] || {};
        return [
          s.title, s.description,
          "chapter " + s.chapter, "page " + s.page,
          meta.title, meta.film, meta.label
        ].join(" ").toLowerCase().includes(q);
      })
      .sort((a, b) => a.chapter - b.chapter || a.page - b.page);
  }

  /* ---- markup for one entry ---- */
  function entryHTML(item) {
    const meta =
      '<div class="entry-meta">' +
      '<span>' + esc(TYPE_LABELS[item.type] || item.type) + '</span>' +
      '<span class="page">p. ' + esc(item.page) + '</span>' +
      '</div>';

    let media = "";

    if (item.type === "video") {
      const poster = item.thumb
        ? '<img src="' + esc(item.thumb) + '" alt="" loading="lazy">'
        : "";
      media =
        '<div class="entry-media" data-embed="' + esc(it
