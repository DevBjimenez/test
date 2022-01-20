import * as React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import {LoginPage} from "./pages/Login";
import {AuthProvider} from "./components/AuthProvider";
import {HomePage} from "./pages/Home";
import {PostPage} from "./pages/Post";
import {Layout} from "./components/Layout";
import {RequireAuth} from "./components/RequireAuth";
import {createTheme, ThemeProvider} from "@mui/material";
import {Register} from "./pages/Register";

export default function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route
                            path="/post"
                            element={
                                <RequireAuth>
                                    <PostPage/>
                                </RequireAuth>
                            }
                        />
                    </Route>
                </Routes>
            </ThemeProvider>

        </AuthProvider>
    );
}


const theme = createTheme({
       palette: {
        primary: {
            main: "#00f792",
        },
        secondary: {
            main: "#ffffff",
            light: "#00f792",
            dark: "#930bb8"
        },

        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
            disabled: "#456"

        },
        mode: 'dark',

    }
});

