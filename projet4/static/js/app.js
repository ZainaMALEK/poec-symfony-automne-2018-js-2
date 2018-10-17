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
        if (res.length > 0) {
          let html = '';
          res.forEach(item => {
            html += '<p>'+ item.content +'</p>';
          })
          domList.html(html);
        } else {
          domList.html('<p>Aucun proverbe pour cet auteur</p>');
        }
      })
    }

  })

})() // fin de la fonction englobante
