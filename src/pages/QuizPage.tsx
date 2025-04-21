
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import { useQuiz, quizQuestions } from "@/contexts/QuizContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  
  // Get current question
  const currentQuestion = quizQuestions[currentStep - 1];
  
  // Check if user has answered the current question
  const hasAnswered = !!answers[currentQuestion.id];
  const isLastQuestion = currentStep === totalSteps;
  
  // Handle next button click
  const handleNext = () => {
    if (isLastQuestion) {
      setSubmitting(true);
      
      // Complete the quiz regardless of authentication status
      completeQuiz();
      
      // Show toast notification
      toast({
        title: "Quiz completed!",
        description: "We've found your personalized skincare matches!",
        duration: 3000,
      });
      
      // If user is not authenticated, show login prompt
      if (!isAuthenticated) {
        setShowLoginPrompt(true);
      } else {
        // If authenticated, redirect to recommendations
        setTimeout(() => {
          setSubmitting(false);
          navigate("/recommendations");
        }, 1500);
      }
    } else {
      nextStep();
    }
  };
  
  // Redirect to recommendations if quiz is complete and user is authenticated
  useEffect(() => {
    if (isComplete && !submitting && isAuthenticated) {
      navigate("/recommendations");
    }
  }, [isComplete, submitting, isAuthenticated, navigate]);

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
                      ? "See My Results" 
                      : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Login/Signup Prompt Dialog */}
      <Dialog open={showLoginPrompt} onOpenChange={setShowLoginPrompt}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-center text-xl font-medium text-skin-brown-800">
            Get Your Personalized Results
          </DialogTitle>
          <DialogDescription className="text-center text-skin-brown-600">
            Create an account or log in to see your customized skincare routine and recommendations.
          </DialogDescription>
          
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center gap-4">
              <Button 
                className="w-full bg-skin-terracotta-500 hover:bg-skin-terracotta-600"
                onClick={() => {
                  setShowLoginPrompt(false);
                  navigate("/login", { state: { signup: true } });
                }}
              >
                Create Account
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-skin-brown-300 text-skin-brown-700 hover:bg-skin-brown-50"
                onClick={() => {
                  setShowLoginPrompt(false);
                  navigate("/login");
                }}
              >
                Sign In
              </Button>
              
              <button 
                className="text-sm text-skin-terracotta-600 hover:text-skin-terracotta-700"
                onClick={() => {
                  setShowLoginPrompt(false);
                  navigate("/recommendations");
                }}
              >
                Continue as Guest
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default QuizPage;
