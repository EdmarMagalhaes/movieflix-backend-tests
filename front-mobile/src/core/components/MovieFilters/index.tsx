import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { font, moviefilter } from "../../../styles";
import { Genre } from "../../types/Movie";
import { makePrivateRequest } from "../../utils/request";


type Props = {
  genre?: Genre;
  handleChangeGenre: (genre: Genre) => void;
}


const MovieFilter = ({ genre, handleChangeGenre }: Props) => {
   const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
   
    makePrivateRequest({ url: '/genres' })
      .then(response => setGenres(response.data))
      
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
        onValueChange={itemValue => handleChangeGenre(itemValue)}
        mode={'dropdown'}
        dropdownIconColor={"white"}

      >
        {renderGenreList()}
      </Picker>
    </View>
  )

};
export default MovieFilter;