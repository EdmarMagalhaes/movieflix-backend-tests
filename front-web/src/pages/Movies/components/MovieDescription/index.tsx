import { Movie } from "core/types/Movie";
import React from "react";
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieDescription = ({ movie }: Props) => (
<div className="movie-info-description">
    <h6 className="movie-title">
        {movie.title}
    </h6>
    <h6 className="movie-year"> 
        {movie.year}
    </h6>
    <h6 className="movie-subtitle">
        {movie.subTitle}
    </h6>
</div>
);

export default MovieDescription;