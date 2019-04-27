import React from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../redux/actions";

const MessageList = props => (
  <ul>
    {props.messages.allIds.map(id => (
      <li key={id} onClick={() => props.deleteMessage(id)}>
        {id} - {props.messages.byIds[id].message}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
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
