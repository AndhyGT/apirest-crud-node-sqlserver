import { getConnection, sql } from '../database/connection'

export const getProducts = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Products');

    res.json(result.recordset)
};

export const createNewProduct = async (req, res) => {

    const { name, description } = req.body;
    let { quantity } = req.body;

    if (name == null || description == null) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' });
    }

    if (quantity == null) quantity = 0;

    const pool = await getConnection();

    await pool.request().input("name", sql.VarChar, 'PRODUCT TEST').query('INSERT INTO Products (name) VALUES (@name)');

    res.json('new Product');
}

