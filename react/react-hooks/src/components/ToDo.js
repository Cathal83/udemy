import React, { useState, useEffect, useReducer, useRef } from "react";
import { useFormInput } from "../hooks/forms";

import List from "./List";

const Todo = props => {
  const [todoName, setTodoName] = useState("");
  //   const [submittedTodo, setSubmittedTodo] = useState(null);
  //   const [todoList, setToDoList] = useState([]);
  const todoInputRef = useRef();
  const todoInput = useFormInput();

  //   const inputChangeHandler = event => {
  //     setTodoName(event.target.value);
  //   };

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.concat(action.payload);
      case "SET":
        return action.payload;
      case "REMOVE":
        return state.fiter(todo => todo.id !== action.payload.id);
      default:
        return state;
    }
  };

  useEffect(() => {
    axios.get("urltoFirebase").then(result => {
      console.log(result);
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({ id: key, name: todoData[key].name });
      }
      dispatch({ type: "SET", payload: todos });
    });
    return () => {
      console.log("[Cleanup]");
    };
  }, [todoName]);

  const mouseMoveHandler = event => {
    console.log(event.clientX, event.clientY);
  };

  const [todoList, dispatch] = useReducer(todoListReducer, []);

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  //   useEffect(() => {
  //     if (submittedTodo) {
  //       dispatch({ type: "ADD", payload: submittedTodo });
  //     }
  //   }, [submittedTodo]);

  const todoAddHandler = () => {
    //     setToDoList(todoList.concat(todoName));

    const todoName = todoInputRef.current.value;
    axios
      .post("urltoFirebase", { name: todoName })
      .then(res => {
        setTimeout(() => {
          const todoItem = { id: res.data.name, name: todoName };
          dispatch({ type: "ADD", payload: todoItem });
        }, 3000);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const todoRemoveHandler = todoId => {
    dispatch({ type: "REMOVE", payload: todoId });
  };
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={todoInput.onChange}
        value={todoInput.value}
      />
      <button type="Button" onClick={todoAddHandler}>
        Add
      </button>
      <List items={todoList} onClick={todoRemoveHandler} />
    </React.Fragment>
  );
};

export default Todo;
