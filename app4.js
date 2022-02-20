// tu recuperes ta div et tu la stockes dans une variable
var castelle = document.getElementById("clicked");

// tu crees une fonction qui affiche du texte
window.maFonction = function(){
    castelle.innerHTML = "Le texte qui apparait en JS";
}

// tu affiches le texte au click

/* si je click sur l'image, alors ses éléments cachés apparaissent dans une boitre

*/

 let clicked = false,

//  element.addEventListener('click', function (event){

//     if{event.target.id == 'clicked'){
//         clicked = true
//     }
//     castelle.onclick = maFonction;

//     });

    element.addEventListener("click", function() {
        document.getElementById("castelle").innerHTML = "Hello World";
      });