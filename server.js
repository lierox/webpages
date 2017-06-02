const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine', 'hbs');

app.use((req, res, next) =>{
  var requestTime = new Date().toString();
  console.log( `Request Time: ${requestTime}`);
  next();
});

//prevents access api and files

// app.use((req, res, next) => {
//   res.render('wait.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('upperCase', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    title: 'Home'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Not Found'
  });
});

app.listen(3000, () => {
  console.log('On');
});
