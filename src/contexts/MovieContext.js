import React, { createContext, useState } from "react";
import { MoviesMock } from "../mock";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState(MoviesMock);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};
