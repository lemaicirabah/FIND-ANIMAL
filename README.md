# inf3190-tp3-20233

## Identification

- Nom : Lemaici Rabah
- Code permanent : LEMR12129603

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