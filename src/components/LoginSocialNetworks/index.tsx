import React from 'react';
import {Button} from "@mui/material";
import './LoginSocialNetwork.css'
import facebook from '../../assets/images/facebook.png'
import google from '../../assets/images/google.png'
const LoginSocialNetwork = ({loginFacebook, loginGoogle}: ILoginSocialNetwork) => {
    return (
        <div className="LoginSocial w-100 flex direction-column">
            <Button className="LoginSocial-button" onClick={() =>loginGoogle()} variant="outlined" >
                <img src={google} alt="imagen del logo de google"/>Con Google
            </Button>
            <Button className="LoginSocial-button" onClick={() => loginFacebook()} variant="outlined" >
                <img src={facebook} alt="imagen del logo de facebook"/>Con Facebook
            </Button>
        </div>
    );
};

export interface ILoginSocialNetwork{
    loginFacebook: ()=> void;
    loginGoogle: ()=> void;
}

export {LoginSocialNetwork} ;
