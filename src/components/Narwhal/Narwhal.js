import React from "react";
import { useParams } from "react-router-dom";

export default function Narwhal(){
    let {username} = useParams();
    return (
        <div>
            <h1>Narwhal</h1>
            <p>This is type of Narwhal {username}</p>
        </div>
    );
}