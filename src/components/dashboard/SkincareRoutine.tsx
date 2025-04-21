import RoutineSection from "./RoutineSection";

interface SkincareRoutineProps {
  skinTone: string;
  skinType: string;
  concerns: string[];
  sensitivity?: number;
  timeAvailable?: string;
  preferences?: string[];
}

const SkincareRoutine = ({
  skinTone,
  skinType,
  concerns,
  sensitivity = 3,
  timeAvailable = "moderate",
  preferences = []
}: SkincareRoutineProps) => {
  // Determine if user has certain concerns
  const hasHyperpigmentation = concerns.includes("hyperpigmentation");
  const hasAcne = concerns.includes("acne");
  const hasDryness = concerns.includes("dryness") || skinType === "dry";
  const hasOiliness = concerns.includes("oiliness") || skinType === "oily";
  const hasSensitivity = concerns.includes("sensitivity") || sensitivity >= 4 || skinType === "sensitive";
  const hasDullness = concerns.includes("dullness");
  
  // Determine preferences
  const prefersBlackOwned = preferences.includes("black-owned");
  const prefersFragranceFree = preferences.includes("fragrance-free") || hasSensitivity;
  const prefersNatural = preferences.includes("natural");
  const prefersAffordable = preferences.includes("affordable");
  const prefersLuxury = preferences.includes("luxury");
  
  // Determine routine complexity based on time available
  const isMinimalRoutine = timeAvailable === "minimal";
  const isFullRoutine = timeAvailable === "full";

  // Generate brand based on preferences
  const getBrand = () => {
    if (prefersBlackOwned) {
      return prefersLuxury 
        ? ["Epara", "Liha Beauty", "Ndani Naturals", "Dehiya Beauty", "54 Thrones"] 
        : ["Hyper Skin", "Rosen Skincare", "The Afro Hair & Skin Co.", "R&R Luxury", "Ceylon"];
    } else {
      return prefersLuxury 
        ? ["Fenty Skin", "SK-II", "La Mer", "Biologique Recherche", "Dr. Barbara Sturm"] 
        : ["Fenty Skin", "The Ordinary", "CeraVe", "The INKEY List", "Good Molecules"];
    }
  };
  
  const brands = getBrand();
  
  // Morning routine products
  const morningProducts = [];
  
  // 1. Cleanser (everyone gets this)
  morningProducts.push({
    name: hasSensitivity 
      ? "Gentle Cream Cleanser" 
      : (hasAcne ? "Clarifying Gel Cleanser" : "Hydrating Cleanser"),
    brand: brands[Math.floor(Math.random() * brands.length)],
    purpose: "Cleanser",
    matchReason: hasSensitivity 
      ? "Super gentle formula that cleanses without disrupting your sensitive skin's barrier."
      : (hasAcne 
         ? "Contains small amounts of salicylic acid to help control oil and prevent breakouts without over-drying."
         : "Nourishing cleanser that removes impurities while maintaining your skin's natural moisture."),
    imageUrl: "https://www.farmasiet.no/images/the-inkey-list-oat-cleansing-balm,34405_1200655.png",
  });
  
  // 2. For Full Routine - add Toner (optional based on time)
  if (isFullRoutine || (!isMinimalRoutine && (hasDryness || hasAcne))) {
    morningProducts.push({
      name: hasDryness ? "Hydrating Essence Toner" : "Balancing Toner",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Toner",
      matchReason: hasDryness 
        ? "Contains hyaluronic acid and rose water to instantly boost hydration for your dry skin."
        : "Helps balance pH and prepare skin for the next steps in your routine.",
      imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    });
  }
  
  // 3. Serum for specific concern
  if (hasHyperpigmentation) {
    morningProducts.push({
      name: "Vitamin C Brightening Serum",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Treatment Serum",
      matchReason: "15% stabilized Vitamin C formulation specifically designed to fade dark spots and even skin tone in melanin-rich skin, while offering antioxidant protection.",
      imageUrl: "https://images.unsplash.com/photo-1601049838941-042fb1bab2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  } else if (hasAcne) {
    morningProducts.push({
      name: "Niacinamide & Zinc Serum",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Treatment Serum",
      matchReason: "Contains 10% niacinamide and zinc PCA to regulate oil production, minimize pores, and reduce redness without irritating your skin.",
      imageUrl: "https://images.unsplash.com/photo-1601049838941-042fb1bab2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  } else if (hasDullness) {
    morningProducts.push({
      name: "Glow-Boosting Antioxidant Serum",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Treatment Serum",
      matchReason: "Packed with antioxidants and vitamin C derivatives that brighten and protect your skin throughout the day, revealing your natural glow.",
      imageUrl: "https://images.unsplash.com/photo-1601049838941-042fb1bab2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  }
  
  // 4. Moisturizer (everyone gets this)
  morningProducts.push({
    name: hasDryness 
      ? "Rich Nourishing Moisturizer" 
      : (hasOiliness ? "Oil-Free Hydrating Gel" : "Balanced Skin Moisturizer"),
    brand: brands[Math.floor(Math.random() * brands.length)],
    purpose: "Moisturizer",
    matchReason: hasDryness 
      ? "Deep hydration with shea butter and ceramides specially formulated for dry melanin-rich skin."
      : (hasOiliness 
         ? "Lightweight gel formula that hydrates without clogging pores or adding extra oil to your skin."
         : "Perfect balance of hydration that's neither too heavy nor too light for your balanced skin."),
    imageUrl: "https://static.thcdn.com/images/large/original//productimg/1600/1600/15408246-3255192203870182.jpg",
  });
  
  // 5. Sunscreen (everyone gets this)
  morningProducts.push({
    name: hasSensitivity ? "Mineral Sunscreen SPF 50" : "Invisible Sunscreen SPF 50",
    brand: hasSensitivity ? "Kinlò" : "Fenty Skin",
    purpose: "Sunscreen",
    matchReason: hasSensitivity 
      ? "Mineral-based formula with zinc oxide that's specially formulated to blend seamlessly with darker skin tones without leaving a white cast."
      : "Invisible, non-comedogenic formula with no white cast, specifically designed for melanin-rich skin. Provides broad-spectrum protection against UVA/UVB rays.",
    imageUrl: "https://i5.walmartimages.com/seo/KINLO-Golden-Rays-Tinted-Sunscreen-SPF-50-Active-Mineral-Sunscreen-Reef-Safe-Water-Resistant-Up-to-80-min-Shade-Deep-0-95-fl-oz_d93183d9-0466-4f1d-b2d1-6d14396a0d31.9bd08f4ec0f95aef35e6a981f202fd07.jpeg",
  });
  
  // For minimal routine, keep only cleanser, light treatment and sunscreen
  if (isMinimalRoutine) {
    morningProducts.splice(1, Math.max(0, morningProducts.length - 3));
  }
  
  // Evening routine products
  const eveningProducts = [];
  
  // 1. Cleansing Balm (everyone gets this except minimal routine)
  if (!isMinimalRoutine) {
    eveningProducts.push({
      name: "Melting Cleansing Balm",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "First Cleanse",
      matchReason: "Melts away sunscreen, makeup, and impurities without stripping your skin's natural oils. Perfect first step in a double cleanse routine.",
      imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  }
  
  // 2. Second Cleanser (everyone gets this)
  eveningProducts.push({
    name: hasSensitivity 
      ? "Gentle Cream Cleanser" 
      : (hasAcne ? "Clarifying Gel Cleanser" : "Hydrating Cleanser"),
    brand: brands[Math.floor(Math.random() * brands.length)],
    purpose: isMinimalRoutine ? "Cleanser" : "Second Cleanse",
    matchReason: "Same gentle but effective cleanser from your morning routine to properly clean your skin without stripping it.",
    imageUrl: "https://vakkerhud.no/cdn/shop/files/20271-exu-retail-gentle-cream-cleanser-3_1_800x.jpg?v=1740581188",
  });
  
  // 3. Exfoliation or Treatment (not for minimal + sensitive unless specific concern)
  if (isFullRoutine || (!isMinimalRoutine && !hasSensitivity)) {
    if (hasHyperpigmentation) {
      eveningProducts.push({
        name: "Mandelic Acid Treatment",
        brand: brands[Math.floor(Math.random() * brands.length)],
        purpose: "Exfoliation (2-3x weekly)",
        matchReason: "Contains mandelic acid, which is ideal for melanin-rich skin as it exfoliates gently while targeting hyperpigmentation with less risk of causing post-inflammatory hyperpigmentation.",
        imageUrl: "https://images.unsplash.com/photo-1576506542790-51244b486a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      });
    } else if (hasAcne) {
      eveningProducts.push({
        name: "BHA Liquid Exfoliant",
        brand: brands[Math.floor(Math.random() * brands.length)],
        purpose: "Exfoliation (2-3x weekly)",
        matchReason: "Contains 2% salicylic acid that penetrates pores to clear out excess oil and reduce acne while remaining gentle enough for regular use.",
        imageUrl: "https://images.unsplash.com/photo-1576506542790-51244b486a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      });
    } else {
      eveningProducts.push({
        name: "Enzyme Exfoliating Mask",
        brand: brands[Math.floor(Math.random() * brands.length)],
        purpose: "Exfoliation (1-2x weekly)",
        matchReason: "Natural enzymes from papaya and pineapple gently dissolve dead skin cells without physical scrubbing, which can be too harsh for melanin-rich skin and lead to dark marks.",
        imageUrl: "https://images.unsplash.com/photo-1576506542790-51244b486a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      });
    }
  }
  
  // 4. Treatment Serum (everyone gets this)
  if (hasHyperpigmentation) {
    eveningProducts.push({
      name: "Alpha Arbutin & Tranexamic Acid Serum",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Treatment Serum",
      matchReason: "Powerful duo of alpha arbutin and tranexamic acid that targets stubborn hyperpigmentation and evening skin tone without the irritation potential of hydroquinone.",
      imageUrl: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  } else if (hasAcne) {
    eveningProducts.push({
      name: "Azelaic Acid Serum",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Treatment Serum",
      matchReason: "Contains 10% azelaic acid which fights acne, reduces inflammation, and helps fade post-inflammatory hyperpigmentation—a triple action for acne-prone melanin-rich skin.",
      imageUrl: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  } else if (hasDryness) {
    eveningProducts.push({
      name: "Peptide & Ceramide Repair Serum",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Treatment Serum",
      matchReason: "Rich in ceramides and peptides to restore your skin's moisture barrier overnight and prevent water loss, especially important for dry melanin-rich skin.",
      imageUrl: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  } else {
    eveningProducts.push({
      name: isFullRoutine ? "Bakuchiol Renewal Serum" : "Multi-Peptide Serum",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Treatment Serum",
      matchReason: isFullRoutine 
        ? "Natural alternative to retinol that promotes cell turnover and collagen production without the irritation often experienced with retinoids, especially by darker skin tones."
        : "Lightweight peptide complex that supports skin repair and rejuvenation while you sleep.",
      imageUrl: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  }
  
  // 5. Night Moisturizer (everyone gets this)
  eveningProducts.push({
    name: hasDryness 
      ? "Ultra-Nourishing Night Cream" 
      : (hasOiliness ? "Balancing Night Gel" : "Repairing Night Cream"),
    brand: brands[Math.floor(Math.random() * brands.length)],
    purpose: "Night Moisturizer",
    matchReason: hasDryness 
      ? "Extra-rich formula with shea butter, squalane, and ceramides that deeply nourishes your skin overnight when it's most receptive to repair."
      : (hasOiliness 
         ? "Oil-free gel formula that provides necessary hydration while helping to balance sebum production overnight."
         : "Balanced formula that supports your skin's natural overnight renewal process without feeling heavy."),
    imageUrl: "https://i.pinimg.com/736x/a6/d0/b1/a6d0b1fa406b3ee9abb1cb07068940be.jpg",
  });
  
  // 6. Optional Face Oil for Full Routine + Dry Skin
  if (isFullRoutine && hasDryness) {
    eveningProducts.push({
      name: "Rosehip & Marula Face Oil",
      brand: brands[Math.floor(Math.random() * brands.length)],
      purpose: "Face Oil (Optional)",
      matchReason: "Blend of non-comedogenic plant oils rich in antioxidants and fatty acids that seal in moisture and nourish your dry skin overnight. Particularly effective for melanin-rich skin that tends to be naturally drier.",
      imageUrl: "https://images.unsplash.com/photo-1598449426149-c50e9270de20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-medium text-skin-brown-800 mb-6">Your Personalized Routine</h2>
      
      <div className="bg-skin-peach-50 rounded-lg p-5 mb-8 border border-skin-peach-200">
        <p className="text-skin-brown-700">
          This routine is carefully tailored for your {getSkinToneText(skinTone)} skin with {getSkinTypeText(skinType)} tendencies, 
          focusing on {concerns.length > 0 ? getConcernLabel(concerns) : "your overall skin health"}. 
          Each product is selected to work harmoniously with melanin-rich skin like yours.
        </p>
      </div>
      
      <RoutineSection 
        title="Morning Routine" 
        products={morningProducts}
      />
      
      <RoutineSection 
        title="Evening Routine" 
        products={eveningProducts}
      />
    </div>
  );
};

// Helper function to convert skinTone value to readable text
const getSkinToneText = (value: string) => {
  const map: Record<string, string> = {
    "light-medium": "light to medium brown",
    "medium": "medium brown",
    "medium-dark": "medium to dark brown",
    "dark": "dark brown",
    "very-dark": "very dark brown",
  };
  return map[value] || value;
};

// Helper function to convert skinType value to readable text
const getSkinTypeText = (value: string) => {
  const map: Record<string, string> = {
    "dry": "dry",
    "oily": "oily",
    "combination": "combination",
    "normal": "balanced",
    "sensitive": "sensitive",
    "not-sure": "unique",
  };
  return map[value] || value;
};

// Helper function to get a readable string for concerns
const getConcernLabel = (concerns: string[]) => {
  if (concerns.length === 0) return "overall skin health";
  
  const readableConcerns = concerns.map(c => {
    switch(c) {
      case "hyperpigmentation": return "dark spots";
      case "acne": return "breakouts";
      case "texture": return "texture concerns";
      case "dryness": return "dryness";
      case "oiliness": return "oil control";
      case "dullness": return "boosting your glow";
      case "fine-lines": return "fine lines";
      case "sensitivity": return "calming sensitivity";
      case "ingrown": return "preventing ingrown hairs";
      default: return c;
    }
  });
  
  if (readableConcerns.length === 1) return readableConcerns[0];
  if (readableConcerns.length === 2) return `${readableConcerns[0]} and ${readableConcerns[1]}`;
  
  return `${readableConcerns.slice(0, -1).join(", ")}, and ${readableConcerns[readableConcerns.length - 1]}`;
};

export default SkincareRoutine;
