
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Interiors', 'Garden', 'The Veranda'];
  
  const images = [
    { id: 1, src: '/images/interni-1.webp', cat: 'Interiors' },
    { id: 2, src: '/images/interni-2.webp', cat: 'Interiors' },
    { id: 3, src: '/images/interni-3.webp', cat: 'Interiors' },
    { id: 4, src: '/images/interni-4.webp', cat: 'Interiors' },
    { id: 5, src: '/images/interni-5.webp', cat: 'Interiors' },
    { id: 6, src: '/images/interni-6.webp', cat: 'Interiors' },
    { id: 7, src: '/images/interni-7.webp', cat: 'Interiors' },
    { id: 8, src: '/images/interni-8.webp', cat: 'Interiors' },
    { id: 9, src: '/images/interni-9.webp', cat: 'Interiors' },
    { id: 10, src: '/images/interni-10.webp', cat: 'Interiors' },
    { id: 11, src: '/images/interni-11.webp', cat: 'Interiors' },
    { id: 12, src: '/images/interni-12.webp', cat: 'Interiors' },
    { id: 13, src: '/images/interni-13.webp', cat: 'Interiors' },
    { id: 14, src: '/images/interni-14.webp', cat: 'Interiors' },
    { id: 15, src: '/images/interni-15.webp', cat: 'Interiors' },
    { id: 16, src: '/images/interni-16.webp', cat: 'Interiors' },
    { id: 17, src: '/images/giardino-1.webp', cat: 'Garden' },
    { id: 18, src: '/images/giardino-2.webp', cat: 'Garden' },
    { id: 19, src: '/images/giardino-3.webp', cat: 'Garden' },
    { id: 20, src: '/images/giardino-4.webp', cat: 'Garden' },
    { id: 21, src: '/images/giardino-5.webp', cat: 'Garden' },
    { id: 22, src: '/images/giardino-6.webp', cat: 'Garden' },
    { id: 23, src: '/images/giardino-7.webp', cat: 'Garden' },
    { id: 24, src: '/images/giardino-8.webp', cat: 'Garden' },
    { id: 25, src: '/images/home-4.webp', cat: 'Garden' },
    { id: 26, src: '/images/chi-siamo-1.webp', cat: 'The Veranda' },
    { id: 27, src: '/images/veranda-2.webp', cat: 'The Veranda' },
    { id: 28, src: '/images/veranda-3.webp', cat: 'The Veranda' },
    { id: 29, src: '/images/veranda-4.webp', cat: 'The Veranda' },
    { id: 30, src: '/images/veranda-5.webp', cat: 'The Veranda' },
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.cat === activeFilter);

  return (
    <div className="pt-32 pb-24 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            {t.gallery.journey}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-text-main mb-6">{t.gallery.title}</h1>
          <p className="text-secondary/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === cat 
                  ? 'bg-primary border-primary text-white shadow-lg' 
                  : 'bg-white border-stone-200 text-text-main hover:border-primary/30'
              }`}
            >
              {t.gallery.cats[cat.toLowerCase().replace("the ", "")] || cat}
            </button>
          ))}
        </div>

        {/* Grid with dynamic hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((img, idx) => (
            <div 
              key={img.id} 
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <img 
                src={img.src} 
                alt={img.cat} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">{img.cat}</p>
                  <div className="w-12 h-1 bg-white mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
