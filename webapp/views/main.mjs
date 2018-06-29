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
            [
              "span",
              { onclick: () => actions.changeMode(), tabindex: 0 },
              state.mode
            ],
            "  to ",
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
      {
        class: "input",
        oninput: event => actions.input(event.target.value),
        placeholder: `HTML goes here =)`
      }
    ],
    [
      "textarea",
      {
        class: "output",
        value: state.output,
        placeholder: `ijk comes out here \\o/`
      }
    ]
  ]
];
