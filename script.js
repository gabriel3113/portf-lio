var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// ola
// Expandir e recolher categorias de projetos
document.querySelectorAll('.project-category h2').forEach(categoryHeader => {
    categoryHeader.addEventListener('click', () => {
        categoryHeader.parentElement.classList.toggle('active');
    });
});

// Expandir e recolher detalhes dos projetos individuais
document.querySelectorAll('.project-item h3').forEach(projectHeader => {
    projectHeader.addEventListener('click', () => {
        projectHeader.parentElement.classList.toggle('active');
    });
});
