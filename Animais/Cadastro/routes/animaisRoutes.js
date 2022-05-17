const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'animais.json')

const getAnimais = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveAnimais = (animais) => {
    fs.writeFileSync(filePath, JSON.stringify(animais, null, '\t'))
}

const animaisRouter = (app) => {
    app.route('/cadastroanimais/:id?')
        .get((req, res) => {
            const animais = getAnimais()
            res.send({ animais })
        })
        .post((req, res) => {
            const animais = getAnimais()
            animais.push(req.body)
            saveAnimais(animais)
            res.send(201).send('Animais cadastrado')
        })
}

module.exports = animaisRouter