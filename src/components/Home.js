import React, { useState } from "react";
import { Link } from "react-router-dom";

//import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//mport { borderRadius } from "polished";

export const linkStyle = {
  fontSize: "16px",
  fontWeight: "500",
  padding: "5px 10px 5px 10px",
  borderRadius: "5px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

export default function Home() {
  const [chosenDate, setChosenDate] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Submit-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="YYYY-MM-DD"
              value={chosenDate}
              onChange={(event) => setChosenDate(event.target.value)}
            />
          </form>
          <div className="Submit-button">
            <Link
              to={`/nasa-photo`}
              state={{ date: chosenDate }}
              style={linkStyle}
            >
              See into the stars
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
