document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');
    const button = document.querySelector('.head__button');

    links.forEach(function(each) {
        each.onclick = scrollSmoothly;
    });

    button.onclick = scrollSmoothly;

    function scrollSmoothly(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href") || '#projects'; // Если у кнопки нет href, используем #projects
        const targetPosition = document.querySelector(targetId).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // adjust scrolling speed here
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
});
