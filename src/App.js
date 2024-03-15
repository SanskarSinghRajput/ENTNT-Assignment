import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct  from './pages/AddProduct';
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Shop from './pages/Shop';


function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/shop" element={<Shop />}/>
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
