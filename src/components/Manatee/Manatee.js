import React from "react";
import { useNavigate } from "react-router-dom";

export default function Manatee(){
    let navigate = useNavigate();
    return (
        <div>
            <h1>Manatee</h1>
            <button onClick={() => {
                navigate("/whale")}}>Go to Whale!</button>
        </div>
    );
}