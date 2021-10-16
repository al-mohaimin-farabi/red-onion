import React from 'react';

import './Food.scss';

const Food = ({ food, getFoodById }) => {
    const handleClick = () => {
        getFoodById(food.id);
    }
    return (
        <div onClick={handleClick} className="food-card">
            <img className="food-card__img" src={require(`../../../../../images${food.photo}`).default} alt={food.title} />
            <p className="food-card__title">{food.title}</p>
            <p className="food-card__subtitle">{food.subtitle}</p>
            <p className="food-card__price">${food.price}.{food.priceFraction}</p>
        </div>
    );
};

export default Food;