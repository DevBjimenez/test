import React from 'react';
import {Link} from "react-router-dom"
import {useAuth} from "../../hooks/useAuth";
import './Header.css'
import {Box, Button} from "@mui/material";
import logo from "../../assets/images/logo-completo.svg"
import {loginType} from "../../hooks/UserPopupLogin";


const Header = () => {
    const {user, actionManager} = useAuth();

    return (
        <Box component="nav" sx={{
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            <section className="Header-content">
                <figure>
                    <img src={logo} alt=""/>
                </figure>

                <div className="flex flex-item-center">
                    <ul className="options">
                        <li>
                            <Link to="/">
                                INICIO
                            </Link>
                        </li>
                        <li><Link to="/post">
                            POST
                        </Link></li>
                    </ul>
                    {!user.accessToken &&
                    <Link to="/login">
                        <button id="btn-login">Login</button>
                    </Link>
                    }

                    {user.accessToken &&
                    <div className="flex flex-item-center">
                        <Button
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={() => actionManager({typeLogin: loginType.LOGOUT})}> Salir</Button>
                        <span className="m-l-20">{user.displayName || user.email}</span>
                    </div>

                    }
                </div>
            </section>

        </Box>
        // <p>
        //     Welcome {auth.user}!{" "}
        //     <button
        //         onClick={() => {
        //             auth.signout(() => navigate("/"));
        //         }}
        //     >
        //         Sign out
        //     </button>
        // </p>
    );
};

export {Header};
