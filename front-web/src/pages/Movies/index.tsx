import React from "react";
import MovieCard from "./components/MovieCard";
import './styles.scss';

const Movies = () => (
    <div className="catalog-moveis-container">
       <h1>
           Catalogo de filmes
        </h1>
        <div className="catalog-movies">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            
        </div>
   
    </div>
);
export default Movies;