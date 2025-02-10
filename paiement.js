document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvc = document.getElementById('cvc').value;

    // Afficher un message de succès (ou d'erreur)
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Paiement effectué avec succès pour la carte: ${cardNumber}`;
    messageDiv.style.color = '#0f0'; // Vert pour le message de succès

    // Réinitialiser le formulaire
    document.getElementById('payment-form').reset();
});