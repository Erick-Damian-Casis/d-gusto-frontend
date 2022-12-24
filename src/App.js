import { Routes, Route } from "react-router-dom";
import {useState} from "react";

// Component
import Home from "./pages/client/home/Home";
import Food from "./pages/chef/food/Food";
import Order from "./pages/chef/order/Order";
import Login from "./pages/auth/Login";



function App() {
    const [user, setUser] = useState(null)


  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/foods" element={<Food/>} />
            <Route path="/orders" element={<Order/>} />
        </Routes>
    </div>
  );
}

export default App;
