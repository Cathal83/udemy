import React, { useState, useEffect, Component } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("salmon");

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  function handleColorChange() {
    const nextColor = color === "salmon" ? "gold" : "salmon";
    setColor(nextColor);
  }

  useEffect(() => {
    console.log(
      `I am inside the useEffect function. The current count is ${count}`
    );
    return () => {
      console.log(`remove anything set up above. The last count was ${count}`);
    };
    // Inclusive aray. Triggers what we want to run
  }, [count]);

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleColorChange}>Change Color</button>
      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Show / Hide Counter</button>
      {visible && <Counter />}
    </div>
  );
}

export default App;
