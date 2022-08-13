import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    const [chosenDate, setChosenDate] = useState("");

    const handleSubmit = (event) => {
        console.log("handleSubmit ran");
        event.preventDefault();
    };

    return (
        <div className="App">
            <header className="App-header">
                <Link to={`/nasa-photo`} state={{ date: chosenDate }}>
                    See into the stars
                </Link>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="YYYY-MM-DD"
                        value={chosenDate}
                        onChange={(event) => setChosenDate(event.target.value)}
                    />
                </form>
            </header>
        </div>
    );
}
