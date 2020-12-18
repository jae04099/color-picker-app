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
    const [search, setSearch] = useState("");
    const [cloudHex, setCloudHex] = useState("ivory");

    useEffect(() => {
        getColorLists();
    }, [cloudHex]);

    const getColorLists = async () => {
        const res = await fetch(`https://api.color.pizza/v1/`);
        const data = await res.json();
        await setColorNames(data);
        console.log(data.colors[9].name)
        setIsLoading(true);
    };

    const isColor = () => {
        for (let i = 0; i < colorNames.colors.length; i++) {
            if (colorNames.colors[i].name === search) {
                setCloudHex(colorNames.colors[i].hex);
                return alert("changed");
            }else if(i === colorNames.colors.length - 1){
                alert('search finished!')
            }
        }
    };

    const updateSearch = (e) => {
        e.preventDefault();
        isColor();
    };
    const getSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
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
                                onSubmit={updateSearch}
                                className="search-form"
                            >
                                <input
                                    className="search-bar"
                                    type="text"
                                    value={search}
                                    onChange={getSearch}
                                />
                                <button type="submit" className="search-button">
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="search"
                                    />
                                </button>
                            </form>
                        </div>
                        <Cloud cloudhex={cloudHex} />
                    </header>
                </div>
            )}
        </>
    );
};

export default App;
