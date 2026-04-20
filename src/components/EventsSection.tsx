import React from 'react';
import { motion } from 'motion/react';
import { Calendar, UserPlus, Zap } from 'lucide-react';

export const EventsSection = () => {
  return (
    <section id="events" className="relative py-32 bg-luxury-black overflow-hidden border-t border-luxury-gold/10">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-6 font-bold"
            >
              ◈ Unrivaled Spectacle
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-tight mb-6"
            >
              A Global Stage <em className="italic font-light text-luxury-gold bg-transparent">for Events</em>
            </motion.h2>
            <div className="w-[60px] h-[1px] bg-luxury-gold origin-left hidden md:block"></div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-6 py-4 bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg text-center backdrop-blur-md mb-6"
            >
              <div className="text-3xl font-display text-luxury-gold mb-1">500+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-luxury-cream">Events Annually</div>
            </motion.div>
            <button className="px-10 py-4 bg-luxury-gold text-luxury-black font-sans font-bold uppercase tracking-[0.15em] text-[0.7rem] hover:bg-luxury-gold-light transition-all">
              Book Your Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { tag: "Concerts", title: "Live Performances", desc: "Stadium-sized audiences in the heart of our premium atrium and outdoor fountain park.", img: "https://images.openai.com/static-rsc-4/wB4Ek8ZNxbpSlJTfd19xsE7vDnlY_fCnoKgNyerBEWna8MJw5Ek5lBfqcuO6WinMhOsMlJ2bU3JCJUAqWFLmEQRdxEM86rtNMtPj1vkraaRTc9ygBW3kH-FHAqTZYnP-lON9-rFXDO19NPdpMJvArO8dd4jFSQRoUvt2BUox9jQbyLnZO7Up-3h7Akot-u9j?purpose=fullsize" },
            { tag: "Brand Activations", title: "Immersive Campaigns", desc: "Capture 100% share-of-voice through bespoke pop-ups and full-scale installations.", img: "https://images.openai.com/static-rsc-4/8HQ-UKvm1qYs4fq992GWeF6xn040rsKxQTUMiDl8yJYy4SlpWpKA5chid3pce6UeiFvP7mi7SbQS7Abtg_jUd2lCz9v3KRPzCaqUNoDmhkdV-Tk26AnC_Qs1I87yQCzXNCBUYhV3KSA_pKRG_qLNbGDGr8mhl4DfUf1pjvBesvqCWxZiZt3cSuEdZZwZ1TPh?purpose=fullsize" },
            { tag: "Product Launches", title: "Global Premieres", desc: "Unveil your newest line with spectacular backdrops seen by millions instantly.", img: "https://images.openai.com/static-rsc-4/nOJtwFjFPFAGaAmfrcZfKCAnw_H6PFYkYLEmqrak7Nm-hThsMmHpt3rF3otR0olX_boFhLPl8_L-d-NmMpYiNbAaCefbAkVh5Db85vTNxZ20kaBFcYjtIkImC2TiVI3vD6sWZcHA661DxqC66TPHeth52a-FESnAwQJQ0w4kQL8w2dUQPhgN3bUX_bYQdZ97?purpose=fullsize" }
          ].map((item, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group shadow-2xl"
             >
               <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
               <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] tracking-widest uppercase mb-4 self-start rounded-full">
                    {item.tag}
                 </div>
                 <h4 className="text-2xl font-display mb-3 text-white">{item.title}</h4>
                 <p className="text-sm text-white/70 font-light leading-[1.6] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   {item.desc}
                 </p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
