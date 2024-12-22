import { BiLoader } from 'react-icons/bi';

export default function LoadingSpinner() {
    return (
        <div className='flex justify-center items-center h-64'>
            <BiLoader className='w-12 h-12 text-indigo-600 animate-spin' />
        </div>
    );
}
