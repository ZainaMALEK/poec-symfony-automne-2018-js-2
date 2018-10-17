const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Sources de données
let users = [
  {name: 'Naïm', email: 'naim@gusto.it', password: 'az88mm'},
  {name: 'Yusuf', email: 'yuyu@sulfureux.tr', password: 'yu99yu'},
  {name: 'Céline', email: 'celine@jquery.com', password: 'hhhh66PmP'}
];

function checkData(data) {
  let userName = null;
  for (let i=0; i<users.length; i++) {
    if (data.email == users[i].email &&
      data.password == users[i].password) {
        userName = users[i].name;
        break;
      }
  }
  return userName;
}


app.use(express.static('static'));

// parse les données JSON dans le corps des requêtes POST
app.use(bodyParser.json());


// Routes
app.get('/', (req, res) => {
  res.send('bravo');
})

app.get('/users', (req, res) => {
  res.json(users);
})

app.post('/user/check', (req, res) => {
  // vérifier présence de l'utilisateur + mot de passe dans source de données

  let userName = checkData(req.body);

  // si userName contient une "truthy value" c'est-à-dire
  // une valeur ni null, ni false, ni undefined
  if (userName) {
    res.send('Hello ' + userName + ', ça fait plaisir !');
  } else {
    res.send('Qui es-tu ?');
  }

})

app.listen(4001, () => {
  console.log('Serveur écoutant le port 4001. Ctrl + C pour le stopper');
})
