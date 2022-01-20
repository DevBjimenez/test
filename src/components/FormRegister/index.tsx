import React from 'react';
import {Button, TextField} from "@mui/material";
import * as yup from "yup";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import './FormRegister.css';
import {yupResolver} from "@hookform/resolvers/yup";
import {AuthContextType} from "../AuthProvider";
import {errorsMessage, loginType} from "../../hooks/UserPopupLogin";

interface IFormRegister {
    user: string,
    password: string,
    comfirmPassword: string
}

const schema = yup.object().shape({
    user: yup.string().required('Usuario obligatorio'),
    password: yup.string().required('Contraseña obligatoria').min(6, 'Minimo 6 caracteres'),
    comfirmPassword: yup.string().required('Campo obligatorio')
        .oneOf([yup.ref('password')], 'Contraseñas no son iguales'),

}).required();

const FormRegister = ({error, actionManager, user, loading}: AuthContextType) => {

    const {control, handleSubmit} = useForm<IFormRegister>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormRegister> = data => {
        actionManager({typeLogin: loginType.REGISTER, withEmail :data})
    };

    return (
        <form className="Form-register" action="" onSubmit={handleSubmit(onSubmit)}>

            {!!error?.isError &&
                <p className="error-text">{errorsMessage[error?.code]}</p>
            }
            <div className="Form-register__controller">
                <Controller
                    name="user"
                    control={control}
                    defaultValue=""
                    render={({field, formState: {errors}}) => (
                        <TextField helperText={errors?.user?.message} label="Usuario" error={!!errors?.user} variant="standard"   {...field}/>
                    )}
                />
            </div>
            <div className="Form-register__controller">
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({field, formState: {errors}}) => (
                        <TextField helperText={errors?.password?.message} type="password" error={!!errors?.password} label="Contraseña" variant="standard" {...field}/>
                    )}
                />
            </div>
            <div className="Form-register__controller">
                <Controller
                    name="comfirmPassword"
                    control={control}
                    defaultValue=""
                    render={({field,formState: {errors}}) => (
                        <TextField helperText={errors?.comfirmPassword?.message} type="password" error={!!errors?.comfirmPassword} label="Confirmar Contraseña" variant="standard" {...field}/>
                    )}
                />
            </div>

            <div className="Form-register__btn">
                <Button className="Form-register__btn-create" type="submit" variant="contained">Crear</Button>
            </div>
        </form>

    );
};

export {FormRegister};
