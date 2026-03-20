
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 border-t border-secondary/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-8 hover:scale-105 transition-transform duration-300">
              <img src="images/logo-main.jpeg"  alt="La Veranda Da Simona" className="h-32 w-auto" />
            </Link>
            <p className="text-secondary/80 max-w-sm mb-8 leading-relaxed text-lg italic">
              Il tuo rifugio rustico-chic alle porte di Roma. Vivi l'autentica ospitalità italiana con tutti i comfort moderni.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/laverandadasimona' },
                { name: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=393293334161&text=Buongiorno+vorrei+maggiori+informazioni&type=phone_number&app_absent=0' }
              ].map(social => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-stone-200 text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-bold text-xs uppercase tracking-widest"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-primary mb-8 tracking-tight">Esplora</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-secondary/70 hover:text-primary transition-colors font-medium">La Casa</Link></li>
              <li><Link to="/experience" className="text-secondary/70 hover:text-primary transition-colors font-medium">Esperienze</Link></li>
              <li><Link to="/gallery" className="text-secondary/70 hover:text-primary transition-colors font-medium">Galleria Fotografica</Link></li>
              <li><Link to="/about" className="text-secondary/70 hover:text-primary transition-colors font-medium">Chi Siamo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-primary mb-8 tracking-tight">Contatti</h4>
            <ul className="space-y-5 text-secondary/70">
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">location_on</span>
                <span className="text-sm">Via Madonna Due Ponti, 96<br/>00060 Capena RM, Italia</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                <a href="mailto:laverandadasimona@gmail.com" className="text-sm hover:text-primary transition-colors">laverandadasimona@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
                <a href="tel:+393293334161" className="text-sm hover:text-primary transition-colors font-bold">+39 329 333 4161</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-secondary/40 uppercase tracking-widest">
          <p>© 2026 La Veranda Da Simona. Tutti i diritti riservati.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
