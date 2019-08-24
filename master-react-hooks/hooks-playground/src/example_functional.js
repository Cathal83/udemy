import React from "react";

function Box({ text, subtitle }) {
  return (
    <div>
      <h1>This is a stateless functional component</h1>
      <p>{text}</p>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  return <Box text={"Hi, Yoshi"} subtitle={"I love react"} />;
}

export default App;
