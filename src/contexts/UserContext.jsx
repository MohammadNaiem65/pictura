import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState({ data: null });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
