
interface SkincareTipsProps {
  concerns: string[];
}

const SkincareTips = ({ concerns }: SkincareTipsProps) => {
  // Generate tips based on user's skin concerns
  const generateTips = () => {
    const tips = [];
    
    if (concerns.includes("hyperpigmentation")) {
      tips.push({
        title: "For Hyperpigmentation",
        content: "Be consistent with your brightening products and always use sunscreen. Sun exposure can worsen dark spots. Look for ingredients like vitamin C, alpha arbutin, niacinamide, and kojic acid."
      });
    }
    
    if (concerns.includes("acne")) {
      tips.push({
        title: "For Acne & Breakouts",
        content: "Avoid over-cleansing which can strip your skin and lead to more oil production. Focus on gentle, non-comedogenic products and consider incorporating salicylic acid or benzoyl peroxide treatments."
      });
    }
    
    if (concerns.includes("dryness")) {
      tips.push({
        title: "For Dry Skin",
        content: "Apply moisturizer while your skin is still slightly damp after cleansing. Consider using a humidifier in your bedroom and drinking plenty of water. Look for products with hyaluronic acid, glycerin, and ceramides."
      });
    }
    
    if (concerns.includes("sensitivity")) {
      tips.push({
        title: "For Sensitive Skin",
        content: "Patch test new products before applying them to your face. Keep your routine simple and avoid products with fragrance, alcohol, and harsh exfoliants. Look for soothing ingredients like centella asiatica, aloe, and oat extract."
      });
    }
    
    if (concerns.includes("oiliness")) {
      tips.push({
        title: "For Oily Skin",
        content: "Don't skip moisturizer—it's essential even for oily skin. Look for lightweight, oil-free formulas. Consider using a clay mask 1-2 times per week and products with niacinamide to help regulate oil production."
      });
    }
    
    // General tips for everyone
    tips.push({
      title: "For Melanin-Rich Skin",
      content: "Always wear sunscreen, even on cloudy days. While melanin provides some protection, UV rays can still cause damage and worsen hyperpigmentation. Look for sunscreens formulated to blend seamlessly with darker skin tones."
    });
    
    // Special tip for multiple concerns
    if (concerns.length > 2) {
      tips.push({
        title: "For Multiple Concerns",
        content: "Focus on addressing one concern at a time rather than trying to tackle everything at once. This prevents overloading your skin with active ingredients. Start with your most pressing concern and gradually introduce products for other issues."
      });
    }
    
    return tips;
  };
  
  const tips = generateTips();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-skin-brown-200 p-6">
      <h2 className="text-2xl font-medium text-skin-brown-800 mb-6">
        Skincare Tips for You
      </h2>
      
      <div className="space-y-6">
        {tips.map((tip, index) => (
          <div key={index} className="border-b border-skin-brown-100 pb-5 last:border-b-0 last:pb-0">
            <h3 className="font-medium text-skin-brown-800 mb-2">
              {tip.title}
            </h3>
            <p className="text-skin-brown-600">
              {tip.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincareTips;
