import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import GamesGrid from "@/components/GamesGrid";
import ContentSections from "@/components/ContentSections";
import FeatureBenefits from "@/components/FeatureBenefits";
import SEOSections from "@/components/SEOSections";
import FAQ from "@/components/FAQ";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeatureCards />
      <SEOSections />
      <GamesGrid />
      <ContentSections />
      <FeatureBenefits />
      <FAQ />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
