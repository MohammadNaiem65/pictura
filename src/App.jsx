import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import LoadingSpinner from './components/shared/LoadingSpinner';

function App() {
    return (
        <main className='min-h-screen'>
            <Navbar />

            <main className='min-h-[calc(100vh-20rem)] text-slate-700'>
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />

            <Toaster />
        </main>
    );
}

export default App;
