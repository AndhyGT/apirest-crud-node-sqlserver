import { Router } from 'express'

import {
    getProducts,
    createNewProduct,
    getProductById
} from '../controllers/product.controller'

const router = Router()

router.get('/products', getProducts)

router.post('/products', createNewProduct)

router.get('/products/:id', getProductById)

router.delete('/products')

router.put('/products')

export default router