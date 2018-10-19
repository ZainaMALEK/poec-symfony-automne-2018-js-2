(function() {

  // variable globale
  let ship = {
    life: 3
  }

  $(document).ready(function() {
    const game$ = $('#game');
    const ship$ = $('#ship');
    const life$ = $('#life');
    let asteroids$ = $('.asteroid');
    let bullets$ = $('.bullet');

    computeLife();
    animBg();
    generateAsteroid();

    $(document).on('keyup', function(e) {

      if (e.key == 'ArrowRight') {
        ship$.css({'left':'+=20'})
      }

      if (e.key == 'ArrowLeft') {
        ship$.css({'left':'-=20'})
      }

      // si on appuie sur Espace, une balle est générée
      if (e.key == ' ') {
        generateBullet();
      }

    })

    function animBg() {
      setInterval(() => {

        // déplace l'arrière-plan vers le bas
        game$.css('background-position-y', '+=5');

        // déplacement des astéroides
        asteroids$.css('top', '+=5');

        // déplacement des balles
        bullets$.css('top', '-=10');

        asteroids$.each(function() {
          let aste = $(this);
          let asteTop = aste.offset().top;
          let asteLeft = aste.offset().left;

          if (asteTop > 390) {
            // zone à risque, collision possible avec le vaisseau
            // récupération de la position x du vaisseau et de l'astéroide
            let shipLeft = ship$.offset().left;

            if ((asteLeft + 40 >= shipLeft)
              && (asteLeft <= shipLeft + 50)) {
                // si les conditions sont vraies,
                // il y a contact entre l'astéroide et le vaisseau
                // asteroide retiré du jeu au moment de l'impact
                aste.remove();

                ship.life--; // le vaisseau perd une vie
                computeLife();
              }
          }

          if(asteTop > 470) {
            // l'astéroide n'est presque plus visible (overflow: hidden)
            // dans la zone de jeu, mais il existe encore dans le DOM
            // par souci d'efficacité, on le retire du DOM
            aste.remove();
          }

          // boucle sur les bullets
          bullets$.each(function() {
            let bul = $(this);
            let bulTop = bul.offset().top;
            let bulLeft = bul.offset().left;

            let contactX = ((asteLeft + 40) >= bulLeft) && (asteLeft <= (bulLeft + 8));
            let contactY = ((asteTop + 40) >= bulTop) && (asteTop <= (bulTop + 8));

            if (contactX && contactY) {
              // contact entre l'asteroide et la balle
              // on retire les deux du DOM
              aste.remove();
              bul.remove();
            }

          })


        }) // fin de boucle sur asteroides

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

    function computeLife() {
      life$.html(''); // purge du div#life avant insertion

      if (ship.life > 0) { // s'il reste au moins une vie
        for(let i=0; i<ship.life; i++) {
          life$.append('<img class="heart" src="img/heart.png">');
        }
      } else {
        $('body').html('<h1>*** GAME OVER ***</h1>');
      }

    }

    function generateBullet() {
      let shipLeft = ship$.offset().left;
      let shipTop = ship$.offset().top;
      let style = `top:${shipTop}px;left:${shipLeft + 21}px`;

      game$.append('<div class="bullet" style="'+style+'"></div>')
      bullets$ = $('.bullet');
    }
  })

})() // fin fonction englobante
