import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./component/Search";
import Cloud from "./component/Cloud";
import Loading from "./component/Loading"

//https://api.color.pizza/v1/
//data.colors[0].name

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [colorNames, setColorNames] = useState([]);

    useEffect(() => {
        getColorLists();
    }, []);

    const getColorLists = async () => {
        const res = await fetch(`https://api.color.pizza/v1/`);
        const data = await res.json();
        setColorNames(data);
        console.log(data)
        setIsLoading(true)
    };

    return (
        <>
        {isLoading ? <Loading /> : <div className="App">
                <header className="App-header">
                    <div className="main-title">
                        <h1>Hey, Cloud!</h1>
                        <h3>What's your favorite color?</h3>
                    </div>
                    <Search />
                    <Cloud />
                </header>
            </div>}
        </>
    );
};

export default App;
