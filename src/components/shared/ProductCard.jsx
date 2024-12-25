import { RiShoppingCartLine } from 'react-icons/ri';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img
                src={product.picture}
                alt={product.name}
                className='w-full h-48 object-cover'
            />
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-900'>
                    {product.name}
                </h3>

                <StarRating rating={product.rating} />
                <div className='mt-4 flex items-center justify-between'>
                    <span className='text-indigo-600 font-bold'>
                        ${product.price}
                    </span>
                    <button className='flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors'>
                        <RiShoppingCartLine className='h-4 w-4' />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
