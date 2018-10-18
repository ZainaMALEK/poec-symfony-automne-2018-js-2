(function() {

  $(document).ready(function() {
    const game$ = $('#game');
    const ship$ = $('#ship');

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
        game$.css('background-position-y', '+=5');
      }, 1000 / 24)
    }

    function generateAsteroid() {
      setInterval(() => {
        let style = 'left:' + getRandomValue() + 'px';
        game$.append('<div class="asteroid" style="'+style+'"></div>');
      }, 3 * 1000)
    }

    function getRandomValue() {
      return Math.floor(Math.random() * 400)
    }

  })

})() // fin fonction englobante
