import assert from "assert";

import cases from "./cases.mjs";
import lmn from "../src/main.mjs";

cases.forEach(({ html, ijk }) => {
  assert.equal(
    JSON.stringify(ijk),
    JSON.stringify(lmn(html)),
    "Not there yet... Sorry!"
  );
});
