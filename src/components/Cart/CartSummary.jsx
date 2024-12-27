export default function CartSummary({ subtotal, shipping }) {
    return (
        <div className='lg:col-span-1'>
            <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <span>Subtotal</span>
                        <span>${subtotal?.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Shipping</span>
                        <span>{shipping ? shipping?.toFixed(2) : 'Free'}</span>
                    </div>
                    <div className='border-t pt-2 mt-2'>
                        <div className='flex justify-between font-semibold'>
                            <span>Total</span>
                            <span>
                                ${(subtotal + (shipping || 0)).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
                <button className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md mt-6 hover:bg-indigo-700 transition-colors'>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
