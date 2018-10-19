(function() {

  $(document).ready(function() {
    const game$ = $('#game');
    const ship$ = $('#ship');
    let asteroids$ = $('.asteroid');

    animBg();
    generateAsteroid();


    $(document).on('keyup', function(e) {

      if (e.key == 'ArrowRight') {
        ship$.css({'left':'+=20'})
      }

      if (e.key == 'ArrowLeft') {
        ship$.css({'left':'-=20'})
      }

    })

    function animBg() {
      setInterval(() => {

        // déplace l'arrière-plan vers le bas
        game$.css('background-position-y', '+=5');

        // déplacement des astéroides
        asteroids$.css('top', '+=5');

        asteroids$.each(function() {
          let aste = $(this);
          let asteTop = aste.offset().top;

          if (asteTop > 390) {
            // zone à risque, collission possible avec le vaisseau
            // récupération de la position x du vaisseau et de l'astéroide
            let shipLeft = ship$.offset().left;
            let asteLeft = aste.offset().left;

            if ((asteLeft + 40 >= shipLeft)
              && (asteLeft <= shipLeft + 50)) {
                ship$.remove();
              }
          }

          if(asteTop > 470) {
            aste.remove();
          }
        })

      }, 1000/24)
    }

    function generateAsteroid() {
      setInterval(() => {

        let style = 'left:' + getRandomValue() + 'px';
        game$.append('<div class="asteroid" style="'+style+'"></div>');
        asteroids$ = $('.asteroid');
      }, 3 * 1000)
    }

    function getRandomValue() {
      return Math.floor(Math.random() * 400)
    }

  })

})() // fin fonction englobante
