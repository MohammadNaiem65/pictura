import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useIsAuthenticated from './hooks/useIsAuthenticated';
import LoadingSpinner from './components/shared/LoadingSpinner';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function App() {
    const isAuthenticated = useIsAuthenticated();

    return !isAuthenticated ? (
        <LoadingSpinner />
    ) : (
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
