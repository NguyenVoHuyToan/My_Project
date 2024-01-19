import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./payment-page.scss";
import dongFormatter from "../../utils/dongFormatter/dongFormatter.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const navigate = useNavigate();
  const [cartInfo, setCartInfo] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [paymentTotal, setPaymentTotal] = useState(0);
  const [cardNumber,setCardNumber]=useState("");
  const [cardName,setCardName]=useState("");
  const [expDate,setExpDate]=useState("");
  const [CVV,setCVV]=useState("");
  const onChangeCardNumber=(e)=>{
    console.log(e);
    setCardNumber(e.target.value);
  }
  const onChangeCardName=(e)=>{
    setCardName(e.target.value);
  }
  const onChangeExpDate=(e)=>{
    setExpDate(e.target.value);
  }
  const onChangeCVV=(e)=>{
    setCVV(e.target.value);
  }
  const location = useLocation();
  const decode = decodeURIComponent(location.search.split("?")[1]);
  useEffect(() => {
    const { products, totalPrice } = JSON.parse(decode.split("=")[1]);
    console.log(products);
    if (products) {
      setCartInfo(products);
      setPaymentTotal(totalPrice);
    } else {
      console.error("No payment information found.");
    }
  }, [location.state]);

  useEffect(() => {
    const subtotal = calculateSubtotal();
    const delivery = calculateDelivery();
    const discount = calculateDiscount(subtotal);
    const tax = calculateTax(subtotal);
    const total = paymentTotal;

    // Sử dụng giá trị total theo cách phù hợp trong component của bạn
  }, [cartInfo]);
  useEffect(()=> {

  })

  const calculateSubtotal = () =>
    Array.isArray(cartInfo?.products) && cartInfo.products.length > 0
      ? cartInfo.products.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )
      : 0;

  const calculateDelivery = () => {
    if(paymentTotal <=0 ){
      return 0
    }
    else{return 5000}
  };

  const calculateDiscount = () => {
    if (paymentTotal  <=0) {
      return 0;
    } else {
      return ((paymentTotal - 5) / 0.9) * 0.2 * 1000;
    }
  }; // 20% discount

  const calculateTax = () => {
    if (paymentTotal  <= 0) {
      return 0;
    } else {
      return ((paymentTotal - 5) / 0.9) * 0.1 * 1000;
    }
  }; // 10% tax

  const calculateTotal = (subtotal, delivery, discount, tax) =>
    subtotal + delivery - discount + tax;

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  const handleDeleteAllCart = async () => {
    const authToken = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `http://localhost:3000/product/cart/deleteAll`,
        {
          accessToken:authToken
        }
      );

      if (response.data == "complete") {
        console.log("Product deleted from cart successfully");
        
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleConfirmOrder = () => {
    if(cardNumber && cardName && expDate && CVV)
    {
      if (window.confirm("Bạn có chắc chắn muốn đặt hàng không?")) {
        // Gọi API hoặc xử lý đặt hàng ở đây
        setShowSuccessMessage(true);
        handleDeleteAllCart();
        navigate("/")
      }
    }
    else{
      alert("Nhập chưa đủ thông tin")
    }
    
  };
  console.log(cartInfo);
  const renderSelectedProducts = () => {
    if (Object.keys(cartInfo).length > 0) {
      return cartInfo.cart.map((product, index) => {
        return (
          <div key={product.product_id} className="order-detail">
            <div className="body-sml">
              {`${cartInfo.product_des[index].product_name}`}
            </div>
            <div className="body-sml">
              {dongFormatter(cartInfo.product_des[index].price*1000)}*{ product.quantity}=
              {dongFormatter(
                cartInfo.product_des[index].price * product.quantity * 1000
              )}
            </div>
           
          </div>
        );
      });
    }
  };

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
              <div className="action-bar-child body">Paypal</div>
              <div className="action-bar-child body">E-Wallet</div>
              <div className="action-bar-child body">COD</div>
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
                  <label htmlFor="" className="body">
                    Card Number
                  </label>
                  <div className="form-card-num">
                    <input
                      type="text"
                      inputMode="numeric"
                      className="fill-num"
                      onChange={(e)=>onChangeCardNumber(e)}
                    />
                    <select
                      className="card-type-list body"
                      defaultValue="credit"
                    >
                      <option value="credit">Card Type</option>
                      <option value="debit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                    </select>
                  </div>
                </div>
                <div className="name-fill">
                  <label htmlFor="" className="body">
                    Name
                  </label>
                  <input type="text" className="form-name-fill" onChange={(e)=>onChangeCardName(e)}  />
                </div>
                <div className="expi-cvv">
                  <div className="expi-date">
                    <label htmlFor="" className="body">
                      Expiration Date
                    </label>
                    <input type="text" className="expi-fill" onChange={(e)=>onChangeExpDate(e)}/>
                  </div>
                  <div className="cvv">
                    <label htmlFor="" className="body">
                      CVV
                    </label>
                    <input type="text" className="cvv-fill" onChange={(e)=>onChangeCVV(e)} />
                  </div>
                </div>
                <div className="btn">
                  <div className="action-btn button_2">
                    
                      <button
                        className="ButtonConfirm"
                        onClick={handleConfirmOrder}
                      >
                        <i className="bi bi-check-circle"></i>
                        <span>CONFIRM</span>
                      </button>
                    
                  </div>
                  <div className="action-btn button_2">
                    <Link to="/cart" className="LinkBut">
                      <button className="ButtonCancel">
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
              <div className="body-bld OST">Order Summary</div>
              <div className="body-bld">(Quantity x Price)=Price</div>
             
            </div>

            {renderSelectedProducts()}
          </div>

          <div className="subtotal">
            <div className="body-bld">Subtotal</div>
            <div className="sub-line">
              <div className="body-sml left-item">Delivery</div>
              <div className="body-sml">
                {dongFormatter(calculateDelivery())}
              </div>
            </div>
            <div className="sub-line">
              <div className="body-sml left-item">Discount</div>
              <div className="body-sml">
                - {dongFormatter(calculateDiscount())} (20%)
              </div>
            </div>
            <div className="sub-line">
              <div className="body-sml left-item">Tax</div>
              <div className="body-sml">
                {dongFormatter(calculateTax())} (10%)
              </div>
            </div>
          </div>

          <div className="total">
            <div className="total-title body-bld">Total</div>
            <div className="total-cost body-bld">
              {dongFormatter(paymentTotal * 1000)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
