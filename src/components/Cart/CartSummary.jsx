import { useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import LoadingSpinner from '../shared/LoadingSpinner';

export default function CartSummary({ subtotal, shipping }) {
    const [showLoader, setShowLoader] = useState(false);
    const { setCart } = useContext(CartContext);

    const handleConfirmOrder = () => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
            localStorage.removeItem('cart');
            setCart([]);

            toast.success('Order confirmed! 🎉');
        }, 2200);
    };

    return showLoader ? (
        <LoadingSpinner />
    ) : (
        <div className='lg:col-span-1'>
            <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <span>Subtotal</span>
                        <span className='flex items-center gap-x-1'>
                            <FaBangladeshiTakaSign />
                            {subtotal?.toFixed(2)}
                        </span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Shipping</span>
                        <span>{shipping ? shipping?.toFixed(2) : 'Free'}</span>
                    </div>
                    <div className='border-t pt-2 mt-2'>
                        <div className='flex justify-between font-semibold'>
                            <span>Total</span>
                            <span className='flex items-center gap-x-1'>
                                <FaBangladeshiTakaSign />
                                {(subtotal + (shipping || 0)).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleConfirmOrder}
                    className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md mt-6 hover:bg-indigo-700 transition-colors'
                >
                    Order
                </button>
            </div>
        </div>
    );
}
