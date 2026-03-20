
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ParallaxSection from '../components/ParallaxSection';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        image="/images/home-1.jpg" 
        height="100vh"
        overlayOpacity="bg-black/40"
      >
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            {t.hero.location}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-8 leading-tight text-shadow-lg animate-fade-in-up">
            {t.hero.title}
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-light mb-12 text-shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {t.hero.subtitle}
          </p>
          
          {/* Contact Button instead of Booking Bar */}
          <div className="animate-fade-in-up flex justify-center" style={{ animationDelay: '400ms' }}>
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-primary-dark transition-all px-8 py-4 md:px-10 md:py-5 rounded-full text-white text-sm md:text-base font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
              {t.nav.book}
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-20 bg-bg-cream relative z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="scroll-reveal text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">{t.home.lifestyle}</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-main mb-8 leading-tight">{t.home.experienceCapena}</h2>
            <p className="text-secondary text-lg leading-relaxed mb-10 max-w-lg">
              {t.home.lifestyleDesc}
            </p>
            <div className="space-y-6 mb-12">
              {[
                { icon: 'storefront', label: t.home.tours },
                { icon: 'hiking', label: t.home.hiking },
                { icon: 'castle', label: t.home.historic }
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-default group">
                  <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </span>
                  <span className="font-medium text-text-main">{item.label}</span>
                </div>
              ))}
            </div>
            <Link to="/experience" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
              {t.home.discoverArea}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 scroll-reveal">
             <div className="space-y-4 md:space-y-8 mt-12">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img src="/images/home-2.jpg" alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="bg-stone-200/50 p-6 md:p-8 rounded-3xl border border-stone-300 hover:bg-white transition-colors duration-500 text-left">
                <h3 className="font-serif text-2xl text-primary mb-3">{t.home.slowLiving}</h3>
                <p className="text-secondary/80 text-sm leading-relaxed">{t.home.slowLivingDesc}</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-8">
              <div className="bg-primary/10 p-6 md:p-8 rounded-3xl border border-primary/20 hover:bg-white transition-colors duration-500 text-left">
                <h3 className="font-serif text-2xl text-secondary mb-3">{t.home.flavors}</h3>
                <p className="text-text-main/80 text-sm leading-relaxed">{t.home.flavorsDesc}</p>
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img src="/images/home-3.jpg" alt="Landscape" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Parallax */}
      <ParallaxSection image="/images/home-4.jpg" height="50vh">
          <div className="max-w-4xl mx-auto px-6 text-center text-white scroll-reveal">
            <span className="material-symbols-outlined text-5xl mb-8">local_florist</span>
            <h2 className="font-serif text-3xl md:text-5xl mb-10 leading-tight italic">
              "{t.about.quote}"
            </h2>
            <p className="text-lg md:text-xl font-serif leading-relaxed opacity-80">
            {t.home.retreatDescription}
            </p>
          </div>
      </ParallaxSection>

      {/* Find Us Section */}
      <section className="py-32 px-6 md:px-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 scroll-reveal text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">{t.home.locationTag}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-8">{t.home.findUs}</h2>
            <p className="text-secondary text-lg leading-relaxed mb-12">
              {t.home.locationDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-secondary group-hover:text-white">directions_car</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main">{t.home.byCar}</h4>
                  <p className="text-sm text-secondary/70 mt-1">{t.home.byCarDesc}</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-secondary group-hover:text-white">train</span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main">{t.home.byTrain}</h4>
                  <p className="text-sm text-secondary/70 mt-1">{t.home.byTrainDesc}</p>
                </div>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Via+Madonna+Due+Ponti+96+00060+Capena+RM+Italia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary pb-1 flex items-center gap-2 group transition-all"
            >
              {t.home.getDirections}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
            </a>
          </div>
          <div className="lg:w-1/2 aspect-square md:aspect-video lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl scroll-reveal border-8 border-white bg-stone-200">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.1557957453747!2d12.553002477237087!3d42.10413405123022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6c3d27b65319%3A0x8f48364c6bf0804d!2sVia%20Madonna%20Due%20Ponti%2C%2096%2C%2000060%20Colle%20del%20Fagiano%20RM!5e0!3m2!1sit!2sit!4v1772302057855!5m2!1sit!2sit"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
