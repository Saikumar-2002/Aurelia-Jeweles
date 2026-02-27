import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-charcoal-900 text-champagne-50 pt-16 pb-8 border-t border-gold-400/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="font-serif text-2xl tracking-widest mb-4">
                            AURELIA <span className="text-gold-500 italic">Jewels</span>
                        </h2>
                        <p className="text-sm text-champagne-200/70 leading-relaxed font-light">
                            Crafting timeless luxury and unspeakable elegance for the modern woman. Every piece tells a story of brilliance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-gold-500">Explore</h3>
                        <ul className="space-y-3 text-sm font-light text-champagne-200">
                            <li><Link to="/products" className="hover:text-white transition-colors">Our Collection</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Bespoke Design</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">High Jewellery</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Gifts</a></li>
                        </ul>
                    </div>

                    {/* Client Care */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-gold-500">Client Care</h3>
                        <ul className="space-y-3 text-sm font-light text-champagne-200">
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-gold-500">The Insider</h3>
                        <p className="text-sm text-champagne-200/70 leading-relaxed font-light mb-4">
                            Subscribe to receive updates on new arrivals and exclusive collections.
                        </p>
                        <form className="flex border-b border-champagne-200/30 pb-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-none outline-none w-full text-sm text-champagne-50 placeholder:text-champagne-200/50"
                            />
                            <button type="submit" className="text-gold-500 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-champagne-200/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-champagne-200/50">
                    <p>&copy; {new Date().getFullYear()} Aurelia Jewels. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <p>made with ❤️ by SKY</p>
                        <a href="#" className="hover:text-champagne-50 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-champagne-50 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
