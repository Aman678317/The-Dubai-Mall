import React from 'react';
import { motion } from 'motion/react';

export const ShoppingSection = () => {
  const brands = [
    { name: "Gucci", img: "https://images.openai.com/static-rsc-4/nOJtwFjFPFAGaAmfrcZfKCAnw_H6PFYkYLEmqrak7Nm-hThsMmHpt3rF3otR0olX_boFhLPl8_L-d-NmMpYiNbAaCefbAkVh5Db85vTNxZ20kaBFcYjtIkImC2TiVI3vD6sWZcHA661DxqC66TPHeth52a-FESnAwQJQ0w4kQL8w2dUQPhgN3bUX_bYQdZ97?purpose=fullsize" },
    { name: "Louis Vuitton", img: "https://images.openai.com/static-rsc-4/1MJ1VnA62s9NyRBpCEEr70kUX_dyJ47URgqkailleOGRQjZu_k5nbG6gY9raIqwhouTL_LUpBduSnKdYkcmIwI1PElaHYUo1PGvEf16NyBAyubceYvY5Vm4VPJnSBMnBsxL_RlaObh-9DNYB50MEAHhJUWQGChG0iVsv9c3sc2zMHN1mH10zg2tRD8gM1mym?purpose=fullsize" },
    { name: "Apple", img: "https://images.openai.com/static-rsc-4/BbZjMfWGBNxUCBo1i8sKNsyhE-uQPDoipZUDzm9DXJ8ZituBDhxbF0GfL0-t1QbSAUQTXoteBHuBl7UvMfnl9QDdZeB0Ov_jpf2C0HOYJ0dkObDpUZRZHb5v3l5I62cdnq2qNQojLa5qFwzq7RK5Vrf3bdSO9luAQf3-U0aJ6WOsNa6AU1ygE7mnqZcPZ2-g?purpose=fullsize" },
    { name: "Zara", img: "https://images.openai.com/static-rsc-4/8HQ-UKvm1qYs4fq992GWeF6xn040rsKxQTUMiDl8yJYy4SlpWpKA5chid3pce6UeiFvP7mi7SbQS7Abtg_jUd2lCz9v3KRPzCaqUNoDmhkdV-Tk26AnC_Qs1I87yQCzXNCBUYhV3KSA_pKRG_qLNbGDGr8mhl4DfUf1pjvBesvqCWxZiZt3cSuEdZZwZ1TPh?purpose=fullsize" },
    { name: "Rolex", img: "https://images.openai.com/static-rsc-4/ABlDIoJx_WBkzs9BAHC-eoAxqp4_pqGr7TF46hl0QY4Ic6kVOnu7R45RX_1O8lyN7n3CQBV237YNyL9hS9_P_lcIIcU2DAEq_wtp-VesM2Mh9gt0JkiCwatoxHZ_PS2IUX0PtpAo9yJwK5mP_BWQrs6cVRv3eKDCr-88Be-gVBRdy27-QXJQa01DCyLvaFkD?purpose=fullsize"}
  ];

  return (
    <section id="shopping" className="relative py-32 bg-luxury-black overflow-hidden border-t border-luxury-gold/5">
      <div className="max-w-[1300px] mx-auto px-6 mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4 font-bold"
        >
          ◈ Luxury Retail
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl font-display mb-6 font-light leading-tight mt-0"
        >
          Home to the world’s most <br/><em className="italic font-light text-luxury-gold bg-transparent">powerful retail brands</em>
        </motion.h2>
      </div>

      <div className="w-full overflow-hidden pb-12 cursor-ew-resize">
        <div className="flex gap-6 px-6 md:px-20 animate-[scrollHorizontal_40s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {brands.concat(brands).map((item, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden group w-[300px] md:w-[400px] h-[450px] shadow-2xl rounded-sm"
            >
              <img 
                src={item.img} 
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-luxury-gold/10">
                <div className="absolute w-[120%] h-[120%] bg-luxury-gold/20 blur-3xl rounded-full scale-[0.5] group-hover:scale-[1] transition-transform duration-700"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="font-display text-3xl font-light text-luxury-cream">{item.name}</div>
                <div className="w-8 h-px bg-luxury-gold mt-4 mb-2 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 mt-12 flex justify-center">
        <motion.a 
          href="#cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-luxury-black border border-luxury-gold text-luxury-gold px-12 py-5 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-luxury-gold hover:text-luxury-black"
        >
          Inquire About Leasing
        </motion.a>
      </div>
    </section>
  );
};
