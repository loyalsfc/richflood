import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

function Maps() {
    const [center, setCenter] = useState({
        lat: 59.95,
        lng: 30.33,
    });

    useEffect(() => {
        if (location) {
          setCenter({ lat: location.lat, lng: location.lng });
        }
    }, [location]);

    return (  
        <div>
        
        </div>
  )
}

export default Maps
