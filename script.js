const toggleBtn = document.getElementById('theme-toggle');

// 1. Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
}

// 2. Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});