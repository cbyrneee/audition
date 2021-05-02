import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./style/index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
