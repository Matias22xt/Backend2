const express = require('express')
const dataManager = require('./manager/dataManager')

const app = express();
const PORT = 8080

const productManager = new dataManager('productos.txt')


app.get('/products', async (req, res) => {
    const prods = await productManager.leer()
    res.send({ Productos: prods })
})


app.get('/random', async (req, res) => {
    const prods = await productManager.leer()
    const random = parseInt(Math.random() * prods.length)
    res.send({ Productos: prods[random] })
})

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})