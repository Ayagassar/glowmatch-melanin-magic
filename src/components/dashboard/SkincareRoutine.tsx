
import RoutineSection from "./RoutineSection";

interface SkincareRoutineProps {
  skinTone: string;
  skinType: string;
  concerns: string[];
}

const SkincareRoutine = ({ skinTone, skinType, concerns }: SkincareRoutineProps) => {
  // This would be dynamic based on the user's skin profile in a real app
  // For now, we'll generate some mock product data
  
  // Determine if user has certain concerns
  const hasHyperpigmentation = concerns.includes("hyperpigmentation");
  const hasAcne = concerns.includes("acne");
  const hasDryness = concerns.includes("dryness");
  const hasSensitivity = concerns.includes("sensitivity");
  
  // Morning routine products
  const morningProducts = [
    {
      name: "Gentle Foaming Cleanser",
      brand: "Melanin Essentials",
      purpose: "Cleanser",
      matchReason: hasAcne 
        ? "Contains salicylic acid to help control oil and prevent breakouts without over-drying."
        : "Gentle formula that won't strip your skin's natural moisture barrier.",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: hasDryness ? "Hydrating Essence Toner" : "Balancing Toner",
      brand: "Derma Bloom",
      purpose: "Toner",
      matchReason: hasDryness 
        ? "Contains hyaluronic acid and glycerin to boost hydration."
        : "Helps balance pH and prepare skin for the next steps in your routine.",
      imageUrl: "https://images.unsplash.com/photo-1594466707717-fa26071cc679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: hasHyperpigmentation ? "Vitamin C Brightening Serum" : "Antioxidant Serum",
      brand: "Luxe Botanicals",
      purpose: "Serum",
      matchReason: hasHyperpigmentation 
        ? "15% Vitamin C formula specifically designed to fade dark spots and even skin tone."
        : "Protects against environmental damage and promotes overall skin health.",
      imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80",
    },
    {
      name: hasDryness ? "Rich Daily Moisturizer" : "Oil-Free Moisturizer",
      brand: "True Skin",
      purpose: "Moisturizer",
      matchReason: hasDryness 
        ? "Contains ceramides and shea butter to deeply nourish dry skin."
        : "Lightweight formula that hydrates without causing oiliness or clogging pores.",
      imageUrl: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: hasSensitivity ? "Mineral Sunscreen SPF 50" : "Broad Spectrum SPF 50",
      brand: hasSensitivity ? "Gentle Guard" : "Sun Logic",
      purpose: "Sunscreen",
      matchReason: hasSensitivity 
        ? "Mineral formula designed for sensitive skin with zinc oxide that doesn't leave a white cast."
        : "Specially formulated for melanin-rich skin with no white cast and antioxidant protection.",
      imageUrl: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80",
    },
  ];
  
  // Evening routine products
  const eveningProducts = [
    {
      name: "Cleansing Balm",
      brand: "Pure Glow",
      purpose: "First Cleanse",
      matchReason: "Effectively removes makeup and sunscreen without stripping the skin.",
      imageUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      name: hasAcne ? "Clarifying Gel Cleanser" : "Hydrating Cream Cleanser",
      brand: hasAcne ? "Clear Balance" : "Hydra Luxe",
      purpose: "Second Cleanse",
      matchReason: hasAcne 
        ? "Contains tea tree oil and niacinamide to combat acne without irritation."
        : "Gently cleanses while maintaining skin's moisture balance.",
      imageUrl: "https://images.unsplash.com/photo-1601049531267-adfdceedaf7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: "Exfoliating Toner",
      brand: "Radiance Reveal",
      purpose: "Exfoliation (2-3x weekly)",
      matchReason: hasHyperpigmentation 
        ? "Contains mandelic acid, which is gentle yet effective for treating hyperpigmentation." 
        : "Helps remove dead skin cells and improve skin texture without irritation.",
      imageUrl: "https://images.unsplash.com/photo-1634136906147-14a098cd5447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: hasHyperpigmentation 
        ? "Alpha Arbutin & Niacinamide Serum" 
        : (hasAcne ? "Blemish Control Serum" : "Hydrating Peptide Serum"),
      brand: "Skin Chemistry",
      purpose: "Treatment Serum",
      matchReason: hasHyperpigmentation 
        ? "Targets dark spots with a powerful combination of alpha arbutin and niacinamide."
        : hasAcne 
          ? "Contains salicylic acid and zinc to treat and prevent breakouts."
          : "Boosts skin's hydration and supports collagen production.",
      imageUrl: "https://images.unsplash.com/photo-1616949755610-8c9bfe2ead85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: hasHyperpigmentation ? "Retinol Night Cream" : "Nourishing Night Cream",
      brand: hasHyperpigmentation ? "Renew Science" : "Dream Skin",
      purpose: "Night Moisturizer",
      matchReason: hasHyperpigmentation 
        ? "Contains encapsulated retinol to fight hyperpigmentation and promote cell turnover."
        : "Rich formula with ceramides and peptides to repair and nourish skin overnight.",
      imageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-medium text-skin-brown-800 mb-8">Your Recommended Routine</h2>
      
      <RoutineSection 
        title="Morning Routine" 
        products={morningProducts}
      />
      
      <RoutineSection 
        title="Evening Routine" 
        products={eveningProducts}
      />
      
      <div className="flex justify-center mt-10">
        <button className="btn-primary mr-4">
          Save Routine
        </button>
        <button className="btn-outline">
          Email Routine
        </button>
      </div>
    </div>
  );
};

export default SkincareRoutine;
