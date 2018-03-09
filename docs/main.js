// https://github.com/lukejacksonn/ijk
//
const isString = x => typeof x === 'string'
const isArray = x => Array.isArray(x)
const isObject = x => typeof x === 'object' && !isArray(x)

const clean = (a, b) => (!b ? a : isString(b[0]) ? a.concat([b]) : a.concat(b))
const child = x => f =>
  x || x === 0 ? (isArray(x) ? x.reduce(clean, []).map(f) : x + '') : []

const build = (x, y, z) => node =>
  !!node && isString(node)
    ? node
    : isObject(node[1])
      ? {
          [x]: node[0],
          [y]: node[1],
          [z]: child(node[2])(build(x, y, z)),
        }
      : build(x, y, z)([node[0], {}, node[1]])

export const h = build
//
// https://github.com/lukejacksonn/ijk


const ijk = h("nodeName", "attributes", "children");


// app(?)
//

const state = {
  input: `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`
};

const actions = {
  transform: () => state => {
    return { out: JSON.stringify(lmn(state.input), null, 2) };
  },
  setInput: value => ({ input: value })
};

const header = ({ transform }) => [
  "button",
  { class: "header" },
  [["h1", { onclick: () => transform() }, "Transform"]]
];

const input = (state, actions) => [
  "div",
  [
    [
      "textarea",
      {
        value: state.input,
        oninput: event => actions.setInput(event.target.value)
      }
    ]
  ]
];

const output = ({ out }) => ["div", [["pre", out]]];

const main = (state, actions) => [
  "div",
  [
    header(actions),
    ["div", { class: "io" }, [input(state, actions), output(state)]]
  ]
];

const view = (state, actions) => ijk(main(state, actions));

hyperapp.app(state, actions, view, document.body);

//
// app(?)
