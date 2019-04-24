import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    input: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          name="input"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
