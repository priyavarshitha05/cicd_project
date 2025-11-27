import React, { useState, useRef, useEffect } from 'react';
import './ChatBotPopup.css';

export default function ChatBotPopup({ onClose }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! Ask me anything about foot recipes.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const generateBotResponse = (userText) => {
    const lower = userText.toLowerCase();

    if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
      return "Hi there! I'm your foot recipe assistant. How can I help you today?";
    }

    if (lower.includes("recipe") || lower.includes("show recipe") || lower.includes("view recipe")) {
      return "You can explore recipes in the 'RecipeBook' section. Click it to browse foot recipes.";
    }

    if (lower.includes("add") || lower.includes("create") || lower.includes("submit")) {
      return "You can add a new recipe by clicking on the 'Add Item' button in the menu.";
    }

    if (lower.includes("profile") || lower.includes("account") || lower.includes("user")) {
      return "Click on 'Profile' to view or update your details.";
    }

    if (lower.includes("delete") || lower.includes("remove") || lower.includes("erase")) {
      return "To delete a recipe, go to the 'Delete Item' section and select the item you want to remove.";
    }

    if (lower.includes("how to cook") || lower.includes("steps") || lower.includes("instructions")) {
      return "Each recipe in the RecipeBook includes step-by-step instructions to help you cook easily.";
    }

    if (lower.includes("help") || lower.includes("how to use") || lower.includes("confused")) {
      return "You can use the menu to add, view, or delete recipes. Let me know if you're stuck anywhere!";
    }

    if (lower.includes("ingredients") || lower.includes("what do i need") || lower.includes("list")) {
      return "Each recipe includes a detailed list of ingredients—check out RecipeBook to see them.";
    }

    if (lower.includes("time") || lower.includes("cook time") || lower.includes("prep time")) {
      return "Recipes also show estimated preparation and cooking times. You'll find this in each recipe card.";
    }

    if (lower.includes("recommend") || lower.includes("suggest") || lower.includes("what to cook")) {
      return "Try browsing the RecipeBook! You’ll find a variety of foot recipes for every occasion.";
    }

    if (lower.includes("thanks") || lower.includes("thank you")) {
      return "You're welcome! Happy cooking 😊";
    }

    return "I'm not sure I understand. Try asking about recipes, profile, or adding items.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const botReply = {
      from: 'bot',
      text: generateBotResponse(input) + ' Thank you for using the bot!'
    };

    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-popup">
      <div className="chatbot-header">
        <h4>Foot Recipe Chatbot</h4>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <div className="chatbot-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-footer">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
