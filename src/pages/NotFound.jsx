import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-champagne-50 flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-lg">
                <h1 className="font-serif text-6xl md:text-8xl text-gold-500 mb-6 font-light">404</h1>
                <h2 className="font-serif text-3xl text-charcoal-900 mb-6">Piece Not Found</h2>
                <p className="text-charcoal-800/70 font-light text-lg mb-10 leading-relaxed">
                    The piece you are looking for has been sold from our collection or does not exist. Please return to the gallery to explore our current offerings.
                </p>
                <Link
                    to="/products"
                    className="inline-block border border-gold-500 text-gold-600 px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-gold-500 hover:text-white transition-colors duration-300"
                >
                    Return to Collection
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
