import React from "react";

const TodosContext = React.createContext({
  todos: [
    // { id: 1, text: "Eat breakfast", complete: false },
    // { id: 2, text: "Eat lunch", complete: false },
    // { id: 3, text: "Eat dinner", complete: false }
  ],
  currentTodo: {}
});

export default TodosContext;
