const posts = require('../data/posts');

const index = (req, res) => {
    res.json({ message: "read all posts" })
}

const show = (req, res) => {
    res.json({ message: "read a single post" })
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
    res.json({ message: "delete a post" })
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}