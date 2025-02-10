document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => initSlider(slider));
});

function initSlider(slider) {
    const slides = slider.querySelector(".slides");
    const images = slides.children;
    const totalSlides = images.length;
    const visibleSlides = 3; // Nombre d'images visibles
    let currentIndex = 0;

    // Ajuste la largeur des slides dynamiquement
    slides.style.display = "flex";
    slides.style.transition = "transform 0.5s ease-in-out";
    Array.from(images).forEach(img => img.style.flex = `0 0 ${100 / visibleSlides}%`);

    function updateSlider() {
        const offset = -(currentIndex * (100 / visibleSlides));
        slides.style.transform = `translateX(${offset}%)`;
    }

    slider.querySelector(".next").addEventListener("click", () => {
        currentIndex += visibleSlides;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Retour au début
        }
        updateSlider();
    });

    slider.querySelector(".prev").addEventListener("click", () => {
        currentIndex -= visibleSlides;
        if (currentIndex < 0) {
            currentIndex = totalSlides - visibleSlides;
        }
        updateSlider();
    });
}
