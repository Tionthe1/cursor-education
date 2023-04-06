import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav">
        <li>
          <Link to="/main">Головна</Link>
        </li>
        <li>
          <Link to="/publications">Публікації</Link>
        </li>
        <li>
          <Link to="/photos">Фотографії</Link>
        </li>
        <li>
          <Link to="/contacts">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
