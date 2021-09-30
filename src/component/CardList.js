import React, {useContext} from "react";
import { ColorContext } from "../context/Colors";
import "./cards.css";

const Cards = () => {
    const {isLoading, setIsLoading, getSearch, search, cloudHex, shake, likeColor, isLiked, setColorInfo, colors} = useContext(ColorContext);
    return (
        <>
        {colors && colors.map((color, index) => {
             return <div key="index" className="card">
                <div className="main-card-color" style={{backgroundColor: color.hex}}></div>
                <div className="card-desc">
                    <ul>
                        <li className="card-title">{color.title}</li>
                        <li className="card-code">
                            <p className="card-hex">HEX : {color.hex}</p>
                            <p className="card-rgb">RGB : {color.r}, {color.g}, {color.b}</p>
                        </li>
                    </ul>
                </div>
            </div>
        })}
        </>
    )
    
};

export default Cards;
