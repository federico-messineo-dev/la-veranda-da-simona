
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Interiors', 'Garden', 'The Veranda', 'Surroundings'];
  
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800', cat: 'Interiors' },
    { id: 2, src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800', cat: 'Garden' },
    { id: 3, src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800', cat: 'The Veranda' },
    { id: 4, src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800', cat: 'Surroundings' },
    { id: 5, src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', cat: 'Interiors' },
    { id: 6, src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800', cat: 'Garden' },
    { id: 7, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', cat: 'The Veranda' },
    { id: 8, src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800', cat: 'Surroundings' },
    { id: 9, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800', cat: 'Interiors' },
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
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 scroll-reveal"
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

        <div className="mt-20 text-center scroll-reveal">
          <button className="bg-white border border-stone-200 hover:border-primary text-text-main px-10 py-4 rounded-full font-bold flex items-center gap-3 mx-auto transition-all hover:scale-105 active:scale-95 shadow-md">
            {t.gallery.loadMore}
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
