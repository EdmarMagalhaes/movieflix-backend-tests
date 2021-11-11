import React from "react";
import AuthCard from "../Card";

import "./style.scss"

const Login = () => (
    <div>
        <AuthCard title="login">
                <form className="login-form">
                    <input 
                    type="email" 
                    className="form-control input-base margin-botton-30" 
                    placeholder="Email"
                    />
                    <input 
                    type="password" 
                    className="form-control input-base" 
                    placeholder="Senha"
                    />
                    <div className="login-submit">
                    <button className="btn btn-primary form-control btn-style">
                    <h6 className="font-size">FAZER LOGIN</h6>
                    </button>
                    </div>
                </form>
        </AuthCard>
    </div>
);
export default Login;