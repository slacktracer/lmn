import assert from "assert";
import lmn from "../src/main";

const domString = `
<form>
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
</form>
`;

const reference = [
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
            ariaDescribedby: "emailHelp",
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
];

const expected = JSON.stringify(reference);
const result = lmn(domString);
const resultStringified = JSON.stringify(result);

assert.equal(resultStringified, expected, "Not there yet... Sorry!");
