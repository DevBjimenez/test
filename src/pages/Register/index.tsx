import React from 'react';
import {FormRegister} from "../../components/FormRegister";
import './Register.css'
import {loginType} from "../../hooks/UserPopupLogin";
import {LoginSocialNetwork} from "../../components/LoginSocialNetworks";
import {useAuth} from "../../hooks/useAuth";
import {Link} from "react-router-dom";
const Register = () => {
    const auth = useAuth();
    const {actionManager} = auth;
    return (
        <main className="Register flex w-100">
            <div className="flex Register_form direction-column">
                <FormRegister {...auth}/>
                <LoginSocialNetwork
                    loginFacebook={() => actionManager({typeLogin: loginType.FACEBOOK})}
                    loginGoogle={() => actionManager({typeLogin: loginType.GOOGLE})}
                />
                <p>Ya tienes cuenta? <Link to="/login">Incia sesión</Link></p>
            </div>

        </main>
    );
};

export {Register};
