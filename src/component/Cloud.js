import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./cloud.css";
import { ColorContext } from "../context/Colors";

const Cloud = () => {
    const {isLoading, setIsLoading, getSearch, search, cloudHex, shake, likeColor, isLiked} = useContext(ColorContext);
    return (
        <div className="heart-cloud-wrap">
            <div className="heart-emo">
                <FontAwesomeIcon
                    icon={faHeart}
                    onClick={likeColor}
                    className={isLiked}
                />
            </div>
            <div className={`cloud-wrap ${shake ? "shake-cloud" : ""}`}>
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
