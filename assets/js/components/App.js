import {BrowserRouter as Router} from "react-router-dom";
import Home from "./Home";
import React, {useState} from "react";
import Login from "./Login";

function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <Router>
            <Home/>
        </Router>
    );
}

export default App;
