import { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [filter, setFilter] = useState('All');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Scroll to top when landing on collection page
        window.scrollTo(0, 0);
        // Simple mount animation trigger
        setIsLoaded(true);
    }, []);

    const categories = ['All', ...new Set(productsData.map(p => p.category))];

    const filteredProducts = filter === 'All'
        ? productsData
        : productsData.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-champagne-50 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h1 className="font-serif text-5xl md:text-6xl text-charcoal-900 mb-6 tracking-wide">
                        The <span className="italic text-gold-600 font-light">Collection</span>
                    </h1>
                    <p className="text-charcoal-800/70 font-light text-lg">
                        A luminous curation of masterfully crafted rings, necklaces, earrings, and bracelets. Discover the artistry behind every silhouette.
                    </p>
                </div>

                {/* Filter Navigation */}
                <div className={`flex flex-wrap justify-center gap-6 md:gap-12 mb-16 border-b border-gold-400/20 pb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 relative ${filter === category
                                    ? 'text-gold-600 font-semibold'
                                    : 'text-charcoal-800/60 font-medium hover:text-charcoal-900'
                                }`}
                        >
                            {category}
                            {filter === category && (
                                <span className="absolute -bottom-6 flex w-full justify-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 block"></span>
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Product Grid Responsive (4 desktop, 2 tablet, 1 mobile) */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="animate-fade-in-up">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Products;
