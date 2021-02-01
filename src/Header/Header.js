import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header maxScreenSize">
            <div className="backgroundToWhite"></div>
            <div className="box">
                    <div className="title">
                        <span className="block"></span>
                        <h1>María Román<span></span></h1>
                    </div>
                    <div className="role">
                        <div className="block"></div>
                        <p>Software developer || Graphic designer</p>
                    </div>
                    <div id='displayAnimation'></div>
                </div>
        </div>
    )
}

export default Header;