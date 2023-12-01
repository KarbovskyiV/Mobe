import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";

const PromotionContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products.slice(0, 4));
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
          <Section data={products} />
        )}
      </div>
    </>
  );
};

export default PromotionContainer;
