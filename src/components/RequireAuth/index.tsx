import * as React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

function RequireAuth({ children }: { children: JSX.Element }) {
    let {user} = useAuth();
    let location = useLocation();

    if (!user.accessToken) {
        return <Navigate to="/login" state={{ from: location }} /> ;
    }

    return children;
}

export {RequireAuth}
