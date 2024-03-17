// translations-en.js
const translationsEn = {
    "about": "About",
    "skills": "Skills",
    "projects": "Projects",
    "contacts": "Contacts",
    "programming_is_fun": "Programming is fun",
    "web_developer_portfolio_site": "Web developer portfolio site",
    "about_me": "About me",
    "junior_frontend_developer": "Junior frontend developer",
    "intro_text": "Hi, I'm Denis, a junior frontend developer with a burning desire to create amazing user interfaces. My passion for web development inspires me to constantly learn new technologies and techniques. Ready to take on any challenge and eager to grow professionally every day.",
    "project_opportunity": "Every project for me is an opportunity not only to apply my knowledge, but also to constantly grow in my skills. I am convinced that the most important aspect of development is the ability to solve problems and find creative approaches to the realization of tasks.",
    // Добавьте другие переводы по мере необходимости
};

let currentLanguage = translationsEn;

function changeLanguage(lang) {
    if (lang === 'en') {
        currentLanguage = translationsEn;
    } else {
        currentLanguage = translationsRu;
    }
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
