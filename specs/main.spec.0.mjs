import assert from "assert";
import lmn from "../src/main";

const domString = `
<div class="mdc-select" role="listbox">
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
</div>
`;

const reference = [
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
];

const expected = JSON.stringify(reference);
const result = lmn(domString);
const resultStringified = JSON.stringify(result);

assert.equal(resultStringified, expected, "Not there yet... Sorry!");
