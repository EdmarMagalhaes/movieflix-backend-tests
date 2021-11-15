import React from "react";
import { Link } from 'react-router-dom';
import LogoutButton from "../Buttonout";
import "./styles.scss";




const Navbar = () => (
    
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
            <h4>MovieFlix</h4>
            </Link>
        </div>     
       
        
        <div className= "col-1 position-btnlogout">
            <LogoutButton />
        </div>
   
    </nav>
 
);
export default Navbar;