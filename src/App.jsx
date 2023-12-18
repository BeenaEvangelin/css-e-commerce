import React from "react";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import "./App.css";

import Signup from "./Components/Authentication/Signup";
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import OtherItemsPage from "./pages/OtherItemsPage";
import SellersPage from "./pages/SellersPage";
import UniquesPage from "./pages/UniquesPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/products/:id" element={<ProductsPage />}></Route>
          <Route path="/categories/:id" element={<CategoryPage />}></Route>
          <Route path="/communities/:id" element={<CommunitiesPage />}></Route>
          <Route path="/others/:id" element={<OtherItemsPage />}></Route>
          <Route path="/sellers/:id" element={<SellersPage />}></Route>
          <Route path="/uniques/:id" element={<UniquesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
