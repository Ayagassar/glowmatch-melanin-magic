
import React from "react";
import { Clock } from "lucide-react";
import ProductRecommendation from "./ProductRecommendation";

interface PersonalizedRoutineProps {
  skinTone: string;
  skinType: string;
  concerns: string[];
  sensitivity: number;
  location: string;
}

const PersonalizedRoutine = ({ 
  skinTone, 
  skinType, 
  concerns, 
  sensitivity,
  location
}: PersonalizedRoutineProps) => {
  // Check for specific concerns and conditions
  const hasHyperpigmentation = concerns.includes("hyperpigmentation");
  const hasAcne = concerns.includes("acne");
  const hasDryness = concerns.includes("dryness");
  const hasOiliness = concerns.includes("oiliness");
  const hasSensitivity = concerns.includes("sensitivity") || sensitivity >= 4;
  const isDry = skinType === "dry" || hasDryness;
  const isOily = skinType === "oily" || hasOiliness;
  const isInHotClimate = location === "humid" || location === "tropical" || location === "dry";
  
  // Morning routine products with reasoning
  const morningProducts = [
    {
      name: hasSensitivity 
        ? "Ultra-Gentle Hydrating Cleanser" 
        : (hasAcne ? "Balancing Gel Cleanser" : "Hydrating Cream Cleanser"),
      brand: hasSensitivity ? "Gentle Essentials" : "Melanin Bloom",
      type: "Cleanser",
      highlights: "Sulfate-free, pH balanced",
      recommendation: hasSensitivity
        ? "Contains calendula and oat extract to soothe your sensitive skin while gently cleansing without disrupting your skin barrier."
        : (hasAcne 
           ? "Contains 0.5% salicylic acid to gently exfoliate and help prevent breakouts without over-drying your skin."
           : "Creamy formula that cleanses while maintaining your skin's natural moisture."),
      imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: hasHyperpigmentation ? "Brightening Vitamin C Serum" : "Antioxidant Defense Serum",
      brand: "Glow Theory",
      type: "Treatment Serum",
      highlights: "15% stabilized vitamin C, ferulic acid, vitamin E",
      recommendation: hasHyperpigmentation
        ? "Contains 15% l-ascorbic acid specifically formulated to fade hyperpigmentation in melanin-rich skin without irritation. Helps prevent new dark spots by neutralizing free radicals."
        : "Powerful antioxidant blend that protects your skin from environmental damage and prevents premature aging.",
      imageUrl: "https://images.unsplash.com/photo-1601049838941-042fb1bab2d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: isDry ? "Ultra-Nourishing Moisturizer" : (isOily ? "Oil-Free Gel Hydrator" : "Balanced Skin Moisturizer"),
      brand: isDry ? "Hydra Luxe" : (isOily ? "Matte Perfect" : "Skin Harmony"),
      type: "Moisturizer",
      highlights: isDry ? "Ceramides, shea butter, squalane" : (isOily ? "Oil-free, niacinamide, hyaluronic acid" : "Lightweight, non-greasy"),
      recommendation: isDry
        ? "Rich formula with triple ceramides and shea butter that deeply nourishes dry skin without feeling heavy."
        : (isOily
           ? "Oil-free gel formula with niacinamide to control excess oil while providing necessary hydration."
           : "Balanced formula that provides just the right amount of moisture without heaviness."),
      imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: hasSensitivity ? "Mineral Sunscreen SPF 50" : "Invisible Shield SPF 50",
      brand: hasSensitivity ? "Sensitive Shield" : "Sun Logic",
      type: "Sunscreen",
      highlights: hasSensitivity ? "100% mineral, zinc oxide" : "Chemical-mineral blend, no white cast",
      recommendation: hasSensitivity
        ? "Mineral-based formula specially designed for sensitive skin. Uses transparent zinc technology to minimize white cast on darker skin tones."
        : "Innovative formula that blends seamlessly with melanin-rich skin with no white cast or ashiness while providing broad-spectrum protection.",
      imageUrl: "https://images.unsplash.com/photo-1556229167-7ed11195e641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];
  
  // Evening routine products
  const eveningProducts = [
    {
      name: "Cleansing Oil Balm",
      brand: "Pure Glow",
      type: "First Cleanse",
      highlights: "Melts makeup and sunscreen",
      recommendation: "Effectively dissolves makeup, sunscreen and excess oil without stripping your skin. Perfect first step in a double cleanse routine.",
      imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: hasSensitivity 
        ? "Ultra-Gentle Hydrating Cleanser" 
        : (hasAcne ? "Balancing Gel Cleanser" : "Hydrating Cream Cleanser"),
      brand: hasSensitivity ? "Gentle Essentials" : "Melanin Bloom",
      type: "Second Cleanse",
      highlights: "Sulfate-free, pH balanced",
      recommendation: "Same gentle cleanser from your morning routine to properly clean your skin without stripping it.",
      imageUrl: "https://images.unsplash.com/photo-1626394809745-ee1fd3a24d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: hasHyperpigmentation 
        ? "Even Tone Exfoliating Serum" 
        : (hasAcne 
           ? "Clear Skin Treatment" 
           : (hasDryness 
              ? "Hydration Boost Treatment" 
              : "Renewing Night Serum")),
      brand: hasHyperpigmentation ? "Tone Perfecting" : (hasAcne ? "Clear Balance" : "Skin Renewal"),
      type: "Treatment",
      highlights: hasHyperpigmentation
        ? "5% mandelic acid, 5% lactic acid, licorice root"
        : (hasAcne 
           ? "2% salicylic acid, niacinamide, zinc"
           : (hasDryness 
              ? "Peptides, ceramides, hyaluronic acid"
              : "Bakuchiol, peptides")),
      recommendation: hasHyperpigmentation
        ? "Contains mandelic acid, which is particularly effective for hyperpigmentation in darker skin tones with lower risk of post-inflammatory hyperpigmentation compared to other acids."
        : (hasAcne
           ? "Clears pores with salicylic acid while niacinamide and zinc reduce inflammation and regulate oil production."
           : (hasDryness
              ? "Intensely hydrating formula with multiple molecular weights of hyaluronic acid for deep moisture."
              : "Gentle retinol alternative that promotes cell turnover without irritation.")),
      imageUrl: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: isDry ? "Overnight Repair Cream" : (isOily ? "Balancing Night Gel" : "Restorative Night Cream"),
      brand: isDry ? "Night Replenish" : (isOily ? "Clear Night" : "Sleep Repair"),
      type: "Night Moisturizer",
      highlights: isDry ? "Rich, barrier-repairing" : (isOily ? "Lightweight, oil-controlling" : "Medium-weight, repairing"),
      recommendation: isDry
        ? "Rich formula with ceramides and peptides that works overnight to repair your skin's moisture barrier."
        : (isOily
           ? "Oil-free gel moisturizer that hydrates while helping to control oil production overnight."
           : "Nourishing formula that supports your skin's natural repair process while you sleep."),
      imageUrl: "https://images.unsplash.com/photo-1517391882955-e1b20cafee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Clock size={24} className="text-skin-terracotta-500" />
          <h2 className="text-2xl font-medium text-skin-brown-800">Morning Routine</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {morningProducts.map((product, index) => (
            <ProductRecommendation
              key={`morning-${index}`}
              {...product}
              step={index + 1}
            />
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Clock size={24} className="text-skin-terracotta-500" />
          <h2 className="text-2xl font-medium text-skin-brown-800">Evening Routine</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eveningProducts.map((product, index) => (
            <ProductRecommendation
              key={`evening-${index}`}
              {...product}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRoutine;
