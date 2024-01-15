import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
<<<<<<< HEAD:admin/src/components/Card/Card.jsx
import useData from "../../hook/useData";
=======
import useData from "../hook/useData.js";
>>>>>>> 2e28ec3dfe74d424939f6211f546128d3a48f4c7:admin/src/admin/components/Card/Card.jsx
import "./Card.css";

function Home() {
  const products = useData("http://localhost:3000/products");
  const usersData = useData("http://localhost:3000/users", true);
  const usersCount = usersData ? usersData.length : "Loading...";

  return (
    <main className="main-container">
      <div className="main-cards">
        <Card
          title="PRODUCTS"
          icon={<BsFillArchiveFill className="card_icon" />}
          count={products ? products.length : "Loading..."}
        />
        <Card
          title="CATEGORIES"
          icon={<BsFillGrid3X3GapFill className="card_icon" />}
          count="12"
        />
        <Card
          title="CUSTOMERS"
          icon={<BsPeopleFill className="card_icon" />}
          count={usersCount}
        />
        <Card
          title="ALERTS"
          icon={<BsFillBellFill className="card_icon" />}
          count="42"
        />
      </div>
    </main>
  );
}

const Card = ({ title, icon, count }) => (
  <div className="card">
    <div className="card-inner">
      <h3>{title}</h3>
      {icon}
    </div>
    <h1>{count}</h1>
  </div>
);

export default Home;
