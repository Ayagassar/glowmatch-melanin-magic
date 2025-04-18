
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Inclusivity from "@/components/home/Inclusivity";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Inclusivity />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default LandingPage;
