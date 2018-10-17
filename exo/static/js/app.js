(function () {

  $(document).ready(function() {

    const images = $('img');
    const imagesMap =
      ['dybala.jpg', 'matuidi.jpg', 'bonucci.jpg', 'dybala.jpg'];

    function showPlayer() {
      let id = parseInt(this.id);
      this.src = 'static/img/' + imagesMap[id];
    }

    images.on('dblclick', showPlayer);

  })

})() // fin de la fonction englobante
