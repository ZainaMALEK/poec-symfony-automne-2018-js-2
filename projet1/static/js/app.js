// vérification que jQuery est chargé
// console.log(typeof jQuery);

// jQuery et $ sont identiques
// console.log(jQuery === $);

(function () {

  let test = 'variable définie dans app.js';

  $(document).ready(function() {
    // quand le dom est complètement chargé

    $('h2').on('click', function() {
      $(this).next().fadeToggle(250);
    })

    $('#btnShow').on('click', function() {
      $('section').toggle();
    })


  })

})()
