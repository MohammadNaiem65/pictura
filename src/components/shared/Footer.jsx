import { Link } from 'react-router-dom';
import { BsBoxSeam } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { RiShoppingCartLine, RiLoginCircleLine } from 'react-icons/ri';
import logoImg from '../../assets/logo.jpg';

export default function Footer() {
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
