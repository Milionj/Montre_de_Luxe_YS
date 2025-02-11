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



document.addEventListener('DOMContentLoaded', function() {  
    document.querySelector("#contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        showValidation();
    });
});


function showValidation() {
    
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let confirmMessage = 
    `Merci ${firstname} ${lastname} !\nVotre demande a été pris en compte.\nDétails :\nEmail : ${email}\nMessage : ${message}`;
    alert(confirmMessage); 

}



var map = L.map('map').setView([48.8618309 , 2.4359251], 13); // Coordonées de l'adresse (14 Rue de la Beaune, 93100 Montreuil)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([48.8618309 , 2.4359251]).addTo(map)
    .bindPopup('<b>14 Rue de la Beaune, 93100 Montreuil</b>')
    .openPopup();