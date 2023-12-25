import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout.jsx';
import Profile from './page/Profile.jsx';
import Home from './page/Home.jsx';
import Contact from './page/Contact.jsx';
import About from './page/About.jsx';
function App() {
  return (
     <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
     </Layout>
  );
}

export default App;
