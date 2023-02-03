import React from "react";

const Message = ({ message, author }) => (
  <p className="author">
    <i>{author}:</i> {message}
  </p>
);

export default Message
