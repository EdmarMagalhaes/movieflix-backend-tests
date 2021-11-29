import React from "react";
import { useForm } from "react-hook-form";
import ButtonDefault from "core/components/ButtonDefault";
import "./styles.scss";

type Props = {
    value?: boolean;
    placeholder?: string;
}

type FormState = {
    review: string;
}


const FormReview = ({ value, placeholder }: Props) => {
    const { register, handleSubmit, formState: {errors} } = useForm<FormState>();
    const onSubmit = (data: FormState) => {
        console.log(data);
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-botton-30">
                    <input
                        type="text"
                        id="TextReview"
                        disabled = {value}
                        className={`form-control input-review ${errors.review ? 'is-invalid' : ''} `}
                        placeholder={placeholder}
                        {...register("review", { required: "Campo não pode ser em branco!" })}
                    />
                    {errors.review && (
                        <div className="errorvalidation-review">
                            {errors.review.message}
                        </div>
                    )}
                    
                </div>
                    <ButtonDefault title="SALVAR AVALIAÇÃO" name="BtnReview"  value={value} />   
                </form>
    );
};
export default FormReview;