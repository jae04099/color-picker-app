import React, { useContext } from "react";
import {ColorContext} from './context/Colors';
import "./App.css";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Cloud from "./component/Cloud";
import Loading from "./component/Loading";
import Cards from "./component/CardList";

//https://api.color.pizza/v1/
//data.colors[0].name

const App = () => {
    const {isLoading, setIsLoading, getSearch, search, cloudHex, shake, likeColor, isLiked, setColorInfo, colors} = useContext(ColorContext);
        return (
        <>
            {!isLoading ? (
                <Loading />
            ) : (
                <section className="App">
                    <header className="main-title">
                    <h1>Hey, Cloud!</h1>
                    <h3>What's your favorite color?</h3>
                    </header>
                        <div className="search-wrap">
                            <form onSubmit={getSearch} className="search-form">
                                <input
                                    className="search-bar"
                                    type="text"
                                    ref={search}
                                />
                                <button type="submit" className="search-button">
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="search"
                                    />
                                </button>
                            </form>
                        </div>
                        <Cloud />
                        <h3 className="cards-wrap-title">
                            Cloud's Favorite Color Lists!
                        </h3>
                        <div className="cards-wrap">
                            <div className="cards-container">
                            <Cards />
                        </div>
                        </div>
                </section>
            )}
            </>
    );
};

export default App;
