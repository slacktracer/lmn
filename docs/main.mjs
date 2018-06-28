import { app } from "hyperapp";

import actions from "./actions.mjs";
import state from "./state.mjs";
import view from "./view.mjs";

app(state, actions, view, window.document.body);
