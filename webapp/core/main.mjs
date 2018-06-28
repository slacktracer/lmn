import lmn from "../../src/main.mjs";

export default input => {
  try {
    return lmn(input);
  } catch (error) {
    return null;
  }
};

import jsx from "jsx-transform";

window.console.log(
  jsx.fromString(
    '<li class={done && "done"} onclick={() => toggle({ value: done, id: id }) } > {value} </li>',
    {
      factory: "h"
    }
  )
);

window.console.log(
  jsx.fromString(
    `
    <div>
  <h1>Todo</h1>
  <ul>
    {state.todos.map(({ id, value, done }) => (
      <TodoItem id={id} value={value} done={done} toggle={actions.toggle} />
    ))}
  </ul>
</div>
    `,
    {
      factory: "h"
    }
  )
);
