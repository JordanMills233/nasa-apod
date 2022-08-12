import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/nasa-photo">See into the stars</Link>
        </div>
    );
}
