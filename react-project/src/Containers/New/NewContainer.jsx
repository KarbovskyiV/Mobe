import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../actions/productActions";

import "swiper/css";
import "swiper/css/pagination";



import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";

const NewContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) =>
    state.products.products.slice(12, 16)
  );
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  return (
    <>
      <div className="new__container">
        <Title text="New" />
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

export default NewContainer;
