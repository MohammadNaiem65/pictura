import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { setAuthToken } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const { mutate } = useMutation({
        mutationFn: async () => {
            const response = await axiosSecure.post('/login', {
                email,
                password,
            });

            return response.data;
        },
        onSuccess: (data) => {
            setAuthToken({ token: data.accessToken });
            setUser({ data: data.user });

            localStorage.setItem('auth', JSON.stringify(data));

            navigate(location?.state?.from?.pathname || '/');
        },
        onError: (error) => {
            toast.error(error.response.data);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutate();
    };

    return (
        <div className='pt-32 pb-28 flex items-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                <h2 className='title-animation text-2xl font-bold mb-6 text-center'>
                    Login
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors'
                    >
                        Login
                    </button>
                </form>

                <div className='text-center mt-2'>
                    <Link
                        to='/register'
                        className='font-medium text-blue-600 hover:text-blue-500'
                    >
                        Don&apos;t have an account? Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
