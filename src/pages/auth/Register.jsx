import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: async () =>
            axiosSecure.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password,
            }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.name || !data.email || !data.password) {
            return toast.error('All fields are required');
        } else if (data.password.length < 6) {
            return toast.error('Password must be at least 6 characters');
        } else if (data.password !== data.confirmPassword) {
            return toast.error('Passwords do not match');
        }

        mutate();
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Registration successful');
            navigate('/login');
        } else if (isError) {
            toast.error(error.response.data);
        }
    }, [isSuccess, isError, error, navigate]);

    return (
        <div className='pt-10 pb-14 bg-gray-100'>
            <div className='bg-white mx-auto p-8 rounded-lg shadow-lg max-w-md w-full'>
                <h2 className='title-animation text-2xl font-bold mb-6 text-center'>
                    Register
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Name</label>
                        <input
                            type='name'
                            value={data.name}
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input
                            type='email'
                            value={data.email}
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-700'>Password</label>
                        <input
                            type='password'
                            value={data.password}
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-700'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            value={data.confirmPassword}
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    confirmPassword: e.target.value,
                                }))
                            }
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={isPending}
                        className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors'
                    >
                        Register
                    </button>
                </form>

                <div className='text-center mt-2'>
                    <Link
                        to='/login'
                        className='font-medium text-blue-600 hover:text-blue-500'
                    >
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
