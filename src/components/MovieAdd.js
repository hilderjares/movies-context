import React, { useContext, Fragment, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieAdd() {
    const [movies, setMovies] = useContext(MovieContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const handleName = event => {
        setName(event.target.value);
    };

    const handlePrice = event => {
        setPrice(event.target.value);
    };

    const createMovie = event => {
        event.preventDefault();

        const filedsIsValid = name === "" || price === 0;

        if (filedsIsValid) {
            alert(
                "How you as can insert a new movie if you don't type the movie :)"
            );
            return;
        }
        const newMovie = [...movies, { name: name, price: price }];

        setMovies(newMovie);
    };

    return (
        <Fragment>
            <form onSubmit={createMovie}>
                <input type="text" onChange={handleName} />
                <input type="number" onChange={handlePrice} />
                <button> Add </button>
            </form>
        </Fragment>
    );
}

export default MovieAdd;
