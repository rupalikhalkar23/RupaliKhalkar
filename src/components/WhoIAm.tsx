import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WhoIAm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "I am a dreamer who finds poetry in everyday moments — the first sip of chai on a rainy morning, the golden light that filters through my window at dusk, the laughter shared with people who feel like home.",
    "My heart is drawn to stories — the ones we tell, the ones we live, and the ones we carry quietly within us. I believe every person we meet leaves a mark, and every experience shapes who we are becoming.",
    "Life has taught me to embrace both the chaos and the calm. I am still figuring things out, still growing, still learning to trust the journey even when the path is unclear.",
  ];

  return (
    <section id="who-i-am" className="relative py-32 px-6">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-aurora-purple/10 blur-[60px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-handwritten text-2xl text-aurora-pink/70">Chapter One</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">Who I Am</h2>
        </motion.div>

        {/* Journal-style paragraphs */}
        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Quote block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 relative"
        >
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden grain-overlay">
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-aurora-purple/20 blur-[40px]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <p className="font-handwritten text-2xl md:text-3xl text-center text-foreground/90 relative z-10">
              "I am a work in progress, and that is perfectly okay."
            </p>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default WhoIAm;
