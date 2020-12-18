import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import './cloud.css';

const Cloud = ({cloudhex}) => {
    return (
        <div className="cloud-wrap">
            <span className="cloudhexname">{cloudhex}</span>
            <FontAwesomeIcon icon={faCloud} className="cloud" style={{color:`${cloudhex}`}} />
        </div>
    );
};

export default Cloud;
