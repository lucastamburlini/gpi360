const { Product } = require("../../db")

const createProduct = async (product_id, name, category, cost, final_price, discount, profit_percentage, quantity, enabled, notes_description, taxes, barcode) => {
    try {
        const [product, created] = await Product.findOrCreate({
            where: { name: name },
            defaults: {

                product_id, name, category, cost, final_price, discount, profit_percentage, quantity, enabled: true, notes_description, taxes, barcode
            }
        });

       return created ? product : "Product not created because it already exists or something is wrong, please try again";

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = createProduct;
