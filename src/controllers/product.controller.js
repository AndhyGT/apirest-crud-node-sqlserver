import { getConnection, sql, queris } from '../database';

// Obtener Producto
export const getProducts = async (req, res) => {
    try {

        const pool = await getConnection();
        const result = await pool.request().query(queris.getAllProduct);

        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


// Crear Producto
export const createNewProduct = async (req, res) => {

    const { name, description } = req.body;
    let { quantity } = req.body;

    if (name == null || description == null) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' });
    }

    if (quantity == null) quantity = 0;

    try {
        const pool = await getConnection();

        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(queris.addNewProduct);

        res.json({ name, description, quantity });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


// Obtener producto por ID
export const getProductById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input('Id', sql.Int, id)
        .query(queris.getProductById);

    res.send(result.recordset);
}

// ELIMINANDO UN PRODUCTO
export const deleteOneProduct = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input('Id', sql.Int, id)
        .query(queris.deleteProduct);

    res.send(result);
}

export const getTotalProducts = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queris.getTotalProducts);

    res.send(result.recordset);
}

export const updateProductById = async (req, res) => {
    const { name, description, quantity } = req.body;
    const { id } = req.params;

    if (name === null || description === null || quantity === null) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' });
    }

    const pool = await getConnection();
    const result = await pool.request()
        .input('name', sql.VarChar, name)
        .input('description', sql.Text, description)
        .input('quantity', sql.Int, quantity)
        .input('Id', sql.Int, id)
        .query(queris.updateProductById);

    res.send(result)
}
