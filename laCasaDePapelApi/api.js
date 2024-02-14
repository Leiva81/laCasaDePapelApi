const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const characterNumber =1;
let characterData;

app.use(express.static("public"))



app.listen(3000);





// function generarLista() {
//     // Se coge la seleccion de la primera lista para poder añadir opciones a la segunda
//     var lista1 = document.getElementById('seleccion1')
//     lista1.innerHTML = '';

//     // Se añade la primera opción que es estética 
//     var opcion1 = document.createElement('option');
//     opcion1.value = 'opc1';
//     opcion1.textContent = characterData.id;
//     // Añadimos a la lista2
//     lista1.appendChild(opcion1)

// }




