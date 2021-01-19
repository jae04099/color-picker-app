import React from "react";
import "./cards.css";

const Cards = ({ cardTitle, cardHex, cardR, cardG, cardB }) => {
    return (
        <>
            <li className="card">
                <div className="main-card-color"></div>
                <div className="card-desc">
                    <ul>
                        <li className="card-title">Midnightblue</li>
                        <li className="card-code">
                            <p className="card-hex">HEX : #545d7a</p>
                            <p className="card-rgb">RGB : 255, 255, 255</p>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
};

export default Cards;
