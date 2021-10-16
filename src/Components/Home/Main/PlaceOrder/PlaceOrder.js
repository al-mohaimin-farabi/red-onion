import React from 'react';

import Map from '../../../../images/map.png';
import Rider from '../../../../images/Image/rider.png';
import Helmet from '../../../../images/Image/helmet.png';
import './PlaceOrder.scss';
import { ArrowLeftOutlined } from '@ant-design/icons';

const PlaceOrder = ({ hideAll, setShowChekout, data }) => {

    const nowHour = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
    const nowMinute = new Date().getMinutes();
    let deliveryTime;
    if (nowMinute < 30) deliveryTime = `${nowHour < 10 && '0'}${nowHour}:${nowMinute + 30}`
    else if (nowMinute >= 30) deliveryTime = `${nowHour < 10 && '0'}${nowHour + 1}:${nowMinute - 30 < 10 && '0'}${nowMinute - 30}`

    return (
        <div className="place-order">
            <div onClick={() => { hideAll(); setShowChekout(true) }} className="back-btn">
                <ArrowLeftOutlined />
            </div>
            <div className="map-img">
                <img src={Map} alt="map" />
            </div>
            <div className="place-order__right">
                <div className="rider-img" >
                    <img src={Rider} alt="Rider" />
                </div>
                <div className="location">
                    <p className="location__title">Your Location</p>
                    <p className="location__location">{data?.roadNo}</p>
                    <br />
                    <p className="location__title">Shop Address</p>
                    <p className="location__location">Gulshan Plaza Restaura GPR</p>
                </div>
                <div className="time">{deliveryTime}</div>
                <p className="time-subtitle">Estimated delivery time</p>
                <div className="rider">
                    <img src={Helmet} alt="Helmet" />
                    <div>
                        <p className="rider__name">Hamim</p>
                        <p className="rider__subtitle">Your rider</p>
                    </div>
                </div>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default PlaceOrder;