"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./components/Application";

import "bulma/css/bulma.min.css";
import "react-datepicker/dist/react-datepicker.css";

import "./style/index.less";

ReactDOM.render(<Application/>, document.getElementById("application"));