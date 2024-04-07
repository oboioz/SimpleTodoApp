import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)



export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)


    function login(username, password) {
        if (username === 'username' && password === 'password') {
            setAuthenticated(true)
            setUsername(username)
            return true
        }
        else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login }}>
            {children}
        </AuthContext.Provider>
    );
}
