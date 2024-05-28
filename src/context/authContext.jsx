import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    
    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8802/backend/auth/login", inputs, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    const logout = async (inputs) => {
        await axios.post("http://localhost:8802/backend/auth/logout");
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}