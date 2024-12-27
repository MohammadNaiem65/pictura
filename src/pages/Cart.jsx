import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft } from 'react-icons/fa6';
import CartContext from '../contexts/CartContext';
import CartSummary from '../components/Cart/CartSummary';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className='max-w-7xl mx-auto px-4 py-16'>
            <h1 className='text-3xl font-bold mb-8'>Shopping Cart</h1>

            {cart?.length === 0 ? (
                <div className='text-center py-12'>
                    <p className='text-gray-600 mb-4'>Your cart is empty</p>
                    <Link
                        to='/all-products'
                        className='inline-flex items-center text-indigo-600 hover:text-indigo-700'
                    >
                        <FaArrowLeft className='mr-2 h-5 w-5' />
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2 divide-y-2'>
                        {cart?.map((item) => (
                            <div
                                key={item.id}
                                className='flex items-center space-x-4 py-4'
                            >
                                <img
                                    src={item.picture}
                                    alt={item.name}
                                    className='w-24 h-24 object-cover rounded'
                                />
                                <div className='flex-1'>
                                    <h3 className='font-semibold'>
                                        {item.name}
                                    </h3>
                                    <p className='text-gray-600'>
                                        ${item.price}
                                    </p>
                                    <div className='mt-2 flex items-center space-x-2'>
                                        <select
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateQuantity(
                                                    item.id,
                                                    parseInt(e.target.value)
                                                )
                                            }
                                            className='border rounded p-1'
                                        >
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <option key={num} value={num}>
                                                    {num}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className='text-red-600 hover:text-red-700'
                                        >
                                            <FaTrash className='h-5 w-5' />
                                        </button>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <p className='font-semibold'>
                                        ${(item.price * 1).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <CartSummary subtotal={subtotal} shipping={0} />
                </div>
            )}
        </div>
    );
}
