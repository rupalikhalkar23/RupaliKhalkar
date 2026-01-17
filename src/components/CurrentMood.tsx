import { motion } from 'framer-motion';
import { useState } from 'react';
import { Moon, Sun, Cloud, Sparkles, Coffee, Heart } from 'lucide-react';

const moods = [
  { icon: Moon, label: 'Dreamy', color: 'text-aurora-purple' },
  { icon: Coffee, label: 'Cozy', color: 'text-amber-400' },
  { icon: Sparkles, label: 'Inspired', color: 'text-aurora-pink' },
  { icon: Heart, label: 'Grateful', color: 'text-rose-400' },
  { icon: Cloud, label: 'Peaceful', color: 'text-aurora-blue' },
];

const CurrentMood = () => {
  const [currentMood] = useState(moods[Math.floor(Math.random() * moods.length)]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="glass-card p-4 rounded-2xl">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Current Mood
          </span>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <currentMood.icon className={`w-6 h-6 ${currentMood.color}`} />
          </motion.div>
          <span className="text-sm font-handwritten">{currentMood.label}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentMood;
