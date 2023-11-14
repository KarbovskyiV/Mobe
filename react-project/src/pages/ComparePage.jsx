// ComparePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ComparePage = () => {
  
  const [allProducts, setAllProducts] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");
        if (Array.isArray(response.data.products)) {
          setAllProducts(response.data.products);
        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    setComparedProducts(storedItems);
  }, []);

  if (!comparedProducts || !Array.isArray(allProducts)) {
    return <div>Завантаження...</div>;
  }

  const comparedProductsData = allProducts.filter((product) =>
    comparedProducts.includes(product.id)
  );

  console.log("comparedProductsData", comparedProductsData);

   const handleClearComparison = () => {
     // Очистити товари для порівняння в локальному сховищі
     localStorage.removeItem("cart");
     // Оновити стан компонента
     setComparedProducts([]);
   };

  return (
    <div>
      <h1>Сторінка порівняння товарів</h1>
      <h1>Сторінка порівняння товарів</h1>
      <h1>Сторінка порівняння товарів</h1>
      <h1>Сторінка порівняння товарів</h1>
      <h1>Сторінка порівняння товарів</h1>
      <h1>Сторінка порівняння товарів</h1>
     
      <button onClick={handleClearComparison}>
        Очистити товари для порівняння
      </button>
      <ul>
        {comparedProductsData.map((product) => (
          <li key={product.id}>
            <img src={product.images[1]} alt="" />
            <div>{product.title}</div>
            <div>{product.price}$</div>
            {/* Додайте інші властивості товару, які вам потрібні для порівняння */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComparePage;
