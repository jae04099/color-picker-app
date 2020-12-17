import React from "react";
import "./App.css";
import Search from "./component/Search";
import Cloud from "./component/Cloud";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="main-title">
                    <h1>Hey, Cloud!</h1>
                    <h3>What's your favorite color?</h3>
                </div>
                <Search />
                <Cloud />
            </header>
        </div>
    );
}

export default App;
