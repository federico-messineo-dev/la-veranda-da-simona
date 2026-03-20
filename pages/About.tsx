import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ParallaxSection from '../components/ParallaxSection';

const About: React.FC = () => {
  const { t } = useLanguage();

  const places = [
    { name: 'Ristorante Il Casale', img: '/images/ristorante-il-casale.webp' },
    { name: 'Monte Soratte', img: '/images/soratte.webp' },
    { name: 'Gole del Farfa', img: '/images/esperienze-2.webp' },
    { name: 'Lucus Feroniae', img: '/images/lucus-feroniae.webp' },
  ];

  return (
    <div className="bg-bg-cream overflow-hidden">
      {/* Story Hero */}
      <ParallaxSection 
        image="/images/chi-siamo-1.webp" 
        height="70vh"
        overlayOpacity="bg-black/50"
      >
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto scroll-reveal">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-widest mb-6">
            {t.about.story}
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-8">{t.about.welcome}</h1>
          <p className="text-white/90 text-xl font-serif italic">"{t.about.quote}"</p>
        </div>
      </ParallaxSection>

      {/* Simona Intro */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="scroll-reveal text-left">
            <h3 className="font-serif text-4xl text-primary mb-8 leading-tight">{t.about.ciao}</h3>
            <div className="w-20 h-1 bg-secondary mb-10"></div>
            <p className="text-text-main text-lg leading-relaxed mb-8 font-light italic">
              {t.about.text1}
            </p>
            <p className="text-text-main text-lg leading-relaxed mb-12 font-light">
              {t.about.text2}
            </p>
            <p className="font-hand text-5xl text-primary -rotate-3 inline-block mb-12">Simona</p>
            
            <div className="flex gap-12 border-t border-stone-200 pt-10">
              <div className="flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-secondary mb-2">auto_awesome</span>
                <p className="text-xs uppercase tracking-widest text-secondary/60 font-bold">{t.about.years}</p>
              </div>
              <div className="flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-secondary mb-2">favorite</span>
                <p className="text-xs uppercase tracking-widest text-secondary/60 font-bold">{t.about.happyGuests}</p>
              </div>
            </div>
          </div>
          <div className="relative group scroll-reveal">
            <div className="relative rounded-t-full overflow-hidden border-[12px] border-white shadow-2xl aspect-[4/5] transform transition-transform duration-1000 group-hover:scale-105">
              <img src="/images/chi-siamo-2.webp" alt="Simona" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl max-w-[280px] border border-stone-100 hidden md:block group-hover:-translate-y-2 transition-transform duration-500 text-left">
              <span className="text-primary text-6xl font-serif leading-none mb-2 block"></span>
              <p className="font-serif text-lg italic text-text-main leading-snug">{t.about.hospitalityQuote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Cards */}
      <section className="py-32 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">{t.about.heritage}</span>
            <h2 className="font-serif text-4xl md:text-6xl text-text-main">{t.about.heritageTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'History', icon: 'history_edu', desc: t.about.heritageHistory },
              { title: 'Design', icon: 'architecture', desc: t.about.heritageDesign },
              { title: 'The Garden', icon: 'yard', desc: t.about.heritageGarden }
            ].map(item => (
              <div key={item.title} className="bg-bg-cream p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-500 group scroll-reveal text-left">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-serif text-3xl mb-6 text-text-main">{item.title}</h3>
                <p className="text-secondary/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capena Grid */}
      <section className="py-32 bg-bg-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 scroll-reveal">
            <div className="max-w-xl text-left">
              <h2 className="font-serif text-4xl md:text-6xl text-text-main mb-8">{t.about.myCapena}</h2>
              <p className="text-secondary text-lg leading-relaxed">
                {t.about.capenaDesc}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.map((place, idx) => (
              <div key={place.name} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl scroll-reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <img src={place.img} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-left">
                  <span className="material-symbols-outlined text-white text-3xl mb-3">explore</span>
                  <h4 className="text-white font-serif text-2xl font-bold">{place.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;