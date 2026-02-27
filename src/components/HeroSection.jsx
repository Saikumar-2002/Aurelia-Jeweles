import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-900">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.webp"
                    alt="Luxury Jewelry Collection"
                    className="w-full h-full object-cover object-center opacity-60 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-charcoal-900/30 to-charcoal-900/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">

                {/* Small Tagline */}
                <span className="block text-gold-500 tracking-[0.3em] text-xs md:text-sm uppercase font-semibold mb-6 animate-fade-in-up">
                    The New Heritage Collection
                </span>

                {/* Main Headline */}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 leading-[1.1] drop-shadow-lg">
                    Elegance, <br className="md:hidden" />
                    <span className="italic text-champagne-100 font-light">Redefined.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-champagne-200 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
                    Discover exceptionally crafted fine jewellery designed to illuminate every moment with timeless grace.
                </p>

                {/* CTA Button */}
                <Link
                    to="/products"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gold-400 text-gray-400 overflow-hidden transition-all duration-500 hover:border-gold-500 hover:text-charcoal-900"
                >
                    {/* Hover background slide effect */}
                    <span className="absolute inset-0 w-full h-full -ml-full bg-gold-500 hover:ml-0 transition-all duration-500 ease-out z-0 group-hover:ml-0 group-hover:block"></span>
                    <span className="absolute inset-0 w-0 bg-white-500 transition-all duration-[400ms] ease-out group-hover:w-full z-0"></span>

                    <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-semibold flex items-center gap-3">
                        Explore Collection
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-gold-500/60 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
