import { IoSearch } from 'react-icons/io5';

export default function SearchBar({ searchQuery, onSearch }) {
    return (
        <div className='relative max-w-2xl mx-auto'>
            <input
                type='text'
                placeholder='Search products...'
                className='w-full px-4 py-3 pl-12 text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={searchQuery || ''}
                onChange={onSearch}
            />
            <IoSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
        </div>
    );
}
