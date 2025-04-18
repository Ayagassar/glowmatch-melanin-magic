
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Quiz question types
export type QuizQuestion = {
  id: string;
  question: string;
  type: "single" | "multiple" | "scale";
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
};

// Quiz result types
export type SkinProfile = {
  skinTone: string;
  skinType: string;
  concerns: string[];
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
    question: "How would you describe your skin tone?",
    type: "single",
    options: [
      { value: "light-medium", label: "Light to Medium Brown" },
      { value: "medium", label: "Medium Brown" },
      { value: "medium-dark", label: "Medium to Dark Brown" },
      { value: "dark", label: "Dark Brown" },
      { value: "very-dark", label: "Very Dark Brown" },
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
      { value: "not-sure", label: "I'm not sure" },
    ],
  },
  {
    id: "concerns",
    question: "What are your main skin concerns? (Select all that apply)",
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
    id: "sensitivity",
    question: "How sensitive is your skin?",
    type: "scale",
    min: 1,
    max: 5,
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
