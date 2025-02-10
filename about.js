document.addEventListener('DOMContentLoaded', () => {
    const imageWrappers = document.querySelectorAll('.image-wrapper');

    function checkVisibility(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }
       
    const observer = new IntersectionObserver(checkVisibility, {
            threshold: 0.5 
    });    
        
    imageWrappers.forEach(wrapper => {
            observer.observe(wrapper);
    });


});