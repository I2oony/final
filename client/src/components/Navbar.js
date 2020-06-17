import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export  const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }

    return(
        <nav className={"navbar"}>
            <div>
                <div className={"navlogo"}><a href="/">SignLangs</a></div>
                <ul>
                    <li><NavLink to="/lessons">Уроки</NavLink></li>
                    <li><NavLink to="/forum">Форум</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выход</a></li>
                </ul>
            </div>
        </nav>
    )
}