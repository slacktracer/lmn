import lmn from "../../src/main.mjs";

export default (input, mode) => {
  try {
    return lmn(input, mode);
  } catch (error) {
    window.console.log(error);
    return error.message;
  }
};
