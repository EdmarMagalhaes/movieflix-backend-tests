import { getAccessTokenDecoded, logout } from "core/utils/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import "./styles.scss";

const Navbar = () => {

    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();
    const handleClick = () => toast.error('Componente desabilitado!');

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }
    return (
        <nav className="navbar navbar-expand-lg  bg-primary main-nav">
            <Link to="/movies" className="nav-logo-text">
                <h4>MovieFlix</h4>
            </Link>
            {currentUser && (
                <>
                    <div className="position-currentuser-btnlogout my-2 my-sm-0">
                        <ul className="navbar-nav ">
                            <li className="nav-item position-currentuser">
                                <button className="btn btn-primary" onClick={handleClick}>
                                    <h6 className="style-currentuser">{currentUser}</h6>
                                </button>
                            </li>
                            <li className="nav-item">
                                <a href="#logout"
                                    className="btn btn-primary style-btnlogout"
                                    onClick={handleLogout}
                                >
                                    <h6 className="btnlogout-font-size">SAIR</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                </>
            )}

        </nav>

    )
};
export default Navbar;