const menu = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');
menu.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
  menu.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.side-nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.side-nav a').forEach(item => item.classList.remove('active'));
  link.classList.add('active'); sidebar.classList.remove('open'); menu.textContent = '☰'; menu.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
