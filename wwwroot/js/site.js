// site helpers: theme, smooth scroll and reveal observer
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
    function getTheme() { return document.documentElement.getAttribute('data-theme') || (document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light'); }

    function scrollToId(id) {
        if (!id) return;
        var el = document.getElementById(id);
        if (!el) return;
        var nav = document.querySelector('.top-navbar');
        var navHeight = nav ? nav.offsetHeight : 0;
        var top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }

    function initRevealObserver() {
        try {
            var options = { threshold: 0.08 };
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            document.querySelectorAll('.revealable').forEach(function (el) {
                observer.observe(el);
            });
        } catch (e) { /* noop */ }
    }

    return {
        setTheme: setTheme,
        getTheme: getTheme,
        scrollToId: scrollToId,
        initRevealObserver: initRevealObserver
    };
})();