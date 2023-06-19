const express = require("express");
const path = require("path");


// Configure Server
const app = express();
const PORT = process.env.PORT || 3030;



// Handler

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
});



// Make use of public files 
app.use(express.static('public'))

// Start server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
