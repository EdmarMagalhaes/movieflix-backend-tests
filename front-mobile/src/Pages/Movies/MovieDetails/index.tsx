import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, Image, Alert, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Movie } from "../../../core/types/Movie";
import { isAllowedByRole } from "../../../core/utils/auth";
import { makePrivateRequest } from "../../../core/utils/request";
import { moviecardcontainer, moviecarddescription, theme, buttonback } from "../../../styles";
import CardReview from "./CardReview";
import FormReview from "./FormReview";
import ArrowIcon from "../../../assets/Seta.png";
import { useNavigation } from "@react-navigation/native";

 type MovieId = {
     route: {params: { id: Number }}
 }

const MovieDetails = ({ route: { params: { id } } }: MovieId) => {
    const navigation =  useNavigation();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    const isFocused = useIsFocused();
    const [accessReviews, setAccessReviews] = useState(false);

    async function getMovieDescription() {
        setIsLoading(true);
        await makePrivateRequest({ url: `/movies/${id}` })
            .then(response => setMovie(response.data))
            .catch(error => Alert.alert('Erro ao buscar filme!'))
            .finally(() => setIsLoading(false));

    }

    // const getMovieDescription = useCallback( () => {
    //     setIsLoading(true);
    //     makePrivateRequest({ url: `/movies/${id}` })
    //         .then(response => setMovie(response.data))
    //         .catch(error => Alert.alert('Erro ao busca filme!'))
    //         .finally(() => setIsLoading(false));

    // }, [id])

    async function accessReviewAuthority() {
        const accessByRole = await isAllowedByRole(['ROLE_MEMBER'])
        setAccessReviews(accessByRole);
    }

    useEffect(() => {
        getMovieDescription()
        accessReviewAuthority()
    }, []);

    return (
        <ScrollView>
            <View style={theme.container}>
                <View style={moviecarddescription.card}>
                    {isLoading ? <ActivityIndicator size="large" color="#E1E1E1" /> :
                        <>
                            <View style={buttonback.container}>
                                <TouchableOpacity style={buttonback.button} onPress={() => navigation.goBack()}>
                                    <Image source={ArrowIcon} style={buttonback.image} />
                                    <Text style={buttonback.text}>VOLTAR</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={moviecarddescription.imagecontainer}>
                                <Image source={{ uri: movie?.imgUri }} style={moviecarddescription.image} />
                            </View>
                            <View style={moviecarddescription.textcontainer}>
                                <Text style={moviecardcontainer.title}>
                                    {movie?.title}
                                </Text>
                                <Text style={moviecardcontainer.year}>
                                    {movie?.year}
                                </Text>
                                <Text style={moviecardcontainer.subtitle}>
                                    {movie?.subTitle}
                                </Text>

                            </View>
                            <View style={moviecarddescription.synopsis}>
                                    <Text style={moviecarddescription.synopsistext}>{movie?.synopsis}</Text>
                                </View>
                        </>
                    }
                </View>

                {accessReviews ? (
                    <FormReview placeholder="Deixe sua avaliação aqui" value={true} ValueMovieId={movie?.id} />
                ) : (
                    <FormReview placeholder="Para fazer uma avaliação é necessário ser membro!" value={false} />

                )
                }
                <CardReview />
               
            </View>
            
        </ScrollView>

    );


};
export default MovieDetails;