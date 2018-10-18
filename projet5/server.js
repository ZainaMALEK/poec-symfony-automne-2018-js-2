const express = require('express');
const app = express();

app.use(express.static('static'));

// Sources de données
let fruits = [
  {fr: 'Pomme', en: 'Apple', it: 'Mela'},
  {fr: 'Citron', en: 'Lemon', it: 'Limone'},
  {fr: 'Orange', en: 'Orange', it: 'Arancia'},
  {fr: 'Raisin', en: 'Grapefruit', it: 'Uva'},
  {fr: 'Noisette', en: 'Nut', it: 'Nocciola'},
];

// Routes
app.get('/', (req, res) => {
  res.send('bravo');
})

app.get('/fruits', (req, res) => {
  res.json(fruits);
})

app.listen(4003, () => {
  console.log('Serveur écoutant le port 4003. Ctrl + C pour le stopper');
})
