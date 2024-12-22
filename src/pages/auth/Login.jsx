import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add authentication logic here, then navigate
        console.log('Email:', email, 'Password:', password);
        // Example: navigate to home after successful login
        navigate('/');
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
