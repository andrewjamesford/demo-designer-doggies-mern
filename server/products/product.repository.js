const productSchema = require("./product.models");

module.exports = {
    getProducts: async (sortOrder, direction) => {
        try {
            let sortDirection = 1;
            if (direction.toLowerCase() === "desc") {
                sortDirection = -1;
            }

            let sortOrderParam = { name: sortDirection };

            if (sortOrder.toLowerCase() === "description") {
                sortOrderParam = { description: sortDirection };
            }
            if (sortOrder.toLowerCase() === "price") {
                sortOrderParam = { price: sortDirection };
            }
            if (sortOrder.toLowerCase() === "discountAmount") {
                sortOrderParam = { discount_amount: sortDirection };
            }

            const result = await productSchema
                .find()
                .sort(sortOrderParam)
                .exec();
            return result;
        } catch (error) {
            throw Error(error);
        }
    }
};
