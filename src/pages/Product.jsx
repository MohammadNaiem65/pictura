import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

import useAxiosSecure from '../hooks/useAxiosSecure';
import CartContext from '../contexts/CartContext';
import StarRating from '../components/shared/StarRating';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import Error from '../components/shared/Error';
import toast from 'react-hot-toast';

export default function Product() {
    const { cart, setCart } = useContext(CartContext);
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products/${id}`);
            return res.data;
        },
    });
    const { name, picture, description, price, rating } = data || {};

    const handleAddToCart = () => {
        const existingBook = cart?.find((bk) => bk.id === id);
        let updatedCart;

        if (existingBook) {
            updatedCart = cart.map((bk) =>
                bk.id === id ? { ...bk, quantity: bk.quantity + 1 } : bk
            );
        } else {
            updatedCart = [...cart, { ...data, quantity: 1 }];
        }

        toast.success('Added to cart');
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return isLoading ? (
        <LoadingSpinner />
    ) : isError ? (
        <Error message={error?.response?.data || error?.message} />
    ) : (
        isSuccess && (
            <section className='min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-4xl mt-14 mx-auto bg-white rounded-2xl shadow-xl overflow-hidden'>
                    <div className='md:flex p-8'>
                        {/* Book Image Section */}
                        <div className='md:w-1/2 flex items-start justify-start bg-gray-50'>
                            <img
                                src={picture}
                                alt={name}
                                className='w-full max-w-sm h-[32rem] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'
                            />
                        </div>

                        {/* Book Details Section */}
                        <div className='md:w-1/2 pl-3'>
                            <h1 className='mt-2 text-3xl font-bold text-gray-900 leading-tight'>
                                {name}
                            </h1>

                            <div className='mt-4 flex items-center'>
                                <StarRating rating={rating} />
                                <span className='ml-2 text-gray-600'>
                                    ({rating})
                                </span>
                            </div>

                            {/* <span>{}</span> */}

                            <p className='mt-4 text-gray-600 leading-relaxed'>
                                {description}
                            </p>

                            <div className='mt-8 flex items-center justify-between'>
                                <span className='text-3xl font-bold text-gray-900 flex items-center gap-x-1'>
                                    <FaBangladeshiTakaSign />
                                    {price.toFixed(2)}
                                </span>
                                <button
                                    onClick={handleAddToCart}
                                    className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}
