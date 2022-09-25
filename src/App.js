import { Routes, Route, Link } from "react-router-dom";

// Component
import NavBar from "./components/nav-bar/Navbar";
import Home from "./pages/client/home/Home";
import Food from "./pages/chef/food/Food";
import Order from "./pages/chef/order/Order";
import Client from "./pages/chef/client/Client";
import FormOrder from "./components/order/form-order/FormOrder";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<FormOrder />} />
            <Route path="/foods-list" element={<Food />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/users" element={<Client />} />
        </Routes>
    </div>
  );
}

export default App;
