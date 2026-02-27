import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import NotFound from './NotFound';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProduct = productsData.find(p => p.id === id);
        setProduct(foundProduct || null);
        setLoading(false);
    }, [id]);

    if (loading) return <div className="min-h-screen bg-champagne-50 flex items-center justify-center">Loading...</div>;
    if (!product) return <NotFound />; // Render error page if ID is invalid

    return (
        <div className="min-h-screen bg-white pt-24 pb-24">

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-8 border-b border-gold-400/20">
                <div className="flex items-center text-xs tracking-widest uppercase font-medium text-charcoal-800/50 space-x-2">
                    <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-gold-500 transition-colors">Collection</Link>
                    <span>/</span>
                    <span className="text-charcoal-900">{product.name}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Product Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-champagne-50 aspect-[4/5] flex items-center justify-center pt-8 px-8 pb-16 sticky top-32">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover shadow-2xl shadow-charcoal-900/10"
                            />
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <span className="text-gold-500 uppercase tracking-[0.2em] font-semibold text-xs mb-4">
                            {product.category}
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl text-charcoal-900 mb-6 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-medium text-charcoal-800 mb-8 border-b border-gold-400/20 pb-8">
                            ${product.price.toLocaleString()}
                        </p>

                        <div className="prose prose-sm prose-p:text-charcoal-800/70 prose-p:font-light prose-p:leading-relaxed mb-10">
                            <p>{product.fullDescription}</p>
                        </div>

                        {/* Simulated Add to Bag */}
                        <button className="w-full bg-charcoal-900 text-white font-medium uppercase tracking-[0.2em] text-sm py-5 hover:bg-gold-600 transition-colors duration-300 mb-12">
                            Add to Bag
                        </button>

                        {/* Specifications Accordion (Static layout for simplicity) */}
                        <div className="border-t border-gold-400/20 pt-8">
                            <h3 className="font-serif text-2xl text-charcoal-900 mb-6">Details & Specifications</h3>
                            <dl className="space-y-4 text-sm font-light">
                                <div className="flex justify-between border-b border-champagne-200/50 pb-2">
                                    <dt className="text-charcoal-800 uppercase tracking-wider text-xs font-semibold">Material</dt>
                                    <dd className="text-charcoal-800/80">{product.material}</dd>
                                </div>
                                <div className="flex justify-between border-b border-champagne-200/50 pb-2">
                                    <dt className="text-charcoal-800 uppercase tracking-wider text-xs font-semibold">Gemstone</dt>
                                    <dd className="text-charcoal-800/80">{product.stoneType}</dd>
                                </div>
                                <div className="flex justify-between border-b border-champagne-200/50 pb-2">
                                    <dt className="text-charcoal-800 uppercase tracking-wider text-xs font-semibold">Weight</dt>
                                    <dd className="text-charcoal-800/80">{product.weight}</dd>
                                </div>
                                <div className="flex justify-between border-b border-champagne-200/50 pb-2">
                                    <dt className="text-charcoal-800 uppercase tracking-wider text-xs font-semibold">Craftsmanship</dt>
                                    <dd className="text-charcoal-800/80 text-right max-w-xs">{product.craftsmanship}</dd>
                                </div>
                            </dl>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
