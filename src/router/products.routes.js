import { Router } from 'express'

import {
    getProducts,
    createNewProduct
} from '../controllers/product.controller'

const router = Router()

router.get('/products')

router.post('/products')

router.get('/products')

router.delete('/products')

router.put('/products')

export default router