import React, { useEffect, useState } from "react";
import { getRiverInformation } from "../../services/rivers";

export default function RiverInformation({name}) {

    const [riverInformation, setRiverInformation] = useState({});

    useEffect(() => {
        let mounted = true
        getRiverInformation(name)
        .then(data => {
            if(mounted){
                setRiverInformation(data)
            }
        });
        return () => {
            mounted = false;
        }
    }, [name])

    return(
        <div>
            <h2>River Information</h2>
          <ul>
                <li>Continent: {riverInformation?.continent}</li>
                <li>Lenght: {riverInformation?.length}</li>
                <li>Outflow: {riverInformation?.outflow}</li>
            </ul>
        </div>
    )
}