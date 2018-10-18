(function () {

  const baseUrl = 'http://localhost:4003';

  $(document).ready(function() {
    const fruitList = $('#fruitList');
    const flags = $('.flag');

    getFruits();

    flags.on('click', getFruits);

    function getFruits() {
      let lang = '';
      // si l'appel à getFruits n'est pas dû à un click
      // this.alt n'est pas défini
      if (this.alt == undefined) {
        // la langue par défaut est fr
        lang = 'fr';
      } else {
        // getFruits appelée par un clic sur une image
        // on lit l'attribut alt de l'image cliquée
        lang = this.alt
      }

      fetch(baseUrl + '/fruits')
        .then(res => res.json())
        .then(fruits => {
          // fruitList.html(''); // supprimer les li
          // équivalent: children() retroune les noeuds
          // enfants du ul (cad les li)
          // remove() retire ces noeuds du DOM
          fruitList.children().remove();
          fruits.forEach(fruit => {
            // append ajoute à la fin l'élément fourni
            // en entrée en tant qu'enfant de l'élément
            // cible (ici on ajoute un li au ul)
            // prepend ajout dans l'ordre inverse
            fruitList.append('<li>'+fruit[lang]+'</li>');
          })
          //console.log(fruitList.children().length)
        })
    }


  })

})() // fin de la fonction englobante
