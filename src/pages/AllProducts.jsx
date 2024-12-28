import SearchBar from '../components/AllProducts/SearchBar';

export default function AllProducts() {
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
                <SearchBar />
            </section>

            {/* Products Grid */}
        </main>
    );
}
