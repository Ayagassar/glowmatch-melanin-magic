
import React from "react";

interface SkincareTipsProps {
  concerns: string[];
}

const SkincareTips = ({ concerns }: SkincareTipsProps) => {
  // Generate tips based on user's skin concerns
  const generateTips = () => {
    const tips = [];
    
    if (concerns.includes("hyperpigmentation")) {
      tips.push({
        title: "Hyperpigmentation Strategy",
        content: "For your dark spots: use vitamin C in the morning to protect and brighten, exfoliants like glycolic or mandelic acid at night (start with once weekly), and always wear SPF daily—sun exposure makes dark spots worse!"
      });
    }
    
    if (concerns.includes("acne")) {
      tips.push({
        title: "Breakout Management",
        content: "Keep your routine consistent but gentle. Avoid over-cleansing which can trigger more oil production. Look for salicylic acid and benzoyl peroxide for spot treatments rather than all-over application."
      });
    }
    
    if (concerns.includes("dryness")) {
      tips.push({
        title: "Deep Hydration Technique",
        content: "Layer hydration! Apply your moisturizer on slightly damp skin to lock in water. Consider using a humidifier at night, and look for ceramides, glycerin and hyaluronic acid in your products."
      });
    }
    
    if (concerns.includes("sensitivity")) {
      tips.push({
        title: "Calm & Protect Approach",
        content: "Always patch test new products on your inner arm for 24 hours before applying to your face. Look for fragrance-free formulas with soothing ingredients like centella asiatica, oat extract, and aloe."
      });
    }
    
    if (concerns.includes("oiliness")) {
      tips.push({
        title: "Oil Balance Method",
        content: "Don't skip moisturizer—it's essential even for oily skin types! Look for lightweight, non-comedogenic formulas. Use niacinamide to help regulate sebum production and a clay mask once weekly."
      });
    }
    
    // This tip appears for everyone with melanin-rich skin
    tips.push({
      title: "For Melanin-Rich Skin",
      content: "Our skin produces more melanin after inflammation (called post-inflammatory hyperpigmentation). Be gentle with your skin and treat any irritation or breakouts quickly to prevent dark marks that can last months."
    });
    
    return tips;
  };
  
  const tips = generateTips();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-skin-brown-200">
      <h2 className="text-xl font-medium text-skin-brown-800 mb-4">
        Your Personalized Skincare Strategy
      </h2>
      
      <div className="space-y-5">
        {tips.map((tip, index) => (
          <div key={index} className="border-b border-skin-brown-100 pb-4 last:border-b-0 last:pb-0">
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
