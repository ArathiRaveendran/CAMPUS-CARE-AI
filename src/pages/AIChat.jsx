import { useState } from "react";
import "./AIChat.css";

function AIChat({ setPage }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! 👋 I'm Campus Care AI. How can I assist you today?",
    },
  ]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages([
      ...messages,
      {
        type: "user",
        text: message,
      },
      {
        type: "ai",
        text: "Thanks for your message! Our AI assistant will process your request.",
      },
    ]);

    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-page">
        <button
  type="button"
  className="back-dashboard-button"
  onClick={() => setPage("dashboard")}
>
  ← Back to Dashboard
</button>

      <div className="chat-header">
        <div className="chat-logo">🤖</div>

        <div>
          <h1>Campus Care AI</h1>
          <p>How can I help you today?</p>
        </div>
      </div>

      <div className="chat-box">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.type === "user" ? "user-message" : "ai-message"}
          >
            <div className="message-icon">
              {msg.type === "user" ? "👤" : "🤖"}
            </div>

            <div>{msg.text}</div>
          </div>
        ))}

        <div className="suggestions">
          <button
            onClick={() => setMessage("How do I submit a complaint?")}
          >
            How do I submit a complaint?
          </button>

          <button
            onClick={() => setMessage("Where can I get student support?")}
          >
            Where can I get student support?
          </button>

          <button
            onClick={() => setMessage("How can I track my request?")}
          >
            How can I track my request?
          </button>
        </div>

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={sendMessage}>
          ➤
        </button>

      </div>

    </div>
  );
}

export default AIChat;