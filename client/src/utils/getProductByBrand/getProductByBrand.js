import products from '../../data/products.json';

export default function getProductByBrand(product_brand) {
 return products.filter((product) => product.brands === product_brand);
};
