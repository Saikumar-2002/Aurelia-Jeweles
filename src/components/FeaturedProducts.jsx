import productsData from '../data/products.json';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    // Select first 4 products for featured section
    const featured = productsData.slice(0, 4);

    return (
        <section className="py-24 bg-champagne-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-gold-500 uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">
                            Curated Selection
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 leading-tight">
                            Featured <span className="italic font-light">Brilliance</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <Link
                            to="/products"
                            className="group flex items-center gap-2 text-charcoal-800 font-medium tracking-widest text-sm uppercase hover:text-gold-600 transition-colors duration-300"
                        >
                            View All
                            <span className="block w-8 h-[1px] bg-charcoal-800 group-hover:bg-gold-600 group-hover:w-12 transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;
