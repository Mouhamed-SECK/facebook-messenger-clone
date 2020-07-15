import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    // all the logic to send a message
    setMessages([...messages, input]);
  };

  return (
    <div className="App">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button>Send Message</button>
    </div>
  );
};

export default App;
