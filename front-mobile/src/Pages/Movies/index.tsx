import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, ActivityIndicator, EdgeInsetsPropType } from 'react-native';
import MovieCard from '../../core/components/MovieCard';
import { theme, moviefilter, font } from '../../styles';
import MovieFilter from '../../core/components/MovieFilters';
import { Genre, MoviesResponse } from '../../core/types/Movie';
import { makePrivateRequest } from '../../core/utils/request';

const Movies = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<Genre>({id: 0, name:""});
  
    const getMovies = useCallback(() => {
      
      const params = {
        genreId: genre,
        linesPerPage: 12
      }
      setLoading(true);
      makePrivateRequest({ url: "/movies", params}) 
        .then(response => setMoviesResponse(response.data))
        .catch(() => console.log('code 400')) 
        .finally(() => {
          setLoading(false);
        })  
    
    }, [genre]);

    const handleChangeGenre = (genre: Genre) => {
      setGenre(genre)
    }

    useEffect(() => {
      getMovies();
    }, [getMovies]);
  
  return (
    <>
      <View style={theme.container}>    
        <ScrollView>
        <View style={theme.filtercontainer}>
               <MovieFilter genre={genre} handleChangeGenre={handleChangeGenre} />
            </View>
          {loading ?  (
            <ActivityIndicator size="large" color="#E1E1E1" />
          ) : (
            moviesResponse?.content.map(movie => (
              <MovieCard movie={movie} id={movie.id} key={movie.id} />
            ))
          )
          }
        </ScrollView>
      </View>
    </>
  );
}
export default Movies;