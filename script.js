document.addEventListener('DOMContentLoaded', () => {
    // Récupère toutes les balises de tags de filtre et les cartes de projets
    const filterTags = document.querySelectorAll('.filters .tag');
    const projectCards = document.querySelectorAll('.project-card');

    // Ajoute un écouteur d'événement à chaque tag de filtre
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Retire la classe 'active' de tous les tags
            filterTags.forEach(t => t.classList.remove('active'));
            // Ajoute la classe 'active' au tag cliqué
            tag.classList.add('active');

            // Récupère le tag sélectionné (par exemple, "python")
            const selectedTag = tag.getAttribute('data-tag');

            // Parcourt toutes les cartes de projets
            projectCards.forEach(card => {
                // Récupère les tags de la carte (par exemple, "python,javascript")
                const cardTags = card.getAttribute('data-tags');

                // Si le tag sélectionné est "all", on montre toutes les cartes
                if (selectedTag === 'all') {
                    card.classList.remove('hidden');
                } else {
                    // Sinon, on vérifie si la liste de tags de la carte contient le tag sélectionné
                    if (cardTags && cardTags.includes(selectedTag)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});