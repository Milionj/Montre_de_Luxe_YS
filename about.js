document.addEventListener('DOMContentLoaded', () => {
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    const pElements = document.querySelectorAll('.image-wrapper p'); 

    function checkVisibility(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); 
                pElements.forEach( p=> {
                    applyTypingEffect(p);
                });
            }
        });
    }
       
    const observer = new IntersectionObserver(checkVisibility, {
            threshold: 0.5 
    });    
        
    imageWrappers.forEach(wrapper => {
            observer.observe(wrapper);
    });



     

    function applyTypingEffect(element) {
        const text = element.textContent;
        element.textContent = '';  
        let i = 0; 
        const typingSpeed = 20;
        
        function typeLetter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeLetter, typingSpeed);
            }
        }

        typeLetter(); 
    }

    


});
