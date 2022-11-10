import { Routes, Route, Link } from "react-router-dom";

// Component
import Home from "./pages/client/home/Home";
import Food from "./pages/chef/food/Food";
import Order from "./pages/chef/order/Order";
import Client from "./pages/chef/client/Client";
import FormOrder from "./components/order/form-order/FormOrder";
import Login from "./pages/login/Login";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<FormOrder />} />
            <Route path="/foods" element={<Food />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/users" element={<Client />} />
        </Routes>
    </div>
  );
}

export default App;
