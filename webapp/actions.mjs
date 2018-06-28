import transform from "./core/main.mjs";

export default {
  changeMode: () => state => ({ mode: state.mode === "HTML" ? "JSX" : "HTML" }),
  input: text => state => {
    const transformed = transform(text, state.mode);

    let output;

    if (transformed != null) {
      output = JSON.stringify(transformed, null, 2);
    } else {
      output = "Invalid input.";
    }

    return { input: text, output };
  }
};
