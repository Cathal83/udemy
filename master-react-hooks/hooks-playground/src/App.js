import React, { useState, Component } from "react";

function useInput() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange
  };
}

function App() {
  // const { value: name, onChange: handleNameChange } = useInput();
  // const { value: surname, onChange: handleSurnameChange } = useInput();
  // const { value: age, onChange: handleAgeChange } = useInput();

  return (
    <form>
      {/* <input
        type="text"
        name=""
        id=""
        placeholder="name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="last name"
        value={surname}
        onChange={handleSurnameChange}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="age"
        value={age}
        onChange={handleAgeChange}
      /> */}
      <input type="text" name="" id="" placeholder="name" {...useInput()} />
      <input
        type="text"
        name=""
        id=""
        placeholder="last name"
        {...useInput()}
      />

      <input type="number" name="" id="" placeholder="age" {...useInput()} />
    </form>
  );
}

export default App;
