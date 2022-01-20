import React from 'react';
import {Button, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import './FormLogin.css';
import {errorsMessage, loginType} from "../../hooks/UserPopupLogin";
import {AuthContextType} from "../AuthProvider";

export  interface IFormLogin {
    user: string,
    password: string
}

const FormLogin = ({error, actionManager, user, loading}: AuthContextType) => {

    const {control, handleSubmit} = useForm<IFormLogin>({
        defaultValues: {
            password: '',
            user: '',
        }
    });

    const onSubmit: SubmitHandler<IFormLogin> = data => {
        actionManager({typeLogin: loginType.EMAIL, withEmail: data})
    };

    return (
        <form className="Form-login w-100" action="" onSubmit={handleSubmit(onSubmit)}>
            {!!error?.isError &&
            <p  className="error-text">{errorsMessage[error?.code]}</p>
            }
            <div className="Form-login__controller w-100">
                <Controller
                    name="user"
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                        <TextField className="w-100" label="Usuario" required={true} variant="standard"   {...field}/>
                    )}
                />
            </div>
            <div className="Form-login__controller w-100">
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                        <TextField className="w-100" type="password" required={true} label="Contraseña" variant="standard" {...field}/>
                    )}
                />
            </div>

            <div className="Form-login__btn w-100">
                <Button className="Form-login__btn-create w-100" type="submit" variant="contained">Iniciar</Button>
            </div>
        </form>

    );
};

export {FormLogin};
