import React from "react";
import "./loading.css";

const Loading = () => {
    return (
       
            <div className="loading-wrap">
                <span className="loader">
                    <span className="loader-inner"></span>
                </span>
                <span className="mention">Brewing Colors:-)</span>
            </div>
    );
};

export default Loading;
