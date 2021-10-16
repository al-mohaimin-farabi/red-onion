import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import './SingleFoodContainer.scss'

const SingleFoodContainer = ({ food, addToCart, goBack }) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (quantity < 1) setQuantity(1)
    }, [quantity])


    return (
        <div className="single-food">
            <div className="single-food__info">
                <div onClick={goBack} className="back-btn"><ArrowLeftOutlined /></div>
                <h1 className="single-food__info__title">{food?.title}</h1>
                <p className="single-food__info__subtitle">{food?.subtitle}</p>
                <div className="single-food__info__price-quantity">
                    <p className="single-food__info__price">${food?.price}.{food.priceFraction}</p>
                    <div className="single-food__info__quantity">
                        <button onClick={() => setQuantity(quantity - 1)} className="quantity-control"><MinusOutlined /></button>
                        <span className="quantity">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="quantity-control"><PlusOutlined /></button>
                    </div>
                </div>
                <button onClick={() => { addToCart(quantity); goBack() }} className="add-button"><ShoppingCartOutlined className="icon" /> Add</button>
            </div>
            <div className="single-food__img">
                <img src={require(`../../../../images${food?.photo}`).default} alt="food" />
            </div>
        </div>
    );
};

export default SingleFoodContainer;