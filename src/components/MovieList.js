import React, { useContext, Fragment } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";

function MovieList() {
    const movies = useContext(MovieContext)[0];

    return (
        <Fragment>
            {movies.map(movie => (
                <Movie
                    id={movie.id}
                    name={movie.name}
                    price={movie.price}
                    key={movie.id}
                />
            ))}
        </Fragment>
    );
}

export default MovieList;
