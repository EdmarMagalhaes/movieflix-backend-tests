import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { moviecardcontainer } from "../../../styles";
import { Movie } from "../../types/Movie";

type Props = {
    id: Number;
    movie: Movie;
}

const MovieCard  = ({ movie, id } : Props) => {
    const navigation =  useNavigation();
    
    return (
        <TouchableOpacity style={moviecardcontainer.card} onPress={() => navigation.navigate('MovieDetails', { id })}>
            <View style={moviecardcontainer.imagecontainer}>
                <Image source={{ uri: movie.imgUri }} style={moviecardcontainer.Image} />
            </View>
            <View style={moviecardcontainer.textcontainer}>
                <Text style={moviecardcontainer.title}>
                    {movie.title}
                </Text>
                <Text style={moviecardcontainer.year}>
                    {movie.year}
                </Text>
                <Text style={moviecardcontainer.subtitle}>
                    {movie.subTitle}
                </Text>

            </View>

        </TouchableOpacity>

    );
};
export default MovieCard; 