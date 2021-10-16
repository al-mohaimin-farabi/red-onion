import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [context, setContext] = useState({ user: null, cart: [] })

    // useEffect(() => {
    //     const localCart = JSON.parse(localStorage.getItem('cart'));
    //     if (localCart) setContext({
    //         ...context,
    //         cart: localCart
    //     })
    // }, [])

    return (
        <Context.Provider value={[context, setContext]}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;