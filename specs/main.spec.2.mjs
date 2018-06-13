import assert from "assert";
import lmn from "../src/main";

const domString = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
`;

const reference = [
  "nav",
  {
    class: "navbar navbar-expand-lg navbar-light bg-light"
  },
  [
    [
      "a",
      {
        class: "navbar-brand",
        href: "#"
      },
      "Navbar"
    ],
    [
      "button",
      {
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        class: "navbar-toggler",
        "data-target": "#navbarSupportedContent",
        "data-toggle": "collapse",
        type: "button"
      },
      [
        [
          "span",
          {
            class: "navbar-toggler-icon"
          }
        ]
      ]
    ],
    [
      "div",
      {
        class: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      },
      [
        [
          "ul",
          {
            class: "navbar-nav mr-auto"
          },
          [
            [
              "li",
              {
                class: "nav-item active"
              },
              [
                [
                  "a",
                  {
                    class: "nav-link",
                    href: "#"
                  },
                  [
                    "Home ",
                    [
                      "span",
                      {
                        class: "sr-only"
                      },
                      "(current)"
                    ]
                  ]
                ]
              ]
            ],
            [
              "li",
              {
                class: "nav-item"
              },
              [
                [
                  "a",
                  {
                    class: "nav-link",
                    href: "#"
                  },
                  "Link"
                ]
              ]
            ],
            [
              "li",
              {
                class: "nav-item dropdown"
              },
              [
                [
                  "a",
                  {
                    "aria-expanded": "false",
                    "aria-haspopup": "true",
                    class: "nav-link dropdown-toggle",
                    "data-toggle": "dropdown",
                    href: "#",
                    id: "navbarDropdown",
                    role: "button"
                  },
                  "Dropdown"
                ],
                [
                  "div",
                  {
                    "aria-labelledby": "navbarDropdown",
                    class: "dropdown-menu"
                  },
                  [
                    [
                      "a",
                      {
                        class: "dropdown-item",
                        href: "#"
                      },
                      "Action"
                    ],
                    [
                      "a",
                      {
                        class: "dropdown-item",
                        href: "#"
                      },
                      "Another action"
                    ],
                    [
                      "div",
                      {
                        class: "dropdown-divider"
                      }
                    ],
                    [
                      "a",
                      {
                        class: "dropdown-item",
                        href: "#"
                      },
                      "Something else here"
                    ]
                  ]
                ]
              ]
            ],
            [
              "li",
              {
                class: "nav-item"
              },
              [
                [
                  "a",
                  {
                    class: "nav-link disabled",
                    href: "#"
                  },
                  "Disabled"
                ]
              ]
            ]
          ]
        ],
        [
          "form",
          {
            class: "form-inline my-2 my-lg-0"
          },
          [
            [
              "input",
              {
                "aria-label": "Search",
                class: "form-control mr-sm-2",
                placeholder: "Search",
                type: "search"
              }
            ],
            [
              "button",
              {
                class: "btn btn-outline-success my-2 my-sm-0",
                type: "submit"
              },
              "Search"
            ]
          ]
        ]
      ]
    ]
  ]
];

const expected = JSON.stringify(reference);
const result = lmn(domString);
const resultStringified = JSON.stringify(result);

assert.equal(resultStringified, expected, "Not there yet... Sorry!");
