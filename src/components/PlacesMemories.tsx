import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const places = [
  {
    name: 'Humpi,karnataka',
    image: 'src/assets/humpi.jpeg',
    reflection: 'Where time moved slower, and I learned the art of stillness',
  },
  {
    name: 'Nandurdi, Maharashtra',
    image: 'src/assets/nandurdi.jpeg',
    reflection: 'Sun-drenched tiles and the sound of fado in narrow streets',
  },
  {
    name: 'Anjenari,Maharashtra',
    image: 'src/assets/anjenari.jpeg',
    reflection: 'Mountains that touched clouds and rivers that sang',
  },
  {
    name: 'Shegoan,Maharashtra',
    image: 'src/assets/shegoan.jpeg',
    reflection: 'The first place that made me feel beautifully small',
  },
];

const PlacesMemories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="places" className="relative py-32 px-6">
      {/* Aurora effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-aurora-purple/10 to-transparent blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-handwritten text-2xl text-aurora-pink/70">Chapter Three</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">Places & Memories</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Corners of the world that left pieces of themselves in me
          </p>
        </motion.div>

        {/* Photo storytelling grid */}
        <div className="space-y-24">
          {places.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 * index }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-3/5 relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Image glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"
                  />
                  <motion.div
                    className="absolute -inset-4 bg-aurora-purple/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              </motion.div>

              {/* Text content */}
              <div className="w-full md:w-2/5 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + 0.2 * index }}
                >
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <MapPin className="w-4 h-4 text-aurora-pink" />
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                      {place.name}
                    </span>
                  </div>
                  <p className="font-handwritten text-2xl md:text-3xl text-foreground/90">
                    "{place.reflection}"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesMemories;
