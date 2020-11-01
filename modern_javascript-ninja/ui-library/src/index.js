import Tooltip from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";
import Snackbar from "./ninja-ui/snackbar";

import "./ninja-ui/styles/tooltip.css";
import "./ninja-ui/styles/dropdown.css";
import "./ninja-ui/styles/tabs.css";
import "./ninja-ui/styles/snackbar.css";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// create Dropdowns
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create snackbar
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("You clicked me :)");
});
