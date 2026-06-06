const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts')


// create first route 
app.get('/', (req, res) => {
    res.send('Welcome on express-blog-api-server');
})

/////////// ROUTES POSTS ///////////

app.use('/api/posts', postsRouter)

//////////// END ROUTES POSTS ///////////


// start the server 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})