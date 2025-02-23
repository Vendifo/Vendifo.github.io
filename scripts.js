document.addEventListener("DOMContentLoaded", function () {
    // GSAP animation for menu items
    gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
    });

    // GSAP animation for language toggle
    const languageToggle = document.getElementById("language-toggle");
    languageToggle.addEventListener("click", function () {
        gsap.to(languageToggle, {
            rotation: "+=180",
            duration: 0.5,
            ease: "power1.inOut"
        });
    });
    
    

});

const steps = document.querySelectorAll('.step');

    // Функция для активации анимации, когда шаг появляется в области видимости
    function checkSteps() {
        steps.forEach(step => {
            const rect = step.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                // Добавляем класс для активации анимации
                step.querySelector('.step-dot').classList.add('step-appear-visible');
                step.querySelector('.step-content').classList.add('step-appear-visible');
            }
        });
    }

    // Слушаем прокрутку и выполняем функцию проверки
    window.addEventListener('scroll', checkSteps);

    // Вызовем сразу, чтобы анимация сработала при загрузке страницы, если элементы видны
    checkSteps();