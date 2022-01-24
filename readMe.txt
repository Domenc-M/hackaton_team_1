Quand vous avez téléchargé le projet :

Ouvrez un terminal (de préférence un terminal bash) et faites :
npm install

Le dossier dist correspond au livrable.
Le dossier src correspond à votre environnement de dev.

En gros, vous bossez dans SRC, et quand vous utiliserez des scripts pour compiler ça envoiera tout dans dist.

Le jour J, on rendra seulement ce qu'il y a dans dist

Voilà les scripts à taper dans le terminal :

Voilà les deux gros que vous utiliserez :

gulp sass:watch
(compile le scss en css automatiquement à chaque changement, et l'envoie sur dist)

gulp build
(déplace le html, compresse les images, préfixe et minifie le css, minifie le JS et déplace tout sur dist)

//////////////////////////////////////////////////
gulp sass
(compile le scss en css et l'envoie sur dist, une fois)

gulp html
(déplace le html dans le dossier dist)

gulp img:min
(compresse les images et les déplace dans dist)

