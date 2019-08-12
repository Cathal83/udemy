import React from "react";
import uuid from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
        </div>
        <div className="row">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
