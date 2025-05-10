const toggleBtn = document.getElementById('toggle-theme');
const icon = document.getElementById('theme-icon');
const themeName = document.getElementById('current-theme');
const toggleText = document.getElementById('toggle-text');
const savedTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        icon.className = 'bi bi-moon-stars-fill';
        themeName.textContent = 'Current Theme: Dark Theme';
        toggleText.textContent = 'Switch to Light';
    } else {
        icon.className = 'bi bi-sun-fill';
        themeName.textContent = 'Current Theme: Light Theme';
        toggleText.textContent = 'Switch to Dark';
    }
}

applyTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});
