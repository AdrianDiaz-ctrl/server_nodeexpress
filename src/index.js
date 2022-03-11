const express = require('express');
const routerApi = require('../routes');

const { logErrors, errorHandler, boomErrorHandler } = require('../middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola server con express')
})


app.get('/nueva-ruta', (req, res) => {
    res.send('Hola soy una nueva')
})

app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if(limit && offset){
        res.json({ 
            limit,
            offset
        })
    }else{
        res.send('No hay parametros')
    }
})

app.get('/categorias/:categoryId/products/:productId', (req, res) => {
    const { category, productsId } = req.params;
    
    res.json({
        category,
        productsId
    })
})

routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Mi port ' + port)
})