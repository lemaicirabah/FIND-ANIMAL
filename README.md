# FIND ANIMAL
## Presentation 

Find Animal est une plateforme de recherche et d'adoption d'animaux de compagnie dédiée à faciliter la rencontre entre des animaux adorables cherchant un foyer aimant et des personnes désireuses d'ajouter une nouvelle boule de poils à leur vie. Notre mission est de rendre le processus d'adoption aussi simple et agréable que possible, en offrant une expérience utilisateur fluide et intuitive.

## Identification

- Nom : Lemaici Rabah

## Exécution

- Assurez-vous d'être dans le répertoire du projet et que votre environnement virtuel est activé.

- Lancez l'application Flask :

```bash
export FLASK_APP=index.py

flask run
```
- Ouvrez votre navigateur et accédez à l'URL http://localhost:5000/ pour utiliser l'application Find Animal.

## Utilisation

- Page d'accueil (/) : Affiche une sélection aléatoire de cinq animaux disponibles pour adoption.

- Recherche (/resultatRecherche) : Permet aux utilisateurs de rechercher des animaux en fonction de l'espèce ou du nom. Affiche les résultats de la recherche.

- Profil de l'animal (/Animal/<animal_id>) : Affiche les détails d'un animal spécifique en fonction de son identifiant.

- Formulaire d'adoption (/form) : Permet aux utilisateurs de soumettre un formulaire pour mettre un animal en adoption.

- Confirmation (/confirmation) : Page de confirmation après la soumission réussie du formulaire d'adoption.

- Gestion des erreurs (/error) : Page affichée en cas d'erreur dans le formulaire.

- Gestion des erreurs (/notFound) : Page affichée en cas d'erreur 404.
