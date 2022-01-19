const navSlide = () => {
    const links = document.querySelector('.links');
    const socials = document.querySelector('.socials');

    links.classList.toggle('nav-active');
    socials.classList.toggle('nav-active');
};