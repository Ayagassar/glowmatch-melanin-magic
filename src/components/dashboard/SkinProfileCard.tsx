
import { useAuth } from "@/contexts/AuthContext";

interface SkinProfileCardProps {
  skinTone: string;
  skinType: string;
  concerns: string[];
}

const SkinProfileCard = ({ skinTone, skinType, concerns }: SkinProfileCardProps) => {
  const { user } = useAuth();

  // Helper function to convert skinTone value to readable text
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

  // Helper function to convert skinType value to readable text
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
    <div className="bg-white rounded-2xl shadow-sm border border-skin-brown-200 overflow-hidden">
      <div className="bg-gradient-to-r from-skin-terracotta-500 to-skin-peach-500 p-6 text-white">
        <h2 className="text-xl font-medium mb-1">Welcome, {user?.name}</h2>
        <p className="opacity-90">Your personalized skincare journey begins here</p>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium text-skin-brown-800 mb-4">Your Skin Profile</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-skin-brown-600 text-sm mb-1">Skin Tone</p>
            <p className="font-medium text-skin-brown-800">{getSkinToneText(skinTone)}</p>
          </div>
          
          <div>
            <p className="text-skin-brown-600 text-sm mb-1">Skin Type</p>
            <p className="font-medium text-skin-brown-800">{getSkinTypeText(skinType)}</p>
          </div>
          
          <div>
            <p className="text-skin-brown-600 text-sm mb-1">Concerns</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {concerns.map((concern) => (
                <span 
                  key={concern}
                  className="inline-block bg-skin-brown-100 text-skin-brown-700 text-sm px-3 py-1 rounded-full"
                >
                  {getConcernText(concern)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinProfileCard;
