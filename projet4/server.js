const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Sources de données
let proverbs = [
  {content: 'Tra il dire e il fare c\'è in mezzo il mare', author: 'Pavarotti'},
  {content: 'Ad astra per aspera', author: 'Sénèque'},
  {content: 'Nusquam est qui ubique est', author: 'Pavarotti'},
  {content: 'jQuerira bien qui jQuerira le dernier', author: 'Pavarotti'}
];

function getProverbs(author) {
  let proverbList = [];

  proverbs.forEach(proverb => {
    if (proverb.author == author) {
      proverbList.push(proverb);
    }
  })

  return proverbList;
}

app.use(express.static('static'));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('bravo');
})

app.get('/proverb', (req, res) => {
  // calcul d'un indice aléatoire
  let randomIndex = Math.floor(Math.random() * proverbs.length);
  res.json(proverbs[randomIndex]);
})

app.post('/proverbs', (req, res) => {
  let list = getProverbs(req.body.author);
  res.json(list);
})

app.listen(4002, () => {
  console.log('Serveur écoutant le port 4002. Ctrl + C pour le stopper');
})
