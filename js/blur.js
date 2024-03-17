const customCursor = document.getElementById('custom-cursor');
const hoverContainers = document.querySelectorAll('.hover-container');

const updateCursors = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Обновляем позицию основного курсора
    customCursor.style.top = `${mouseY}px`;
    customCursor.style.left = `${mouseX}px`;

    // Проверяем, наведен ли курсор на какой-либо элемент .hover-container
    let isHovered = false;
    hoverContainers.forEach((hoverContainer) => {
        if (hoverContainer.matches(':hover')) {
            isHovered = true;
        }
    });

    // Добавляем или удаляем класс zoom у основного курсора в зависимости от наличия наведения
    if (isHovered) {
        customCursor.classList.add('zoom');
    } else {
        customCursor.classList.remove('zoom');
    }
};

window.addEventListener('mousemove', updateCursors);
