// theme helper + reveal observer
window.site = (function () {
  function applyTheme(t) {
    if (!t) return;
    t = String(t).toLowerCase();
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add('theme-' + t);
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) { }
  }

  function setTheme(t) { applyTheme(t); }
  function getTheme() { return document.documentElement.getAttribute('data-theme') || 'light'; }

  function initRevealObserver() {
    try {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      document.querySelectorAll('.revealable').forEach(function (el) { obs.observe(el); });
    } catch (e) { /* noop */ }
  }

  return { setTheme: setTheme, getTheme: getTheme, initRevealObserver: initRevealObserver };
})();