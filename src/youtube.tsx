"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Youtube } from "./components/Youtube";

const tableContainer = document.querySelector("div#youtube_container");
ReactDOM.render(<Youtube />, tableContainer);
