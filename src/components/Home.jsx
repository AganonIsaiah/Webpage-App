"use client";

import { useState } from "react";
import ChatWindow from "./ChatWindow";
import messages from "@/data/messages";
import "../styles/Home.css"

export default function Home() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState(messages.clear);
  const [isSending, setIsSending] = useState(false);

  const timeChat = 600;

  const handleSendMessage = () => {
    if (input.trim() && !isSending) {
      setIsSending(true);

      setChatHistory((prev) => [...prev, { text: input, sender: "User" }]);
      const newMsg = messages[input.trim().toLowerCase()] || messages.default;

      newMsg.forEach((message, index) => {
        setTimeout(() => {
          setChatHistory((prev) => [
            ...prev,
            {
              ...message,
              timestamp: new Date(Date.now() + (index + 1) * 500),
            },
          ]);
        }, (index + 1) * timeChat);
      });

      setInput("");
      setIsSending(false);
    }
  };

  return (
    <div className="home">
      <div className="message-header">
        <div className="contact-info">To: Isaiah Aganon</div>
        <div className="message-actions">
          <span>
            <i className="fas fa-video"></i>
          </span>
          <span>
            <i className="fas fa-info-circle"></i>
          </span>
        </div>
      </div>

      <ChatWindow messages={chatHistory} />

      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Enter a text..."
        />
      </div>
    </div>
  );
}
