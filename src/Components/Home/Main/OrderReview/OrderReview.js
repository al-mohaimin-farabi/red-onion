import { ArrowLeftOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../../../../Context/ContextProvider';

import './OrderReview.scss';

const OrderReview = ({ goBack, hideAll, setShowPlaceOrder, deliveryData, setDeliveryData }) => {
    const [placeOrderActive, setPlaceOrderActive] = useState(false);

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const [context, setContext] = useContext(Context);

    const items = context.cart?.reduce((prev, cart) => prev + cart.quantity, 0);
    const price = context.cart?.reduce((prev, cart) => prev + (parseFloat(`${cart.price}.${cart.priceFraction}`)) * cart.quantity, 0)
    const tax = price * 0.02;
    const total = price + tax + 2;

    const handleQuantity = (id, type) => {
        const index = context.cart.indexOf(context.cart.find(item => item.id === id));
        const food = context.cart.find(item => item.id === id);

        if (type === 'plus') {
            food.quantity = food.quantity + 1
        }
        else {
            food.quantity = food.quantity - 1

            if (food.quantity < 1) {
                const filterCart = context.cart.filter(item => item.id !== id);
                setContext({
                    ...context,
                    cart: filterCart
                })

                return;
            }
        }
        const oldCart = context.cart;
        oldCart[index] = food;
        setContext({
            ...context,
            cart: oldCart
        })
    }


    const onSubmit = data => {
        setPlaceOrderActive(true);
        setDeliveryData(data);
    }

    return (
        <div className="order-review">
            <div className="back-btn" onClick={goBack}>
                <ArrowLeftOutlined />
            </div>
            <div className="delivery-details">
                <h2>Edit Delivery Details</h2>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue={deliveryData?.deliveryType}
                        {...register('deliveryType', { required: "This Field is Required" })}
                        placeholder="Delivery Type (Home Delivery, Pick up)"
                    />
                    <p>{errors.deliveryType?.message}&nbsp;</p>

                    <input
                        defaultValue={deliveryData?.roadNo}
                        {...register('roadNo', { required: "This Field is Required" })}
                        placeholder="Road no"
                    />
                    <p>{errors.roadNo?.message}&nbsp;</p>

                    <input
                        defaultValue={deliveryData?.flat}
                        {...register('flat', { required: "This Field is Required" })}
                        placeholder="Flat, Suit or Floor"
                    />
                    <p>{errors.flat?.message}&nbsp;</p>

                    <input
                        defaultValue={deliveryData?.buisiness}
                        {...register('buisiness',)}
                        placeholder="Business Name (optional)"
                    />
                    <p>&nbsp;</p>

                    <input
                        defaultValue={deliveryData?.instructor}
                        {...register('instructor',)}
                        placeholder="Add Delivery Instructor"
                    />
                    <p>&nbsp;</p>

                    <button>Save & Continue</button>
                </form>
            </div>
            <div className="place-order">
                <p>From <strong>Gulshan Plaza Restaura GPR</strong></p>
                <p>Arriving in 20-30 min</p>
                <p>{watch('roadNo')}&nbsp;</p>

                <div className="cart-food-container">
                    {
                        context?.cart.length > 0 ? context?.cart.map(food => (
                            <div className="food">
                                <img src={require(`../../../../images${food.photo}`).default} alt="" />
                                <div className="info">
                                    <p className="title">{food.title}</p>
                                    <p className="price">${(food.price + parseFloat(`0.${food.priceFraction}`)) * food.quantity}</p>
                                </div>
                                <div className="quantity-container">
                                    <button onClick={() => handleQuantity(food.id, 'minus')}><MinusOutlined /></button>
                                    <span className="quantity">{food.quantity}</span>
                                    <button onClick={() => handleQuantity(food.id, 'plus')}><PlusOutlined /></button>
                                </div>
                            </div>
                        ))
                            : <h2>No Items</h2>
                    }
                </div>

                <div className="pricing">
                    <p className="pricing__item"><span>Subtotal - {items} items</span><span>${price.toFixed(2)}</span></p>
                    <p className="pricing__item"><span>Tax (2%)</span><span>${tax.toFixed(2)}</span></p>
                    <p className="pricing__item"><span>Delivery fee</span><span>$2.00</span></p>
                    <p className="pricing__item total"><span>Total</span><span>${total.toFixed(2)}</span></p>

                    <button onClick={() => { hideAll(); setShowPlaceOrder(true) }} disabled={Object.keys(deliveryData).length === 0}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;