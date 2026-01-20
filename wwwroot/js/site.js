// Theme boot: prefer localStorage then config
(function () {
    function applyTheme(t) {
        if (!t) return;
        t = String(t).toLowerCase();
        document.documentElement.classList.remove('theme-light', 'theme-dark');
        document.documentElement.classList.add('theme-' + t);
        document.documentElement.setAttribute('data-theme', t);
    }
    try {
        var stored = localStorage.getItem('theme');
        if (stored) applyTheme(stored);
        else {
            fetch('./appsettings.json')
                .then(r => r.json())
                .then(cfg => applyTheme((cfg && cfg.Theme) ? cfg.Theme : 'light'))
                .catch(() => applyTheme('light'));
        }
    } catch (e) {
        applyTheme('dark');
    }
})();

// 18+ affirmation modal logic
(function () {
    fetch('./appsettings.json')
        .then(r => r.json())
        .then(cfg => {
            if (cfg && cfg.RequireLegalAffirmation) {
                var affirmed = localStorage.getItem('userLegalAffirmation');
                if (affirmed !== 'true') {
                    // Show modal
                    var modal = document.createElement('div');
                    modal.id = 'legal-modal';
                    modal.innerHTML = `
                        <div class="modal-content">
                            <h2>Mature Content Notice</h2>
                            <p>
                                The material on this website is intended for a mature audience.<br>
                                Are you over the legal age of 18?
                            </p>
                            <div class="modal-actions">
                                <button class="btn btn-primary btn-sm" id="legal-yes">Yes, I am 18 or older</button>
                                <button class="btn btn-secondary btn-sm" id="legal-no">No, I am not</button>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(modal);
                    document.body.style.overflow = 'hidden';

                    document.getElementById('legal-yes').onclick = function () {
                        localStorage.setItem('userLegalAffirmation', 'true');
                        document.body.removeChild(modal);
                        document.body.style.overflow = '';
                    };
                    document.getElementById('legal-no').onclick = function () {
                        localStorage.removeItem('userLegalAffirmation');
                        window.location.href = 'https://www.google.com/';
                    };
                }
            }
        });
})();