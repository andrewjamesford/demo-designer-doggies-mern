const api = {
    getProducts: async (sort, order) =>
        await fetch(
            `${process.env.REACT_APP_API_URL}/products?sortOrder=${sort}&direction=${order}`
        ),
};

export default api;
