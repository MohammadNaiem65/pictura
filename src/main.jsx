import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import { UserContextProvider } from './contexts/UserContext.jsx';
import router from './router/router.jsx';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <UserContextProvider>
                    <RouterProvider router={router} />
                </UserContextProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    </StrictMode>
);
