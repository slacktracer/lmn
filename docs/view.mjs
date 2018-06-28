import { h } from "ijk";

import main from "./views/main.mjs";

import "./main.css";

export default (state, actions) =>
  h("nodeName", "attributes", "children")(["div", [main({ actions, state })]]);
