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


