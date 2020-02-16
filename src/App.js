import React from "react";
import "./App.css";
import { MovieProvider } from "./contexts/MovieContext";
import MovieList from "./components/MovieList";
import MovieAdd from "./components/MovieAdd";

function App() {
    return (
        <MovieProvider>
            <div className="App">
                <h3> Movies </h3>
                <MovieList />
                <MovieAdd />
            </div>
        </MovieProvider>
    );
}

export default App;
