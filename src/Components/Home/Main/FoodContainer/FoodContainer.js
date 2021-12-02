import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../Context/ContextProvider";

import useRestaurentData from "../../../../Hooks/useRestaurentData";
import Food from "./Food/Food";
import "./FoodContainer.scss";
const FoodContainer = ({ foodType, getFoodById, hideAll, setShowChekout }) => {
  const [restaurentData] = useRestaurentData();
  const [filteredData, setFilteredData] = useState();

  const [context] = useContext(Context);

  useEffect(() => {
    if (foodType === "breakfast") {
      setFilteredData(restaurentData?.breakfast);
    } else if (foodType === "lunch") {
      setFilteredData(restaurentData?.lunch);
    } else if (foodType === "dinner") {
      setFilteredData(restaurentData?.dinner);
    } else {
      setFilteredData(restaurentData?.breakfast);
    }
  }, [foodType, restaurentData]);

  return (
    <>
      <div className="food-container">
        {filteredData &&
          filteredData.map((food) => (
            <Food key={food.title} food={food} getFoodById={getFoodById} />
          ))}
      </div>
      <button
        onClick={() => {
          hideAll();
          setShowChekout(true);
        }}
        disabled={context.cart.length < 1}
        className="checkout-btn"
      >
        Checkout Your Food
      </button>
    </>
  );
};

export default FoodContainer;
