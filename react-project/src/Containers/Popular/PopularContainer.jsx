import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";

import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";

const PopularContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");

        if (Array.isArray(response.data.products)) {
          const slicedData = response.data.products.slice(12, 16);
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
  return <>
    <div className="popular__container">
      <Title text="Popular"/>
      {!data.length ? <div>Loading</div> : <Section data={data} />}
    </div>
  
  
  </>;
};

export default PopularContainer;
