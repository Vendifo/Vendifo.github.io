const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseover', () => {
    skill.style.transform = 'translateY(-10px)';
  });

  skill.addEventListener('mouseout', () => {
    skill.style.transform = 'translateY(0)';
  });
});
