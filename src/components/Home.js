import React, { useState } from "react";
import { Link } from "react-router-dom";

//import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//mport { borderRadius } from "polished";

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export const linkStyle = {
    fontSize: "16px",
    fontWeight: "500",
    padding: "5px 10px 5px 10px",
    borderRadius: "5px",
    background: "black",
    textDecoration: "none",
    color: "white",
    margin: "10px",
};

export default function Home() {
    const [chosenDate, setChosenDate] = useState("");

    const handleSubmit = (event) => {
        console.log("handleSubmit ran");
        event.preventDefault();
    };

    let randomYear = Math.floor(randomNumber(1999, 2022)).toString();
    let randomMonth = Math.floor(randomNumber(1, 12)).toString();
    let randomDay = Math.floor(randomNumber(1, 29)).toString();

    let randomDate = randomYear + "-" + randomMonth + "-" + randomDay;
    console.log(randomDate);

    return (
        <div className="App">
            <header className="App-header">
                <div className="Submit-container">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="pls"
                            type="date"
                            name="name"
                            placeholder="YYYY-MM-DD"
                            value={chosenDate}
                            onChange={(event) =>
                                setChosenDate(event.target.value)
                            }
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
                        <Link
                            to={`/nasa-photo`}
                            state={{ date: randomDate }}
                            style={linkStyle}
                        >
                            Random APOD
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}
