import React from "react";
import { Card } from "antd";
const AdminCard = ({ item }) => {
  const cart = item.cart;
  let totalCost=0;
  
  cart.forEach((element,index) => {
      return totalCost+=item.product_des[index].price*element.quantity;
  });
  const title=`User ID: ${item.userId}`
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
