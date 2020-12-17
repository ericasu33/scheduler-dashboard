import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.scss";

import Dashboard from "components/Dashboard";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));
