import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Book, Camera, Coffee, Moon, Compass } from 'lucide-react';

const interests = [
  {
    icon: Music,
    title: 'Soulful Music',
    emotion: 'Nostalgic',
    memory: 'Late nights with old Hindi songs, feeling every word in my heart',
    why: 'Music speaks the words I cannot always say',
  },
  {
    icon: Book,
    title: 'Stories & Poetry',
    emotion: 'Inspired',
    memory: 'Getting lost in books until the world around me fades away',
    why: 'Every story teaches me something new about myself',
  },
  {
    icon: Camera,
    title: 'Capturing Moments',
    emotion: 'Peaceful',
    memory: 'Freezing sunsets and smiles that deserve to last forever',
    why: 'Photographs hold feelings that words often cannot',
  },
  {
    icon: Coffee,
    title: 'Chai & Conversations',
    emotion: 'Grounded',
    memory: 'Warm cups shared with people who understand my silences',
    why: 'The best connections happen over simple moments',
  },
  {
    icon: Moon,
    title: 'Starlit Nights',
    emotion: 'Reflective',
    memory: 'Sitting on the terrace, watching the sky tell its stories',
    why: 'The night sky reminds me how vast and beautiful life is',
  },
  {
    icon: Compass,
    title: 'New Adventures',
    emotion: 'Adventurous',
    memory: 'Saying yes to spontaneous trips that became core memories',
    why: 'The best experiences are often the unplanned ones',
  },
];

const WhatILove = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-i-love" className="relative py-32 px-6 overflow-hidden">
      {/* Background shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-60 h-60 rounded-full bg-aurora-pink/10 blur-[80px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-40 h-40 rounded-full bg-aurora-blue/10 blur-[60px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-handwritten text-2xl text-aurora-pink/70">Chapter Two</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">What I Love</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The little things that make my soul feel alive
          </p>
        </motion.div>

        {/* Free-flowing card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ 
                y: -8, 
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden grain-overlay transition-all duration-300 group-hover:border-aurora-purple/30">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-aurora-purple/0 blur-[40px] transition-all duration-500 group-hover:bg-aurora-purple/20"
                />
                
                <div className="relative z-10">
                  {/* Icon and emotion */}
                  <div className="flex items-center justify-between mb-4">
                    <interest.icon className="w-6 h-6 text-aurora-purple" />
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {interest.emotion}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium mb-3">{interest.title}</h3>

                  {/* Memory */}
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    &ldquo;{interest.memory}&rdquo;
                  </p>

                  {/* Why it matters */}
                  <p className="text-sm text-foreground/80">
                    {interest.why}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatILove;
