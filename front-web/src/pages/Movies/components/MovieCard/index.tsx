import React from "react";
import { ReactComponent as MovieImage } from 'core/assets/images/movie.svg';
import MovieDescription from "../MovieDescription";
import './styles.scss';
import { Movie } from "core/types/Movie";

 type Props = {
     movie: Movie;
 }
const MovieCard = ({ movie }: Props) => (
    <div className="card-base boder-radius-4 movie-card">
        <MovieImage />
        <MovieDescription movie={movie} />
       
    </div>
);

export default MovieCard;