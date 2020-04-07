import React, { useState } from "react";

function App() {
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? "Active" : "Inactive";

  // two ways of writing a function to toggle state:

  // const onClick = () => setActivated(!activated);
  function onClick() {
    setActivated(!activated);
  }

  return <button onClick={onClick}>{buttonText}</button>;
}

export default App;
