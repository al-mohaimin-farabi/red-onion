import React, { useContext, useState } from 'react';
import FoodContainer from './FoodContainer/FoodContainer';

import useRestaurentData from '../../../Hooks/useRestaurentData';
import SingleFoodContainer from './SingleFoodContainer/SingleFoodContainer';
import './Main.scss';
import { Context } from '../../../Context/ContextProvider';
import OrderReview from './OrderReview/OrderReview';
import PlaceOrder from './PlaceOrder/PlaceOrder';

const Main = () => {
    const [food, setFood] = useState('breakfast');
    const [deliveryData, setDeliveryData] = useState({})
    const [filteredFood, setFilteredFood] = useState({});
    const [showFoodContainer, setShowFoodContainer] = useState(true)
    const [showSingleFood, setShowSingleFood] = useState(false);
    const [showChekout, setShowChekout] = useState(false);
    const [showPlaceOrder, setShowPlaceOrder] = useState(false);

    const [restaurentData] = useRestaurentData();
    const [context, setContext] = useContext(Context);

    // Show Hide

    const hideAll = () => {
        setShowFoodContainer(false);
        setShowSingleFood(false);
        setShowChekout(false);
        setShowPlaceOrder(false);
    }

    const goBack = () => {
        hideAll();
        setShowFoodContainer(true);
    }

    // Fuction add to cart

    const addToCart = (quantity) => {
        const newCart = context.cart.filter(item => item.id !== filteredFood.id);
        const exist = context.cart.find(item => item.id === filteredFood.id);

        exist ?
            filteredFood.quantity = filteredFood.quantity + quantity
            : filteredFood.quantity = quantity


        setContext({
            ...context,
            cart: [...newCart, filteredFood]
        })

    }

    // Fuction getFoodBy ID

    const getFoodById = id => {
        const data = (
            Object.keys(restaurentData)
                .map(key => restaurentData[key])
                .map(foodType => foodType
                    .find(food => food.id === id))
                .filter(res => res !== undefined)[0]);

        setFilteredFood(data);
        hideAll();
        setShowSingleFood(true);
    }

    console.log(context.cart);

    return (
        <main>
            <div className="sub-nav">
                <p
                    onClick={() => {
                        goBack()
                        setFood('breakfast')
                    }}
                    className={food === 'breakfast' ? 'active' : ''}
                >Breakfast
                </p>

                <p
                    onClick={() => {
                        goBack()
                        setFood('lunch')
                    }}
                    className={food === 'lunch' ? 'active' : ''}
                >
                    Lunch
                </p>

                <p
                    onClick={() => {
                        goBack()
                        setFood('dinner')
                    }}
                    className={food === 'dinner' ? 'active' : ''}
                >
                    Dinner
                </p>
            </div>

            {showFoodContainer && < FoodContainer foodType={food} getFoodById={getFoodById} hideAll={hideAll} setShowChekout={setShowChekout} />}
            {showSingleFood && Object.keys(filteredFood).length > 0 && <SingleFoodContainer food={filteredFood} addToCart={addToCart} goBack={goBack} />}
            {showChekout && <OrderReview deliveryData={deliveryData} setDeliveryData={setDeliveryData} goBack={goBack} hideAll={hideAll} setShowPlaceOrder={setShowPlaceOrder} />}
            {showPlaceOrder && <PlaceOrder hideAll={hideAll} data={deliveryData} setShowChekout={setShowChekout} />}
        </main>
    );
};

export default Main;