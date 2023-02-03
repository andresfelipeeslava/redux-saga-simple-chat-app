import React from "react";
import Message from "./Message";

const MessageList = ({ messages }) => (
  <section className="message-list">
    <ul>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

export default MessageList;
