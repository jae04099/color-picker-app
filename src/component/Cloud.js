import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./cloud.css";

const Cloud = ({ cloudhex, shake, heartodefault }) => {
    const [isLiked, setIsLiked] = useState("heart");
    let likeColor = () => {
        if (isLiked == "heart") {
            setIsLiked("clicked-heart");
        } else {
            setIsLiked("heart");
        }
    };
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
                <span className="cloudhexname">{cloudhex}</span>
                <FontAwesomeIcon
                    icon={faCloud}
                    className="cloud"
                    style={{ color: `${cloudhex}` }}
                />
            </div>
        </div>
    );
};

export default Cloud;
