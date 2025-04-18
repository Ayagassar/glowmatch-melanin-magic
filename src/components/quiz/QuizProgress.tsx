
import { useQuiz } from "@/contexts/QuizContext";

const QuizProgress = () => {
  const { currentStep, totalSteps } = useQuiz();
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-skin-brown-600 mb-2">
        <span>Question {currentStep} of {totalSteps}</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      <div className="h-2 bg-skin-brown-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-skin-terracotta-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgress;
