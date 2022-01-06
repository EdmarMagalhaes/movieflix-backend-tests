import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, ActivityIndicator, EdgeInsetsPropType } from 'react-native';
import MovieCard from '../../core/components/MovieCard';
import { theme } from '../../styles';
import MovieFilter from '../../core/components/MovieFilters';
import imageCard from '../../assets/cardimage.png';
import { Genre, Movie, MoviesResponse } from '../../core/types/Movies';
import { makePrivateRequest } from '../../core/utils/request';


const Movies = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [genre, setGenre] = useState<Genre>();


    const getMovies = useCallback(() => {
      const params = {
        genreId: genre,
        page: activePage,
        linesPerPage: 12
      }
      setLoading(true);
      makePrivateRequest({ url: "/movies", params}) 
        .then(response => setMoviesResponse(response.data)) 
        .finally(() => {
          setLoading(false);
        })  
    console.warn(moviesResponse)
    }, [activePage, genre]);

     useEffect(() => {
      getMovies();
    }, [getMovies]);
  
  
  const handleChangeGenre = (genre: Genre) => {
    setActivePage(0);
    setGenre(genre);
  }

 console.warn(genre);


  return (
    <>

      <View style={theme.container}>
        <View style={theme.filtercontainer}>
          {

            <MovieFilter
              genre={genre}
              handleChangeGenre={handleChangeGenre}
            />
          }
        </View>
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" color="#E1E1E1" />
          ) :
            moviesResponse?.content.map(movie => (
           
              <MovieCard movie={movie} key={movie.id} />

            ))
          }
        </ScrollView>
      </View>
    </>
  );
}
export default Movies;