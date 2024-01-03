import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './payment-page.scss';
import dongFormatter from '../../utils/dongFormatter/dongFormatter.js';

const PaymentPage = () => {
  const [cartInfo, setCartInfo] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.paymentInfo) {
      setCartInfo(location.state.paymentInfo);
    } else {
      console.error('No payment information found.');
    }
  }, [location.state]);


  useEffect(() => {
    const subtotal = calculateSubtotal();
    const delivery = calculateDelivery();
    const discount = calculateDiscount(subtotal);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, delivery, discount, tax);

    // Sử dụng giá trị total theo cách phù hợp trong component của bạn
  }, [cartInfo]);

  const calculateSubtotal = () => (
    Array.isArray(cartInfo?.products) && cartInfo.products.length > 0
      ? cartInfo.products.reduce((total, product) => total + product.price * product.quantity, 0)
      : 0
  );

  const calculateDelivery = () => 5.00;

  const calculateDiscount = (subtotal) => subtotal * 0.20; // 20% discount

  const calculateTax = (subtotal) => subtotal * 0.10; // 10% tax

  const calculateTotal = (subtotal, delivery, discount, tax) => subtotal + delivery - discount + tax;

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  const handleConfirmOrder = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt hàng không?')) {
      // Gọi API hoặc xử lý đặt hàng ở đây
      setShowSuccessMessage(true);
    }
  };

  const renderSelectedProducts = () => (
    Array.isArray(cartInfo.products) && cartInfo.products.length > 0 ? (
      cartInfo.products.map((product) => (
        <div key={product.productId} className="order-detail">
          <div className="body-sml">
            {`${product.product_name} - Color ${product.color} - Version ${product.version}`}
          </div>
          <div className="body-sml">{dongFormatter(product.price * product.quantity)}</div>
        </div>
      ))
    ) : null
  );

  return (
    <div className="payment-page">
      <div className="LinkADD">
        <Link className="LinkOB" to="/">
          HOME
        </Link>
        <span> / </span>
        <Link className="LinkOB" to="/cart">
          CART
        </Link>
      </div>
      <div className="main-UI">
        <div className="payment-detail">
          <div className="h4 title">Payment Detail</div>
          <div className="payment-table">
            <div className="action-bar-parent">
              <div className="card">
                <div className="body-bld-white">Credit/Debit card</div>
              </div>
              <div className="action-bar-child body">
                Paypal
              </div>
              <div className="action-bar-child body">
                E-Wallet
              </div>
              <div className="action-bar-child body">
                COD
              </div>
            </div>
            <div className="selection-table">
              <div className="left-info">
                <div className="VCB">
                  <p className="body card-text">Vietcombank</p>
                  <p className=" card-textbody">*** **** **99</p>
                  <i className="bi bi-exclude"></i>
                </div>
                <div className="vietin">
                  <p className="body card-text">Vietinbank</p>
                  <p className="body card-text">*** **** **99</p>
                  <i className="bi bi-exclude"></i>
                  {/* <exclude /> */}
                </div>
                <div className="new-card">
                  <p className="body card-text">New</p>
                  <i className="bi bi-plus-lg"></i>
                </div>
              </div>
              <div className="right-frame">
                <div className="card-num">
                  <label htmlFor="" className="body">Card Number</label>
                  <div className="form-card-num">
                    <input type="text" inputMode="numeric" className="fill-num" />
                    <select className="card-type-list body" defaultValue="credit">
                      <option value="credit">Card Type</option>
                      <option value="debit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                    </select>
                  </div>

                </div>
                <div className="name-fill">
                  <label htmlFor="" className="body">Name</label>
                  <input type="text" className="form-name-fill" />
                </div>
                <div className="expi-cvv">
                  <div className="expi-date">
                    <label htmlFor="" className="body">Expiration Date</label>
                    <input type="text" className="expi-fill" />
                  </div>
                  <div className="cvv">
                    <label htmlFor="" className="body">CVV</label>
                    <input type="text" className="cvv-fill" />
                  </div>
                </div>
                <div className="btn">
                  <div className="action-btn button_2">
                    <Link to="/cart" className='LinkBut'>
                      <button className='ButtonConfirm' onClick={handleConfirmOrder}>
                        <i className="bi bi-check-circle"></i>
                        <span>CONFIRM</span>
                      </button>
                    </Link>
                  </div>
                  <div className="action-btn button_2">
                    <Link to="/cart" className='LinkBut'>
                      <button className='ButtonCancel'>
                        <i className="bi bi-x-circle"></i>
                        <span>CANCEL</span>
                      </button>
                    </Link>
                  </div>
                </div>

                {showSuccessMessage && (
                  <div className="success-message">
                    <p>Đặt hàng thành công!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="billing-detail">
  <div className="bill-title">
    <div className="h4">Billing Detail</div>
    <div className="name body">{cartInfo?.customerName}</div>
  </div>
  <div className="order-sum">
    <div className="order-sum-title">
      <div className="body-bld OST" >Order Summary</div>
      <div className="body-bld">Price</div>
    </div>

    {renderSelectedProducts()}
  </div>

  <div className="subtotal">
    <div className="body-bld">Subtotal</div>
    <div className="sub-line">
      <div className="body-sml left-item">Delivery</div>
      <div className="body-sml">{dongFormatter(calculateDelivery())}</div>
    </div>
    <div className="sub-line">
      <div className="body-sml left-item">Discount</div>
      <div className="body-sml">- {dongFormatter(calculateDiscount(calculateSubtotal()))} (20%)</div>
    </div>
    <div className="sub-line">
      <div className="body-sml left-item">Tax</div>
      <div className="body-sml">{dongFormatter(calculateTax(calculateSubtotal()))} (10%)</div>
    </div>
  </div>

  <div className="total">
    <div className="total-title body-bld">Total</div>
    <div className="total-cost body-bld">{formatCurrency(calculateTotal())}</div>
  </div>
</div>

      </div>
    </div>
  );
};

export default PaymentPage;