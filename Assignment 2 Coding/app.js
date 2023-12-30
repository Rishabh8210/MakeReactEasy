import React from "react";
import ReactDOM from "react-dom";
const heading1 = React.createElement("h1", {
    id:"title",
}, "Hello guys im Rishabh Pandey");

const heading2 = React.createElement("h2", {
    className:"sub-title",
}, "Im a Fresher with Good skills");
const container = React.createElement("div", {
    id:"container",
},[heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);