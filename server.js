const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts')

// middlware per servire i file statici della cartella pubblic
app.use(express.static('public'))

// middlware per parsare il body della richiesta in formato json
app.use(express.json())


// create first route (welcome route)
app.get('/', (req, res) => {
    res.send('Welcome on express-blog-api-server');
})

/////////// ROUTES POSTS ///////////

app.use('/api/posts', postsRouter)

//////////// END ROUTES POSTS ///////////


// start the server .listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})