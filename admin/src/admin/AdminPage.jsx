// App.js
import "./AdminCSS.css";

import Sidebar from "./components/sidebar";

function AdminPage() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
      </div>
    </div>
  );
}

export default AdminPage;
