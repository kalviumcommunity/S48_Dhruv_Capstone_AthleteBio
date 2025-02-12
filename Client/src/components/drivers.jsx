import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "./drivers.css";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/drivers")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Debug: Check the exact structure of API response
        if (Array.isArray(data)) {
          setDrivers(data);
        } else {
          console.error("Unexpected API response format", data);
        }
      })
      .catch(error => console.error("Error fetching drivers:", error));
  }, []);
  

  return (
    <div className="drivers-container">
      <Header />
      <div className="drivers-page">
        {/* <h1>Formula 1 Drivers</h1> */}
        <div className="drivers-grid">
          {drivers.map((driver, index) => (
            <div key={index} className="driver-card">
              <img
                src={driver.image}               
                className="driver-image"
              />
              <h2 className="driver-name">{driver.name} </h2>
              <p className="driver-team">{driver.team} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drivers;
