import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";

const Message = ({ message, username }) => {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h1" component="h2">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
