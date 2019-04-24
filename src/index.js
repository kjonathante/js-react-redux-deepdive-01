import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h2>Type in a new Message:</h2>
      <input />
      <br />
      <button>Submit</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
