import React, { useContext, Fragment } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieList() {
    const movies = useContext(MovieContext)[0];

    return (
        <Fragment>
            {movies.map(movie => (
                <>
                    <ul key={movie.id}>
                        <li> ID: {movie.id}</li>
                        <li> Name: {movie.name}</li>
                        <li> Price: {movie.price}</li>
                    </ul>
                    <hr />
                </>
            ))}
        </Fragment>
    );
}

export default MovieList;
