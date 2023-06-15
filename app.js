const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.get('/', (req, res) => {
	res.send('Foo bar')
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
