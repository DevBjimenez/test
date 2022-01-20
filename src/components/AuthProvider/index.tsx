import * as React from "react";
import {Error, ParamsLogin, UseManagerUser} from "../../hooks/UserPopupLogin";


export interface AuthContextType {
    user: UserWaco,
    actionManager: ({typeLogin, withEmail}: ParamsLogin) => void;
    error: Error,
    loading: boolean
}

export const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({children}: { children: React.ReactNode }) {
    const {actionManager, user, setUser, loading, error} = UseManagerUser()

    let value = {user, actionManager, loading, error};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export interface UserWaco {
    emailVerified?: boolean;
    isAnonymous?: boolean;
    metadata?: any;
    displayName?: string;
    accessToken?: string;
    refreshToken?: string;
    email?: string;
    uid?: string;
}

export {AuthProvider}
