import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cart-page.scss";
import ProductTag from "../../components/cart-page/product-tag/product-tag";
import Button from "../../components/common/button/button";
import dongFormatter from "../../utils/dongFormatter/dongFormatter.js";
import axios from "axios";

const Cartpage = () => {
  const navigate = useNavigate();
  const [changeQuantity,setChangeQuantity]=useState(false);
  const [userProducts, setUserProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [calculateTotal, setCalcualteTotal] = useState(false);
  const getTotal = () => {
    let total = 0;

    // for (let index = 0; index < aList; index++) {
    //   const element = userProducts;
    //   console.log(element);
    //   element.cart.forEach((item, index) => {
    //     console.log(item.quantity * element.product_des[index].price);
    //     total += item.quantity * element.product_des[index].price;
    //   });
    // }
    console.log(userProducts);
    userProducts.cart.map((item, index) => {
      total += item.quantity * userProducts.product_des[index].price;
    });

    total = total * 0.8 + total * 0.1 + 5;
    console.log(total);
    if(total-5 <=0 ){
      total=0;
    }
    setTotalPrice(total);
  };
  const fetchData = async () => {
    try {
      const authToken = localStorage.getItem("token");

      console.log(authToken == "null");
      if (authToken == "null" || authToken == "undefined" || !authToken) {
        // throw new  Error(
        //   "User not logged in. Please log in to view cart items."
        // );
        alert("User not logged in. Please log in to view cart items.");
        navigate("/");
      } else {
        const response = await axios.post(
          "http://localhost:3000/product/cartOne",
          {
            accessToken: authToken,
          }
        );
          console.log("response",response);
        if (!response) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = response;

        const cartItems =
          data.data.map((item, index) => {
            return item;
          }) || [];
        console.log(cartItems[0]);
        setUserProducts(cartItems[0]);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message || "An error occurred while fetching cart items.");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();

    // if(userProducts.length>0){
    //   getTotal()
    // }
  }, [changeQuantity]);

  // useEffect(() => {
  //   const fetchAllProducts = async () => {
  //     try {
  //       const authToken = localStorage.getItem("token");

  //       const data = await axios.post(`http://localhost:3000/product/cartOne`, {
  //         accessToken: authToken,
  //       });

  //       console.log(data.data[0]);
  //       setAllProducts(data.data[0]);

  //     } catch (error) {
  //       setError("An error occurred while fetching product details.");
  //     }
  //   };

  //   fetchAllProducts();
  // }, []);

  useEffect(()=>{
    if(userProducts){
      if(Object.keys(userProducts).length>0){
        getTotal();
      }
    }
  }, [userProducts]);

  const deleteProduct = () => {
    console.log("vao delete");
    // setUserProducts(
    //   userProducts
    // );
    fetchData()
  };

  
  const handleBuyNow = () => {
    const paymentInfo = {
      products: userProducts.cart,
      totalPrice: totalPrice,
    };

    navigate("/payment", { state: { paymentInfo } });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
 
  return (
    <div className="cart-page flex-row gap-sm align-left">
      <div className="order-detail flex-col gap-xs">
        {userProducts?userProducts.cart.map((product,index) => {
          console.log(changeQuantity);
          return <ProductTag
          key={product.product_id}
          onDelete={deleteProduct}
          product_id={product.product_id}
          selectedQuantity={product.quantity}
          selectedVariant="#02"
          value={changeQuantity}
          method={setChangeQuantity}
        />
        }
          
        ):<></>}
      </div>
      <div className="billing-detail flex-col gap-xs">
        <div className="billing-container flex-col gap-sm align-left">
          <div className="billing-title flex-col gap-2xs align-left">
            <p className="h4 capitalize">billing detail</p>
            <p className="body">Let&#39;s checkout!</p>
          </div>
          <div className="order-summary flex-col gap-xs align-left max-wdth">
            <div className="order-title flex-row max-wdth">
              <p className="body-bld capitalize">order summary</p>
              <p className="body-bld capitalize">price</p>
            </div>
            <div className="order-items flex-col max-wdth gap-xs">
              {userProducts?userProducts.cart.map((product, index) => {
                console.log(product);
                return (
                  <div
                    key={product.product_id}
                    className="item flex-row body-sml align-left max-wdth"
                  >
                    <p className="product-name">
                      {userProducts.product_des[index].product_name}
                    </p>
                    <p className="product-price">
                      {dongFormatter(
                        userProducts.product_des[index].price * 1000
                      )}
                    </p>
                  </div>
                );
              }):<></>}
            </div>
          </div>
          <div className="hr-divider"></div>
          <div className="discount flex-col gap-xs align-left max-wdth">
            <div className="discount-title">
              <p className="body-bld capitalize">discount code</p>
            </div>
            <div className="discount-input max-wdth flex-col">
              <input
                className="max-wdth"
                type="text"
                placeholder="Enter your discount code."
              />
            </div>
          </div>
          <div className="hr-divider"></div>
          <div className="sub-total flex-col gap-xs align-left max-wdth">
            <div className="discount-title">
              <p className="body-bld capitalize">sub total</p>
            </div>
            <div className="discount-section flex-row max-wdth">
              <div className="discount-tags flex-col gap-xs body-sml align-left">
                <p className="tag capitalize">delivery</p>
                <p className="tag capitalize">discount</p>
                <p className="tag capitalize">tax</p>
              </div>
              {totalPrice !=0 ? <div className="item-price flex-col gap-xs body-sml align-right">
                <p className="product-price">{dongFormatter(5000)}</p>
                <p className="product-price">{dongFormatter(((totalPrice-5)/0.9)*0.2*1000)}(20%)</p>
                <p className="product-price">{dongFormatter(((totalPrice-5)/0.9)*0.1*1000)}(10%)</p>
              </div>: <div className="item-price flex-col gap-xs body-sml align-right">
                <p className="product-price">{dongFormatter(0)}</p>
                <p className="product-price">{dongFormatter(0)}(20%)</p>
                <p className="product-price">{dongFormatter(0)}(10%)</p>
              </div>}
            </div>
          </div>
          <div className="hr-divider"></div>
          <div className="total-price flex-row max-wdth">
            <div className="total-price-title">
              <p className="body-bld capitalize">total</p>
            </div>
            <div className="total-price-value">
              <p className="body-bld capitalize">
                {dongFormatter(totalPrice * 1000)}
              </p>
            </div>
          </div>
        </div>
        <div className="checkout-btns flex-row max-wdth gap-xs">
          <div className="back-to-collection max-wdth">
            <Button
              btnStyle="auth-btn"
              customBtnStyle="max-wdth"
              text="back to shopping"
              frameStyle="max-wdth"
              textStyle="uppercase"
              iconL="bi bi-cart-plus icon-size-16 square-icon"
              onClick={() => {
                window.location.href = "/product/products";
              }}
            />
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
                  pathname: "/payment",
                  search: `?paymentInfo=${encodeURIComponent(
                    JSON.stringify(paymentInfo)
                  )}`,
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
