import React from "react";
import AddMessage from "./components/AddMessage";
import MessageList from "./components/MessageList";
export default function TodoApp() {
  return (
    <div>
      <h2>Type in a new Message:</h2>
      <AddMessage />
      <MessageList />
    </div>
  );
}
