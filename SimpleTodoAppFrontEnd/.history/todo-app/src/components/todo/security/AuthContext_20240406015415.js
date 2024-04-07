import { createContext } from "react";

const AuthContext = createContext();



export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}
