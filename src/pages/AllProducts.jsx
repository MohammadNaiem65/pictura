import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import SearchBar from '../components/AllProducts/SearchBar';
import ProductCard from '../components/shared/ProductCard';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import Error from '../components/shared/Error';

export default function AllProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const axiosSecure = useAxiosSecure();

    const {
        data: products,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/products`);
            return data;
        },
        keepPreviousData: true,
    });

    let content;
    if (isFetching) {
        content = (
            <div className='mx-auto'>
                <LoadingSpinner />
            </div>
        );
    } else if (!isFetching && isSuccess) {
        const filteredProducts = products?.filter((book) =>
            searchParams.get('query') === null
                ? true
                : book?.name
                      ?.toLowerCase()
                      ?.includes(
                          searchParams.get('query')?.toLowerCase().trim()
                      )
        );

        content =
            filteredProducts?.length === 0 ? (
                <div className='text-center py-12'>
                    <p className='text-gray-600 mb-4'>
                        No products found with the search query &quot;
                        <strong>{searchParams.get('query')}</strong>&quot;
                    </p>
                </div>
            ) : (
                <section className='mb-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {filteredProducts?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            );
    } else if (!isFetching && isError) {
        content = <Error message={error?.response?.data || error?.message} />;
    }

    const onSearch = (e) => {
        setSearchParams(
            (prev) => {
                if (e.target.value) {
                    prev.set('query', e.target.value);
                } else {
                    prev.delete('query');
                }
                return prev;
            },
            { replace: true }
        );
    };

    return (
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            {/* Hero Section with Search */}
            <section className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                    Find Perfect Tool For Your Art
                </h2>
                <p className='text-gray-600 mb-8'>
                    Browse through our collection of premium products
                </p>
                <SearchBar
                    searchQuery={searchParams.get('query')}
                    onSearch={onSearch}
                />
            </section>

            {/* Products Grid */}
            {content}
        </main>
    );
}
