import React from "react";
import { connect } from "react-redux";

const MessageList = props => (
  <ul>
    {props.messages.map((message, index) => (
      <li key={index}>{message}</li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  null
)(MessageList);
