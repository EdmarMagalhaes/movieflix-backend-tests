import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { moviecardcontainer, theme } from "../../../styles";
import { Movie } from "../../types/Movies";

interface Props {
    movie: Movie;
}


const MovieCard  = ({ movie } : Props) => {
    return (

        <TouchableOpacity style={moviecardcontainer.card}>
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