
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-skin-brown-100 to-skin-peach-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-skin-brown-800 leading-tight mb-6">
              Skincare that <span className="text-skin-terracotta-600">sees you</span>
            </h1>
            <p className="text-lg md:text-xl text-skin-brown-700 mb-8 max-w-lg">
              Discover personalized skincare recommendations designed for melanin-rich skin. 
              Products that truly work for your unique skin tone, type, and concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-primary text-center sm:w-auto">
                Get Your Matches
              </Link>
              <Link to="/quiz" className="btn-outline text-center sm:w-auto">
                Take the Quiz
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-skin-gold-200 rounded-full opacity-40 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-skin-peach-200 rounded-full opacity-40 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1611499677135-e4908e757a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Black woman with beautiful skin" 
                className="rounded-2xl shadow-lg relative z-10 object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
