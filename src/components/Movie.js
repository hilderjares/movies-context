import React from "react";

function Movie({ id, name, price }) {
    return (
        <div className="movie">
            <div> ID: {id}</div>
            <div> Name: {name}</div>
            <div> Price: {price}</div>
        </div>
    );
}

export default Movie;
