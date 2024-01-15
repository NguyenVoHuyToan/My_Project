import {
  UilClipboardAlt,
  UilSignOutAlt,
  UilUsersAlt,
} from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import AdminAddForm from "./adminAddForm";

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
  height: 1000px;
  margin-top: 60px;
`;
const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const signOutFunc = () => {
   
    localStorage.setItem("token", null);
    navigate("/");
  };
  // const [cartDetail, setCartDetail] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/product/carts`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCartDetail(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // });
  const [selected, setSelected] = useState(1);
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
      <div className="sidebar-main" style={{ width: "40%" }}>
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
            {SidebarData.map((item, index) => {
              if (item.heading == "Orders") {
                return (
                  <Link to={`/admin`} key={index}>
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
                );
              } else {
                return (
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
                );
              }
            })}

            <div className="menuItem" onClick={() => signOutFunc()}>
              <UilSignOutAlt />
              <p className="btn-text-lgt-xs">Sign Out</p>
            </div>
          </div>
        </motion.div>
      </div>
      <DetailContainer>
        <AdminAddForm />
      </DetailContainer>
    </Container>
  );
};

export default AdminAddProduct;
