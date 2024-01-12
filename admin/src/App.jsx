// App.js
import './App.css';
import '../../client/src/assets/css/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/sidebar';
import Product from './components/Product/Adproduct';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<MainDash />} />
            <Route path="/products" element={<Product />} />
          </Routes>
          {/* <RightSide /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
