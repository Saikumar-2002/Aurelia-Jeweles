import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';

const BrandIntro = () => {
    return (
        <section className="py-24 md:py-32 bg-white flex items-center justify-center border-b border-gold-400/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="block text-gold-500 tracking-[0.3em] font-semibold text-xs md:text-sm uppercase mb-8">
                    Our Heritage
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-charcoal-900 leading-relaxed mb-10">
                    "Jewellery is not just an accessory. It is an expression of <span className="text-gold-500 italic">inner brilliance</span>."
                </h2>
                <div className="w-16 h-px bg-gold-400 mx-auto mb-10"></div>
                <p className="text-charcoal-800/70 font-light leading-loose text-lg max-w-2xl mx-auto">
                    For over three decades, Aurelia has been synonymous with exceptional craftsmanship and visionary design. We source only the finest, conflict-free materials to create heirloom pieces that transcend generations. Every cut, every polish, every setting is executed with uncompromising precision.
                </p>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div className="min-h-screen bg-champagne-50">
            <HeroSection />
            <BrandIntro />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
