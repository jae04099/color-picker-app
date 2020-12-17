import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

const Search = () => {
    return (
        <div className="search-wrap">
            <form className="search-form">
                <input className="search-bar" type="text" />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} className="search" />
                </button>
            </form>
        </div>
    );
};

export default Search;
