import { FaStar, FaRegStarHalfStroke, FaRegStar } from 'react-icons/fa6';

export default function StarRating({ rating }) {
    return (
        <div className='flex gap-1'>
            {[...Array(5)].map((_, index) =>
                rating >= index + 1 ? (
                    <FaStar
                        key={index}
                        className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                ) : rating >= index + 0.5 ? (
                    <FaRegStarHalfStroke
                        key={index}
                        className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                ) : (
                    <FaRegStar key={index} className='w-4 h-4 text-gray-300' />
                )
            )}
        </div>
    );
}
