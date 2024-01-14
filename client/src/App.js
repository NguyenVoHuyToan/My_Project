import axios from 'axios';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Contact from "./page/Contact.jsx";
import Home from "./page/Home.jsx";
import Product from "./page/Product.jsx";
import Profile from "./page/Profile.jsx";
import Signin from './pages/signin/signin.jsx';
function App() {
  const [dataBase, setDataBase] = useState([]);

  async function getData() {
    const response = await axios.get(
      "https://mocki.io/v1/fbd81a8d-48d9-40bf-a051-de84c9a1e67f"
    );

    setDataBase(response.data);
  }

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      alert(err.message);
    }
  }, []);
  return (
    <Layout>
      <Routes>
        {/* <Route path='/' element={<Signin/>}/> */}
        <Route path="/" element={<Home data={dataBase} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
