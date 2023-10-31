const menu = document.querySelector('#menu');
console.log(menu);
const sidebar = Adocument.querySelector('.sidebar');
console.log(sidebar);

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});