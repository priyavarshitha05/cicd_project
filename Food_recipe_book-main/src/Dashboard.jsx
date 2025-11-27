// src/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { callApi, getSession, setSession } from './api';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';
import ChatBotPopup from './ChatBotPopup';

export default function Dashboard() {
  const [fullname, setFullname] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const csr = getSession("csrid");
    const data = JSON.stringify({ csrid: csr });
    callApi("POST", "http://localhost:9090/users/getfullname", data, setFullname);
  }, []);

  const logout = () => {
    setSession("csrid", "");
    navigate("/");
  };

  const toggleChatbot = () => {
    setShowChatbot(prev => !prev);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <img className="logo" src="/sizzlyG.png" alt="Logo" />
        <div className="logotext"><span>SIZZLY</span></div>
        <img className="logout" src="/logout.png" alt="Logout" onClick={logout} />
        <label>{fullname}</label>
      </div>

      <div className="menu">
        <MenuBar />
      </div>

      <div className="footer">
        <div className="footertext"></div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className="socialmediaicons" src="/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img className="socialmediaicons" src="/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img className="socialmediaicons" src="/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img className="socialmediaicons" src="/youtube.png" alt="YouTube" />
        </a>
        <img
          className="socialmediaicons"
          src="/chatbot.png"
          alt="Chatbot"
          onClick={toggleChatbot}
          style={{ cursor: 'pointer' }}
        />
        {showChatbot && <ChatBotPopup onClose={toggleChatbot} />}
      </div>
    </div>
  );
}
