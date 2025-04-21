
import { Link, useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate("/quiz");
  };
  
  return (
    <section className="section bg-gradient-to-br from-skin-terracotta-500 to-skin-peach-500 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to discover your perfect skincare routine?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Take our personalized skincare quiz and get recommendations tailored specifically 
            to your melanin-rich skin.
          </p>
          <button 
            onClick={handleGetStarted}
            className="inline-block bg-white text-skin-terracotta-600 hover:bg-skin-brown-50 py-3 px-8 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
