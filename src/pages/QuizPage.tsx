
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import { useQuiz, quizQuestions } from "@/contexts/QuizContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const QuizPage = () => {
  const { 
    currentStep, 
    totalSteps, 
    answers, 
    nextStep, 
    prevStep, 
    completeQuiz,
    isComplete 
  } = useQuiz();
  
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  
  // Get current question
  const currentQuestion = quizQuestions[currentStep - 1];
  
  // Check if user has answered the current question
  const hasAnswered = !!answers[currentQuestion.id];
  const isLastQuestion = currentStep === totalSteps;
  
  // Handle next button click
  const handleNext = () => {
    if (isLastQuestion) {
      setSubmitting(true);
      // Submit the quiz and redirect to dashboard
      completeQuiz();
      // Show toast notification
      toast({
        title: "Quiz completed!",
        description: "We've found your personalized skincare matches!",
        duration: 3000,
      });
      // Simulate loading
      setTimeout(() => {
        setSubmitting(false);
        navigate("/dashboard");
      }, 1500);
    } else {
      nextStep();
    }
  };
  
  // Redirect to dashboard if quiz is complete
  useEffect(() => {
    if (isComplete && !submitting) {
      navigate("/dashboard");
    }
  }, [isComplete, submitting, navigate]);

  return (
    <Layout>
      <div className="bg-skin-brown-50 py-12 md:py-16 min-h-screen">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-medium text-skin-brown-800 mb-3">
                Your Personalized Skincare Quiz
              </h1>
              <p className="text-skin-brown-600">
                Let's find the perfect products for your unique skin
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-skin-brown-200 p-6 md:p-8">
              <QuizProgress />
              
              <div className="min-h-[300px]">
                <QuizQuestion question={currentQuestion} />
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`btn-outline ${
                    currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!hasAnswered || submitting}
                  className={`btn-primary ${
                    !hasAnswered ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting 
                    ? "Finding your matches..." 
                    : isLastQuestion 
                      ? "Complete Quiz" 
                      : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuizPage;
