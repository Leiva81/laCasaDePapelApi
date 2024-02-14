document.addEventListener("DOMContentLoaded", function(){
  cargarDatosDesdeAPI()
  
})



let nombres = [];
let id = 0;
let cont = -1
let characterNumber=0;
let numero=0;
async function cargarDatosDesdeAPI() {

    try {
      for (let index = characterNumber; index < 16; index++) {
        characterNumber++
        const response = await fetch(`https://project-heist-rahulv07.vercel.app/characters/${characterNumber}`); // Reemplaza con la URL de tu API
        characterData = await response.json();
        nombres.push(characterData["alias"]);
      } 

      console.log(nombres);
  
      // Obtén el elemento select
      var listaDesplegable = document.getElementById('seleccion');
  
      // Limpia las opciones existentes si es necesario
      listaDesplegable.innerHTML = "";
  
      // Agrega una opción estética (puedes omitirla si no es necesaria)
      var opcionEstetica = document.createElement('option');
      opcionEstetica.value = '';
      opcionEstetica.textContent = '---- Toca aquí para desplegar los personajes----';
      listaDesplegable.appendChild(opcionEstetica);
  
      // Agrega las opciones de la API
      for (let index = 0; index < nombres.length-1; index++) {
        cont++
        id++
        var opcion = document.createElement('option');
        opcion.value = id; // Ajusta según la estructura de tu objeto
        opcion.textContent = nombres[cont]; // Ajusta según la estructura de tu objeto
        listaDesplegable.appendChild(opcion);
        
      }

    } catch (error) {
      console.error('Error al cargar datos desde la API:', error);
    }
}



async function recogerInformacion(){
  var lista = document.getElementById('seleccion');
  var opc = lista.value;

  try {
    
    for (let numero = 1; numero <= 16; numero++) {
      
      const response = await fetch(`https://project-heist-rahulv07.vercel.app/characters/${numero}`); // Reemplaza con la URL de tu API
      characterData = await response.json();

      console.log(numero)

      if(opc == numero){
        var name = document.getElementById("name")
        name.innerHTML = "";
        name.textContent = characterData["name"];

        var alias = document.getElementById("alias")
        alias.innerHTML = "";
        alias.textContent = characterData["alias"];

        var occupation = document.getElementById("occupation")
        occupation.innerHTML = "";
        occupation.textContent = characterData["occupation"];

        var gender = document.getElementById("gender")
        gender.innerHTML = "";
        gender.textContent = characterData["gender"];

        var status = document.getElementById("status")
        status.innerHTML = "";
        status.textContent = characterData["status"];

        var romance = document.getElementById("romance")
        romance.innerHTML = "";
        romance.textContent = characterData["romance"];

        var family = document.getElementById("family")
        family.innerHTML = "";
        family.textContent = characterData["family"];

        var first_appearance = document.getElementById("first_appearance")
        first_appearance.innerHTML = "";
        first_appearance.textContent = characterData["first_appearance"];

        var last_appearance = document.getElementById("last_appearance")
        last_appearance.innerHTML = "";
        last_appearance.textContent = characterData["last_appearance"];

        var played_by = document.getElementById("played_by")
        played_by.innerHTML = "";
        played_by.textContent = characterData["played_by"];

        var image = document.getElementById("image")
        image.innerHTML = "";
        image.src = characterData["image"];
        break;
      }
      var info = document.getElementsByClassName("informacion1")
      info.hidden = false;
      if(opc == 0){
        var name = document.getElementById("name")
        name.innerHTML = "";
        name.textContent = "";

        var alias = document.getElementById("alias")
        alias.innerHTML = "";
        alias.textContent = "";

        var occupation = document.getElementById("occupation")
        occupation.innerHTML = "";
        occupation.textContent = "";

        var gender = document.getElementById("gender")
        gender.innerHTML = "";
        gender.textContent = "";

        var status = document.getElementById("status")
        status.innerHTML = "";
        status.textContent = "";

        var romance = document.getElementById("romance")
        romance.innerHTML = "";
        romance.textContent = "";

        var family = document.getElementById("family")
        family.innerHTML = "";
        family.textContent = "";

        var first_appearance = document.getElementById("first_appearance")
        first_appearance.innerHTML = "";
        first_appearance.textContent = "";

        var last_appearance = document.getElementById("last_appearance")
        last_appearance.innerHTML = "";
        last_appearance.textContent = "";

        var played_by = document.getElementById("played_by")
        played_by.innerHTML = "";
        played_by.textContent = "";

        var image = document.getElementById("image")
        image.innerHTML = "";
        image.src = "";
        break;
      
      }
    }
  } catch (error) {
    console.error('Error al cargar datos desde la API:', error);
  }
}






// async function generarLista() {
//   const response = await  fetch('/')
//   const data = await response.json()
//   const personajes = data.personajes;
//   console.log("personajes")

//     // Se coge la seleccion de la primera lista para poder añadir opciones a la segunda
//     var lista1 = document.getElementById('seleccion')
    
  
//     // Se añade la primera opción que es estética 
//     var opcion3 = document.createElement('option');
//     opcion3.value = 'opc1';
//     opcion3.textContent = personajes["name"];
//     // Añadimos a la lista2
//     document.getElementById('seleccion').appendChild(opcion3);

// }





