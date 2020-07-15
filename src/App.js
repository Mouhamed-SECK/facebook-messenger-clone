import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";

import "./App.css";
const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUser] = useState([]);

  const sendMessage = (e) => {
    // all the logic to send a message
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <form onSubmit={sendMessage}>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send Message
          </Button>
        </FormControl>

        {/*DISPLAY MESSAGES  */}
        {messages.map((message) => (
          <Message text={message} />
        ))}
      </form>
    </div>
  );
};

export default App;
