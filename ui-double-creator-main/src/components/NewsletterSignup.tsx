import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSignup = () => {
  return (
    <section className="bg-gradient-newsletter py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Join Yono Rummy & Teen Patti Community - 50M+ Players!
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Get exclusive updates on Yono Rummy APK with 51 bonus, Teen Patti Master mod APK releases, Holy Rummy bonus offers, 3 Patti Gold updates, casino slots bonuses, and rummy 41 bonus notifications. Join India's largest gaming community!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter email for Yono Rummy & gaming updates"
            className="flex-1 h-12 px-4 text-gray-900 placeholder:text-gray-500 border-0 rounded-lg focus:ring-2 focus:ring-white/50"
          />
          <Button variant="gaming-gold" size="lg" className="h-12 px-8 whitespace-nowrap">
            Get Gaming Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;