// Hamburger menu fix - vanilla JavaScript
(function() {
    'use strict';
    
    function initOffcanvas() {
        var toggler = document.getElementById('offcanvas-toggler');
        var closeBtn = document.querySelector('.close-offcanvas');
        var overlay = document.querySelector('.offcanvas-overlay');
        var body = document.body;
        
        if (toggler) {
            toggler.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                body.classList.add('offcanvas-active');
                return false;
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                body.classList.remove('offcanvas-active');
                return false;
            });
        }
        
        if (overlay) {
            overlay.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                body.classList.remove('offcanvas-active');
                return false;
            });
        }
        
        // Handle submenu toggles
        var menuTogglers = document.querySelectorAll('.offcanvas-inner .menu-toggler');
        menuTogglers.forEach(function(toggler) {
            toggler.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var parent = this.closest('.menu-parent');
                var submenu = parent ? parent.querySelector('.menu-child') : null;
                
                if (parent) {
                    parent.classList.toggle('menu-parent-open');
                }
                
                if (submenu) {
                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                    } else {
                        submenu.style.display = 'block';
                    }
                }
                return false;
            });
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOffcanvas);
    } else {
        initOffcanvas();
    }
})();
