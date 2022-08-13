import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(props) {
    const [photoData, setPhotoData] = useState(null);
    const location = useLocation();
    const chosenDate = location.state.date;
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${chosenDate}`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, [chosenDate]);

    if (!photoData) return <div></div>;

    return (
        <>
            <NavBar />
            <div>
                {photoData.media_type === "image" ? (
                    <img src={photoData.url} alt={photoData.title} />
                ) : (
                    <iframe
                        width="600"
                        height="600"
                        title="space-video"
                        src={photoData.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="photo"
                    />
                )}
                <div>
                    <h1>{photoData.title}</h1>
                    <p>{photoData.date}</p>
                    <p>{photoData.explanation}</p>
                </div>
            </div>
        </>
    );
}
