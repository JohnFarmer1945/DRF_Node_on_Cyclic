const express = require("express");
const path = require("path");


// Configure Server
const app = express();
const PORT = process.env.PORT || 3030;

// Configurre Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));


// Handler

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
});

// Test Handler FIRST PUG SITE
app.get('/pug', (req, res) => {
  res.render('test_index')
});





// Make use of public files 
app.use(express.static('public'))

// Start server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
