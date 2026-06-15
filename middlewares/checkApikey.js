require('dotenv').config()

const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['simo-api-key'];

    const API_VALUE = process.env.API_VALUE;

    // su postman, per inviare una chiave personalizzata, andiamo su headers
    // ed inseriamo come key "simo-api-key" e come value "123456" (che abbiamo deciso in questo caso)
    if (!apiKey || apiKey !== API_VALUE) {
        return res.status(401).json({ error: true, message: "Unauthorized" })
        // se la chiave api non è presente o è errata, restituiamo error 401
    }
    // if (la chiave api è corretta) {
    // chiamo next per passare al midllware successivo}
    next()
}

module.exports = checkApiKey