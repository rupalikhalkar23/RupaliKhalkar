import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative py-16 px-6 border-t border-border/20">
      {/* Glowing divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-aurora-purple to-transparent"
      />

      <div className="max-w-2xl mx-auto text-center">
        {/* Personal note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground mb-6"
        >
          Thank you for taking this journey with me. If you have made it this far, 
          know that I am grateful our paths crossed in this little corner of the internet.
        </motion.p>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-handwritten text-xl md:text-2xl text-aurora-pink/80 mb-8"
        >
          "The world is full of magic things, patiently waiting for our senses to grow sharper." — W.B. Yeats
        </motion.p>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span>Made with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-aurora-pink fill-aurora-pink" />
          </motion.span>
          <span>by Rupali</span>
          <Sparkles className="w-4 h-4 text-aurora-purple" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-xs text-muted-foreground/60"
        >
          © {new Date().getFullYear()} Rupali's Universe. All stories are my own.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
