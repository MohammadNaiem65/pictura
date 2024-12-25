import { BsMailbox } from 'react-icons/bs';
import { MdOutlinePinDrop } from 'react-icons/md';
import { TiPhoneOutline } from 'react-icons/ti';

export default function Contact() {
    return (
        <div className='py-16'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Contact Us
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='py-7 flex flex-col items-center text-center group duration-300 hover:bg-blue-100'>
                        <BsMailbox className='h-8 w-8 group-hover:text-indigo-600 mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>Email</h3>
                        <p className='text-gray-600'>support@artcraft.com</p>
                    </div>
                    <div className='py-7 flex flex-col items-center text-center group duration-300 hover:bg-blue-100'>
                        <TiPhoneOutline className='h-8 w-8 group-hover:text-indigo-600 mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>Phone</h3>
                        <p className='text-gray-600'>+1 (555) 123-4567</p>
                    </div>
                    <div className='py-7 flex flex-col items-center text-center group duration-300 hover:bg-blue-100'>
                        <MdOutlinePinDrop className='h-8 w-8 group-hover:text-indigo-600 mb-4' />
                        <h3 className='text-xl font-semibold mb-2'>Address</h3>
                        <p className='text-gray-600'>
                            123 Craft Street
                            <br />
                            Artisan City, AC 12345
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
