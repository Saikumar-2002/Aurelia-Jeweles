import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className="group block cursor-pointer">
            <div className="bg-white rounded-sm overflow-hidden border border-gold-400/10 transition-all duration-400 ease-out hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-1">

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-champagne-100 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Quick View Overlay via CSS */}
                    <div className="absolute inset-0 bg-charcoal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="bg-white/90 backdrop-blur-sm text-charcoal-900 text-xs tracking-widest uppercase font-medium px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                            View Details
                        </span>
                    </div>
                </div>

                {/* Product Details */}
                <div className="p-5 text-center flex flex-col items-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gold-500 font-semibold mb-2">
                        {product.category}
                    </p>
                    <h3 className="font-serif text-lg text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300 line-clamp-1 mb-1">
                        {product.name}
                    </h3>
                    <p className="text-sm text-charcoal-800/60 font-light line-clamp-1 mb-3">
                        {product.shortDescription}
                    </p>
                    <p className="font-medium text-charcoal-900 tracking-wide">
                        ${product.price.toLocaleString()}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
