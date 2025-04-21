
import { useAuth } from "@/contexts/AuthContext";

interface SkinProfileCardProps {
  skinTone: string;
  skinType: string;
  concerns: string[];
  preferences?: string[];
  currentRoutine?: string;
}

const SkinProfileCard = ({ 
  skinTone, 
  skinType, 
  concerns, 
  preferences = [], 
  currentRoutine = "basic" 
}: SkinProfileCardProps) => {
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
      "sensitive": "Sensitive",
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

  // Helper function to convert preferences to readable text
  const getPreferenceText = (value: string) => {
    const map: Record<string, string> = {
      "black-owned": "Black-owned brands",
      "fragrance-free": "Fragrance-free formulas",
      "vegan": "Vegan/cruelty-free",
      "natural": "Natural/clean ingredients",
      "affordable": "Budget-friendly options",
      "luxury": "Luxury/high-end products",
    };
    return map[value] || value;
  };

  // Helper function to convert routine to readable text
  const getRoutineText = (value: string) => {
    const map: Record<string, string> = {
      "none": "No routine",
      "basic": "Basic routine",
      "full": "Full routine",
      "prescription": "Prescription products",
      "inconsistent": "Inconsistent routine",
    };
    return map[value] || value;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-skin-brown-200 overflow-hidden">
      <div className="bg-gradient-to-r from-skin-terracotta-500 to-skin-peach-500 p-6 text-white">
        <h2 className="text-xl font-medium mb-1">Your Skin Profile</h2>
        <p className="opacity-90">Personalized to your unique beauty</p>
      </div>

      <div className="p-6">
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
            <p className="text-skin-brown-600 text-sm mb-1">Current Routine</p>
            <p className="font-medium text-skin-brown-800">{getRoutineText(currentRoutine)}</p>
          </div>
          
          <div>
            <p className="text-skin-brown-600 text-sm mb-1">Top Concerns</p>
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
          
          {preferences.length > 0 && (
            <div>
              <p className="text-skin-brown-600 text-sm mb-1">Preferences</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {preferences.map((preference) => (
                  <span 
                    key={preference}
                    className="inline-block bg-skin-peach-100 text-skin-peach-700 text-sm px-3 py-1 rounded-full"
                  >
                    {getPreferenceText(preference)}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4 mt-2 border-t border-skin-brown-100">
            <button className="text-skin-terracotta-600 hover:text-skin-terracotta-700 text-sm font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Update Quiz Answers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinProfileCard;
