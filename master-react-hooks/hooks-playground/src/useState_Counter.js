import React, { useState, Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     // this.setState({ count: this.state.count + 1 });
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Increase</button>
//         <h1>{this.state.count}</h1>
//       </div>
//     );
//   }
// }

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
