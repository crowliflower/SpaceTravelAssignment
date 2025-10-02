import SpaceTravelApi from "../services/SpaceTravelApi";

import { Link } from "react-router-dom";
import { useState } from "react";

function Spacecrafts({spacecrafts}) {
    // handle click directly with the imported function from the api
    async function handleClick(id) {
        console.log("handle Ckick test", id)
        await SpaceTravelApi.destroySpacecraftById(id);
    }

    return (
        <div>
            {/* linking the spacecraft form as a new page */}
            <Link to="/SpacecraftForm" >
                Build Spacecraft
            </Link>
            <h2>Spacecrafts</h2>
            {spacecrafts.map((spacecraft) => (
                <li key={spacecraft.id}>
                    <h3>{spacecraft.name}</h3>
                    <p>{spacecraft.capacity}</p>
                    <p>{spacecraft.description}</p>
                    {/* I'm not sure about this next line. I felt like storing current location would solve it, but it hasn't. 
                        regardless, the current location is still stored in local storage, so that's not the issue like I thought it might be */}
                    {const currentLocation = spacecraft.currentLocation}
                    <img src={spacecraft.pictureUrl} alt={spacecraft.name} />
                    <button onClick={() => handleClick(spacecraft.id)}>Destroy</button>
                </li>
            ))};
        </div>
    )
}

export default Spacecrafts;