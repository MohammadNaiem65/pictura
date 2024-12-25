import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImg from '../../assets/banner.jpg';

export default function Banner() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    };

    return (
        <section className='relative min-h-[calc(100vh-5rem)] flex items-center justify-center'>
            {/* Background Image with Overlay */}
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url(${bannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-black/40' />
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-4xl mx-auto px-4 text-center'>
                <h1
                    style={{
                        backgroundSize: 'contain',
                        backgroundPosition: 'center right',
                    }}
                    className='text-5xl md:text-7xl font-bold  mb-6 leading-tight bg-clip-text text-transparent font-oswald bg-[url(https://imgs.search.brave.com/iplO1nmAmDliLNHdao68V2Eu8d0ANVE_wOfzyEqqXM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU0LzcyLzYy/LzM2MF9GXzI1NDcy/NjI3MV9XdjJCdzlm/dVdhUUpNZDkySlF3/a0JEQkoyanpEbnN0/QS5qcGc)]'
                >
                    PICTURA
                </h1>

                <p className='text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto'>
                    A next gen e-commerce platform for digital art, instruments, music, collectibles, and more.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto'
                >
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Search for "Canvas"'
                        className='flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                        required
                    />
                    <button
                        type='submit'
                        className='px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group'
                    >
                        Search
                        <FaArrowRightLong className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </button>
                </form>
            </div>
        </section>
    );
}
