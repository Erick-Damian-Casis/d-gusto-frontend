import { Routes, Route, Link } from "react-router-dom";

// Component
import NavBar from "./components/nav-bar/Navbar";
import Home from "./pages/user/home/Home";
import Food from "./pages/admin/food/Food";
import Order from "./pages/admin/order/Order";
import User from "./pages/admin/user/User";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Food />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/users" element={<User />} />
        </Routes>
    </div>
  );
}

export default App;
