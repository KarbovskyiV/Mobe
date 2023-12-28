import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products.products);

  const promotionProducts = allProducts.filter(
    (product) => product.is_promotion
  );
  const newProducts = allProducts.filter((product) => product.is_new);
  const popularProducts = allProducts.filter((product) => product.is_popular);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  return (
    <>
      <div className="promotion__container">
        <Title text="Promotions" />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Section data={promotionProducts} />
        )}
      </div>

      <div className="new__container">
        <Title text="New Products" />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Section data={newProducts} />
        )}
      </div>

      <div className="popular__container">
        <Title text="Popular Products" />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Section data={popularProducts} />
        )}
      </div>
    </>
  );
};

export default MainContainer;
