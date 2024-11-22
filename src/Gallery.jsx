import React, { useState, useEffect } from "react";

//creating TourGallery func.
function TourGallery() {
    const [tours, setTours] = useState([]); //stores tours fetched
    const [loading, setLoading] = useState(true); //manages when loading State
    const [error, setError] = useState(null); //manages when error State

    //Fetch tour info from API
    useEffect( () => {
        fetch('https://course-api.com/react-tours-project')

           // .then((response) => {
             //   if (!response.ok) {
             //       throw new Error("Failed to fetch data");}
              //  return response.json();

           // })  
            .then(data => {
                setTours(JSON.parse(data.contents)); //updates State with data
                setLoading(false); //stops loading after data fetched
            })
            .catch((err) => {
                setError(err.message); // updates error State if failed fetch
                setLoading(false); // once again will stop loading if error
            });
}, []);

//  Loading & Error Messsages to update user.
if (loading) return <p>Please Wait, Loading...</p>; 
if (error) return <p>Error, Failed!</p>;


return (
    <div>
        <h2>Tour List</h2>
        <ul>
            {tours.map((tour) => (
                <li key={tour.id} style={{ marginBottom: "20px", listStyle: "none" }}>
                    {/* Display tour images */}
                    <img
                        src={tour.image}
                        alt={tour.name}
                        style={{ width: "200px", height: "150px", objectFit: "cover" }}
                    />
                <h3>{tour.name}</h3>
                    <p><strong>Price:</strong> ${tour.price}</p>
                    <p>{tour.info}</p>
                </li>
            ))}
        </ul>
    </div>
)};

export default TourGallery;