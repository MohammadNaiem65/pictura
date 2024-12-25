import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { user } = useContext(UserContext);
    const location = useLocation();

    if (user?.data?.id) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
}
