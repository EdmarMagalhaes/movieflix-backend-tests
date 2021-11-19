import { getAccessTokenDecoded, logout } from "core/utils/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./styles.scss";

const Navbar = () => {

    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);


    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>
            </div>
            {currentUser && (
                <>
                    <div className="col-1 position-emailuser">{currentUser}</div>
                    <div className="col-1 position-btnlogout">
                        <a  href="#logout"
                            className="btn btn-primary style-btnlogout"
                            onClick={handleLogout}
                            >
                            <h6 className="btnlogout-font-size">SAIR</h6>
                            
                        </a>
                    </div>
                </>
            )}

        </nav>

    )
};
export default Navbar;