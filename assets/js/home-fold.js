/* About page, wide screens: the space above the About text equals the space
   under the Research Interests list, so that block sits centred on the
   first screen, kept between 36px and 48px so the top never opens up. */
(function () {
    function fit() {
        var main = document.querySelector('main');
        var head = document.querySelector('main .text-profile-bio');
        var list = document.querySelector('main .home-interests__list');
        var nav = document.querySelector('nav.site-nav');
        if (!main || !head || !list || !nav) return;
        if (window.innerWidth < 992) { main.style.paddingTop = ''; return; }
        main.style.paddingTop = '0px';
        var navBottom = nav.getBoundingClientRect().bottom;
        var top = head.getBoundingClientRect().top;
        var block = list.getBoundingClientRect().bottom - top;
        var gap = Math.min(48, Math.max(36, (window.innerHeight - navBottom - block) / 2));
        main.style.paddingTop = Math.max(0, gap - (top - navBottom)) + 'px';
    }
    fit();
    window.addEventListener('load', fit);
    window.addEventListener('resize', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
