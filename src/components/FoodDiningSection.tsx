import React from 'react';
import { motion } from 'motion/react';

export const FoodDiningSection = () => {
  return (
    <section id="dining" className="relative pb-32 pt-24 min-h-[90vh] flex flex-col justify-end overflow-hidden border-t border-luxury-gold/5">
      <div className="absolute inset-0 z-0 bg-black pointer-events-none">
         <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/JxCs7XnCLSw?si=3jtU4JUtwj9tqtzF&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=JxCs7XnCLSw" 
            title="Dining Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            className="absolute inset-0 w-full h-full object-cover scale-[1.15] opacity-50"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1300px] w-full mx-auto px-6">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10px] uppercase tracking-[0.45em] text-luxury-gold mb-4 font-bold"
          >
            ◈ Gastronomy
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl font-display mb-6 font-light leading-tight text-white max-w-2xl"
          >
            Dining & <em className="italic font-light text-luxury-gold bg-transparent">Lifestyle</em>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-[1rem] text-luxury-cream/80 font-light max-w-xl leading-[1.8]"
          >
            Explore over 200 premier restaurants and cafes offering global cuisines — from Michelin-starred chefs to authentic local flavours set against iconic backdrops.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Fine Dining", desc: "Michelin-starred concepts", img: "https://images.openai.com/static-rsc-4/wB4Ek8ZNxbpSlJTfd19xsE7vDnlY_fCnoKgNyerBEWna8MJw5Ek5lBfqcuO6WinMhOsMlJ2bU3JCJUAqWFLmEQRdxEM86rtNMtPj1vkraaRTc9ygBW3kH-FHAqTZYnP-lON9-rFXDO19NPdpMJvArO8dd4jFSQRoUvt2BUox9jQbyLnZO7Up-3h7Akot-u9j?purpose=fullsize" },
            { title: "Artisan Cafés", desc: "Mastercrafted coffee & patisserie", img: "https://images.openai.com/static-rsc-4/hXsMRnTB48sJPPPmfHh_woDquo_AQK7ohzXrypyMkmWfwU8uc3vWCuT1HOD6qF0RRtfL1SuBB14UzZwHzC-UyDTtxxszhHzBGXP4xDt_JMjB9y_hF4w8KBklJf-N8yQMR2BaZvSXMijrM2L8C77mm6ewsf7g32JKFKtMbT_DNts6MOMM7Vtai4YISKLot1uo?purpose=fullsize" },
            { title: "Exclusive Venues", desc: "Private dining & VIP experiences", img: "https://images.openai.com/static-rsc-4/E4_SPQNj3VEaqAzJHVUD8JvX0w8M9GDAlRucp8dLTYIPO8bbdJ9x6QVF0hzLTDO1D8-0FIQhmch90p_kU9ZkbrlWD4zWCgU8oWT9d7I9YkTKJ_IMB-unNm_OQ5wOY1ZSflb1m7keHViH_YI-xM_LUzgFefailYEwZzQnNm7tBaVJQpIkT7016iicZ_Q_AcWz?purpose=fullsize" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative overflow-hidden group rounded-lg h-48 md:h-64 border border-white/10"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[0.25,0.46,0.45,0.94] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-display text-2xl text-white block mb-1">{item.title}</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-luxury-gold">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
