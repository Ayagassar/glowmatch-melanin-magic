
import React from "react";

interface SkinProfileSummaryProps {
  skinProfile: {
    skinTone: string;
    skinType: string;
    concerns: string[];
    sensitivity: number;
    location: string;
  };
}

const SkinProfileSummary = ({ skinProfile }: SkinProfileSummaryProps) => {
  // Helper functions to convert profile values to readable text
  const getSkinToneText = (value: string) => {
    const map: Record<string, string> = {
      "light-medium": "Light to Medium Brown",
      "medium": "Medium Brown",
      "medium-dark": "Medium to Dark Brown",
      "dark": "Dark Brown",
      "very-dark": "Very Dark Brown",
    };
    return map[value] || value;
  };

  const getSkinTypeText = (value: string) => {
    const map: Record<string, string> = {
      "dry": "Dry",
      "oily": "Oily",
      "combination": "Combination",
      "normal": "Normal",
      "not-sure": "Not Determined",
    };
    return map[value] || value;
  };

  const getLocationText = (value: string) => {
    const map: Record<string, string> = {
      "humid": "Hot & Humid",
      "dry": "Hot & Dry",
      "temperate": "Temperate/Mild",
      "cold": "Cold & Dry",
      "tropical": "Tropical",
    };
    return map[value] || value;
  };

  // Helper function to convert concern value to readable text
  const getConcernText = (value: string) => {
    const map: Record<string, string> = {
      "hyperpigmentation": "Dark spots & hyperpigmentation",
      "acne": "Acne & breakouts",
      "texture": "Uneven texture",
      "dryness": "Dryness & flakiness",
      "oiliness": "Excessive oiliness",
      "dullness": "Dullness & lack of glow",
      "fine-lines": "Fine lines & wrinkles",
      "sensitivity": "Sensitivity & irritation",
      "ingrown": "Ingrown hairs & razor bumps",
    };
    return map[value] || value;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-skin-brown-200">
      <h2 className="text-xl font-medium text-skin-brown-800 mb-4">Your Skin Profile</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-skin-brown-600 text-sm mb-1">Skin Tone</p>
          <p className="font-medium text-skin-brown-800">{getSkinToneText(skinProfile.skinTone)}</p>
        </div>
        
        <div>
          <p className="text-skin-brown-600 text-sm mb-1">Skin Type</p>
          <p className="font-medium text-skin-brown-800">{getSkinTypeText(skinProfile.skinType)}</p>
        </div>
        
        <div>
          <p className="text-skin-brown-600 text-sm mb-1">Concerns</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {skinProfile.concerns.map((concern) => (
              <span 
                key={concern}
                className="inline-block bg-skin-brown-100 text-skin-brown-700 text-sm px-3 py-1 rounded-full"
              >
                {getConcernText(concern)}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-skin-brown-600 text-sm mb-1">Skin Sensitivity</p>
          <div className="flex items-center">
            <div className="w-full bg-skin-brown-200 rounded-full h-2 mr-2">
              <div 
                className="bg-skin-terracotta-500 h-2 rounded-full" 
                style={{ width: `${(skinProfile.sensitivity / 5) * 100}%` }}
              ></div>
            </div>
            <span className="text-skin-brown-800 text-sm font-medium">
              {skinProfile.sensitivity}/5
            </span>
          </div>
        </div>
        
        <div>
          <p className="text-skin-brown-600 text-sm mb-1">Climate</p>
          <p className="font-medium text-skin-brown-800">{getLocationText(skinProfile.location)}</p>
        </div>
      </div>
    </div>
  );
};

export default SkinProfileSummary;
