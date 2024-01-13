import { useEffect, useState } from "react";
import {
  UilSignOutAlt,
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
} from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Sidebar.css";
import AdminCard from "./AdminCard";

const SidebarData = [
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Products",
  },
 
];
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height:1000px;
  margin-top:60px;

`;
const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:20px;
`;

const AdminPage = () => {
  const [cartDetail, setCartDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/product/carts`)
      .then((response) => response.json())
      .then((data) => {
        setCartDetail(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <Container>
      <div className="sidebar-main" style={{width:"40%"}}>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          {/* Your bars icon */}
        </div>
        <motion.div
          className="sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        >
          <div className="menu">
            {SidebarData.map((item, index) => (
              <Link to={`/admin/${item.heading.toLowerCase()}`} key={index}>
                <div
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span className="btn-text-lgt-xs">{item.heading}</span>
                </div>
              </Link>
            ))}
            <div className="menuItem">
            <UilSignOutAlt />
              <p className="btn-text-lgt-xs"> Sign Out</p>
            </div>
          </div>
        </motion.div>
      </div>
      <DetailContainer>
        {cartDetail.map((item, index) => {
          return <AdminCard item={item} key={index} />
        })}
      </DetailContainer>
    </Container>
  );
};

export default AdminPage;
