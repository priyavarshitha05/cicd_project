import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callApi, getSession } from './api';
import './MenuBar.css';

export default function MenuBar() {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const csr = getSession("csrid");
    const payload = csr ? JSON.stringify({ csrid: csr }) : {};

    const endpoint = csr
      ? "http://localhost:9090/menus/getmenusbyrole"
      : "http://localhost:9090/menus/getmenus";

    callApi("POST", endpoint, payload, handleMenuResponse);
  }, []);

  const handleMenuResponse = (res) => {
    try {
      const data = JSON.parse(res);
      setMenuItems(data);
    } catch (e) {
      console.error("Failed to parse menu response", e);
    }
  };

  const handleMenuClick = (menuName) => {
    if (menuName === "Add Item") {
      navigate("/add-item");
    } else if (menuName === "RecipeBook") {
      navigate("/book");
    } else if (menuName === "Profile") {
      navigate("/profile");
    } else if (menuName === "Delete Item") {
      navigate("/delete-item");
    } else if (menuName === "Reviews") {
      navigate("/reviews");
    } else if (menuName === "User Data") {
      navigate("/user-data");
    }
  };

  return (
    <div className='menubar'>
      <img src="chef.png" alt="Chef Logo" className="chef" />
      <div className="chef-word">
        Cooking So Easy, Even Your<br />
        WiFi Can’t Mess It Up
      </div>
      <div className='button-panel'>
        {menuItems.map((row, index) => (
          <button
            key={index}
            className="green-button"
            type="button"
            onClick={() => handleMenuClick(row.menu)}
          >
            {row.menu}
          </button>
        ))}
      </div>
    </div>
  );
}
