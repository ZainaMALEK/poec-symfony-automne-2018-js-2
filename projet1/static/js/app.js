// vérification que jQuery est chargé
// console.log(typeof jQuery);

// jQuery et $ sont identiques
// console.log(jQuery === $);

(function () {

  let test = 'variable définie dans app.js';
  let sectionsVisible = false;
  let counterClick = 0;

  // fonctions n'intervenant sur le DOM ici
  // ...

  $(document).ready(function() {
    // quand le dom est complètement chargé (état: ready)
    // la function anonnyme s'éxécute.
    // il est préférable de placer à l'intérieur de cette fonction
    // toutes les instructions manipulant ou écoutant le DOM

    // ciblage du DOM
    // certains développeurs ajoute un dollar dans
    // le nom de la variable pour indiquer qu'elle a
    // reçu le retour de la fonction jQuery
    //const sections$ = $('section');

    const sections = $('section');
    const btnShow = $('#btnShow');
    const headers = $('h2');

    // fonctions intervenant sur le DOM
    function toggleSections() {
      sectionsVisible = !sectionsVisible;
      counterClick++;

      // toggleClass utilise un if interne
      // pour déterminer s'il doit ajouter ou retirer
      // le nom de la classe css fourni en paramètre
      // headers.toggleClass('highlighted');

      // modifier le texte du bouton
      // afficher/masquer les sections
      if (sectionsVisible) {
        btnShow.text('Masquer les sections');
        sections.show();
        // headers.css('color', 'red');
        // headers.css({'color':'red', 'font-size':'3rem'});
        headers.addClass('highlighted');
      } else {
        btnShow.text('Afficher les sections');
        sections.hide();
        // headers.css('color', '#000');
        // headers.css({'color':'#000', 'font-size':'1.3rem'});
        headers.removeClass('highlighted');
      }

      if (counterClick > 9) {
        $('body').html('<h1>Vous avez dépassé le nombre de clics autorisé...</h1>');
      }
    }

    headers.on('click', function() {
      // on masque ou affiche l'élément suivant dans le DOM
      $(this).next().fadeToggle(250);
    })

    btnShow.on('click', toggleSections);

  })


})() // fin de la fonction englobante
