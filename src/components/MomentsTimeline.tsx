import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const moments = [
  {
    year: '2022',
    title: 'Finding My Path',
    image: 'src/assets/gpn-1.jpeg',
    reflection: 'The year I chose to follow my heart instead of expectations. It was scary, but it felt right.',
    takeaway: 'This moment taught me that my dreams are worth fighting for.',
  },
  {
    year: '2024',
    title: 'My First Internship',
    image: 'src/assets/certificate-2.jpeg',
    reflection: 'Landing my first internship in a field I love. The challenges were many, but so were the rewards.',
    takeaway: 'I discovered strength I never knew I had.',
  },
  {
    year: '2022',
    title: 'Finding My People',
    image: 'src/assets/people.jpeg',
    reflection: 'Meeting souls who understood me without explanations. Friendships that felt like coming home.',
    takeaway: 'The right people make even ordinary days feel extraordinary.',
  },
  {
    year: '2025',
    title: 'Achieving Scholarship',
    image: 'src/assets/certificate-3.jpeg',
    reflection: 'Receiving a scholarship that validated my hard work and dedication. A moment of pride and gratitude.',
    takeaway: 'Hard work truly pays off in unexpected ways.',
  },
  {
    year: '2025',
    title: 'A New Beginning',
    image: 'src/assets/dpu.jpeg',
    reflection: 'Standing at the edge of something new, heart full of hope and courage.',
    takeaway: 'Every sunrise is a chance to rewrite my story.',
  },
];

const MomentsTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="moments" className="relative py-32 px-6 overflow-hidden">
      {/* Constellation background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-starlight rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-5xl mx-auto relative">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-handwritten text-2xl text-aurora-pink/70">Chapter Four</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">Moments That Shaped Me</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The milestones that made me who I am today
          </p>
        </motion.div>

        {/* Timeline constellation */}
        <div className="relative">
          {/* Central glowing line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-aurora-purple/50 to-transparent origin-top hidden md:block"
          />

          {/* Moments */}
          <div className="space-y-16 md:space-y-24">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.year}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Constellation point */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 20px hsl(270 60% 50% / 0.3)',
                      '0 0 40px hsl(270 60% 50% / 0.5)',
                      '0 0 20px hsl(270 60% 50% / 0.3)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-4 h-4 rounded-full bg-aurora-purple border-2 border-background" />
                </motion.div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl relative overflow-hidden grain-overlay group"
                  >
                    {/* Glow on hover */}
                    <motion.div
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-aurora-purple/0 blur-[40px] transition-all duration-500 group-hover:bg-aurora-purple/20"
                    />

                    <div className="relative z-10">
                      {/* Year badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-4 h-4 text-aurora-pink" />
                        <span className="text-sm text-muted-foreground">{moment.year}</span>
                      </div>

                      {/* Image */}
                      <div className="mb-4 relative">
                        <motion.div
                          className="absolute -inset-2 bg-aurora-purple/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <img
                          src={moment.image}
                          alt={moment.title}
                          className="relative w-full h-48 object-cover rounded-xl"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-medium mb-3">{moment.title}</h3>

                      {/* Reflection */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {moment.reflection}
                      </p>

                      {/* Takeaway */}
                      <p className="font-handwritten text-lg text-aurora-pink/80 italic">
                        &ldquo;{moment.takeaway}&rdquo;
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsTimeline;
