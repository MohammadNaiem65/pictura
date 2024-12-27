import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBoxSeam } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { RiLoginCircleLine, RiShoppingCartLine } from 'react-icons/ri';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import AuthContext from '../../contexts/AuthContext';
import logoImg from '../../assets/logo.jpg';

export default function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const { setAuthToken } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

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
        <nav className='px-8 py-4 border-b-2 flex justify-between items-center relative'>
            <img className='size-16' src={logoImg} alt='logo' />

            <h2 className='title-animation text-3xl text-transparent font-bold font-oswald object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                PICTURA
            </h2>

            {/* Navigation Links */}
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
        </nav>
    );
}
