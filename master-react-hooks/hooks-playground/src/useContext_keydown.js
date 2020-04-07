import React, { useState, useEffect, Component } from "react";

function App() {
  const userText = useKeyPress("Once upon a time");
  return (
    <div>
      <h1>Your text will show up below</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
}

function useKeyPress(startingValue) {
  const [userText, setUserText] = useState(startingValue);

  function handleUserKeyPress(event) {
    const { key, keyCode } = event;
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return userText;
}

export default App;
