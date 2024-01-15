import {
  UilClipboardAlt,
  UilSignOutAlt,
  UilUsersAlt,
} from "@iconscout/react-unicons";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminCard from "./AdminCard";
import "./Sidebar.css";
import axios from "axios";

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

const AdminPage = () => {
  const navigate = useNavigate();
   const signOutFunc = () => {
    
    localStorage.setItem("token", null);
    navigate("/");
  };
  const [cartDetail, setCartDetail] = useState([]);
  const [isAdmin, setIsAdmin] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:3000/product/carts`)
      .then((response) => response.json())
      .then((data) => {
        setCartDetail(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const checkAdminFunc = async () => {
      const accessToken = localStorage.getItem("token");
      if (accessToken == null) {
        navigate("/");
      } else {
        try {
          const checkAdmin = await axios.post("http://localhost:3000/admin/", {
            accessToken,
          });

          if (checkAdmin.data == 1) {
            setIsAdmin(1);
          }
        } catch (err) {
          console.log(err);
          if (err) {
            throw new Error(err);
          }
        }
      }
    };
    checkAdminFunc();
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
      {isAdmin == 1 ? (
        <>
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
                          <span className="btn-text-lgt-xs">
                            {item.heading}
                          </span>
                        </div>
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        to={`/admin/${item.heading.toLowerCase()}`}
                        key={index}
                      >
                        <div
                          className={
                            selected === index ? "menuItem active" : "menuItem"
                          }
                          onClick={() => setSelected(index)}
                        >
                          <item.icon />
                          <span className="btn-text-lgt-xs">
                            {item.heading}
                          </span>
                        </div>
                      </Link>
                    );
                  }
                })}
                <div className="menuItem" onClick={() => signOutFunc()}>
                  <UilSignOutAlt />
                  <p className="btn-text-lgt-xs" >
                    
                    Sign Out
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <DetailContainer>
            <h1>ORDERS</h1>
            {cartDetail.map((item, index) => {
              return <AdminCard item={item} key={index} />;
            })}
          </DetailContainer>
        </>
      ) : (
        <div>You are not admin</div>
      )}
    </Container>
  );
};

export default AdminPage;
