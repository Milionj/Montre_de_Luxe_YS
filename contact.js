


document.addEventListener('DOMContentLoaded', function() {  
    document.querySelector(".validate-button").addEventListener("click", showValidation);
});


function showValidation() {
    
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

   
    if (lastname && firstname && email && message) {
        let confirmMessage = 
        `Merci ${firstname} ${lastname} !\nVotre demande a été pris en compte.\nDétails :\nEmail : ${email}\nMessage : ${message}`;
        alert(confirmMessage);  
    } else {
        alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
    }
}



var map = L.map('map').setView([48.8594, 2.4547], 13); // Coordonées de l'adresse (14 Rue de la Beaune, 93100 Montreuil)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([48.8594, 2.4547]).addTo(map)
    .bindPopup('<b>14 Rue de la Beaune, 93100 Montreuil</b>')
    .openPopup();