import React from "react";
import "./cards.css";

const Cards = () => {
    return (
        <>
            <h3 className="cards-wrap-title">Cloud's Favorite Color Lists!</h3>
            <div className="cards-container">
                <ul>
                    <li className="card">
                        <div className="main-card-color"></div>
                        <div className="card-desc">
                            <ul>
                                <li className="card-title">Midnightblue</li>
                                <li className="card-code">
                                    <p className="card-hex">HEX : #545d7a</p>
                                    <p className="card-rgb">
                                        RGB : 255, 255, 255
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card">
                        <div className="main-card-color"></div>
                        <div className="card-desc">
                            <ul>
                                <li className="card-title">Midnightblue</li>
                                <li className="card-code">
                                    <p className="card-hex">HEX : #545d7a</p>
                                    <p className="card-rgb">
                                        RGB : 255, 255, 255
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card">
                        <div className="main-card-color"></div>
                        <div className="card-desc">
                            <ul>
                                <li className="card-title">Midnightblue</li>
                                <li className="card-code">
                                    <p className="card-hex">HEX : #545d7a</p>
                                    <p className="card-rgb">
                                        RGB : 255, 255, 255
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card">
                        <div className="main-card-color"></div>
                        <div className="card-desc">
                            <ul>
                                <li className="card-title">Midnightblue</li>
                                <li className="card-code">
                                    <p className="card-hex">HEX : #545d7a</p>
                                    <p className="card-rgb">
                                        RGB : 255, 255, 255
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Cards;
