import React, {useState} from 'react';
import {auth} from "../services/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {FormLogin, IFormLogin} from "../components/FormLogin";

const UseCreateUser = () => {
    const [error, setError] = useState<Error>({isError: false})
    const [loading, setLoading] = useState(false)
    const [newUser, setNewUser] = useState({})
    const createUser = async ({user, password}: IFormLogin) => {
        setLoading(true)
        try {
           const {user: userResponse} = await createUserWithEmailAndPassword(auth, user, password)
            setLoading(false)
            setNewUser(userResponse)
        }catch (error) {
            setLoading(false)
            // @ts-ignore
            setError({...error, isError: true})
        }


    }

    return {
        createUser,
        error,
        loading,
        newUser
    }
}

export interface Error {
    code?: string,
    message?: string
    isError: boolean
}

export {UseCreateUser};
