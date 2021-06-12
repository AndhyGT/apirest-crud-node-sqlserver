export const queris = {
    getAllProduct: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProduct: 'DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) AS Total_Products FROM Products',
    updateProductById: 'UPDATE Products SET name = @name, description = @description, quantity = @quantity WHERE Id = @Id'
}