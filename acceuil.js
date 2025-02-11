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


function afficherNotification(message, iconClass = "fas fa-check-circle") {
    const container = document.querySelector(".notification-container");

    if (!container) {
        console.error("Erreur : Impossible de trouver le conteneur des notifications.");
        return;
    }

    // Créer la notification
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `<i class="${iconClass}"></i> ${message}`;

    // Ajouter la notification au conteneur
    container.appendChild(notification);

    // Supprimer la notification après 4 secondes
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Code principal
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM chargé - Initialisation du panier");

    const boutonsAjoutPanier = document.querySelectorAll(".montres i");

    function recupererPanier() {
        return JSON.parse(localStorage.getItem("panier")) || [];
    }

    function sauvegarderPanier(panier) {
        localStorage.setItem("panier", JSON.stringify(panier));
    }

    function ajouterAuPanier(nom, prix, image) {
        let panier = recupererPanier();
        let produitExistant = panier.find(p => p.nom === nom);

        if (produitExistant) {
            produitExistant.quantite += 1;
        } else {
            panier.push({ nom, prix, quantite: 1, image });
        }

        sauvegarderPanier(panier);
        afficherNotification(`${nom} ajouté au panier ! 🛒`, "fas fa-shopping-cart");
    }

    boutonsAjoutPanier.forEach(bouton => {
        bouton.addEventListener("click", function () {
            const produit = this.closest(".montres");
            const nom = produit.querySelector("h2").textContent;
            const prix = parseFloat(produit.querySelector(".price").textContent.replace("€", "").trim());
            const image = produit.querySelector("img").getAttribute("src");

            ajouterAuPanier(nom, prix, image);
        });
    });
});

