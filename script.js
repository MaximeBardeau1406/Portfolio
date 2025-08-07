// On s'assure que le DOM (la page HTML) est complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // 1. On récupère les éléments HTML dont on a besoin
    // On sélectionne tous les spans qui sont des tags de filtre
    const filterTags = document.querySelectorAll('.filters .tag');
    // On sélectionne toutes les cartes de projets
    const projectCards = document.querySelectorAll('.project-card');

    // 2. On attache un écouteur d'événement 'click' à chaque tag de filtre
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {

            // 3. Gestion de l'état 'actif' des tags
            // D'abord, on retire la classe 'active' de TOUS les tags de filtre
            filterTags.forEach(t => t.classList.remove('active'));
            // Ensuite, on ajoute la classe 'active' UNIQUEMENT au tag qui vient d'être cliqué
            tag.classList.add('active');

            // 4. Récupération du tag sélectionné
            // On récupère la valeur de l'attribut 'data-tag' du tag cliqué
            const selectedTag = tag.getAttribute('data-tag');

            // 5. Boucle sur toutes les cartes de projets pour les filtrer
            projectCards.forEach(card => {

                // Récupère la chaîne de tags de la carte (ex: "python,javascript")
                const cardTags = card.getAttribute('data-tags');
                let cardTagsArray;

                // On remplace l'opérateur ternaire par une condition if/else
                if (cardTags) {
                    cardTagsArray = cardTags.split(',');
                } else {
                    cardTagsArray = [];
                }

                // Si le tag sélectionné est "all", on affiche toutes les cartes
                if (selectedTag === 'all') {
                    card.classList.remove('hidden');
                } else {
                    // Sinon, on applique la logique de filtrage
                    
                    // On vérifie si le tableau de tags de la carte contient le tag sélectionné
                    if (cardTagsArray.includes(selectedTag)) {
                        // Si la carte a le tag, on la montre
                        card.classList.remove('hidden');
                    } else {
                        // Si la carte n'a pas le tag, on la cache
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});