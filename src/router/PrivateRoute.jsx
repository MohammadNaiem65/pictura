import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function PrivateRoute({ children }) {
    const { user } = useContext(UserContext);

    if (user?.data?.id) {
        return children;
    } else {
        return <Navigate to='/login' />;
    }
}
