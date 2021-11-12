import { makeLogin } from "core/utils/request";
import React from "react";
import { useForm } from "react-hook-form";
import AuthCard from "../Card";
import "./style.scss"

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: FormData) => {
        makeLogin(data);

    }
    return (
        <AuthCard title="login">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    type="email" 
                    className="form-control input-base margin-botton-30" 
                    placeholder="Email"
                    {...register("username")}
                    />
                    <input 
                    type="password" 
                    className="form-control input-base" 
                    placeholder="Senha"
                    {...register("password")}
                    />
                    <div className="login-submit">
                    <button className="btn btn-primary form-control btn-style">
                    <h6 className="font-size">FAZER LOGIN</h6>
                    </button>
                    </div>
                </form>
        </AuthCard>
  
)
    };
export default Login;