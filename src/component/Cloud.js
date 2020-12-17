import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import './cloud.css';

const Cloud = () => {
    return (
        <div className="cloud-wrap">
            <FontAwesomeIcon icon={faCloud} className="cloud" />
        </div>
    );
};

export default Cloud;
