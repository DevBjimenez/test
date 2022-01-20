import * as React from "react";
import {useAuth} from "../../hooks/useAuth";
import {loginType} from "../../hooks/UserPopupLogin";
import './Login.css'
import {FormLogin} from "../../components/FormLogin";
import {LoginSocialNetwork} from "../../components/LoginSocialNetworks";
import {Link} from "react-router-dom";


function LoginPage() {
    const auth = useAuth();
    const {actionManager} = auth;
    return (
        <main className="Login flex">
            <div className="Login__content flex direction-column">
                <FormLogin {...auth}/>
                <LoginSocialNetwork
                    loginFacebook={() => actionManager({typeLogin: loginType.FACEBOOK})}
                    loginGoogle={() => actionManager({typeLogin: loginType.GOOGLE})}
                />
                <p>No tienes cuenta? <Link to="/register">Crea una</Link></p>
            </div>

        </main>
    );
}

export {LoginPage}
