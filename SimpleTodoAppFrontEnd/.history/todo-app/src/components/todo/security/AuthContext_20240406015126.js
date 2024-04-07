import { createContext } from "react";

const AuthContext = createContext();



function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ isAuthenticated: false }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };