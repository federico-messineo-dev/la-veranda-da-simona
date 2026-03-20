
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: t.contact.subjects.general,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus(t.booking.success || "Grazie! Messaggio inviato.");
        setFormData({
          name: '',
          email: '',
          subject: t.contact.subjects.general,
          message: ''
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setFormStatus(t.booking.error || "Errore nell'invio. Riprova.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const faqs = t.contact.questions;

  return (
    <div className="pt-32 pb-24 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            {t.contact.getInTouch}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-text-main mb-6">{t.contact.title}</h1>
          <p className="text-secondary/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-32">
          {/* Contact Info */}
          <div className="space-y-8 scroll-reveal">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100 transition-all hover:shadow-2xl">
              <h3 className="font-serif text-2xl text-text-main mb-8">{t.contact.info}</h3>
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">location_on</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-text-main">{t.contact.address}</h4>
                    <p className="text-secondary/70 text-sm mt-1">Via Madonna Due Ponti, 96<br/>00060 Capena RM, Italia</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">call</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-text-main">{t.contact.phone}</h4>
                    <p className="text-secondary/70 text-sm mt-1">+39 329 333 4161</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">mail</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-text-main">{t.contact.email}</h4>
                    <p className="text-secondary/70 text-sm mt-1">laverandadasimona@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-12">
                <a 
                  href="https://api.whatsapp.com/send/?phone=393293334161&text=Buongiorno+vorrei+maggiori+informazioni&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-lg active:scale-95"
                >
                  <span className="material-symbols-outlined">forum</span>
                  {t.contact.whatsapp}
                </a>
                <a 
                  href="https://www.instagram.com/laverandadasimona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg active:scale-95"
                >
                  <span className="material-symbols-outlined">photo_camera</span>
                  {t.contact.instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 scroll-reveal">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100">
              <h3 className="font-serif text-3xl text-text-main mb-10 text-left">{t.contact.sendMessage}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary">{t.contact.name}</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border-stone-200 rounded-xl px-5 py-4 focus:ring-primary focus:border-primary outline-none transition-all" 
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary">{t.contact.email}</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border-stone-200 rounded-xl px-5 py-4 focus:ring-primary focus:border-primary outline-none transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary">{t.contact.subject}</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50 border-stone-200 rounded-xl px-5 py-4 focus:ring-primary focus:border-primary outline-none transition-all"
                  >
                    <option>{t.contact.subjects.general}</option>
                    <option>{t.contact.subjects.booking}</option>
                    <option>{t.contact.subjects.experience}</option>
                  </select>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary">{t.contact.message}</label>
                  <textarea 
                    name="message"
                    rows={5} 
                    required 
                    placeholder="..." 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50 border-stone-200 rounded-xl px-5 py-4 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                  <p className="text-xs text-secondary/50 italic">* We respond within 24 hours.</p>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full md:w-auto bg-primary text-white px-12 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin material-symbols-outlined text-sm">progress_activity</span>
                        {language === 'it' ? 'Invio in corso...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        {t.contact.sendBtn}
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </div>
                {formStatus && (
                  <div className="mt-4 p-4 bg-secondary/10 text-secondary font-bold rounded-xl animate-fade-in">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="scroll-reveal">
          <div className="text-center mb-16">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">help</span>
            <h2 className="font-serif text-4xl md:text-5xl text-text-main mb-4">{t.contact.faq}</h2>
            <p className="text-secondary/60">{t.contact.faqSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-white p-10 rounded-3xl border border-stone-200/50 hover:shadow-2xl transition-all duration-300 text-left group">
                <h4 className="font-serif text-xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">{faq.q}</h4>
                <p className="text-secondary/80 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
