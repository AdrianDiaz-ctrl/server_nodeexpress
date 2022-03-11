const express = require('express');
const productsRouter = require('./Products')
// const categoriesRouter = require('../routes/categoriesRouter')
const userRouter = require('./usersRouter')

function routerApi(app){
    const router = express.Router();
        app.use('/api/v1', router)
    router.use('/Products', productsRouter)
    router.use('/usersRouter', userRouter )
    // router.use('/categoriesRouter', categoriesRouter)
}

module.exports = routerApi