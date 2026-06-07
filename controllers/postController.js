const posts = require('../data/posts');

const index = (req, res) => {
    // res.json({ message: "show all posts" })
    res.json(posts)
}

const show = (req, res) => {
    // res.json({ message: "read a single post" })
    const postId = parseInt(req.params.id)

    // find single post by comparing the id
    const thisPost = posts.find(post => post.id === postId)
    res.json(thisPost)
}

const store = (req, res) => {
    res.json({ message: "create a new post" })
}

const update = (req, res) => {
    res.json({ message: "update a post" })
}

const modify = (req, res) => {
    res.json({ message: "modify a post" })
}

const destroy = (req, res) => {
    // res.json({ message: "delete a post" })
    const postId = parseInt(req.params.id)
    // find single post by comparing the id (same as show)
    const thisPost = posts.find(post => post.id === postId)

    // find the post index from array
    const index = posts.indexOf(thisPost)

    // now, delete 1 element from 1 position
    posts.splice(index, 1) // index, in questo caso, sarebbe l'indice di riferimento del post (ovvero l'intero oggetto)

    // show updated list in the terminal
    console.log(posts)

    // update the status of server
    res.sendStatus(204).json({ message: "no content" })
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}