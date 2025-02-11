document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");

    if (!burger || !nav) {
        console.error("Menu burger ou navigation introuvable.");
        return;
    }

    burger.addEventListener("click", function() {
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    });
});

// Fonction pour changer l'image dans le slider
function changeSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const slideWidth = slider.offsetWidth;
    const totalSlides = slides.children.length;
    
    // Récupérer l'index actuel à partir de la transformation CSS
    let currentIndex = Math.abs(parseInt(slides.style.transform.replace('translateX(', '')) || 0) / slideWidth;
    
    // Calculer le nouvel index en fonction de la direction (next ou prev)
    if (direction === 'next') {
        currentIndex++;
        if (currentIndex >= totalSlides) currentIndex = 0; // Retour au début
    } else {
        currentIndex--;
        if (currentIndex < 0) currentIndex = totalSlides - 1; // Aller à la fin
    }
    
    // Appliquer la transformation pour afficher la bonne image
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Attacher les événements aux boutons
document.querySelectorAll('.prev').forEach(button => {
    button.addEventListener('click', function() {
        const sliderId = button.closest('.slider').id;
        changeSlide(sliderId, 'prev');
    });
});

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', function() {
        const sliderId = button.closest('.slider').id;
        changeSlide(sliderId, 'next');
    });
});

// Adapter le slider au redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    document.querySelectorAll('.slider .slides').forEach(slides => {
        const slideWidth = slides.parentElement.offsetWidth;
        const currentIndex = Math.abs(parseInt(slides.style.transform.replace('translateX(', '')) || 0) / slideWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
});

