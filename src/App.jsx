import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(
            `https://api.unsplash.com/photos?page=1&count=10&client_id=${
                import.meta.env.VITE_UNSPLASH_ACCESSKEY
            }`
        )
            .then((response) => response.json())
            .then((data) => setPhotos(data));
    }, []);

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);

        fetch(
            `https://api.unsplash.com/photos?page=${page}&count=10&client_id=${
                import.meta.env.VITE_UNSPLASH_ACCESSKEY
            }`
        )
            .then((response) => response.json())
            .then((data) => setPhotos([...photos, ...data]));
    };

    return (
        <main className='min-h-screen pb-10 text-slate-900 bg-[#F7F7F7]'>
            <Navbar />

            <section className='columns-[300px] px-8 py-5 space-y-4'>
                {photos.map((photo) => (
                    <img
                        src={photo.urls.regular}
                        alt={photo.description}
                        key={photo.id}
                        className=''
                    />
                ))}
            </section>

            {photos.length > 0 && (
                <button
                    className='mx-auto mt-2 px-4 py-2 border-2 border-slate-900 block font-semibold duration-300 hover:text-white hover:bg-slate-700 hover:rounded'
                    onClick={handleLoadMore}
                >
                    Load More
                </button>
            )}
        </main>
    );
}

export default App;
