import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "core/assets/images/Seta.svg"
import MovieDescription from "../../MovieDescription";
import { isAllowedByRole, Role } from "core/utils/auth";
import FormReview from "pages/Movies/components/FormReview";
import { Movie } from "core/types/Movie";
import CardReview from "../../CardReview";
import { makePrivateRequest } from "core/utils/request";
import MovieInfoLoader from "../../Loaders/MovieInfoLoader";
import MovieDescriptionLoader from "../../Loaders/MovieDescriptionLoader";
import MovieSynopsyLoader from "../../Loaders/MovieSynopsyLoader";
import CardNoReview from "../../CardNoReview";
import "./styles.scss";


type ParamsType = {
    movieId: string;
    
}

type Props = {
    allowedRoutes?: Role[];

}

const MoviesDetails = ({ allowedRoutes }: Props) => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false));
    }, [movieId]);


    allowedRoutes = (['ROLE_MEMBER'])

    return (
        <div className="movie-details-container">
            <div className="card-base border-radius-10 movie-details">
                <Link to="/movies" className="movie-detail-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 text-center" >
                        {isLoading ? <MovieInfoLoader /> : (
                            <img src={movie?.imgUri} alt={movie?.title} className="movie-details-image" />
                        )}
                    </div>

                    <div className="col-6">
                        <div className="movie-info">
                            {isLoading ? <MovieDescriptionLoader /> : (
                                movie?.title && <MovieDescription movie={movie} />
                            )}
                        </div>

                        <div className="movie-box-details border-radius-10">
                            <h6 className="movie-synopsy-text">
                                {isLoading ? <MovieSynopsyLoader /> : (
                                    movie?.synopsis
                                )}
                            </h6>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card-base border-radius-4 movie-review text-center" >
                {isAllowedByRole(allowedRoutes) ? (
                    
                    <FormReview placeholder="Deixe sua avaliação aqui!" value={false} ValueMovieId={movie?.id}/>
                ) : (
                    <FormReview placeholder="Para fazer uma avaliação é necessário se tonar membro!" value={true} />
                )
                }
            </div>
            <div className="card-base border-radius-4 show-review">
                {movie?.reviews && movie.reviews.length > 0 ? (
                    movie?.reviews.map(review => (
                        <div key={review.id}>
                            <CardReview name={review.text} text={review.user.name} />
                        </div>
                    ))
                ) : (

                    <CardNoReview />
                )}



            </div>
        </div>
    );
};

export default MoviesDetails;