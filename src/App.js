import React, { useState, useEffect } from "react";

import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import FlipMove from "react-flip-move";

import firebase from "firebase";
import db from "./fireabase";

import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

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
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Enter your name"));
  }, []);

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt=""
      />
      <h2>Hello It's a live chat</h2>

      <form className="app__form" onSubmit={sendMessage}>
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/*DISPLAY MESSAGES  */}
      <FlipMove>
        {messages.map(({ message, id }) => (
          <Message key={id} username={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
};

export default App;
