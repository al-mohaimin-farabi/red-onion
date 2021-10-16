import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

import Chef1 from '../../../images/Image/chef1.png';
import Chef2 from '../../../images/Image/chef2.png';
import Chef3 from '../../../images/Image/chef3.png';
import Bus from '../../../images/ICON/bus.png';
import Bell from '../../../images/ICON/bell.png';
import Truck from '../../../images/ICON/truck.png';
import './WhyChose.scss';

const WhyChose = () => {
    return (
        <div className="why-chose">
            <h2>Why you chose us</h2>
            <p className="subtitle">
                We deliver food very fast compare to other food delivery servicec <br />in your area.
                Also we have the best chef's around the city.
            </p>
            <div className="service-container">
                <div className="service-container__service">
                    <img src={Chef1} alt="background" />
                    <div className="service-bottom">
                        <img src={Bus} alt="bus" className="icon" />
                        <div className="service-info">
                            <p className="title">Fast Delivery</p>
                            <p className="description">
                                We deliver food very fast compare to other food delivery servicec in your area.
                                Clients are very satisfied with our delivery service.
                            </p>
                            <p className="link">See more <div className="icon"><ArrowRightOutlined /></div></p>
                        </div>
                    </div>

                </div>
                <div className="service-container__service">
                    <img src={Chef2} alt="background" />
                    <div className="service-bottom">
                        <img src={Bell} alt="bus" className="icon" />
                        <div className="service-info">
                            <p className="title">A Good Auto Responder</p>
                            <p className="description">
                                You can directly contact with us 24/7. We always try to respond to your
                                messages as early as possible.
                            </p>
                            <p className="link">See more <span className="icon"><ArrowRightOutlined /></span></p>
                        </div>
                    </div>

                </div>
                <div className="service-container__service">
                    <img src={Chef3} alt="background" />
                    <div className="service-bottom">
                        <img src={Truck} alt="bus" className="icon" />
                        <div className="service-info">
                            <p className="title">Home Delivery</p>
                            <p className="description">
                                Our home delivery service is best. Our riders are very professional and work with
                                responsibility. You will surely be satisfied.
                            </p>
                            <p className="link">See more <span className="icon"><ArrowRightOutlined /></span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChose;