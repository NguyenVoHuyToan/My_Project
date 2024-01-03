import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './product-card.scss';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductCard = ({ product, onAddToCart, expandDisable = '' }) => {
    const [isExpanded, setIsExpanded] = useState(false);
     const navigate = useNavigate();

    const handleAddToCartClick = async (productId) => {
    
      if (!productId) {
        console.error('Product ID is undefined');
        toast.error('Product ID is undefined', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      
      try {
        const authToken = localStorage.getItem('token');
     
        if (authToken) {
          const response = await axios.post('http://localhost:3000/cart', { productId }, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
     
          if (response.data.success) {
            if (onAddToCart) {
              onAddToCart(product);
            }
            toast.success(`Product added to cart successfully`, {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            console.error(`Failed to add product to cart:`);
            toast.error(`Failed to add product to cart`, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        } else {
          console.error('User not logged in. Redirecting to signin page.');
          toast.error('Please log in to add products to cart', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (error) {
        console.error('Error adding product to cart:', error);
        toast.error(`Error adding product to cart`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/signin');
      }
    };
    
    
    const handleExpandClick = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    if (!product || !product.images) {
        return null;
    }

    const containerClassName = isExpanded
        ? 'product-card-com flex-row prod-container prod-exp'
        : 'product-card-com flex-row prod-container prod-c';

    return (
        <div className={containerClassName}>
            <div className='flex-col prod-holder'>
                <div className='flex-col prod-img-container'>
                    <img src={product.images[0]} alt={product.product_name} title={product.product_name} className='prod-img' />
                </div>
                <div className='flex-row prod-info bg-ivory align-left gap-xs'>
                    <div className='flex-col gap-sm left-bar'>
                        <div className='flex-col gap-xs prod-n-pr'>
                            <Link to={`/product/products/${product._id}`}>
                                <div className='prod-name' title={product.product_name}>{product.product_name}</div>
                            </Link>
                            <div className='prod-price'>{product.price}.000&#x20AB;</div>
                        </div>
                        <div className='flex-row gap-2xs color-vars'>
                            {product.variants.map((variant, index) => (
                                <div key={index} className='color-var'>
                                    {variant}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-col gap-2xs icon-collection'>
                        <i className='bi bi-suit-heart'></i>
                        <i className='bi bi-cart-plus' onClick={() => handleAddToCartClick(product._id)}></i>
                        <button disabled={expandDisable} onClick={() => handleExpandClick()}><i className='bi bi-box-arrow-up-right'></i></button>
                    </div>
                </div>
            </div>
            <div className='flex-col align-left prod-info-exp'>
                <div className='prod-info-exp-holder flex-col gap-xs align-left'>
                    <div className='flex-col gap-2xs prod-n-pr-review align-left'>
                        <p className='prod-brand'>{product.brands}</p>
                        <Link to={`/product/products/${product._id}`}>
                          <div className='prod-name' title={product.product_name}>{product.product_name}</div>
                        </Link>
                        <div className='flex-row prod-review gap-2xs'>
                            <p className='review-rate'>000 review</p>
                        </div>
                    </div>
                    <div className='prod-price'>{product.price}.000&#x20AB;</div>
                    <div className='prod-des'>
                    {product.tab_data.description.map((para, index) => (
                                <p key={index} className='para'>
                                    {para}
                                </p>
                            ))}
                    </div>
                    <div className='flex-col gap-2xs align-left color-select'>
                        <p className='btn-text-lgt uppercase'>Colors</p>
                        <div className='flex-row gap-2xs color-vars flex-wrap align-left flex-left-align'>
                            {product.variants.map((variant, index) => (
                                <div key={index} className='color-var body-lgt'>
                                    {variant}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-row gap-xs btn-collection'>
                        <button className='body-lgt uppercase'>buy now</button>
                        <button className='body-lgt uppercase' onClick={handleAddToCartClick}>add to cart</button>
                    </div>
                    <div className='flex-row gap-xs icon-collection'>
                        <i className='bi bi-suit-heart'></i>
                        <i className='bi bi-cart-plus'></i>
                        <i className='bi bi-x-lg' onClick={handleExpandClick}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
