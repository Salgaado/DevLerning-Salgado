const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const offcanvas = document.getElementById('offcanvas');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    offcanvas.style.left = '0'; // Altere para 'left'
    overlay.style.width = '100%';
    overlay.style.opacity = '1';
});

closeBtn.addEventListener('click', () => {
    closeOffcanvas();
});

overlay.addEventListener('click', () => {
    closeOffcanvas();
});

function closeOffcanvas() {
    offcanvas.style.left = '-300px'; // Altere para 'left'
    overlay.style.width = '0';
    overlay.style.opacity = '0';
}