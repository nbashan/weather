import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import { Countries } from "./Countries";
import { GetWeather } from "./getWeather";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Countries />);
