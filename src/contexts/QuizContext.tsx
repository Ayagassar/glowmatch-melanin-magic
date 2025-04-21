
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Quiz question types
export type QuizQuestion = {
  id: string;
  question: string;
  type: "single" | "multiple" | "scale" | "visual";
  options?: { value: string; label: string; imageUrl?: string }[];
  min?: number;
  max?: number;
};

// Quiz result types
export type SkinProfile = {
  skinTone: string;
  skinType: string;
  concerns: string[];
  currentRoutine: string;
  skinReactions: string;
  sunscreenUse: string;
  timeAvailable: string;
  preferences: string[];
  sensitivity: number;
  location: string;
};

// Context type
type QuizContextType = {
  currentStep: number;
  totalSteps: number;
  answers: Record<string, any>;
  skinProfile: SkinProfile | null;
  isComplete: boolean;
  setAnswer: (questionId: string, answer: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
};

// Quiz questions
export const quizQuestions: QuizQuestion[] = [
  {
    id: "skinTone",
    question: "Which best matches your skin tone?",
    type: "visual",
    options: [
      { 
        value: "light-medium", 
        label: "Light to Medium Brown", 
        imageUrl: "https://i.pinimg.com/474x/82/15/75/8215750312fb90432046ae9f8882a95d.jpg" 
      },
      { 
        value: "medium", 
        label: "Medium Brown", 
        imageUrl: "https://i.pinimg.com/474x/77/4f/af/774faf371b0c1b987e03ab9412e92b30.jpg" 
      },
      { 
        value: "medium-dark", 
        label: "Medium to Dark Brown", 
        imageUrl: "https://i.pinimg.com/736x/55/37/a6/5537a6400b8edeb4ebc142373582b83b.jpg" 
      },
      { 
        value: "dark", 
        label: "Dark Brown", 
        imageUrl: "https://i.pinimg.com/474x/6f/f3/3d/6ff33d80be6b0f3e12abd0f7c792a215.jpg" 
      },
      { 
        value: "very-dark", 
        label: "Very Dark Brown", 
        imageUrl: "https://i.pinimg.com/474x/56/c2/a3/56c2a3f4e629c3c8ddb917694dfa336b.jpg" 
      },
    ],
  },
  {
    id: "skinType",
    question: "What is your skin type?",
    type: "single",
    options: [
      { value: "dry", label: "Dry - feels tight, sometimes flaky" },
      { value: "oily", label: "Oily - shiny, especially T-zone" },
      { value: "combination", label: "Combination - oily T-zone, dry cheeks" },
      { value: "normal", label: "Normal - balanced, not too dry or oily" },
      { value: "sensitive", label: "Sensitive - easily irritated or reactive" },
      { value: "not-sure", label: "I'm not sure" },
    ],
  },
  {
    id: "concerns",
    question: "What are your top skin concerns? (Select up to 3)",
    type: "multiple",
    options: [
      { value: "hyperpigmentation", label: "Dark spots or hyperpigmentation" },
      { value: "acne", label: "Acne or breakouts" },
      { value: "texture", label: "Uneven texture" },
      { value: "dryness", label: "Dryness or flakiness" },
      { value: "oiliness", label: "Excessive oiliness" },
      { value: "dullness", label: "Dullness or lack of glow" },
      { value: "fine-lines", label: "Fine lines or wrinkles" },
      { value: "sensitivity", label: "Sensitivity or irritation" },
      { value: "ingrown", label: "Ingrown hairs or razor bumps" },
    ],
  },
  {
    id: "currentRoutine",
    question: "How would you describe your current skincare routine?",
    type: "single",
    options: [
      { value: "none", label: "None - I don't have a routine" },
      { value: "basic", label: "Basic - cleanser and maybe moisturizer" },
      { value: "full", label: "Full - several steps with different products" },
      { value: "prescription", label: "Prescription - includes doctor-prescribed products" },
      { value: "inconsistent", label: "Inconsistent - I skip days or change frequently" },
    ],
  },
  {
    id: "skinReactions",
    question: "Do you experience reactions to skincare products?",
    type: "single",
    options: [
      { value: "yes", label: "Yes, often - many products irritate my skin" },
      { value: "sometimes", label: "Sometimes - certain ingredients cause issues" },
      { value: "rarely", label: "Rarely - only very harsh products cause problems" },
      { value: "never", label: "Never - my skin tolerates most products well" },
      { value: "not-sure", label: "Not sure - I haven't noticed patterns" },
    ],
  },
  {
    id: "sensitivity",
    question: "On a scale of 1-5, how sensitive is your skin?",
    type: "scale",
    min: 1,
    max: 5,
  },
  {
    id: "sunscreenUse",
    question: "How often do you wear sunscreen?",
    type: "single",
    options: [
      { value: "daily", label: "Daily - I wear it every day" },
      { value: "sometimes", label: "Sometimes - When I remember or I'm outdoors" },
      { value: "rarely", label: "Rarely - I usually forget or don't like it" },
      { value: "never", label: "Never - I don't use sunscreen" },
    ],
  },
  {
    id: "timeAvailable",
    question: "How much time can you dedicate to your skincare routine?",
    type: "single",
    options: [
      { value: "minimal", label: "Minimal - 5 minutes or less" },
      { value: "moderate", label: "Moderate - 5-10 minutes" },
      { value: "full", label: "Full routine - 10+ minutes" },
    ],
  },
  {
    id: "preferences",
    question: "Do you have any preferences for product type? (Select all that apply)",
    type: "multiple",
    options: [
      { value: "black-owned", label: "Black-owned brands" },
      { value: "fragrance-free", label: "Fragrance-free formulas" },
      { value: "vegan", label: "Vegan/cruelty-free" },
      { value: "natural", label: "Natural/clean ingredients" },
      { value: "affordable", label: "Budget-friendly options" },
      { value: "luxury", label: "Luxury/high-end products" },
    ],
  },
  {
    id: "location",
    question: "What type of climate do you live in?",
    type: "single",
    options: [
      { value: "humid", label: "Hot and humid" },
      { value: "dry", label: "Hot and dry" },
      { value: "temperate", label: "Temperate/Mild" },
      { value: "cold", label: "Cold and dry" },
      { value: "tropical", label: "Tropical" },
    ],
  },
];

// Create context
const QuizContext = createContext<QuizContextType | null>(null);

// Custom hook to use the quiz context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

// Quiz provider component
export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [skinProfile, setSkinProfile] = useState<SkinProfile | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = quizQuestions.length;

  // Load saved answers and completion status from localStorage if available
  useEffect(() => {
    const savedAnswers = localStorage.getItem("glowmatch_quiz_answers");
    const savedProfile = localStorage.getItem("glowmatch_skin_profile");
    const savedCompletion = localStorage.getItem("glowmatch_quiz_complete");
    
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    
    if (savedProfile) {
      setSkinProfile(JSON.parse(savedProfile));
    }
    
    if (savedCompletion === "true") {
      setIsComplete(true);
    }
  }, []);

  // Set answer for a specific question
  const setAnswer = (questionId: string, answer: any) => {
    // If this is the concerns question, limit to 3 selections
    if (questionId === "concerns" && Array.isArray(answer) && answer.length > 3) {
      answer = answer.slice(0, 3);
    }
    
    const updatedAnswers = { ...answers, [questionId]: answer };
    setAnswers(updatedAnswers);
    localStorage.setItem("glowmatch_quiz_answers", JSON.stringify(updatedAnswers));
  };

  // Navigate to next step
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Go to specific step
  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  // Complete the quiz and generate skin profile
  const completeQuiz = () => {
    // Create skin profile from answers with defaults for any missing answers
    const profile: SkinProfile = {
      skinTone: answers.skinTone || "medium",
      skinType: answers.skinType || "normal",
      concerns: answers.concerns || ["hyperpigmentation"],
      currentRoutine: answers.currentRoutine || "basic",
      skinReactions: answers.skinReactions || "sometimes",
      sunscreenUse: answers.sunscreenUse || "sometimes",
      timeAvailable: answers.timeAvailable || "moderate",
      preferences: answers.preferences || [],
      sensitivity: answers.sensitivity || 3,
      location: answers.location || "temperate",
    };

    setSkinProfile(profile);
    setIsComplete(true);

    // Save to localStorage
    localStorage.setItem("glowmatch_skin_profile", JSON.stringify(profile));
    localStorage.setItem("glowmatch_quiz_complete", "true");
    
    console.log("Quiz completed with profile:", profile);
  };

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers({});
    setSkinProfile(null);
    setIsComplete(false);
    
    // Clear localStorage
    localStorage.removeItem("glowmatch_quiz_answers");
    localStorage.removeItem("glowmatch_skin_profile");
    localStorage.removeItem("glowmatch_quiz_complete");
  };

  return (
    <QuizContext.Provider
      value={{
        currentStep,
        totalSteps,
        answers,
        skinProfile,
        isComplete,
        setAnswer,
        nextStep,
        prevStep,
        goToStep,
        completeQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
