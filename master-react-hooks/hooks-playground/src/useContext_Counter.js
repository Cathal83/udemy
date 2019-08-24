import React, { useState, Component } from "react";

function useCounter(startingValue) {
  const [count, setCount] = useState(startingValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement
  };
}

function Display(props) {
  const { count, increment, decrement } = useCounter(props.start);

  return (
    <div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
}

function FancyDisplay(props) {
  const { count, increment, decrement } = useCounter(props.start);

  return (
    <section>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <h2>{count}</h2>
    </section>
  );
}

function App() {
  return (
    <div>
      <Display start={10} />
      <Display start={20} />
      <FancyDisplay start={30} />
    </div>
  );
}

export default App;
