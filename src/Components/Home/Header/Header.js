import React from 'react';

import Background from '../../../images/bannerbackground.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={Background} alt="background image" />
            <div className="header__content">
                <h1>Best food waiting for your belly</h1>
                <div className="header__content__search">
                    <input type="text" placeholder="Search food items" />
                    <button>Search</button>
                </div>
            </div>
        </header>
    );
};

export default Header;