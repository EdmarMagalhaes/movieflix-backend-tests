import React from "react";
import { ReactComponent as MovieImage } from 'core/assets/images/movie.svg';
import MovieDescription from "../MovieDescription";
import './styles.scss';

const MovieCard = () => (
    <div className="card-base boder-radius-4 movie-card">
        <MovieImage />
        <MovieDescription />
       
    </div>
);

export default MovieCard;