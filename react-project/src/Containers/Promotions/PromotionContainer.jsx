import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";

import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";


const PromotionContainer = () => {
  const [data, setData] = useState([]);
     console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://mobe.local.com/api/products/");
        console.log(response);
     

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
  return <>
    <div className="promotion__container">
      <Title text="Promotions"/>
      {!data.length ? <div>Loading</div> : <Section data={data} />}
    </div>
  
  
  </>;
};

export default PromotionContainer;
