import React, { useEffect, useState } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'));
        if (localCart) setCart(localCart)
        else setCart([]);
    }, [])

    return [cart, setCart];
};

export default useCart;