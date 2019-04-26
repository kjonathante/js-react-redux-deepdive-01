import React from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../redux/actions";

const MessageList = props => (
  <ul>
    {props.messages.map((message, index) => (
      <li key={index} onClick={() => props.deleteMessage(index)}>
        {message}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage: id => {
      dispatch(deleteMessage(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
