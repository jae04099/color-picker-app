import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import PageTitle from "./component/PageTitle";
import Cloud from "./component/Cloud";
import Loading from "./component/Loading";
import Cards from "./component/Cards";

//https://api.color.pizza/v1/
//data.colors[0].name

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [colorNames, setColorNames] = useState("");
    // const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [cloudHex, setCloudHex] = useState("ivory");
    const [shake, setShake] = useState(false);
    // const [clicked, setClicked] = useState(false);

    const search = useRef("");

    useEffect(() => {
        getColorLists();
    }, []);

    useEffect(() => {
        console.log("useEffect: ", query);
        if(colorNames != ""){
            isColor();
        }
    }, [query]);

    const getColorLists = async () => {
        const res = await fetch(`https://api.color.pizza/v1/`);
        const data = await res.json();
        setColorNames(data);
        setIsLoading(true);
    };

    const isColor = () => {
        let makeUpper =
            query.search(/\s/) == -1
                ? query.charAt(0).toUpperCase() + query.slice(1)
                : query
                      .split(" ")
                      .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
                      .join(" ");

        for (let i = 0; i < colorNames.colors.length; i++) {
            if (colorNames.colors[i].name == makeUpper) {
                setCloudHex(colorNames.colors[i].hex);
                setShake(false);
                return;
            } else if (i == colorNames.colors.length - 1) {
                setShake(true);
                setTimeout(() => {
                    setShake(false);
                }, 200);
                return;
            }
        }
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search.current.value);
        console.log(query);
    };

    return (
        <>
            {!isLoading ? (
                <Loading />
            ) : (
                <div className="App">
                    <div className="app-wrap">
                        <PageTitle />
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
                        <Cloud cloudhex={cloudHex} shake={shake} />
                        <Cards />
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
