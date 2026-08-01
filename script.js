(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-theme";
  var toggle = document.getElementById("theme-toggle");
  var label = toggle && toggle.querySelector(".theme-toggle__label");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function applyTheme(theme) {
    var isLight = theme === "light";
    document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");

    if (toggle) {
      toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
      toggle.setAttribute("aria-pressed", String(isLight));
    }

    if (label) {
      label.textContent = isLight ? "Dark" : "Light";
    }
  }

  function initTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }

    applyTheme(stored === "light" ? "light" : "dark");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* ignore */
      }
    });
  }

  initTheme();

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderProjectPage() {
    var root = document.getElementById("project-detail");
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var projects = window.PORTFOLIO_PROJECTS || {};
    var project = id && projects[id];

    if (!project) {
      root.innerHTML =
        '<p class="project-page__missing">Project not found. <a href="index.html#projects">Back to projects</a>.</p>';
      document.title = "Project not found — Vineet Pandey";
      return;
    }

    document.title = project.title + " — Vineet Pandey";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", project.summary);

    var tags = (project.tags || [])
      .map(function (tag) {
        return "<li>" + escapeHtml(tag) + "</li>";
      })
      .join("");

    var about = (project.about || [])
      .map(function (para) {
        return "<p>" + escapeHtml(para) + "</p>";
      })
      .join("");

    var highlightItems = project.highlights || [];
    var highlights = highlightItems.length
      ? highlightItems
          .map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
          })
          .join("")
      : "";

    var imageItems = project.images || [];
    var gallery = imageItems.length
      ? imageItems
          .map(function (img) {
            return (
              '<figure class="project-detail__figure">' +
              '<img src="' +
              escapeHtml(img.src) +
              '" alt="' +
              escapeHtml(img.alt || "") +
              '" loading="lazy" decoding="async">' +
              (img.alt
                ? "<figcaption>" + escapeHtml(img.alt) + "</figcaption>"
                : "") +
              "</figure>"
            );
          })
          .join("")
      : "";

    root.innerHTML =
      '<p class="project-detail__label">Project</p>' +
      '<h1 class="project-detail__title">' +
      escapeHtml(project.title) +
      "</h1>" +
      '<p class="project-detail__summary">' +
      escapeHtml(project.summary) +
      "</p>" +
      '<ul class="tag-list" role="list" aria-label="Technologies">' +
      tags +
      "</ul>" +
      (highlights
        ? '<section class="project-detail__section" aria-labelledby="highlights-heading">' +
          '<h2 id="highlights-heading" class="project-detail__h2">Highlights</h2>' +
          '<ul class="project-detail__highlights" role="list">' +
          highlights +
          "</ul></section>"
        : "") +
      '<section class="project-detail__section" aria-labelledby="about-heading">' +
      '<h2 id="about-heading" class="project-detail__h2">About</h2>' +
      '<div class="project-detail__about">' +
      about +
      "</div></section>" +
      (gallery
        ? '<section class="project-detail__section" aria-labelledby="gallery-heading">' +
          '<h2 id="gallery-heading" class="project-detail__h2">From the repository</h2>' +
          '<div class="project-detail__gallery">' +
          gallery +
          "</div></section>"
        : "") +
      '<div class="project-detail__actions">' +
      (project.repo
        ? '<a class="primary" href="' +
          escapeHtml(project.repo) +
          '" rel="noopener noreferrer">GitHub repository</a>'
        : "") +
      '<a href="index.html#projects">All projects</a>' +
      "</div>";
  }

  renderProjectPage();
})();
