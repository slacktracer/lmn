const cases = [
  {
    html: `<div class="mdc-select" role="listbox">
  <div class="mdc-select__surface" tabindex="0">
    <div class="mdc-select__label">Pick a Food Group</div>
    <div class="mdc-select__selected-text"></div>
    <div class="mdc-select__bottom-line"></div>
  </div>
  <div class="mdc-menu mdc-select__menu">
    <ul class="mdc-list mdc-menu__items">
      <li class="mdc-list-item" role="option" tabindex="0">
        Bread, Cereal, Rice, and Pasta
      </li>
      <li class="mdc-list-item" role="option" tabindex="0">
        Vegetables
      </li>
      <li class="mdc-list-item" role="option" tabindex="0">
        Fruit
      </li>
      <li class="mdc-list-item" role="option" tabindex="0">
        Milk, Yogurt, and Cheese
      </li>
      <li class="mdc-list-item" role="option" tabindex="0">
        Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
      </li>
      <li class="mdc-list-item" role="option" tabindex="0">
        Fats, Oils, and Sweets
      </li>
    </ul>
  </div>
</div>`,
    ijk: [
      "div",
      {
        class: "mdc-select",
        role: "listbox"
      },
      [
        [
          "div",
          {
            class: "mdc-select__surface",
            tabindex: "0"
          },
          [
            [
              "div",
              {
                class: "mdc-select__label"
              },
              "Pick a Food Group"
            ],
            [
              "div",
              {
                class: "mdc-select__selected-text"
              }
            ],
            [
              "div",
              {
                class: "mdc-select__bottom-line"
              }
            ]
          ]
        ],
        [
          "div",
          {
            class: "mdc-menu mdc-select__menu"
          },
          [
            [
              "ul",
              {
                class: "mdc-list mdc-menu__items"
              },
              [
                [
                  "li",
                  {
                    class: "mdc-list-item",
                    role: "option",
                    tabindex: "0"
                  },
                  "Bread, Cereal, Rice, and Pasta"
                ],
                [
                  "li",
                  {
                    class: "mdc-list-item",
                    role: "option",
                    tabindex: "0"
                  },
                  "Vegetables"
                ],
                [
                  "li",
                  {
                    class: "mdc-list-item",
                    role: "option",
                    tabindex: "0"
                  },
                  "Fruit"
                ],
                [
                  "li",
                  {
                    class: "mdc-list-item",
                    role: "option",
                    tabindex: "0"
                  },
                  "Milk, Yogurt, and Cheese"
                ],
                [
                  "li",
                  {
                    class: "mdc-list-item",
                    role: "option",
                    tabindex: "0"
                  },
                  "Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts"
                ],
                [
                  "li",
                  {
                    class: "mdc-list-item",
                    role: "option",
                    tabindex: "0"
                  },
                  "Fats, Oils, and Sweets"
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  },
  {
    html: `<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out, <i>how cool is it?</i></label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`,
    ijk: [
      "form",
      [
        [
          "div",
          {
            class: "form-group"
          },
          [
            [
              "label",
              {
                for: "exampleInputEmail1"
              },
              "Email address"
            ],
            [
              "input",
              {
                "aria-describedby": "emailHelp",
                class: "form-control",
                id: "exampleInputEmail1",
                placeholder: "Enter email",
                type: "email"
              }
            ],
            [
              "small",
              {
                class: "form-text text-muted",
                id: "emailHelp"
              },
              "We'll never share your email with anyone else."
            ]
          ]
        ],
        [
          "div",
          {
            class: "form-group"
          },
          [
            [
              "label",
              {
                for: "exampleInputPassword1"
              },
              "Password"
            ],
            [
              "input",
              {
                class: "form-control",
                id: "exampleInputPassword1",
                placeholder: "Password",
                type: "password"
              }
            ]
          ]
        ],
        [
          "div",
          {
            class: "form-check"
          },
          [
            [
              "input",
              {
                class: "form-check-input",
                id: "exampleCheck1",
                type: "checkbox"
              }
            ],
            [
              "label",
              {
                class: "form-check-label",
                for: "exampleCheck1"
              },
              ["Check me out, ", ["i", "how cool is it?"]]
            ]
          ]
        ],
        [
          "button",
          {
            class: "btn btn-primary",
            type: "submit"
          },
          "Submit"
        ]
      ]
    ]
  },
  {
    html: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
</nav>`,
    ijk: [
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
    ]
  }
];

export default cases;
