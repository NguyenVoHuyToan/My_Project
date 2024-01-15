import React from "react";
import { Card } from "antd";
const AdminCard = ({ item }) => {
  const cart = item.cart;
  let totalCost=0;
  
  cart.forEach((element,index) => {
      return totalCost+=item.product_des[index].price*element.quantity;
  });
  console.log("item",item);
  const title=`User Email: ${item.userEmail}`
  return (
    <Card
      title={title}
      bordered={false}
      style={{
        width: "100%",
        margin: "10px",
        backgroundColor: "white",
      }}
    >
      {cart.map((cartItem,index) => {
        return <div key={index}>
          <p>Product Name:{item.product_des[index].product_name}</p>
        <p>Price:{item.product_des[index].price}</p>
        <p>Brands:{item.product_des[index].brands}</p>
        <p>Quantity:{cartItem.quantity}</p>
        <hr/>
      </div>
      })}

      <p>Total:{totalCost}</p>
    </Card>
  );
};

export default AdminCard;
