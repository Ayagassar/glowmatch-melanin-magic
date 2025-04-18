
import { createContext, useContext, useState, ReactNode } from "react";

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

  // Set answer for a specific question
  const setAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
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
    // Create skin profile from answers
    const profile: SkinProfile = {
      skinTone: answers.skinTone || "",
      skinType: answers.skinType || "",
      concerns: answers.concerns || [],
      sensitivity: answers.sensitivity || 3,
      location: answers.location || "",
    };

    setSkinProfile(profile);
    setIsComplete(true);

    // In a real app, you would save this profile to a database
    console.log("Quiz completed with profile:", profile);
    
    // Save in localStorage for now
    localStorage.setItem("glowmatch_skin_profile", JSON.stringify(profile));
  };

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers({});
    setSkinProfile(null);
    setIsComplete(false);
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
