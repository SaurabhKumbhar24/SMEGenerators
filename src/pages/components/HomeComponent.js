import React from 'react';

import IconLogo from '../../assets/icon.png';
import BgImg from '../../assets/bg.png';
import "../../styles/home.css";

function HomeComponent(props) {
    return (
        <div ref={props.reference}
        style={{
            backgroundImage: `url(${BgImg})`,
            width: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
            <div className="backgroundTransparent">
                <div
                className="backgroundTransparent pd-top-bottom"
                >
                <div className="backgroundTransparent">
                    <div className="divCenter backgroundTransparent">
                    <div className="backgroundTransparent">
                        <div className="divCenter backgroundTransparent">
                        <img
                            src={IconLogo}
                            className="iconHome"
                            height="auto"
                            alt="logo"
                        />
                        </div>
                        <div className="divCenter backgroundTransparent">
                        
                        </div>
                        <div className="divCenter backgroundTransparent">
                        <div className="backgroundTransparent">
                            <h1 className="mFont HomeTxtHead keywords">SME Generators</h1>
                            <h1 style={{display:'none'}} className="keywords">Diesel Generators | Wholesaler | Trader</h1>
                            <h2 className="mFont HomeTxtHead keywords">Sales | Service | Hire</h2>
                            <div className="divCenter backgroundTransparent">
                            <a type="button" href="/#contact" style={{textDecoration:"none"}} className="mFont workBtn">Contact Us</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;