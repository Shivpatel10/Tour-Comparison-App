import React, { useState, useEffect } from "react";
import './Gallery.css'

//creating TourGallery func.
function TourGallery() {
    const [tours, setTours] = useState([]); //stores tours fetched
    const [loading, setLoading] = useState(true); //manages when loading State
    const [error, setError] = useState(null); //manages when error State

    //Fetch tour info from API
    useEffect( () => {
        fetch('https://api.allorigins.win/get?url=https://course-api.com/react-tours-project')

           .then(response => response.json())
           .then(data => {
                setTours(JSON.parse(data.contents)); //updates State with data
                setLoading(false);  //stops loading after data fetched
            })
            .catch((error) => {
                setError(error.message); // updates error State if failed fetch
                setLoading(false); // once again will stop loading if error
            });
}, []); //Dependancy Array

//  Loading & Error Messsages to update user.
if (loading) return <p>Please Wait, Loading...</p>; 
if (error) return <p>Error, Failed! {error} </p>;


return (
    <div className="gallery">
        {tours.map((tour) => (
            <div key={tour.id} style={{ marginBottom: "20px", border: "1px solid #ddd", padding: "10px" }}>
                {/* Display tour image */}
                <img src={tour.image} alt={tour.name} style={{ width: "200px", height: "150px", objectFit: "cover" }} />
                <h3>{tour.name}</h3>
                <p><strong>Price:</strong> ${tour.price} </p>

                {/* Read More Button */} 
                <p> {tour.showFullDescription ? tour.info : `${tour.info.substring(0, 75)}`}
                        <button onClick={() => {
                            setTours(tours.map(tourDesc => tourDesc.id === tour.id ? { ...tourDesc, showFullDescription: !tourDesc.showFullDescription } : tourDesc ));
                            }}> {tour.showFullDescription ? "Show Less" : "Read More"} </button>
                </p>

                {/* Not Interested Button */} 
                <p> <button onClick={() => setTours(tours.filter(t => t.id !== tour.id))}> Not Interested </button> </p>
            </div>
        ))}
    </div>
);}

export default TourGallery;