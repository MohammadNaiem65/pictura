import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBoxSeam } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { RiShoppingCartLine, RiLoginCircleLine } from 'react-icons/ri';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import AuthContext from '../../contexts/AuthContext';
import logoImg from '../../assets/logo.jpg';

export default function Footer() {
    const { user, setUser } = useContext(UserContext);
    const { cart } = useContext(CartContext);
    const { setAuthToken } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('auth');

        setUser({ data: null });
        setAuthToken({ token: null });
    };

    const totalQuantity = cart?.reduce(
        (total, curr) => total + curr.quantity,
        0
    );

    return (
        <footer className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
            <div className='sm:flex sm:items-center sm:justify-between'>
                <a
                    href={'https://flowbite.com/'}
                    className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
                >
                    <img
                        src={logoImg}
                        className='size-16'
                        alt='Flowbite Logo'
                    />
                    <span className='title-animation self-center text-2xl font-semibold font-oswald whitespace-nowrap'>
                        PICTURA
                    </span>
                </a>

                <div className='flex items-center gap-6'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center gap-2 hover:text-blue-300 transition-colors ${
                                isActive ? 'text-blue-500' : 'text-gray-600'
                            }`
                        }
                    >
                        <GoHome className='w-5 h-5' />
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        to='/all-products'
                        className={({ isActive }) =>
                            `flex items-center gap-2 hover:text-blue-300 transition-colors ${
                                isActive ? 'text-blue-500' : 'text-gray-600'
                            }`
                        }
                    >
                        <BsBoxSeam className='w-5 h-5' />
                        <span>All Products</span>
                    </NavLink>

                    {/* Cart Icon */}
                    <div className='relative group'>
                        <NavLink
                            to='/cart'
                            className={({ isActive }) =>
                                `flex items-center gap-2 hover:text-blue-300 transition-colors ${
                                    isActive ? 'text-blue-500' : 'text-gray-600'
                                }`
                            }
                        >
                            <div className='relative'>
                                <RiShoppingCartLine className='w-5 h-5' />
                                {totalQuantity ? (
                                    <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                        {totalQuantity}
                                    </span>
                                ) : null}
                            </div>
                            Cart
                        </NavLink>
                    </div>

                    {user?.data?.id ? (
                        <button
                            className='flex items-center gap-2 text-gray-600 hover:text-blue-300 transition-colors'
                            onClick={handleLogout}
                        >
                            <RiLoginCircleLine className='w-5 h-5' /> Logout
                        </button>
                    ) : (
                        <NavLink
                            to='/login'
                            className={({ isActive }) =>
                                `flex items-center gap-2 hover:text-blue-300 transition-colors ${
                                    isActive ? 'text-blue-500' : 'text-gray-600'
                                }`
                            }
                        >
                            <RiLoginCircleLine className='w-5 h-5' />
                            <span>Login</span>
                        </NavLink>
                    )}
                </div>
            </div>
            <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
            <span className='block text-sm text-gray-500 sm:text-center'>
                © 2024{' '}
                <a href='https://flowbite.com/' className='hover:underline'>
                    PICTURA™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );
}
