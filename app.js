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
        '<div class="entry-media" data-embed="' + esc(item.src) + '">' +
        poster +
        '<button class="play-btn" type="button" aria-label="Play: ' + esc(item.title) + '">' +
        '<span aria-hidden="true">&#9654;</span>' +
        '</button>' +
        '</div>';
    } else if (item.type === "figure") {
      media =
        '<div class="entry-media is-figure">' +
        '<button class="figure-trigger" type="button"' +
        ' data-full="' + esc(item.src) + '"' +
        ' data-caption="' + esc(item.description) + '">' +
        '<img src="' + esc(item.src) + '" alt="' + esc(item.description) + '" loading="lazy">' +
        '</button>' +
        '</div>';
    } else if (item.type === "audio") {
      media =
        '<div class="entry-media is-figure" style="padding:1.25rem;">' +
        '<audio controls preload="none" style="width:100%" src="' + esc(item.src) + '"></audio>' +
        '</div>';
    }

    return
      '<article class="entry">' +
      media +
      '<div class="entry-body">' +
      meta +
      '<h4>' + esc(item.title) + '</h4>' +
      '<p>' + esc(item.description) + '</p>' +
      '</div>' +
      '</article>';
  }

  /* ---- render ---- */
  function render() {
    const items = visible();

    if (!items.length) {
      listEl.innerHTML = "";
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;

    const byChapter = items.reduce((acc, item) => {
      (acc[item.chapter] = acc[item.chapter] || []).push(item);
      return acc;
    }, {});

    listEl.innerHTML = Object.keys(byChapter)
      .sort((a, b) => a - b)
      .map((ch) =>
        '<section class="chapter-block" id="ch-' + esc(ch) + '">' +
        '<h3>' + chapterHeading(ch) + '</h3>' +
        '<div class="entry-grid">' +
        byChapter[ch].map(entryHTML).join("") +
        '</div>' +
        '</section>')
      .join("");
  }

  /* ---- interactions: lazy video load + lightbox ---- */
  listEl.addEventListener("click", (e) => {
    const playBtn = e.target.closest(".play-btn");
    if (playBtn) {
      const frame = playBtn.closest(".entry-media");
      const url = frame.dataset.embed;
      const sep = url.includes("?") ? "&" : "?";
      frame.innerHTML =
        '<iframe src="' + esc(url) + sep + 'rel=0" title="Film excerpt"' +
        ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"' +
        ' allowfullscreen loading="lazy"></iframe>';
      return;
    }

    const figBtn = e.target.closest(".figure-trigger");
    if (figBtn) {
      const lb = document.getElementById("lightbox");
      document.getElementById("lightbox-img").src = figBtn.dataset.full;
      document.getElementById("lightbox-img").alt = figBtn.dataset.caption || "";
      document.getElementById("lightbox-caption").textContent = figBtn.dataset.caption || "";
      lb.hidden = false;
      document.body.style.overflow = "hidden";
    }
  });

  const lightbox = document.getElementById("lightbox");
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  /* ---- controls ---- */
  function resetFilters() {
    state.type = "all";
    state.chapter = "all";
    state.q = "";
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
    document.querySelector('.chip[data-type="all"]').classList.add("is-active");
    chapterEl.value = "all";
    searchEl.value = "";
  }

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      state.type = chip.dataset.type;
      render();
    });
  });

  chapterEl.addEventListener("change", () => { state.chapter = chapterEl.value; render(); });

  let debounce;
  searchEl.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => { state.q = searchEl.value; render(); }, 150);
  });

  /* ---- TOC links reset filters before scroll ---- */
  document.querySelectorAll('.toc a.toc-title').forEach(link => {
    link.addEventListener('click', () => {
      resetFilters();
      render();
    });
  });

  render();
})();
