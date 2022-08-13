import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [chosenDate, setChosenDate] = useState("");

    const handleSubmit = (event) => {
        console.log("handleSubmit ran");
        event.preventDefault();
    };

    return (
        <div style={{ margin: "2rem", textAlign: "center" }}>
            <Link to={`/nasa-photo`} state={{ date: chosenDate }}>
                See into the stars
            </Link>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input
                        type="text"
                        name="name"
                        placeholder="YYYY-MM-DD"
                        value={chosenDate}
                        onChange={(event) => setChosenDate(event.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}
