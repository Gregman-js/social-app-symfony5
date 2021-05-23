import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Dropdown from "bootstrap/js/dist/dropdown";
import '../css/app.scss';
import Home from "./components/Home";

ReactDOM.render(<Router><Home/></Router>, document.getElementById('root'));
