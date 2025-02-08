




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