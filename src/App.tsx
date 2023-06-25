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

const App = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
      </Routes>
    </Router>
  )
};

export default App;
