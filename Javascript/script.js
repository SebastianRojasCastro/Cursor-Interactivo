// CURSOR PERSONALIZADO
const cursor = document.querySelector('.cursor');
const interactiveElements = document.querySelectorAll('button, a, [role="button"]');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });

element.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    });
});

// MENÚ HAMBURGUESA
const hamburgesa = document.querySelector('.hamburgesa');
const nav = document.querySelector('nav');

hamburgesa.addEventListener('click', () => {
    hamburgesa.classList.toggle('active');
    nav.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgesa.classList.remove('active');
        nav.classList.remove('active');
    });
});