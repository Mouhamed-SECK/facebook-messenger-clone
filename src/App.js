import React, { useState, useEffect } from "react";

import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

import Message from "./Message";
import firebase from "firebase";
import db from "./fireabase";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  const sendMessage = (e) => {
    // all the logic to send a message
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages([...messages, { username: userName, message: input }]);
    setInput("");
  };

  // get Firestore messages
  useEffect(() => {
    // Listening for any changing in our firestore and taking a snapshot
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Enter your name"));
  }, []);

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
          <Message username={userName} message={message} />
        ))}
      </form>
    </div>
  );
};

export default App;
