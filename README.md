# Discover Brussels

## Pitch

Vous partez d'un page HTML existante et qu'il faut compléter - preview sur http://bruxellesformationcepegra.github.io/lab-js-discoverbrussels

Le thème de l’exercice est de présenter certains points d’intérêts (highlights) et attractions bruxelloises, sous forme de liste et sous forme de carte. 

Les détails de chaque highlight se trouvent dans une page HTML à part mais il faudrait l’afficher dans la page principale lorsque le visiteur voudra en savoir plus en sélectionnant un highlight.

## Tâches

### Effet « parallax » sur le header


Pour configurer l’effet de parallax sur l’image de fond du header, il faut utiliser le plugin Stellar.js qui permet de faire des « parallax backgrounds ».

http://markdalgleish.com/projects/stellar.js/

### Liste et carte des points d’intérêts à Bruxelles

Tout le code ci-dessous est à effectuer dès le chargement de la page.

1. Pour créer la liste et la carte, partez des données présentes dans le fichier data.js.
    Cet objet comprend la liste des highlights qui possèdent chacun :
    - Nom
    - Petite description
    - Lien vers la photo
    - URL de la page de détails (à charger en AJAX plus tard)
    - Latitude
    - Longitude
    
    En plus, cet objet comprend une propriété à utiliser pour configurer la carte : latitude, longitude et niveau de zoom par défaut.
    
2. Pour la création du contenu HTML, privilégiez une méthode qui rend le code HTML et JavaScript lisibles et maintenables. La structure HTML à utiliser est en commentaire de la page.

3. Pour la carte, utilisez le plugin Gmaps.js (https://hpneo.github.io/gmap) et configurez-la avec les valeurs par défaut stockées dans l’objet du point 1.

4. Au clic sur « Learn more » ET sur les marqueurs de la carte, il faut ouvrir avec une animation de la droite vers la gauche le div#sidebar (présent dans l’HTML) et y charger le contenu de la page liée – par exemple, au clic sur « Atomium » il faut ouvrir « atomium.html ». Le data attribute « data-page-url » n’est pas là pour rien ;) Dans le h2 de la sidebar, il faut y mettre le nom de l’attraction et dans le div.content, le contenu du div.content de la page appelée.

5. Quand la sidebar est ouverte, un clic sur un autre marqueur ou bouton « Learn More » affiche le contenu directement dans celle-ci, sans animation.

6. Au clic sur le bouton « Close » de la navbar, celle-ci se referme avec une animation de la gauche vers la droite.

Une fois ces points terminés et fonctionnels, vous pouvez charger les données via une requête AJAX et vous passer du fichier data.js !

Voici l’URL à contacter : http://node-test-nbwns.c9.io/discover_brussels/data/ (contactez-moi si ce n'est pas accessible, c'est que le serveur est arrêté)

### Petit jeu

Pour ceux qui en veulent toujours plus, j’ai prévu un petit jeu supplémentaire. 

Ce jeu consiste en un quizz, il y a plusieurs questions. Pour chaque question vous pouvez répondre par oui ou par non. Un total des points et affiché à la fin du quizz.

Le fichier game.js définit un objet qui aide à configurer le jeu.

Pour la création du contenu HTML, privilégiez une méthode qui rend le code HTML et JavaScript lisibles et maintenables. La structure HTML à utiliser est en commentaire de la page.

Lors du chargement de la page, la première question est affichée. Au clic sur le bouton « Submit », il faut vérifier le choix effectué par l’utilisateur à la bonne réponse encodée dans l’objet du fichier game.js. Si c’est identique, il faut incrémenter le nombre de points dans cet objet.

Lorsque toutes les questions sont répondues, il faut afficher un récapitulatif des points obtenus.


**Have fun !**
