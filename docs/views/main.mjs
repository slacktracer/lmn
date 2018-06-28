import "./main.css";

export default ({ actions, state }) => [
  "div",
  {
    class: "main"
  },
  [
    [
      "header",
      { class: "header" },
      [
        [
          "h1",
          [
            "Transform ",
            ["span", { onclick: () => actions.changeMode() }, state.mode],
            "  in ",
            [
              "a",
              {
                href: "https://github.com/lukejacksonn/ijk",
                title:
                  "Transforms arrays into virtual dom trees; a terse alternative to JSX and h"
              },
              "ijk"
            ]
          ]
        ]
      ]
    ],
    [
      "textarea",
      { class: "input", oninput: event => actions.input(event.target.value) }
    ],
    ["textarea", { class: "output", value: state.output }]
  ]
];
