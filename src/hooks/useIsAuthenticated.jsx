import { useState, useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import UserContext from '../contexts/UserContext';

export default function useIsAuthenticated() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { setAuthToken } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    // Check if the user is authenticated
    useEffect(() => {
        const existingCred = JSON.parse(localStorage.getItem('auth'));

        if (existingCred?.accessToken && existingCred?.user?.id) {
            // Set the auth token and user
            setAuthToken({ token: existingCred.accessToken });
            setUser({ data: existingCred.user });
        }

        setIsAuthenticated(true);
    }, [setAuthToken, setUser]);

    return isAuthenticated;
}
