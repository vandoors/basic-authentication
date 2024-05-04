import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Router />);
