import React from "react";
import { CategoryContext } from "../App";
import Slider from "../components/Sliders/Slider";
import LogosBlock from "../components/LogosBlock/LogosBlock";

const Home = () => {
  /* const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const { categoryValue } = React.useContext(CategoryContext);

  React.useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:8080/api/products`)
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
    <div className="home">
      <div className="home__slider-logos">
        <Slider />
        <LogosBlock />
      </div>
    </div>
  );
};

export default Home;
