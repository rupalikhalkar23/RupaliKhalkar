import FloatingParticles from '@/components/FloatingParticles';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhoIAm from '@/components/WhoIAm';
import WhatILove from '@/components/WhatILove';
import PlacesMemories from '@/components/PlacesMemories';
import MomentsTimeline from '@/components/MomentsTimeline';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CurrentMood from '@/components/CurrentMood';
import FloatingQuote from '@/components/FloatingQuote';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background particles */}
      <FloatingParticles />
      
      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none grain-overlay z-50" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Interactive elements */}
      <CurrentMood />
      <FloatingQuote />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <WhoIAm />
        <WhatILove />
        <PlacesMemories />
        <MomentsTimeline />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
