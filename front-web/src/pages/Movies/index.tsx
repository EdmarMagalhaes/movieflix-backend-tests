import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import { makePrivateRequest } from "core/utils/request";
import './styles.scss';
import { MoviesResponse } from "core/types/Movie";
import MovieCardLoader from "./components/Loaders/MovieCardLoader";
import Pagination from "core/components/Pagination";

const Movies = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 12
    }
    setIsLoading(true);
    makePrivateRequest({ url: "/movies", params })
      .then(response => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage]);

  return (
    <div className="catalog-movies-container">
      <h1>
        Catalogo de filmes
      </h1>
      <div className="catalog-movies">
        {isLoading ? <MovieCardLoader /> : (
          moviesResponse?.content.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))
        )}
      </div>
      {moviesResponse && (
      <Pagination 
      totalPages={moviesResponse?.totalPages} 
      activePage={activePage}
      onChange={page => setActivePage(page)}
      />
      
      )}
    </div>
  );
}

export default Movies;