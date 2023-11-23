import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";

import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";

const PromotionContainer = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  /*  const products = useSelector((state) => state.products.products); */
  //const loading = useSelector((state) => state.products.loading);
  //const error = useSelector((state) => state.products.error);
  /* console.log("222", products.products); */

  /* useEffect(() => {
    if (products?.length) {
      const slicedData = products.products.slice(4, 8);
      setData(slicedData);
    }
  }, [products]); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");
        console.log("response", response);

        if (Array.isArray(response.data.products)) {
          const slicedData = response.data.products.slice(4, 8);
          setData(slicedData);

        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="promotion__container">
        <Title text="Promotions" />
        {!data.length ? <div>Loading</div> : <Section data={data} />}
      </div>
    </>
  );
};

export default PromotionContainer;
