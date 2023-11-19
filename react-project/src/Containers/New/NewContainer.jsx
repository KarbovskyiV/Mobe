import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import axios from "axios";

import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";

const NewContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");

        if (Array.isArray(response.data.products)) {
          const slicedData = response.data.products.slice(8, 12);
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
      <div className="new__container">
        <Title text="New" />
        {!data.length ? <div>Loading</div> : <Section data={data} />}
      </div>
    </>
  );
};

export default NewContainer;
