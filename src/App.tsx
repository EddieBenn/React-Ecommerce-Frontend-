import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import AdminDashboard from "./admin/adminRoutes/adminApp";

const App = () => {

  const token = localStorage.getItem('token')

  const user = useSelector((state:RootState) => state.userLogin.currentUser)
  
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/dashboard/*" element={user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/" />}/>
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login />}/>
        <Route path="/register" element={token ? <Navigate to="/dashboard" /> : <Register />}/>
      </Routes>
    </Router>
  )
};

export default App;
