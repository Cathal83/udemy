import React, { useState, Component } from "react";

function App() {
  // const [state, setState] = useState({
  //   city: "",
  //   country: ""
  // });

  // function handleCityChange(event) {
  //   setState({
  //     ...state,
  //     city: event.target.value
  //   });
  // }

  // function handleCountryChange(event) {
  //   setState({
  //     ...state,
  //     country: event.target.value
  //   });
  // }

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCityChange = event => setCity(event.target.value);
  const handleCountryChange = event => setCountry(event.target.value);

  return (
    <form>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="city"
          value={city}
          onChange={handleCityChange}
        />
      </div>

      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div>You live in {`${city}, ${country}`}</div>
    </form>
  );
}

export default App;
