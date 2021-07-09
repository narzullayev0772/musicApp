const barsIcon = document.querySelector('.bars__icons');
const navbar = document.querySelector('.navbar__links')

barsIcon.addEventListener('click', () => {
    barsIcon.classList.toggle('active');
    navbar.classList.toggle('active')
})