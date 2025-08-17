import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am also h1 tag")
  ])
);

const heading = React.createElement("h1", { id: "heading" }, "Hello World! From react");

const root = ReactDOM.createRoot(document.getElementById("root"));
const container = React.createElement("div", {}, [heading, parent]);
root.render(container);
