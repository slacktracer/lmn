import assert from "assert";
import expected from "./expected";
import domString from "./domString";
import lmn from "../src/main";

const result = lmn(domString);

const resultStringified = JSON.stringify(result);

assert.equal(resultStringified, expected, "Not there yet... Sorry!");
