//charger le contenu du fichier json dans l'applicaton web

//on peut utiliser fetch

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // maintenant data contient le contenu du fichier JSON
        data.forEach(item  => {
            console.log(item.category);
        });
    })
    .catch(error => console.error('Erreur de chargement du fichier JSON', error));

