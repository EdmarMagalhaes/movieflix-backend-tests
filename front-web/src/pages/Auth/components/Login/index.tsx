import { makeLogin } from "core/utils/request";
import React from "react";
import {toast } from "react-toastify";
import { useForm } from "react-hook-form";
import AuthCard from "../Card";
import "./style.scss"
import { saveSessionData } from "core/utils/auth";
import { useHistory, useLocation } from "react-router-dom";
import ButtonDefault from "core/components/ButtonDefault";


type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<FormState>();
    const history = useHistory();
    let location = useLocation<LocationState>();
    
    const { from } = location.state || { from: { pathname: "/movies" } };

    const onSubmit = (data: FormState) => {
        makeLogin(data)
        .then(response => {
            
            saveSessionData(response.data);
            history.replace(from);
        })
        .catch(() =>{
            toast.error('Usuário ou senha inválidos!');
        })
       
    }
      
    return (
        <AuthCard title="login">    
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="margin-botton-30">
                        <input 
                            type="email" 
                            className={`form-control input-base ${errors.username ? 'is-invalid' : ''} `}
                            placeholder="Email"
                            {...register("username", { required: "Campo obrigatório", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido"}})}
                            />
                        {errors.username && (
                            <div className="errorvalidation">
                            {errors.username.message}
                            </div>
                        )}
                    </div>
                   
                   <div className="margin-botton-30">
                        <input 
                            type="password" 
                            className={`form-control input-base ${errors.password ? 'is-invalid' : ''} `}
                            placeholder="Senha"
                            {...register("password", { required: "Campo obrigatório"})}
                            />
                            {errors.password && (
                            <div className="errorvalidation">
                            {errors.password.message}
                            </div>
                        )}
                        </div>
                    <div className="login-submit">
                        <ButtonDefault title="fazer login" />
                    </div>
                </form>
                
        </AuthCard>
  
)
    };
export default Login;