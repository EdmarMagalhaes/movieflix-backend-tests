import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import { makePrivateRequest, makeRequest } from "core/utils/request";
import './styles.scss';
import { MoviesResponse } from "core/types/Movie";

const Movies = () => {
   const [moviesResponse, setMoviesResponse ] = useState<MoviesResponse>();
   const [isLoading, setIsLoading] = useState(false);
   const [activePage, setActivePage] = useState(0); 
   const history = useHistory();

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 12
    }
    setIsLoading(true);
    makePrivateRequest({url: "/moveis", params})
      .then(response => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage]);

  return (
      <div className="catalog-moveis-container">
      <h1>
          Catalogo de filmes
       </h1>
       <div className="catalog-movies">
        {moviesResponse?.content.map(movie => (
           <Link to={`/movies/${movie.id}`} key={movie.id}> 
           <MovieCard movie={movie} /> 
           </Link> 
        ))}
        
           
       </div>
  
   </div>
    );
}

export default Movies;