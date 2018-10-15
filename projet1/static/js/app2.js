// Design Pattern (Modèle de conception): Module
// une fonction anonyme enveloppe la totalité du code
// afin de protéger les variables et les fonctions
// définies dans le corps de la fonction anonyme

(function () {

  var test = 'variable définie dans app2.js';

  function message() {
    console.log(test + ' ** ');
  }

  message();

})() // fonction anonyme autoéxécutée.
