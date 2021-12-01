import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "core/assets/images/Seta.svg"
import MovieDescription from "../../MovieDescription";
import "./styles.scss";
import { isAllowedByRole, Role } from "core/utils/auth";
import FormReview from "pages/Movies/components/FormReview";
import { Movie } from "core/types/Movie";
import CardReview from "../../CardReview";
import { makePrivateRequest } from "core/utils/request";


type ParamsType = {
    movieId: string;
}

type Props = {
    allowedRoutes?: Role[];
    
}

const MoviesDetails = ({ allowedRoutes }: Props) => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    
    useEffect(() =>{
       makePrivateRequest({ url: `/movies/${movieId}`})
        .then(response => setMovie(response.data))
    }, [movieId]);
    
    
allowedRoutes=(['ROLE_MEMBER'])
       
    return (
        <div className="movie-details-container">
            <div className="card-base border-radius-10 movie-details">
                    <Link to="/movies" className="movie-detail-goback">
                        <ArrowIcon className="icon-goback" />
                        <h1 className="text-goback">voltar</h1>
                    </Link>
                <div className="row">
                        <div className="col-6 text-center">
                            <img src={movie?.imgUri} alt={movie?.title} className="movie-details-image" />
                        </div>
                    
                    <div className="col-6">
                            <div className="movie-info">
                               {movie?.title && <MovieDescription movie={movie} />}
                            </div>
                            
                            <div className="movie-box-details border-radius-10">
                                <h6 className="movie-synopsy-text">
                                    {movie?.synopsis}
                                </h6>
                            </div>
                        
                    </div>
                </div>
            </div>
            <div className="card-base border-radius-4 movie-review text-center" >
            {isAllowedByRole(allowedRoutes) ? (
                <FormReview placeholder="Deixe sua avaliação aqui!" value={false} />
                ) : (
                <FormReview placeholder="Para fazer uma avaliação é necessário se tonar membro!" value={true} />
                )
                }
            </div>
            <div className="card-base border-radius-4 show-review">
                <CardReview />
                <CardReview />
                <CardReview />
                <CardReview />
            </div>
        </div>
    );
};

export default MoviesDetails;