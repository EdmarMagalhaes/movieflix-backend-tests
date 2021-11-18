import React from "react";
import { Link } from 'react-router-dom';
import LogoutButton from "../LogoutButton";
import RenderLogoutButton from "../LogoutButton/RenderLogoutButton";
import "./styles.scss";

const Navbar = () => (
    
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
            <h4>MovieFlix</h4>
            </Link>
        </div>     
        <RenderLogoutButton>
            <LogoutButton />
        </RenderLogoutButton>
   
    </nav>
 
);
export default Navbar;