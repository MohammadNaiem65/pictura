import { Link } from 'react-router-dom';
import { BsBoxSeam } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { RiLoginCircleLine, RiShoppingCartLine } from 'react-icons/ri';
import logoImg from '../../assets/logo.jpg';

export default function Navbar() {
    return (
        <nav className='px-8 py-4 border-b-2 flex justify-between items-center relative'>
            <img className='size-16' src={logoImg} alt='logo' />

            <h2 className='title-animation text-3xl text-transparent font-bold font-oswald object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                PICTURA
            </h2>

            {/* Navigation Links */}
            <div className='flex items-center gap-6'>
                <Link
                    to='/'
                    className='flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors'
                >
                    <GoHome className='w-5 h-5' />
                    <span>Home</span>
                </Link>

                <Link
                    to='/all-products'
                    className='flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors'
                >
                    <BsBoxSeam className='w-5 h-5 text-[#3B82F6]' />
                    <span>All Products</span>
                </Link>

                {/* Cart Icon */}
                <div className='relative group'>
                    <Link
                        to='/cart'
                        className='flex items-center text-gray-600 hover:text-gray-900 transition-colors gap-x-2'
                    >
                        <div className='relative'>
                            <RiShoppingCartLine className='w-5 h-5' />
                            <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                8
                            </span>
                        </div>
                        Cart
                    </Link>
                </div>

                <Link
                    to='/login'
                    className='flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors'
                >
                    <RiLoginCircleLine className='w-5 h-5' />
                    <span>Login</span>
                </Link>
            </div>
        </nav>
    );
}
