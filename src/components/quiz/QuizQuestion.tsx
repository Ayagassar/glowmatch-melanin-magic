
import { useState } from "react";
import { useQuiz, QuizQuestion as QuizQuestionType } from "@/contexts/QuizContext";

interface QuizQuestionProps {
  question: QuizQuestionType;
}

const QuizQuestion = ({ question }: QuizQuestionProps) => {
  const { answers, setAnswer } = useQuiz();
  const currentAnswer = answers[question.id];

  // For scale type questions
  const [scaleValue, setScaleValue] = useState<number>(
    currentAnswer !== undefined ? currentAnswer : question.min || 1
  );

  const handleSingleSelect = (value: string) => {
    setAnswer(question.id, value);
  };

  const handleMultipleSelect = (value: string) => {
    const currentValues = currentAnswer || [];
    
    // Check if we need to enforce the "up to 3" limit for concerns
    if (question.id === "concerns" && !currentValues.includes(value) && currentValues.length >= 3) {
      return; // Don't add more than 3 concerns
    }
    
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    
    setAnswer(question.id, newValues);
  };

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setScaleValue(value);
    setAnswer(question.id, value);
  };

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-medium text-skin-brown-800 mb-6">
        {question.question}
      </h3>
      
      {/* For skin tone visual selector */}
      {question.type === "visual" && question.options && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSingleSelect(option.value)}
              className={`rounded-xl overflow-hidden flex flex-col border-2 transition-all ${
                currentAnswer === option.value
                  ? "border-skin-terracotta-500 shadow-md"
                  : "border-transparent hover:border-skin-brown-200"
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={option.imageUrl} 
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`py-2 px-1 text-center text-sm ${
                currentAnswer === option.value
                  ? "bg-skin-terracotta-50 text-skin-terracotta-700 font-medium"
                  : "bg-skin-brown-50 text-skin-brown-700"
              }`}>
                {option.label}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* For regular single select questions */}
      {question.type === "single" && question.options && (
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSingleSelect(option.value)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                currentAnswer === option.value
                  ? "bg-skin-terracotta-100 border-skin-terracotta-500 text-skin-brown-800"
                  : "bg-white border-skin-brown-200 text-skin-brown-600 hover:bg-skin-brown-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* For multiple select questions */}
      {question.type === "multiple" && question.options && (
        <div className="space-y-3">
          {question.id === "concerns" && (
            <p className="text-skin-brown-600 mb-4 italic text-sm">
              Select up to 3 concerns
            </p>
          )}
          
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleMultipleSelect(option.value)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                currentAnswer && currentAnswer.includes(option.value)
                  ? "bg-skin-terracotta-100 border-skin-terracotta-500 text-skin-brown-800"
                  : "bg-white border-skin-brown-200 text-skin-brown-600 hover:bg-skin-brown-50"
              } ${
                question.id === "concerns" && 
                currentAnswer && 
                currentAnswer.length >= 3 && 
                !currentAnswer.includes(option.value)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={question.id === "concerns" && currentAnswer && currentAnswer.length >= 3 && !currentAnswer.includes(option.value)}
            >
              <div className="flex items-center">
                <div 
                  className={`w-5 h-5 rounded-md border flex-shrink-0 mr-3 flex items-center justify-center ${
                    currentAnswer && currentAnswer.includes(option.value)
                      ? "bg-skin-terracotta-500 border-skin-terracotta-500"
                      : "border-skin-brown-300"
                  }`}
                >
                  {currentAnswer && currentAnswer.includes(option.value) && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                {option.label}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* For scale questions */}
      {question.type === "scale" && (
        <div>
          <div className="mb-6">
            <input
              type="range"
              min={question.min || 1}
              max={question.max || 5}
              value={scaleValue}
              onChange={handleScaleChange}
              className="w-full h-2 bg-skin-brown-200 rounded-lg appearance-none cursor-pointer accent-skin-terracotta-500"
            />
          </div>
          
          <div className="flex justify-between text-sm text-skin-brown-600">
            <span>Not sensitive at all</span>
            <span>Extremely sensitive</span>
          </div>
          
          <div className="mt-6 text-center">
            <span className="inline-block px-4 py-2 bg-skin-terracotta-100 rounded-full text-skin-terracotta-700 font-medium">
              {scaleValue}/5
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;

