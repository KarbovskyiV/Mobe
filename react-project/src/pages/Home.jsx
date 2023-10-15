import React from "react";
import { CategoryContext } from "../App";
import Slider from "../components/Sliders/Slider";

const Home = () => {
  /* const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const { categoryValue } = React.useContext(CategoryContext);

  React.useEffect(() => {
    setIsLoading(true);

    fetch(`http://mobe.local/api/products`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryValue]);
  console.log(items); */
  return (
    <div>
      <Slider />;
    </div>
  );
};

export default Home;
