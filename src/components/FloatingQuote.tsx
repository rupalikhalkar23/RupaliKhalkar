import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  "The universe is made of stories, not atoms.",
  "Be soft. Do not let the world make you hard.",
  "Stars can't shine without darkness.",
  "You are the universe experiencing itself.",
  "Not all who wander are lost.",
  "Let your intuition be your GPS.",
  "The magic is in the moment.",
  "Growth is uncomfortable, but so is staying the same.",
];

const FloatingQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isVisible, setIsVisible] = useState(false);

  const shuffleQuote = () => {
    setIsVisible(true);
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setTimeout(() => setIsVisible(false), 5000);
  };

  return (
    <div className="fixed left-6 bottom-6 z-40 hidden lg:block">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={shuffleQuote}
        className="glass-card p-3 rounded-full text-aurora-purple hover:text-aurora-pink transition-colors duration-300"
        aria-label="Show random quote"
      >
        <Quote className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-16 left-0 w-64"
          >
            <div className="glass-card p-4 rounded-xl">
              <p className="font-handwritten text-lg text-foreground/90">
                "{currentQuote}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingQuote;
