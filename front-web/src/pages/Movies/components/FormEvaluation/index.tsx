import React from "react";
import { useForm } from "react-hook-form";
import ButtonDefault from "core/components/ButtonDefault";
import "./styles.scss";

type Props = {
    value?: boolean;
    placeholder?: string;
}

type FormData = {
    evaluation: string;
}


const FormEvaluation = ({ value, placeholder }: Props) => {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-botton-30">
                    <input
                        type="text"
                        id="TextEvaluation"
                        disabled = {value}
                        className={`form-control input-evaluation ${errors.evaluation ? 'is-invalid' : ''} `}
                        placeholder={placeholder}
                        {...register("evaluation", { required: "Campo não pode ser em branco!" })}
                    />
                    {errors.evaluation && (
                        <div className="errorvalidation-evaluation">
                            {errors.evaluation.message}
                        </div>
                    )}
                    
                </div>
                    <ButtonDefault title="SALVAR AVALIAÇÃO" name="BtnEvaluation"  value={value} />   
                </form>
    );
};
export default FormEvaluation;