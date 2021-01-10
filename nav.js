function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        //toggle
        nav.classList.toggle('nav-active');
    });
}

navSlide();