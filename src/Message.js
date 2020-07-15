import React from "react";

const Message = ({ text }) => {
  console.log(text);
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Message;
