// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('night');
    const isNight = document.body.classList.contains('night');
    document.getElementById('themeToggle').textContent = isNight
        ? "Switch to Day Mode"
        : "Switch to Night Mode";
});
