import React, {
  useState,
  useEffect,
  useContext,
  Component,
  createContext
} from "react";

const NameContext = createContext();

function App() {
  const [name, setName] = useState("Yoshi");
  return (
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  );
}

function Child() {
  return (
    <section className="child">
      <Grandchild />
    </section>
  );
}

function Grandchild() {
  return (
    <section className="grandchild">
      <Button />
    </section>
  );
}

function Button() {
  const name = useContext(NameContext);
  return <button>{name}</button>;
}

export default App;
