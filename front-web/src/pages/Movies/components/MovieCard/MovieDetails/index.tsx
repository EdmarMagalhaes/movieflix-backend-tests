import React from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "core/assets/images/Seta.svg"
import { ReactComponent as MovieImage } from 'core/assets/images/movie.svg';
import MovieDescription from "../../MovieDescription";
import './styles.scss';
import ButtonDefault from "pages/Auth/components/ButtonDefault";
import { useForm } from "react-hook-form";

type ParamsType = {
    movieId: string;
}

type FormData = {
    evaluation: string;
}

const MoviesDetails = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
    const { movieId } = useParams<ParamsType>();
    console.log(movieId);

    const onSubmit = (data: FormData) => {
        console.log(data);
    }
   
    return (
        <div className="movie-details-container">
            <div className="card-base boder-radius-10 movie-details">
                <Link to="/movies" className="movie-detail-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 text-center">
                        <MovieImage className="movie-details-image" />
                    </div>
                    <div className="col-6">
                        <div className="movie-info">
                            <MovieDescription />
                            <div className="movie-box-details boder-radius-10">
                                <h6 className="movie-synopsy-text">
                                    O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima.
                                    Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam
                                    para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa
                                    de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para
                                    destruir o anel.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-base boder-radius-4 movie-evaluation text-center" >
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-botton-30">
                    <input
                        type="text"
                        className={`form-control input-evaluation ${errors.evaluation ? 'is-invalid' : ''} `}
                        placeholder="Deixe sua avaliação aqui"
                        {...register("evaluation", { required: "Campo não pode ser em branco!" })}
                    />
                    {errors.evaluation && (
                        <div className="errorvalidation-evaluation">
                            {errors.evaluation.message}
                        </div>
                    )}
                    
                </div>
                    <div>
                    <ButtonDefault title="SALVAR AVALIAÇÃO" name="BtnEvaluation" />
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default MoviesDetails;