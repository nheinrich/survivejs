import "./main.css";

import React from "react";
import "array.prototype.findindex"

import App from "./components/App.jsx"

main();

function main() {
  const app = document.createElement("div");
  document.body.appendChild(app);
  React.render(<App />, app)
}
