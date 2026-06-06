const express = require('express');
const app = express();
const port = 3000;

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

// create first route 
app.get('/', (req, res) => {
    res.send('Welcome on express-blog-api-server');
})