import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AttractionsSection } from './components/AttractionsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FoodDiningSection } from './components/FoodDiningSection';
import { ShoppingSection } from './components/ShoppingSection';
import { VisitorInfoMapSection } from './components/VisitorInfoMapSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
import { SearchOverlay } from './components/SearchOverlay';
import { ChatWidget } from './components/ChatWidget';
import { InvestmentSimulator } from './components/InvestmentSimulator';
import { EventsSection } from './components/EventsSection';
import { SponsorshipSection } from './components/SponsorshipSection';
import { YouTubeBackground } from './components/YouTubeBackground';
import { motion } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sections, setSections] = useState<any[]>([]);
  const [highlights, setHighlights] = useState<any>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sectionsRes, highlightsRes] = await Promise.all([
          fetch('/api/sections').then(res => res.json()),
          fetch('/api/highlights').then(res => res.json())
        ]);
        setSections(Array.isArray(sectionsRes) ? sectionsRes : []);
        setHighlights(highlightsRes);
      } catch (err) {
        console.error("Failed to fetch initial data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Intersection Observer for Active Section
    const observers: IntersectionObserver[] = [];
    const sectionIds = ['hero', 'about', 'shopping', 'experience', 'dining', 'attractions', 'events', 'sponsorship', 'cta'];
    
    setTimeout(() => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  setActiveSection(id);
                }
              });
            },
            { threshold: 0.3 }
          );
          observer.observe(element);
          observers.push(observer);
        }
      });
    }, 500); // Give elements time to mount

    // Global Search Shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-luxury-black min-h-screen flex items-center justify-center">
        <div className="text-luxury-gold animate-pulse text-xs tracking-[0.5em] uppercase">
          Initializing Cinematic Experience...
        </div>
      </div>
    );
  }

  const heroData = sections.find(s => s.id === 'hero');
  const experienceData = sections.find(s => s.id === 'experience' || s.id === 'couture');

  return (
    <div className="bg-luxury-black min-h-screen text-luxury-cream">
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      
      {/* Floating Side Deck Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4 items-center">
         {[
           { id: 'hero', label: 'Start' },
           { id: 'about', label: 'Overview' },
           { id: 'shopping', label: 'Retail' },
           { id: 'experience', label: 'Luxury' },
           { id: 'dining', label: 'Dining' },
           { id: 'attractions', label: 'Entertainment' },
           { id: 'events', label: 'Events' },
           { id: 'sponsorship', label: 'Sponsorship' },
           { id: 'cta', label: 'Contact' }
         ].map(dot => (
           <button 
             key={dot.id}
             onClick={() => document.getElementById(dot.id)?.scrollIntoView({ behavior: 'smooth' })}
             className={`w-2 h-2 rounded-full transition-colors relative group ${activeSection === dot.id ? 'bg-luxury-gold scale-125' : 'bg-white/20 hover:bg-luxury-gold'}`}
           >
             <span className={`absolute right-6 top-1/2 -translate-y-1/2 transition-opacity text-[10px] uppercase tracking-widest text-luxury-gold whitespace-nowrap px-2 py-1 bg-black/80 rounded ${activeSection === dot.id ? 'opacity-100 block' : 'opacity-0 hidden group-hover:block group-hover:opacity-100'}`}>
               {dot.label}
             </span>
           </button>
         ))}
         <div className="w-px h-16 bg-white/10 mt-4 hidden xl:block"></div>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ChatWidget />
      
      <main>
        <HeroSection data={heroData} highlights={highlights} />
        <AboutSection />
        
        {/* Business Strategic Layer */}
        <section className="py-24 bg-luxury-dark border-y border-luxury-gold/10 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black pointer-events-none">
             <YouTubeBackground videoId="BOG_CbEDhag" overlayOpacity={0.8} />
             <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark via-transparent to-transparent"></div>
          </div>
          <div className="max-w-[1300px] mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <p className="text-[10px] tracking-[0.45em] text-luxury-gold mb-4 font-bold uppercase">◈ Global Business Opportunities</p>
                <h2 className="text-4xl md:text-5xl font-display mb-8 font-light italic">Market <span className="text-luxury-gold">Potential</span> & Projections</h2>
                <p className="text-luxury-muted font-light leading-relaxed mb-8 text-lg mx-auto">
                  Connect your brand to the world's most influential audience. Use our simulator to explore growth potentials across our premier commercial districts.
                </p>
              </motion.div>
            </div>
            
            <InvestmentSimulator />
          </div>
        </section>

        <ShoppingSection />
        <AttractionsSection />
        <ExperienceSection data={experienceData} />
        <FoodDiningSection />
        <EventsSection />
        <SponsorshipSection />
        <VisitorInfoMapSection />
        
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
