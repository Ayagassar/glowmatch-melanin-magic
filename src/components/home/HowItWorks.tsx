
const steps = [
  {
    number: "01",
    title: "Personal Quiz",
    description:
      "Take our comprehensive skincare quiz designed specifically for melanin-rich skin. We ask the right questions to understand your unique needs.",
  },
  {
    number: "02",
    title: "Product Matching",
    description:
      "Our advanced AI algorithm matches you with products scientifically proven to work well with your specific skin tone, type, and concerns.",
  },
  {
    number: "03",
    title: "Custom Routine",
    description:
      "Receive a personalized morning and evening skincare routine with products that complement each other for optimal results.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-skin-brown-800 mb-4">
            How GlowMatch Works
          </h2>
          <p className="text-skin-brown-600 max-w-2xl mx-auto">
            Our intelligent skincare matching system finds products that truly work for your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-skin-brown-50 rounded-2xl p-8 border border-skin-brown-100 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-block text-4xl font-medium text-skin-peach-400 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-medium text-skin-brown-800 mb-3">
                {step.title}
              </h3>
              <p className="text-skin-brown-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
