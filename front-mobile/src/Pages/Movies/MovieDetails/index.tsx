import React, { useEffect, useState, useCallback, useReducer } from "react";
import { ActivityIndicator, Text, View, Image, Alert, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Movie, Reviews } from "../../../core/types/Movie";
import { isAllowedByRole } from "../../../core/utils/auth";
import { makePrivateRequest } from "../../../core/utils/request";
import { moviecardcontainer, moviecarddescription, theme, buttonback, cardreview, formreview } from "../../../styles";
import CardReview from "./CardReview";
import FormReview from "./FormReview";
import ArrowIcon from "../../../assets/Seta.png";
import { useNavigation } from "@react-navigation/native";
import { useParams } from "react-router-dom";

type MovieId = {
    route: { params: { id: Number } }
}

// type ParamsType = {
//     movieId: String;
    
// }

const MovieDetails = ({ route: { params: { id } } }: MovieId) => {
    const navigation = useNavigation();
    //const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    const [accessReviews, setAccessReviews] = useState(false);
    const [reviews, setReviews ] = useState<Reviews[]>();
    const [addReview, setAddReview] = useState({
        text: ""
    });

    async function getMovieDescription() {
        setIsLoading(true);
        await makePrivateRequest({ url: `/movies/${id}` })
            .then(response => setMovie(response.data))
            .catch(error => Alert.alert('Erro ao buscar filme!'))
            .finally(() => setIsLoading(false));

    }
     async function loadReviewsData() {
         const res = movie?.reviews
         setReviews(res)
     }

    async function onSubmit() {
        const payload = {
            ...addReview,
            movieId: id
        }
        
        await makePrivateRequest({
            url: '/reviews',
            method: 'POST',
            data: payload
        })
            .then(() => getMovieDescription())
            .finally(() => clear());
    }

    async function accessReviewAuthority() {
        const accessByRole = await isAllowedByRole(['ROLE_MEMBER'])
        setAccessReviews(accessByRole);
    }

    async function clear() {
        setAddReview({
            text:""
        })
    }
  
    
    useEffect(() =>{
        getMovieDescription()
        accessReviewAuthority()
        clear()
    },[])

    useEffect(() => {
        reviews?.reverse();
        loadReviewsData()
        
    }, [loadReviewsData])


    reviews?.reverse();
    
   
    return (
        <View style={theme.moviedtailscontainer}>
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
                    {
                        accessReviews ? (
                            <View style={formreview.card}>
                                <TextInput
                                    placeholder="Deixe uma avaliação aqui!"
                                    autoCapitalize='none'
                                    keyboardType='default'
                                    value={addReview.text}
                                    style={formreview.textinput}
                                    editable={true}
                                    onChangeText={(event) => setAddReview({ ...addReview, text: event })}
                                />
                                <TouchableOpacity
                                    style={formreview.button}
                                    disabled={false}
                                    onPress={() => onSubmit()}
                                >
                                    <Text style={formreview.textbutton}>salvar avaliação</Text>
                                </TouchableOpacity>

                            </View>

                        ) : (
                            <FormReview placeholder="Para fazer uma avaliação é necessário ser membro!" value={false} button={true} />
                        )
                    }

                    <View style={cardreview.card}>
                        {reviews && reviews.length > 0 ? (
                            reviews.map(review => (
                                <CardReview name={review.user.name} text={review.text} key={review.id} />
                            ))
                        ) : (
                            isLoading ? <ActivityIndicator size="large" color="#E1E1E1" /> :
                                <>
                                    <Text style={cardreview.noreview}>Sejá o primeiro a avaliar!</Text>
                                </>
                        )
                        }

                    </View>
                </View>

            </ScrollView>
        </View>
    );
};
export default MovieDetails;