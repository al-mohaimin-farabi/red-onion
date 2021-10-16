import React, { useContext } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../images/logo2.png';
import './Navbar.scss';
import { Context } from '../../Context/ContextProvider';
import useFirebase from '../../Hooks/useFirebase';

const Navbar = () => {
    const [context] = useContext(Context);

    const { logout } = useFirebase();

    const quantity = context.cart.reduce((prevQnt, cart) => prevQnt + cart.quantity, 0);
    console.log('quantity', quantity);

    return (
        <div className="nav-container">
            <nav className="nav">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="nav__logo" />
                </Link>
                <div className="nav__right">
                    <div className="nav__right__cart">
                        <ShoppingCartOutlined />
                        {context.cart.length > 0 && <span className="cart-length">{quantity}</span>}
                    </div>
                    {
                        !context.user?.email && <>
                            <NavLink to="/login" className="nav__right__login">
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="nav__right__signup">
                                Sign up
                            </NavLink>
                        </>
                    }
                    {
                        context.user?.email && <button onClick={logout} className="nav__right__signup">Log out</button>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;