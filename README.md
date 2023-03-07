# natural_pic

>"Trabajo número 2 (Context I) de DesafioLatam para el módulo: React II (G27):"

## Características:

* El sistema consiste en una galería de imágenes, que se obtiene a partir de un Json. 
* Se realiza un map para obtener las fotos dentro del Json y se almacena en un estado llamado productos.
* Luego se genera una nueva matriz que se almacena en el estado llamado nuevaMatriz, la cual posee una lista de objetos.
* Cada registro de nuevaMatriz contiene los siguientes datos:
    >
    > id: id para identificar cada foto.
    >
    > tiny: Dirección de la foto en formato tiny.
    >
    > estado: Para determinar el estado del botón like y determinar si se debe ver en la sección de favoritos.
    >
    > alt: Texto con detalles de cada foto. 
    >
* Al presionar sobre cada foto o sobre el corazón (like) que está en la parte superio derecha de cada foto, se cambia el estado del like entre 1 y 0. 
* Si el estado es 1, el corazón se vuelve rojo, si el estado es 0 el corazón se vuelve blanco.
* Si el estado es 1 se podrá ver la imagen en la sección de favoritos, si el estado es 0 no se verá en la sección de favoritos.

## Nota: 

>En caso de instalar con npm el sistema se carga en la ruta: 

http://localhost:3000

## Acceso web desde (Github Pages):

[https://leonardo-villagran.github.io/natural_pic](https://leonardo-villagran.github.io/natural_pic)