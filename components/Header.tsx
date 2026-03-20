
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.house, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.experience, path: '/experience' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-bg-cream/95 backdrop-blur-md shadow-lg py-1' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          {/* Logo dinamico: bianco su sfondo scuro, originale su sfondo chiaro */}
          <img 
            src="images/logo-main.jpeg" 
            alt="La Veranda Da Simona Logo" 
            className={`h-16 md:h-24 lg:h-32 w-auto transition-all duration-500 ${!isScrolled ? 'brightness-0 invert opacity-90' : 'hover:scale-105'}`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                isScrolled ? 'text-text-main' : 'text-white/90 hover:text-white'
              } ${location.pathname === link.path ? 'border-b-2 border-primary' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l border-secondary/20 pl-6 ml-2">
            <button 
              onClick={() => setLanguage('en')}
              className={`text-xs font-black transition-all flex items-center gap-1 ${language === 'en' ? 'text-primary scale-110' : (isScrolled ? 'text-text-main/50' : 'text-white/50')}`}
            >
              <span>🇬🇧</span> EN
            </button>
            <span className="text-secondary/40 text-xs">|</span>
            <button 
              onClick={() => setLanguage('it')}
              className={`text-xs font-black transition-all flex items-center gap-1 ${language === 'it' ? 'text-primary scale-110' : (isScrolled ? 'text-text-main/50' : 'text-white/50')}`}
            >
              <span>🇮🇹</span> IT
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden md:flex bg-primary hover:bg-primary-dark transition-all px-8 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:-translate-y-1"
          >
            {t.nav.book}
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-text-main hover:bg-stone-200' : 'text-white hover:bg-white/10'}`}
          >
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-cream border-b border-secondary/10 absolute w-full top-full left-0 animate-fade-in shadow-2xl overflow-hidden">
          <nav className="flex flex-col px-8 py-10 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`text-2xl font-serif font-bold ${location.pathname === link.path ? 'text-primary' : 'text-text-main'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 border-t border-stone-200 pt-8 mt-4">
               <button onClick={() => {setLanguage('it'); setIsMobileMenuOpen(false);}} className={`text-lg flex items-center gap-2 ${language === 'it' ? 'font-black text-primary' : 'text-secondary/60'}`}>
                 <span>🇮🇹</span> Italiano
               </button>
               <button onClick={() => {setLanguage('en'); setIsMobileMenuOpen(false);}} className={`text-lg flex items-center gap-2 ${language === 'en' ? 'font-black text-primary' : 'text-secondary/60'}`}>
                 <span>🇬🇧</span> English
               </button>
            </div>
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-primary text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/30"
            >
              {t.nav.book}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
