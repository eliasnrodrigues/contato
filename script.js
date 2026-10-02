const root = document.documentElement;
const themeButton = document.querySelector('#theme-toggle');
const avatar = document.querySelector('#avatar');
const sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>';
const moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14a9 9 0 0 1-10.5-10.5A9 9 0 1 0 20.5 14Z"/></svg>';
function applyTheme(isLight) {
  root.classList.toggle('light', isLight);
  avatar.src = isLight ? 'assets/avatar-light.png' : 'assets/avatar.png';
  themeButton.innerHTML = (isLight ? sun : moon) + '<span id="theme-label">' + (isLight ? 'DIA' : 'NOITE') + '</span>';
  themeButton.setAttribute('aria-label', isLight ? 'Ativar modo noite' : 'Ativar modo dia');
  themeButton.setAttribute('aria-pressed', String(!isLight));
  document.querySelector('meta[name="theme-color"]').content = isLight ? '#f5f1e9' : '#161c1a';
}
function toggleMode() { applyTheme(!root.classList.contains('light')); }
themeButton.addEventListener('click', toggleMode);
applyTheme(root.classList.contains('light'));
document.querySelector('#year').textContent = new Date().getFullYear();
const services = document.querySelector('#services');
document.querySelector('#open-services').addEventListener('click', () => services.showModal());
services.querySelector('.close').addEventListener('click', () => services.close());
services.addEventListener('click', event => {
  const rect = services.getBoundingClientRect();
  if (event.target === services && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) services.close();
});
