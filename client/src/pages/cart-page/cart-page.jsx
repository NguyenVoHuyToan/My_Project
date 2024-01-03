import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cart-page.scss';
import ProductTag from '../../components/cart-page/product-tag/product-tag';
import Button from '../../components/common/button/button';
import dongFormatter from '../../utils/dongFormatter/dongFormatter.js';


const Cartpage = () => {
  const navigate = useNavigate();
  const [userProducts, setUserProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('token');
        if (!authToken) {
          throw new Error('User not logged in. Please log in to view cart items.');
        }

        const response = await fetch('http://localhost:3000/cart', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const cartItems = Array.isArray(data) ? data : (data && Array.isArray(data.items) ? data.items : []);

        setUserProducts(cartItems);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching cart items.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products = [];
        for (let product of userProducts) {
          const response = await fetch(`http://localhost:3000/product/products/${product.productId}`);
          const data = await response.json();
          products.push(data);
        }
        setAllProducts(products);
      } catch (error) {
        setError('An error occurred while fetching product details.');
      }
    };

    fetchAllProducts();
  }, [userProducts]);

  useEffect(() => {
    const newTotalPrice = allProducts.reduce((total, product) => total + product.price, 0);
    setTotalPrice(newTotalPrice);
  }, [allProducts]);

  const deleteProduct = (productId) => {
    setUserProducts(userProducts.filter(product => product.productId !== productId));
  };

  const handleBuyNow = () => {
    const paymentInfo = {
      products: userProducts,
      totalPrice: totalPrice,
    };

    navigate('/payment', { state: { paymentInfo } });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
        <div className="cart-page flex-row gap-sm align-left">
            <div className='order-detail flex-col gap-xs'>
                {userProducts.map((product) => (
                    <ProductTag key={product.productId} onDelete={deleteProduct} product_id={product.productId} selectedQuantity={product.quantity} selectedVariant="#02 Rosy" />
                ))}
            </div>
            <div className="billing-detail flex-col gap-xs">
                <div className="billing-container flex-col gap-sm align-left">
                    <div className="billing-title flex-col gap-2xs align-left">
                        <p className='h4 capitalize'>billing detail</p>
                        <p className='body'>Let's checkout!</p>
                    </div>
                    <div className='order-summary flex-col gap-xs align-left max-wdth'>
                        <div className='order-title flex-row max-wdth'>
                            <p className='body-bld capitalize'>order sumary</p>
                            <p className='body-bld capitalize'>price</p>
                        </div>
                        <div className="order-items flex-col max-wdth gap-xs">
                            {allProducts.map((product) => (
                                <div key={product.productId} className='item flex-row body-sml align-left max-wdth'>
                                    <p className='product-name'>{product.product_name}</p>
                                    <p className='product-price'>{dongFormatter(product.price * 1000)}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="hr-divider"></div>
                    <div className="discount flex-col gap-xs align-left max-wdth">
                        <div className='discount-title'>
                            <p className='body-bld capitalize'>discount code</p>
                        </div>
                        <div className='discount-input max-wdth flex-col'>
                            <input className='max-wdth' type="text" placeholder="Enter your discount code." />
                        </div>
                    </div>
                    <div className="hr-divider"></div>
                    <div className="sub-total flex-col gap-xs align-left max-wdth">
                        <div className='discount-title'>
                            <p className='body-bld capitalize'>sub total</p>
                        </div>
                        <div className="discount-section flex-row max-wdth">
                            <div className='discount-tags flex-col gap-xs body-sml align-left'>
                                <p className='tag capitalize'>delivery</p>
                                <p className='tag capitalize'>discount</p>
                                <p className='tag capitalize'>tax</p>
                            </div>
                            <div className="item-price flex-col gap-xs body-sml align-right">
                                <p className='product-price'>5.00</p>
                                <p className='product-price'>-5.99 (20%)</p>
                                <p className='product-price'>2.99 (10%)</p>
                            </div>
                        </div>
                    </div>
                    <div className="hr-divider"></div>
                    <div className="total-price flex-row max-wdth">
                        <div className="total-price-title">
                            <p className='body-bld capitalize'>total</p>
                        </div>
                        <div className="total-price-value">
                            <p className='body-bld capitalize'>{dongFormatter(totalPrice * 1000)}</p>
                        </div>
                    </div>
                </div>
                <div className="checkout-btns flex-row max-wdth gap-xs">
                    <div className="back-to-collection max-wdth">
                        <Button btnStyle='auth-btn' customBtnStyle='max-wdth' text='back to shopping' frameStyle='max-wdth' textStyle='uppercase' iconL="bi bi-cart-plus icon-size-16 square-icon" />
                    </div>
                    <div className="buy-now max-wdth">
                <Button
                    btnStyle="auth-btn"
                    customBtnStyle="max-wdth"
                    text="buy now"
                    frameStyle="max-wdth"
                    textStyle="uppercase"
                    iconL="bi bi-cart-check icon-size-16 square-icon"
                    onClick={() => {
                        const paymentInfo = {
                            products: userProducts,
                            totalPrice: totalPrice,
                        };

                        navigate({
                            pathname: '/payment',
                            search: `?paymentInfo=${encodeURIComponent(JSON.stringify(paymentInfo))}`,
                        });
                    }}
                />
            </div>

                </div>
            </div>
        </div>
    );
};

export default Cartpage;
