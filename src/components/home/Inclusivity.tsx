
const Inclusivity = () => {
  return (
    <section className="section bg-gradient-to-br from-skin-brown-50 to-skin-gold-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-skin-brown-800 mb-6">
              Understanding Melanin-Rich Skin
            </h2>
            <p className="text-lg text-skin-brown-700 mb-6">
              Melanin-rich skin has unique characteristics and needs that many mainstream skincare products don't address. We're changing that.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-skin-terracotta-500 flex items-center justify-center text-white shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-skin-brown-800 text-lg">Hyperpigmentation Focus</h3>
                  <p className="text-skin-brown-600">
                    Products selected specifically for their effectiveness at addressing 
                    hyperpigmentation and uneven skin tone.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-skin-terracotta-500 flex items-center justify-center text-white shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-skin-brown-800 text-lg">Science-Backed Ingredients</h3>
                  <p className="text-skin-brown-600">
                    We prioritize ingredients with clinical studies demonstrating efficacy 
                    for different melanin levels.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-skin-terracotta-500 flex items-center justify-center text-white shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-skin-brown-800 text-lg">Beyond Skin Tone</h3>
                  <p className="text-skin-brown-600">
                    We consider skin type, sensitivity, climate, lifestyle factors, and more
                    to provide truly personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-skin-gold-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-skin-peach-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img 
                src="https://i.pinimg.com/474x/47/62/4e/47624e5ab9a1c935039540c6ebc2e1a9.jpg" 
                alt="Black woman applying skincare" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://i.pinimg.com/474x/23/a5/99/23a5997b3b15c34b473a2f9987ef1446.jpg" 
                alt="Skincare products for melanin-rich skin" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://i.pinimg.com/474x/68/18/4d/68184d2a97f14da6f58ca3d37df1c8c6.jpg" 
                alt="Close-up of Black woman's skin texture" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://i.pinimg.com/474x/58/2c/df/582cdfd90d3417bd9ab009832fd63591.jpg" 
                alt="Black woman smiling with healthy skin" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inclusivity;
