const express = require("express");
const path = require("path");

// Import ownn modules
const routerContent = require('./controllers/content.controller')

// Configure Server
const app = express();
const PORT = process.env.PORT || 3030;

// Configurre Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

app.use('/content', routerContent); 

app.get('/', (req, res) => {
  res.redirect('/content');
});
// Handler

app.get('/', (req, res) => {
	res.render(path.join(__dirname, '/views/index'))
});

// Test Handler FIRST PUG SITE

/*
app.get('/pIndex', (req, res) => {
  res.render('index')
});


app.get('/pTeam', (req, res) => {
  res.render('team')
});


app.get('/pTechnik', (req, res) => {
  res.render('technik')
});

app.get('/pUmgebung', (req, res) => {
  res.render('umgebung')
});

app.get('/pTodos', (req, res) => {
  res.render('todos')
});

app.get('/pMoreToDos', (req, res) => {
  res.render('moretodos')
});

app.get('/pEmergencyAndProcedure', (req, res) => {
  res.render('emergencyprocedure')
});

app.get('/pMore', (req, res) => {
  res.render('more')
});
*/


// Make use of public files 
app.use(express.static('public'))

// Start server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
