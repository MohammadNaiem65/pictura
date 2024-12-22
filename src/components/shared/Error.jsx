import { FiAlertCircle } from 'react-icons/fi';

export default function Error({ message }) {
    return (
        <div className='flex items-center justify-center h-64'>
            <div className='flex items-center gap-2 text-red-600'>
                <FiAlertCircle className='w-6 h-6' />
                <p className='text-lg'>{message}</p>
            </div>
        </div>
    );
}
