
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ParallaxSection from '../components/ParallaxSection';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t.experience.gastronomy,
      tag: "Gastronomy",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
      desc: t.experience.gastronomyDesc,
      features: [t.experience.features.cooking, t.experience.features.wine, t.experience.features.oil]
    },
    {
      title: t.experience.culture,
      tag: "Culture",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200",
      desc: t.experience.cultureDesc,
      features: [t.experience.features.transfer, t.experience.features.cityTours, t.experience.features.priority],
      reversed: true
    },
    {
      title: t.experience.wellness,
      tag: "Relaxation",
      img: "https://images.unsplash.com/photo-1545208393-2160281b3f57?auto=format&fit=crop&q=80&w=1200",
      desc: t.experience.wellnessDesc,
      features: [t.experience.features.massage, t.experience.features.yoga, t.experience.features.trails]
    }
  ];

  return (
    <div className="bg-bg-cream">
      <ParallaxSection 
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920" 
        height="60vh"
        overlayOpacity="bg-black/30"
      >
        <div className="text-center px-6 max-w-4xl mx-auto scroll-reveal">
          <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-6 block">{t.experience.italianLiving}</span>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-8">{t.experience.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed italic">
            {t.experience.subtitle}
          </p>
        </div>
      </ParallaxSection>

      <div className="max-w-7xl mx-auto px-6 py-32 space-y-48">
        {experiences.map((exp, idx) => (
          <div key={exp.title} className={`flex flex-col ${exp.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 md:gap-24 scroll-reveal`}>
            <div className="lg:w-1/2 group relative">
              <div className="aspect-[3/2] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
            <div className="lg:w-1/2 text-left">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">{exp.tag}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-8 leading-tight">{exp.title}</h2>
              <p className="text-secondary/80 text-lg leading-relaxed mb-10">{exp.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exp.features.map(feat => (
                  <div key={feat} className="flex items-center gap-3 group/feat">
                    <span className="material-symbols-outlined text-primary text-xl group-hover/feat:scale-125 transition-transform">check_circle</span>
                    <span className="font-medium text-text-main">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
