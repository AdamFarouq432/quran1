function toggleMode() {
  const body = document.body;
  const button = document.querySelector('.mode-toggle');

  body.classList.toggle('dark-mode');

  button.textContent = body.classList.contains('dark-mode')
    ? '☀️ الوضع النهاري'
    : '🌙 الوضع الليلي';
}
