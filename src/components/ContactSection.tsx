import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Instagram, Github, Linkedin, Send, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/rupalikhalkar23/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rupali-khalkar/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:rupalikhalkar23@gmail.com', label: 'Email' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you for reaching out! I'll get back to you soon. 💜");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="connect" className="relative py-32 px-6">
      {/* Aurora background */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-aurora-purple/10 to-transparent blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={ref} className="max-w-2xl mx-auto relative">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="font-handwritten text-2xl text-aurora-pink/70">The End... or the Beginning?</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            If something here resonated with you, I'd love to hear from you. No pressure, just connection.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 rounded-2xl relative overflow-hidden grain-overlay mb-12"
        >
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-aurora-purple/10 blur-[40px]"
          />

          <div className="space-y-6 relative z-10">
            <div>
              <Input
                type="text"
                placeholder="Your name"
                required
                className="bg-secondary/50 border-border/50 focus:border-aurora-purple/50 placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                required
                className="bg-secondary/50 border-border/50 focus:border-aurora-purple/50 placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <Textarea
                placeholder="What's on your mind?"
                required
                rows={4}
                className="bg-secondary/50 border-border/50 focus:border-aurora-purple/50 placeholder:text-muted-foreground resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-aurora-purple/20 hover:bg-aurora-purple/30 text-foreground border border-aurora-purple/30 rounded-full py-6 transition-all duration-300"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  Sending... <Heart className="w-4 h-4 animate-pulse" />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send with love <Send className="w-4 h-4" />
                </span>
              )}
            </Button>
          </div>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.1 }}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-aurora-purple transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
