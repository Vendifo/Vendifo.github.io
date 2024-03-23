// translations.js
const translations = {
    "ru": {
        "about": "Обо мне",
        "skills": "Навыки",
        "projects": "Проекты",
        "contacts": "Контакты",
        "programming_is_fun": "Программирование - это весело",
        "web_developer_portfolio_site": "Сайт портфолио веб-разработчика",
        "about_me": "Обо мне",
        "junior_frontend_developer": "фронтенд-разработчик",
        "intro_text": "Привет, меня зовут Денис, я фронтенд-разработчик с пылающим желанием создавать удивительные пользовательские интерфейсы. Моя страсть к веб-разработке вдохновляет меня постоянно изучать новые технологии и методы. Готов взяться за любую задачу и стремлюсь расти профессионально каждый день.",
        "project_opportunity": "Каждый проект для меня - это возможность не только применить свои знания, но и постоянно расти в своих навыках. Я убежден, что самый важный аспект разработки - это способность решать проблемы и находить креативные подходы к реализации задач."
    },
    "en": {
        "about": "About",
        "skills": "Skills",
        "projects": "Projects",
        "contacts": "Contacts",
        "programming_is_fun": "Programming is fun",
        "web_developer_portfolio_site": "Web developer portfolio site",
        "about_me": "About me",
        "junior_frontend_developer": "Junior frontend developer",
        "intro_text": "Hi, I'm Denis, a junior frontend developer with a burning desire to create amazing user interfaces. My passion for web development inspires me to constantly learn new technologies and techniques. Ready to take on any challenge and eager to grow professionally every day.",
        "project_opportunity": "Every project for me is an opportunity not only to apply my knowledge, but also to constantly grow in my skills. I am convinced that the most important aspect of development is the ability to solve problems and find creative approaches to the realization of tasks."
    }
};

let currentLanguage = translations['ru'];

function changeLanguage(lang) {
    currentLanguage = translations[lang];
    updatePageLanguage();
}

function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = currentLanguage[key];
    });
}

updatePageLanguage();
