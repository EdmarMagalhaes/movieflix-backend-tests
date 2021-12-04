import React from "react";
import MovieDescription from "../MovieDescription";
import './styles.scss';
import { Movie } from "core/types/Movie";


 type Props = {
     movie: Movie;
 }
const MovieCard = ({ movie }: Props) => (
    <div className="card-base border-radius-4 movie-card">
      <img src={movie.imgUri} alt={movie.title} className="movie-card-image" />
      <MovieDescription movie={movie} />
    </div>
);

export default MovieCard;