import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)



export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)


    // function login(username, password) {
    //     if (username === 'username' && password === 'password') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }
    //     else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        try {

            const response = await executeBasicAuthenticationService(baToken)

            if (response.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = baToken
                        return config
                    }
                )

                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
