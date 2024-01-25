import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound.jsx";
import LoginPage from "../pages/Signin.jsx";
import Home from "../pages/Home.jsx";
import ComparePage from "../pages/ComparePage/ComparePage.jsx";
import WishList from "../pages/WishList/WishList.jsx";
import OrderPage from "../components/OrderPage/OrderPage.jsx";
import PersonalData from "../pages/PersonalData/PersonalData.jsx";
import ProductCard from "../pages/ProductCard/ProductCard.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import ProductPage from "../pages/FilteredProducts/ProductList.jsx";
import AccessoriesCard from "../pages/AccessoriesCard/AccessoriesCard.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";

const Navigation = () => {
  return (
    <Routes>
      <Route path='/NotFound' element={<NotFound />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<Home />} />

      <Route path='/*' element={<Home />} />
      <Route path='/compare' element={<ComparePage />} />
      <Route path='/wishList' element={<WishList />} />
      <Route path='/order-page' element={<OrderPage />} />
      <Route path='/personal-data' element={<PersonalData />} />
      <Route path='/product-card' element={<ProductCard />} />

      <Route
        path='/product-page'
        element={
          <ErrorBoundary>
            <ProductPage />
          </ErrorBoundary>
        }
      />

      <Route
        path='/product-page/:label/:page/:series'
        element={<ProductPage />}
      />
      <Route path={`/product-card/:itemDate`} element={<ProductCard />} />
      <Route path={`/accessories-card`} element={<AccessoriesCard />} />
      <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
  );
};

export default Navigation;
