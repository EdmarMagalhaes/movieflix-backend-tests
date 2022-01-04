import React, { useState, useEffect } from 'react';
import { ScrollView, View, ActivityIndicator, EdgeInsetsPropType } from 'react-native';
import MovieCard from '../../core/components/MovieCard';
import {  theme } from '../../styles';
import MovieFilter from '../../core/components/MovieFilters';
import imageCard from '../../assets/cardimage.png';
import { api, getMovies } from '../../core/utils/request';
import { Genre, Movie, MoviesResponse } from '../../core/types/Movies';


const Movies = () => {
  //const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<Genre>();
  


     async function fillMovies() {
     setLoading(true);
     const res = await getMovies();
     setMovies(res.data.content);
     setLoading(false);
      console.warn(res);
   }

  useEffect(() => {
    fillMovies();
  }, [])

 

  const handleChangeGenre = (genre: Genre) => {
    setGenre(genre);
  }
 
  

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
          { loading ? (
            <ActivityIndicator size="large" color="#E1E1E1" />
          ):
           movies?.map(movie => (

              <MovieCard movie={movie} key={movie.id}  />

           ))
          }
        </ScrollView>
      </View>
    </>
  );
}
export default Movies;