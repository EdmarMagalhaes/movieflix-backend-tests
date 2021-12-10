import React from "react";
import { useForm } from "react-hook-form";
import ButtonDefault from "core/components/ButtonDefault";
import { makePrivateRequest } from "core/utils/request";
import "./styles.scss";


type Props = {
    value?: boolean;
    placeholder?: string;
    ValueMovieId?: number
   
}

type FormState = {
    text: string;
    movieId: string;
    userId: number;
}


const FormReview = ({ value, placeholder, ValueMovieId }: Props) => {
    const { register, handleSubmit, formState: {errors} } = useForm<FormState>();
    const onSubmit = (data: FormState) => {
      const payload = {
          ...data,
          movieId: ValueMovieId
       
      }
      
      makePrivateRequest({ 
          url: '/reviews', 
          method: 'POST', 
          data: payload
        })
            .then(() => {
                document.location.reload();
               
            
            })
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-botton-30">
                    <input
                        type="text"
                        id="TextReview"
                        disabled = {value}
                        className={`form-control input-review ${errors.text ? 'is-invalid' : ''} `}
                        placeholder={placeholder}
                        {...register("text", { required: "Campo não pode ser em branco!" })}
                    />
                    {errors.text && (
                        <div className="errorvalidation-review">
                            {errors.text.message}
                        </div>
                    )}
              
                </div>
                    <ButtonDefault title="SALVAR AVALIAÇÃO" name="BtnReview"  value={value} />   
                </form>
    );
};
export default FormReview;