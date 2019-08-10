//named and default import/exports
//onlu one default export from modules
import React from "react";
import BookList from "./BookList";
import "./App.css";

const App = () => {
  return (
    <div>
      <BookList />
    </div>
  );
};

export default App;
