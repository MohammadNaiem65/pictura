import { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { RiShoppingCartLine } from 'react-icons/ri';
import CartContext from '../../contexts/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
    const { id, name, picture, price, rating } = product;
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const existingProduct = cart?.find((pr) => pr.id === id);
        let updatedCart;

        if (existingProduct) {
            updatedCart = cart.map((pr) =>
                pr.id === id
                    ? {
                          ...pr,
                          quantity: pr.quantity === 5 ? 5 : pr.quantity + 1,
                      }
                    : pr
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success('Added to cart');
    };

    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden group'>
            <Link to={`/all-products/${id}`}>
                <img
                    src={picture}
                    alt={name}
                    className='w-full h-48 object-cover group-hover:scale-105 duration-300'
                />
            </Link>
            <div className='p-4'>
                <Link
                    to={`/all-products/${id}`}
                    className='text-lg font-semibold text-gray-900 line-clamp-2 hover:underline'
                >
                    {name}
                </Link>

                <StarRating rating={rating} />
                <div className='mt-4 flex items-center justify-between'>
                    <span className='text-indigo-600 font-bold flex items-center'>
                        <FaBangladeshiTakaSign />
                        {price}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className='flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors'
                    >
                        <RiShoppingCartLine className='h-4 w-4' />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
