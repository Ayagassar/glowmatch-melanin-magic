
interface SkincareTipsProps {
  concerns: string[];
}

const SkincareTips = ({ concerns }: SkincareTipsProps) => {
  // Generate tips based on user's skin concerns
  const generateTips = () => {
    const tips = [];
    
    if (concerns.includes("hyperpigmentation")) {
      tips.push({
        title: "For Dark Spots & Hyperpigmentation",
        content: "Use vitamin C in the morning to protect and brighten. Try ingredients like alpha arbutin, niacinamide, and tranexamic acid. Be patient—melanin-rich skin needs consistent treatment for at least 8-12 weeks to see results."
      });
    }
    
    if (concerns.includes("acne")) {
      tips.push({
        title: "For Acne & Breakouts",
        content: "Avoid harsh, stripping products which can lead to more oil production and post-inflammatory hyperpigmentation. Look for gentle exfoliants like mandelic acid and PHA that are less likely to cause irritation in melanin-rich skin."
      });
    }
    
    if (concerns.includes("dryness")) {
      tips.push({
        title: "For Dry Skin",
        content: "Layer your hydration by applying products to slightly damp skin. Look for humectants like glycerin and hyaluronic acid, followed by emollients like shea butter that are especially effective for darker skin tones."
      });
    }
    
    if (concerns.includes("sensitivity")) {
      tips.push({
        title: "For Sensitive Skin",
        content: "Patch test new products on your inner arm for 24 hours before applying to your face. Look for fragrance-free formulas with soothing ingredients like centella asiatica, oat extract, and aloe."
      });
    }
    
    if (concerns.includes("oiliness")) {
      tips.push({
        title: "For Oily Skin",
        content: "Don't skip moisturizer! Look for lightweight, non-comedogenic formulas with niacinamide to help regulate sebum production. Try using a clay mask with bentonite or kaolin 1-2 times weekly."
      });
    }
    
    if (concerns.includes("texture")) {
      tips.push({
        title: "For Uneven Texture",
        content: "Incorporate gentle chemical exfoliation rather than harsh physical scrubs. Enzymes from papaya and pineapple are excellent for melanin-rich skin as they're effective without causing inflammation."
      });
    }
    
    if (concerns.includes("dullness")) {
      tips.push({
        title: "For Dull Complexion",
        content: "Focus on hydration, gentle exfoliation, and antioxidants to reveal your natural glow. Try facial massage with oils like jojoba or squalane that mimic your skin's natural sebum."
      });
    }
    
    // This tip appears for everyone with melanin-rich skin
    tips.push({
      title: "For All Melanin-Rich Skin",
      content: "Always use sunscreen! UV exposure worsens hyperpigmentation and aging, even in darker skin tones. Look for chemical formulations with avobenzone and homosalate that don't leave a white cast."
    });
    
    // Special tip for people with multiple concerns
    if (concerns.length > 2) {
      tips.push({
        title: "Managing Multiple Concerns",
        content: "Focus on addressing one skin concern at a time rather than layering too many active ingredients, which can cause irritation. Start with your most pressing concern and gradually add treatments for other issues."
      });
    }
    
    return tips;
  };
  
  const tips = generateTips();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-skin-brown-200 p-6">
      <h2 className="text-xl font-medium text-skin-brown-800 mb-6">
        Skincare Tips for You
      </h2>
      
      <div className="space-y-6">
        {tips.map((tip, index) => (
          <div key={index} className="border-b border-skin-brown-100 pb-5 last:border-b-0 last:pb-0">
            <h3 className="font-medium text-skin-brown-800 mb-2">
              {tip.title}
            </h3>
            <p className="text-skin-brown-600 text-sm">
              {tip.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincareTips;
