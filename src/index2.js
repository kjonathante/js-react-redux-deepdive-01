import React from "react";
import ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";

// Redux:
// actionTypes
const ADD = "ADD";
// actions
const addMessage = message => {
  return {
    type: ADD,
    message: message
  };
};
// reducers
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(
  Redux.combineReducers({ messages: messageReducer })
);
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

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
    this.props.submitNewMessage(this.state.input);
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
        <ul>
          {this.props.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Change code above this line

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: message => {
      dispatch(addMessage(message));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWrapper />, rootElement);
