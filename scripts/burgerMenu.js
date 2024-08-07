document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burgerIcon');
    const mobileMenu = document.getElementById('mobileMenu');

    burgerIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});