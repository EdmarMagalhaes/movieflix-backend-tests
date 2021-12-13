import React from "react";
import { ReactComponent as AuthImage} from 'core/assets/images/auth.svg';
import './styles.scss';
import Login from "./components/Login";



const Auth = () => (
    
    <div className="auth-container">
        <div className="auth-info text-center">
            <h1 className="auth-info-title">
                Avalie Filmes
            </h1>
            <p className="auth-info-subtitle">
               Diga o que você achou do seu <br />filme favorito                
            </p>
              <AuthImage />
        </div>
        <div className="auth-content">
            <Login />
            {localStorage.removeItem('authData')}
        </div>
    </div>

);
export default Auth;