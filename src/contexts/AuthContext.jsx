import { useState, createContext } from 'react';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState({ token: null });

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;