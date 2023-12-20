const api = {
    getProducts: async (sort, order) =>
        await fetch(
            // eslint-disable-next-line no-undef
            `${process.env.REACT_APP_API_URL}/products?sortOrder=${sort}&direction=${order}`
        )
};

export default api;
