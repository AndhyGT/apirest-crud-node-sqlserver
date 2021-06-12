import { Router } from 'express'

import {
    getProducts,
    createNewProduct,
    getProductById,
    deleteOneProduct,
    getTotalProducts
} from '../controllers/product.controller'

const router = Router()

router.get('/products', getProducts)

router.post('/products', createNewProduct)

router.get('/products/count', getTotalProducts)

router.get('/products/:id', getProductById)

router.delete('/products/:id', deleteOneProduct)

router.put('/products')

export default router