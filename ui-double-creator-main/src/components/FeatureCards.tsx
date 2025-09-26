import { Button } from "@/components/ui/button";
import { Coins, Smartphone } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Unlimited Chips Card */}
          <div className="relative bg-gradient-card-dark rounded-xl p-8 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 text-gaming-gold text-6xl">
                <Coins />
              </div>
              <div className="absolute bottom-4 left-4 text-gaming-gold text-4xl">💰</div>
              <div className="absolute top-1/2 left-1/2 text-gaming-gold text-8xl transform -translate-x-1/2 -translate-y-1/2">
                ♠
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Teen Patti Master Unlimited Chips</h2>
              <p className="text-lg text-white/90 mb-6">
                Play with unlimited chips and premium features - completely free!
              </p>
              <Button variant="gaming-gold" size="lg" asChild>
                <a href="https://hh7.pw/aw/s2rq3h" target="_blank" rel="noopener noreferrer">
                  Get Unlimited Chips
                </a>
              </Button>
            </div>
          </div>

          {/* Mod APK Card */}
          <div className="relative bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-8 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 text-white text-6xl">
                <Smartphone />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-4xl">📱</div>
              <div className="absolute top-1/2 left-1/2 text-white text-8xl transform -translate-x-1/2 -translate-y-1/2">
                ♥
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Teen Patti Master Mod APK</h2>
              <p className="text-lg text-white/90 mb-6">
                Download modded version with all premium features unlocked
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://hh7.pw/aw/s2rq3h" target="_blank" rel="noopener noreferrer">
                  Download Mod APK
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;