import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<NasaPhoto />} path="/nasa-photo" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
