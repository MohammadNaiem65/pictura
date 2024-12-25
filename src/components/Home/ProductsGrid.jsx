import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ProductCard from '../shared/ProductCard';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import LoadingSpinner from '../shared/LoadingSpinner';
import Error from '../shared/Error';

export default function ProductGrid() {
    const axiosSecure = useAxiosSecure();

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useQuery({
        queryKey: 'products',
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                '/products?_sort=rating&_order=desc&_limit=4'
            );
            return data;
        },
    });

    let content;
    if (isLoading) {
        content = <LoadingSpinner />;
    } else if (!isLoading && isSuccess) {
        content = products?.map((product) => (
            <ProductCard key={product.id} product={product} />
        ));
    } else if (!isLoading && isError) {
        content = <Error message={error?.response?.data} />;
    }

    return (
        <section className='w-4/5 mx-auto px-4 py-16'>
            <div>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Featured Products
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    {content}
                </div>
            </div>
            <div className='text-center mt-12'>
                <Link
                    to='/all-products'
                    className='inline-flex items-center text-indigo-600 hover:text-indigo-700'
                >
                    View All Products
                    <BsArrowRight className='ml-2 h-5 w-5' />
                </Link>
            </div>
        </section>
    );
}
