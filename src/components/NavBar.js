import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "./Home";

export default function NavBar() {
  return (
    <div className="nav-bar-button">
      <ul>
        <Link to="/" style={linkStyle}>
          Take Me Home
        </Link>
      </ul>
    </div>
  );
}
