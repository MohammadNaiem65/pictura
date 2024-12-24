import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function PublicRoute({ children }) {
    const { user } = useContext(UserContext);

    if (user?.data?.id) {
        return <Navigate to='/' />;
    } else {
        return children;
    }
}
