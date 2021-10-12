import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./cloud.css";
import { ColorContext } from "../context/Colors";

const Cloud = () => {
    const {isLoading, setIsLoading, getSearch, search, cloudHex, shake, likeColor, isLiked, setColorInfo, colors, heartColor} = useContext(ColorContext);
    return (
        <div className="heart-cloud-wrap">
            <div className={`cloud-wrap ${shake ? "shake-cloud" : ""}`}>
            <div className="heart-emo" onClick={likeColor}>
                <FontAwesomeIcon
                    icon={faHeart}
                    className={heartColor}
                />
            </div>
                <span className="cloudhexname">{cloudHex}</span>
                <FontAwesomeIcon
                    icon={faCloud}
                    className="cloud"
                    style={{ color: `${cloudHex}` }}
                />
            </div>
        </div>
    );
};

export default Cloud;
