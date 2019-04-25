import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../redux/actions";

class AddMessage extends React.Component {
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
    // console.log("inside render", this.props.messages);
    return (
      <>
        <div>
          <input
            name="input"
            value={this.state.input}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return state;
// };

const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: message => {
      dispatch(addMessage(message));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMessage);
