document.addEventListener("DOMContentLoaded", function () {

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

    const form = document.getElementById("payment-form");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const cardNumber = document.getElementById("card-number").value.trim();
        const expirationDate = document.getElementById("expiration-date").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (cardNumber && expirationDate && cvv) {
            showMessage("✅ Paiement validé avec succès !", "success");
        } else {
            showMessage("❌ Veuillez remplir tous les champs.", "error");
        }
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type;

        setTimeout(() => {
            messageDiv.textContent = "";
            messageDiv.className = "";
        }, 3000);
    }
});
