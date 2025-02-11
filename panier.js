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

//Fonction pour afficher des notifications stylisées
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

//  Code principal du panier
document.addEventListener("DOMContentLoaded", function () {
    const panierItems = document.getElementById("panier-produits");
    const totalPrix = document.getElementById("total-price");
    const btnVider = document.querySelector(".btn-vider");
    const btnCommander = document.querySelector(".btn-commander");

    if (!panierItems || !totalPrix) {
        console.error("Erreur : Impossible de trouver les éléments HTML du panier.");
        return;
    }

    function recupererPanier() {
        return JSON.parse(localStorage.getItem("panier")) || [];
    }

    function sauvegarderPanier(panier) {
        localStorage.setItem("panier", JSON.stringify(panier));
    }

    function afficherPanier() {
        let panier = recupererPanier();
        panierItems.innerHTML = "";
        let total = 0;

        if (panier.length === 0) {
            panierItems.innerHTML = "<p>Aucun produit dans le panier.</p>";
            totalPrix.textContent = "0 €";
            return;
        }

        panier.forEach((produit, index) => {
            let imagePath = produit.image.startsWith("image/") ? produit.image : `image/${produit.image}`;

            let article = document.createElement("article");
            article.classList.add("panier-item");

            article.innerHTML = `
                <img src="${imagePath}" alt="${produit.nom}" onerror="this.src='image/default.png'">
                <div class="details">
                    <h2>${produit.nom}</h2>
                    <p class="prix">${produit.prix.toFixed(2)} €</p>
                </div>
                <div class="actions">
                    <button class="btn-quantite btn-moins" data-index="${index}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantite" id="quantite-${index}">${produit.quantite}</span>
                    <button class="btn-quantite btn-plus" data-index="${index}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="btn-supprimer" data-index="${index}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;

            panierItems.appendChild(article);
            total += produit.prix * produit.quantite;
        });

        totalPrix.textContent = total.toFixed(2) + " €";
    }

    function viderPanier() {
        localStorage.removeItem("panier");
        afficherPanier();
        afficherNotification("Panier vidé avec succès !", "fas fa-trash-alt");
    }

    function commanderPanier() {
        let panier = recupererPanier();
        if (panier.length === 0) {
            afficherNotification("Votre panier est vide !", "fas fa-exclamation-circle");
            return;
        }

        afficherNotification("Commande validée ! Merci pour votre achat 🚀", "fas fa-check-circle");
        viderPanier();
        setTimeout(() => {
            window.location.href = "index.html"; // Redirige en 2 secondes
        }, 2000);
    }

    afficherPanier();

    btnVider.addEventListener("click", viderPanier);
    btnCommander.addEventListener("click", commanderPanier);
});
