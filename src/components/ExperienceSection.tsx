import React from 'react';
import { motion } from 'motion/react';

interface ExperienceSectionProps {
  data?: {
    title: string;
    headline: string;
    subtext: string;
    media?: { url: string };
  };
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  // Hard override for The Couture Collection
  const title = "The Couture Collection";
  const headline = "A Tapestry of Elegance and Exclusivity.";
  const subtext = "Discover fashion's most revered houses. The Couture Collection brings together the pinnacle of luxury, exquisite craftsmanship, and bespoke services, creating a sanctuary for true connoisseurs of style.";

  return (
    <section id="experience" className="relative min-h-[90vh] flex items-center overflow-hidden py-0 border-t border-luxury-gold/5">
      <div className="absolute inset-0 z-0 bg-black pointer-events-none">
         <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/YUdl2liHMPA?si=bKp8hy50_3wKmcro&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=YUdl2liHMPA" 
            title="The Couture Collection Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            className="absolute inset-0 w-full h-full object-cover scale-[1.15] opacity-60"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/70 to-transparent pointer-events-none" />
         <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/95 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[600px] py-12"
        >
          <p className="text-[10px] tracking-[0.45em] text-luxury-gold mb-6 font-bold uppercase">◈ {title}</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-[3.2rem] font-display mb-8 font-light leading-[1.3]"
          >
            A <em className="italic text-luxury-gold bg-transparent font-light">Tapestry</em> of Elegance and Exclusivity.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base text-luxury-cream/80 font-light leading-[1.9] max-w-[480px] mb-10"
          >
            {subtext}
          </motion.p>

          <motion.a 
            href="#dining"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block bg-transparent border border-luxury-gold text-luxury-gold px-11 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all hover:-translate-y-0.5 hover:bg-luxury-gold hover:text-black"
          >
            Continue the Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
