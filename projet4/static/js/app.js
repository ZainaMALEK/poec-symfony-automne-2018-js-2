(function () {
  const urlBase = 'http://localhost:4002';

  $(document).ready(function() {
    const domProverb = $('#domProverb');
    const selectAuthor = $('#selectAuthor');
    const btnValid = $('#btnValid');
    const domList = $('#domList');

    setInterval(getProverb, 5 * 1000);

    btnValid.on('click', getProverbs);

    function getProverb() {
      fetch(urlBase + '/proverb')
        .then(res => res.json())
        .then(res => {
          domProverb.text(res.content + ' ('+ res.author +')');
        })
    }

    function getProverbs() {
      let selectedAuthor = selectAuthor.val();
      fetch(urlBase + '/proverbs', {
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        method: 'post',
        body: JSON.stringify({author: selectedAuthor})
      })
      .then(res => res.json())
      .then(res => {
        // si le tableau reçu contient au moins au proverbe
        // on injecte dans le DOM un paragraphe par proverbe
        // itéré
        if (res.length > 0) {
          let html = '';
          res.forEach(item => {
            html += '<p>'+ item.content +'</p>';
          })
          domList.html(html);
        } else {
          // si le tableau reçu est vide
          domList.html('<p>Aucun proverbe pour cet auteur</p>');
        }
      })
    }

  })

})() // fin de la fonction englobante
