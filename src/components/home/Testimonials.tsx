
const testimonials = [
  {
    quote: "Finally, skincare recommendations that actually work for my skin! I've spent so much money on products that were all wrong for my hyperpigmentation issues.",
    name: "Maya Thompson",
    title: "Customer",
  },
  {
    quote: "GlowMatch AI understood my combination skin needs perfectly. The morning and evening routines they created have transformed my skin in just a few weeks.",
    name: "Zuri Williams",
    title: "Customer",
  },
  {
    quote: "As someone with sensitive, acne-prone skin, finding products that don't trigger breakouts has been a struggle. GlowMatch nailed it on the first try!",
    name: "Layla Johnson",
    title: "Customer",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-skin-brown-800 mb-4">
            Glowing Results
          </h2>
          <p className="text-skin-brown-600 max-w-2xl mx-auto">
            See why our community loves their personalized skincare recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-skin-brown-50 p-8 rounded-2xl shadow-sm border border-skin-brown-100"
            >
              <div className="mb-6 text-5xl text-skin-gold-400">"</div>
              <p className="text-skin-brown-700 mb-6 text-lg">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-medium text-skin-brown-800">{testimonial.name}</p>
                <p className="text-skin-brown-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
