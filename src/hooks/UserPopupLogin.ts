import React, {useState} from 'react';
import {signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {auth, facebookAuth, googleAuth} from "../services/firebase";
import {UserWaco} from "../components/AuthProvider";
import {IFormLogin} from "../components/FormLogin";
import {useNavigate} from 'react-router-dom'

export enum loginType {
    'GOOGLE' = 'GOOGLE',
    'FACEBOOK' = 'FACEBOOK',
    'EMAIL' = 'EMAIL',
    'REGISTER' = 'REGISTER',
    'LOGOUT' = 'LOGOUT'
}

export interface Error {
    code: errorsCode,
    message?: string
    isError: boolean
}

export interface ParamsLogin {
    typeLogin: loginType
    withEmail?: IFormLogin
}

enum errorsCode {
    'auth/email-already-exists' = 'auth/email-already-exists',
    'auth/account-exists-with-different-credential' = 'auth/account-exists-with-different-credential',
    'auth/email-already-in-use' = 'auth/email-already-in-use',
    'none' = 'none'
}

export const errorsMessage = {
    [errorsCode["auth/email-already-exists"]]: 'Ya existe un usuario con este correo',
    [errorsCode["auth/account-exists-with-different-credential"]]: 'Ya existe un usuario con este correo',
    [errorsCode["auth/email-already-in-use"]]: 'Ya existe un usuario con este correo',
    [errorsCode.none]: ''
}

export const userInitialState: UserWaco = {
    accessToken: '',
    displayName: '',
    emailVerified: false,
    isAnonymous: false,
    refreshToken: '',
}

function UseManagerUser() {
    let [user, setUser] = React.useState<any>(userInitialState);
    const [error, setError] = useState<Error>({isError: false, code: errorsCode.none})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    /**
     * @param error description del error que sucedio
     * @description aqui se setea los valores cuando las acciones terminan en error
     */
    const onError = (error: any) => {
        setLoading(false)
        setError({...error, isError: true})
        console.log('ERROR', error)
    }

    /**
     * @param user viene de la accion ejecutada anteriormente y se setea en el estade de user
     * @description aqui se setea cuando las acciones son satisfacrotias
     */
    const onSucess = (user: any) => {
        setLoading(false)
        setUser(user)
        setError({code: errorsCode.none, isError: false})
        navigate('/post')
    }

    const loginGoogle = () => {
        signInWithPopup(auth, googleAuth).then(
            result => {
                const user = result.user;
                onSucess(user)
            }
        ).catch(
            errorResponse => {
                onError(errorResponse)
            }
        )
    }

    const loginFacebook = () => {
        signInWithPopup(auth, facebookAuth).then(
            result => {
                const user = result.user;
                onSucess(user)
            }
        ).catch(
            errorResponse => onError(errorResponse)
        )
    }
    const loginWithEmail = async ({user: userName, password}: IFormLogin) => {

        try {
            const {user: userResponse} = await signInWithEmailAndPassword(auth, userName, password)
            onSucess(userResponse)

        } catch (errorResponse) {
            onError(errorResponse)
        }

    }

    const registerUser = async ({user, password}: IFormLogin) => {
        setLoading(true)
        try {
            const {user: userResponse} = await createUserWithEmailAndPassword(auth, user, password)
            onSucess(userResponse)
        } catch (error) {
            onError(error)
        }


    }

    const logout = async () => {
        try {
            await signOut(auth)
            setUser(userInitialState)
        } catch (e) {
            console.log(e)
        }
    }

    const loginOptions = {
        [loginType.GOOGLE]: loginGoogle,
        [loginType.FACEBOOK]: loginFacebook,
        [loginType.EMAIL]: loginWithEmail,
        [loginType.REGISTER]: registerUser,
        [loginType.LOGOUT]: logout
    }
    const actionManager = ({typeLogin, withEmail}: ParamsLogin) => {
        setLoading(true)
        // @ts-ignore
        loginOptions[typeLogin](withEmail)
    }


    return {
        actionManager,
        user,
        setUser,
        error,
        loading
    }
};



export {UseManagerUser};
