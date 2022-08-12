import React, { useState } from "react";
import { useEffect } from "react";

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=FToiAhGFu0jWTdGXfXdaqwkag982aEvk1DbvJasn`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div></div>;

    return (
        <div>
            <img src={photoData.url} alt={photoData.title} />
        </div>
    );
}
