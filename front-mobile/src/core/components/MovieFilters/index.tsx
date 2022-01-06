import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { font, moviefilter } from "../../../styles";
import { Genre } from "../../types/Movies";
import { makePrivateRequest } from "../../utils/request";

// const genres = [
//     {
//       id: 1,
//       name: "Ação",
//     },
  
//     {
//       id: 2,
//       name: "Suspense",
//     },
  
//     {
//       id: 3,
//       name: "Aventura",
//     },
  
//     {
//       id: 4,
//       name: "Romance",
//     },
  
//     {
//         id: 5,
//         name: "Violencia",
//       },
  
//   ]
  
  type Props = {
    genre?: Genre;
    handleChangeGenre: (genre: Genre) => void;
    
  }


  const MovieFilter = ({ genre, handleChangeGenre }: Props) => {
    const [isLoadingGenre, setIsLoadingGenre] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
      setIsLoadingGenre(true);
      makePrivateRequest({ url: '/genres' })
          .then(response => setGenres(response.data))
          .finally(() => setIsLoadingGenre(false));
  }, []);
    
  const renderGenreList = () => {
       return genres.map(genre => {
          return <Picker.Item label={genre.name} value={genre.id} fontFamily={font.regular} style={moviefilter.pickeritens} key={genre.id} />
       })

    }
    return (
        <View style={moviefilter.card}>
        <Picker
            style={moviefilter.picker}
            selectedValue={genre}
            onValueChange={itemValue => handleChangeGenre(itemValue as Genre)}
             mode={'dropdown'} 
             dropdownIconColor={"white"}
               
            >
           {renderGenreList()}
        </Picker>
        </View>
    )
    
};
export default MovieFilter;