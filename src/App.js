import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import Cloud from "./component/Cloud";
import Loading from "./component/Loading";

//https://api.color.pizza/v1/
//data.colors[0].name

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [colorNames, setColorNames] = useState("");
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState("");
    const [cloudHex, setCloudHex] = useState("ivory");
    const [shake, setShake] = useState(false);

    useEffect(() => {
        getColorLists();
    }, []);

    const getColorLists = async () => {
        const res = await fetch(`https://api.color.pizza/v1/`);
        const data = await res.json();
        await setColorNames(data);
        setIsLoading(true);
    };

    const isColor = () => {
        let makeUpper =
            (query.search(/\s/) == -1)
                ? (query.charAt(0).toUpperCase() + query.slice(1))
                : (query
                    .split(" ")
                    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
                    .join(" "));
        for (let i = 0; i < colorNames.colors.length; i++) {
            if (colorNames.colors[i].name === makeUpper) {
                setCloudHex(colorNames.colors[i].hex);
                setShake(false);
                return;
            } else if (i === colorNames.colors.length - 1) {
                setShake(true);
                alert("search finished!");
            }
        }
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        isColor();
    };

    return (
        <>
            {!isLoading ? (
                <Loading />
            ) : (
                <div className="App">
                    <header className="App-header">
                        <div className="main-title">
                            <h1>Hey, Cloud!</h1>
                            <h3>What's your favorite color?</h3>
                        </div>
                        <div className="search-wrap">
                            <form
                                onSubmit={getSearch}
                                className="search-form"
                            >
                                <input
                                    className="search-bar"
                                    type="text"
                                    value={search}
                                    onChange={updateSearch}
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
                    </header>
                </div>
            )}
        </>
    );
};

export default App;
