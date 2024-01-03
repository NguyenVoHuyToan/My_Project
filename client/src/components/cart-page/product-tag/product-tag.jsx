import React, { useState, useEffect } from "react";
import "./product-tag.scss";
import dongFormatter from '../../../utils/dongFormatter/dongFormatter.js';
import axios from 'axios';
// import getProductById from '../../../utils/getProductById/getProductById.js';

const ProductTag = ({ onDelete, product_id, selectedQuantity, selectedVariant, checkState }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(selectedQuantity);
 
    useEffect(() => {
        fetch(`http://localhost:3000/product/products/${product_id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [product_id]);
 
    if (loading) {
        return <div>Loading...</div>;
    }

    const handleQuantityChange = async ( productId, newQuantity ) => {
        const authToken = localStorage.getItem('token');

        if (newQuantity < 1) {
            return;
        }
     
        try {
            const response = await axios.put(`http://localhost:3000/cart/${productId}`, { newQuantity }, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            
            if (response.data.success) {
                setQuantity(newQuantity);
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error); 
        }
    };

    const handleDeleteFromCart = async (productId) => {
        const authToken = localStorage.getItem('token');
     
        try {
            const response = await axios.delete(`http://localhost:3000/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
     
            if (response.data.success) {
                console.log("Product deleted from cart successfully");
                onDelete(product_id);
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error); 
        }
     };
     
 
    let prodTotalPrice = product.price * quantity;

    return (
        <div className="product-tag">
            <div className="container flex-row">
                <div className="check-input">
                    <input type="checkbox" checked={checkState} />
                </div>
                <div className="prod-image flex-col">
                    <img src={product.images[0]} alt="product-image"/>
                </div>
                <div className="vt-divider"></div>
                <div className="prod-detail flex-col align-left gap-md">
                    <div className="prod-indetify flex-col gap-xs align-left">
                        <div className="prod-name max-wdth">
                            <p className="btn-text">{product.product_name}</p>
                        </div>
                        <div className="prod-price-stock-state flex-row gap-sm">
                            <div className="prod-price">
                                <p className="body-em">{dongFormatter(product.price*1000)}</p>
                            </div>
                            <div className="stock-state">
                                <p className="body-bld">Instock</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-detail flex-row gap-xs">
                        <div className="order-quantity flex-row gap-2xs">
                            <button onClick={() => handleQuantityChange(product._id, quantity - 1)}>
                                <i className="bi bi-dash square-icon"></i>
                            </button>
                            <p className="quantity-value flex-row">{quantity}</p>
                            <button onClick={() => handleQuantityChange(product._id, quantity + 1)}>
                                <i className="bi bi-plus square-icon"></i>
                            </button>
                        </div>
                        <div className="order-variant">
                            <p className="selected-variant">{selectedVariant}</p>
                        </div>
                    </div>
                    <div className="function-btn flex-row gap-xs">
                        <div className="add-to-wishlist flex-row gap-2xs" onClick={() => handleAddToWishList(product._id)}>
                            <i className="bi bi-suit-heart square-icon icon-size-16"></i>
                            <p className="body-sml">Save</p>
                        </div>
                        <div className="delete-from-cart flex-row gap-2xs" onClick={() => handleDeleteFromCart(product._id)}>
                            <i className="bi bi-trash3 square-icon icon-size-16"></i>
                            <p className="body-sml">Delete</p>
                        </div>
                    </div>
                </div>
                <div className="prod-total-price flex-col">
                    <p className="btn-text total-price-value">{dongFormatter(prodTotalPrice*1000)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductTag;