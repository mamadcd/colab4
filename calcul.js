// Fonction d'initialisation
function initCalculator() {
    // Récupérer l'élément d'affichage
    const display = document.getElementById('display');

    // Récupérer tous les boutons
    const buttons = document.querySelectorAll('.btn');

    // Ajouter un gestionnaire d'événement à chaque bouton
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Récupérer la valeur du bouton cliqué
            const value = button.getAttribute('data-value');

            if (value === '=') {
                // Si le bouton "=" est cliqué, calculer le résultat
                display.value = eval(display.value);
            } else if (value === 'C') {
                // Si le bouton "C" est cliqué, effacer l'affichage
                display.value = '';
            } else {
                // Sinon, ajouter la valeur du bouton à l'affichage
                display.value += value;
            }
        });
    });
}

// Appel de la fonction d'initialisation une fois que le DOM est prêt
document.addEventListener('DOMContentLoaded', initCalculator);
