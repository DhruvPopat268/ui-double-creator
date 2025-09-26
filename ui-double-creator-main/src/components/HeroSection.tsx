import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-white text-8xl">♠</div>
        <div className="absolute top-32 right-20 text-white text-6xl">♥</div>
        <div className="absolute bottom-20 left-32 text-white text-7xl">♦</div>
        <div className="absolute bottom-32 right-10 text-white text-5xl">♣</div>
        <div className="absolute top-40 left-1/2 text-white text-4xl">♠</div>
        <div className="absolute top-60 right-1/3 text-white text-6xl">♥</div>
        <div className="absolute bottom-40 left-1/4 text-white text-5xl">♦</div>
        <div className="absolute top-20 right-1/2 text-white text-7xl">♣</div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Teen Patti Master - Play Free Online
        </h1>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Download Teen Patti Master Mod APK with Unlimited Chips! Play India's #1 Card Game with Real Players Worldwide
        </p>

        <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto">
          Experience the ultimate Teen Patti Master game - No download required for instant play. Get unlimited chips, join tournaments, and become the Teen Patti Master champion!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Play className="w-5 h-5 mr-2" />
            Play Teen Patti Master Free
          </Button>
          <Button variant="gaming-gold" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="https://hh7.pw/aw/s2rq3h" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              Download Mod APK
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;