"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { EnhancedTable } from "./components/EnhancedTable";

const tableContainer = document.querySelector("div#table_container");
ReactDOM.render(<EnhancedTable />, tableContainer);
