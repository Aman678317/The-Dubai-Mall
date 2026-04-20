import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, Crown } from 'lucide-react';

export const SponsorshipSection = () => {
  return (
    <section id="sponsorship" className="relative py-32 bg-luxury-dark2 overflow-hidden border-t border-luxury-gold/5">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-6 font-bold"
          >
            ◈ Strategic Integration
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl font-display font-light leading-tight mb-8"
          >
            Sponsorship & <em className="italic font-light text-luxury-gold bg-transparent">Partnerships</em>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-luxury-muted font-light leading-[1.8] text-lg"
          >
             Embed your brand into the architectural consciousness of Dubai Mall. Own the narrative for millions of daily visitors through high-impact, long-term sponsorships.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { tier: "Gold", title: "Activation Partner", desc: "Short-term immersive pop-ups and localized brand dominance in high-traffic zones.", icon: Star },
            { tier: "Platinum", title: "Category Exclusive", desc: "Category-exclusive branding across entire districts, dominating complete verticals.", icon: Award },
            { tier: "Title Sponsor", title: "Naming Rights", desc: "The ultimate tier. Put your name on permanent landmark architecture and attractions.", icon: Crown, highlight: true }
          ].map((item, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className={`p-10 rounded-xl flex flex-col items-start border relative overflow-hidden group ${item.highlight ? 'bg-luxury-gold/5 border-luxury-gold/40' : 'bg-white/5 border-white/10 hover:border-luxury-gold/50 transition-colors'}`}
             >
               {item.highlight && <div className="absolute top-0 right-0 p-4 opacity-10"><Crown size={120} /></div>}
               <item.icon size={32} className={`${item.highlight ? 'text-luxury-gold' : 'text-white/40 group-hover:text-luxury-gold transition-colors'} mb-6`} />
               <div className={`text-[10px] tracking-widest uppercase font-bold mb-2 ${item.highlight ? 'text-luxury-gold' : 'text-white/40'}`}>{item.tier}</div>
               <h3 className="text-2xl font-display text-white mb-4">{item.title}</h3>
               <p className="text-sm text-white/60 font-light leading-[1.7] mb-8 flex-grow">{item.desc}</p>
               
               <button className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                 Learn More <span>→</span>
               </button>
             </motion.div>
          ))}
        </div>

        <div className="text-center">
            <button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-transparent border border-luxury-gold text-luxury-gold font-sans font-bold uppercase tracking-[0.2em] text-[0.75rem] hover:bg-luxury-gold hover:text-black transition-all"
            >
                Partner With Us
            </button>
        </div>
      </div>
    </section>
  );
};
