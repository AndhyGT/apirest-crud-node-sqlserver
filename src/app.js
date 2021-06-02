import express from 'express'
import config from './config'

import productRoutes from './router/products.routes'

const app = express();


// settings
app.set('port', config.port)
app.use(productRoutes)

export default app;