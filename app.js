const express = require("express");
const path = require("path");


// Configure Server
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static('public'))


// Handler

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
});





// Start server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
