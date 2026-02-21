import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UpcomingFightsSection from "@/components/UpcomingFightsSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import SecuritySection from "@/components/SecuritySection";
import ExampleSection from "@/components/ExampleSection";
import AppScreenshotsSection from "@/components/AppScreenshotsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <UpcomingFightsSection />
      <StatsSection />
      <HowItWorksSection />
      <WhyDifferentSection />
      <SecuritySection />
      <ExampleSection />
      <AppScreenshotsSection />
      <PricingSection />
      <FAQSection />
      <DownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;
