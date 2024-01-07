import products from '../../data/products.json';

export default function getProductById(id) {
    return products.find((product) => product.product_id === id);
};