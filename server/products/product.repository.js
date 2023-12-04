const productSchema = require("./product.models");

module.exports = {
  getProducts: async (sortOrder, direction) => {
    try {
      let sortOrderParam = "name";

      if (sortOrder.toLowerCase() === "description") {
        sortOrderParam = "description";
      }
      if (sortOrder.toLowerCase() === "price") {
        sortOrderParam = "price -test";
      }
      if (sortOrder.toLowerCase() === "discountAmount") {
        sortOrderParam = "discount_amount";
      }

      if (direction.toLowerCase() === "desc") {
        sortOrderParam = sortOrderParam + " desc";
      }
      // const result = await productSchema.find();

      const result = await productSchema.find().sort(sortOrderParam).exec();
      return result;
    } catch (error) {
      throw Error(error);
    }
  },
};
