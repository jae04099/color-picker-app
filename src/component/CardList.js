import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorContext } from "../context/Colors";
import "./cards.css";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
    const { isLoading, setIsLoading, getSearch, search, cloudHex, shake, likeColor, isLiked, setColorInfo, colors, removeCard } = useContext(ColorContext);
    return (
        <>
            {colors && colors.map((color, index) => {
                return <div key={index} className="card">
                    <div className="main-card-color" style={{ backgroundColor: color.hex }}></div>
                    <div className="card-desc">
                        <ul value={color.title}>
                            <li className="card-title">{color.title}</li>
                            <li className="card-code">
                                <p className="card-hex">HEX : {color.hex}</p>
                                <p className="card-rgb">RGB : {color.r}, {color.g}, {color.b}</p>
                            </li>
                        </ul>
                    <FontAwesomeIcon type="button" className="del-btn" value={color.title} onClick={removeCard} icon={faMinusCircle}></FontAwesomeIcon>
                    </div>
                </div>
            })}
        </>
    )

};

export default Cards;
