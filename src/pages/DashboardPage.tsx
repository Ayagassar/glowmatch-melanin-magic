
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import SkinProfileCard from "@/components/dashboard/SkinProfileCard";
import SkincareRoutine from "@/components/dashboard/SkincareRoutine";
import SkincareTips from "@/components/dashboard/SkincareTips";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [skinProfile, setSkinProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch this from a server
    // For now, we'll use localStorage to simulate
    const storedProfile = localStorage.getItem("glowmatch_skin_profile");
    
    if (storedProfile) {
      setSkinProfile(JSON.parse(storedProfile));
    } else {
      // If no profile, redirect to quiz
      navigate("/quiz");
    }
    
    setLoading(false);
  }, [navigate]);

  const handleSaveRoutine = () => {
    toast({
      title: "Routine saved!",
      description: "Your personalized routine has been saved to your profile.",
      duration: 3000,
    });
  };

  const handleEmailRoutine = () => {
    toast({
      title: "Email sent!",
      description: "Your personalized routine has been sent to your email.",
      duration: 3000,
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-skin-terracotta-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-skin-brown-600">Loading your profile...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!skinProfile) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md px-4">
            <h2 className="text-2xl font-medium text-skin-brown-800 mb-4">
              Let's Complete Your Quiz First
            </h2>
            <p className="text-skin-brown-600 mb-6">
              To see your personalized recommendations, we need to understand your skin.
            </p>
            <Button 
              onClick={() => navigate("/quiz")}
              className="bg-skin-terracotta-500 hover:bg-skin-terracotta-600"
            >
              Take the Quiz
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-skin-brown-50 py-12">
        <div className="container-custom">
          {/* Welcome banner */}
          <div className="bg-gradient-to-r from-skin-terracotta-500 to-skin-peach-500 rounded-2xl p-6 mb-10 text-white shadow-sm">
            <h1 className="text-2xl md:text-3xl font-medium mb-2">
              Welcome to Your Skincare Journey, {user?.name || "Beautiful"}
            </h1>
            <p className="opacity-90 max-w-2xl">
              Your personalized dashboard is designed just for you, based on your unique skin profile. 
              Here you'll find recommendations tailored specifically for your melanin-rich skin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <SkinProfileCard 
                skinTone={skinProfile.skinTone}
                skinType={skinProfile.skinType}
                concerns={skinProfile.concerns}
                preferences={skinProfile.preferences || []}
                currentRoutine={skinProfile.currentRoutine || "basic"}
              />
              
              <div className="mt-6">
                <SkincareTips concerns={skinProfile.concerns} />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <SkincareRoutine 
                skinTone={skinProfile.skinTone}
                skinType={skinProfile.skinType}
                concerns={skinProfile.concerns}
                sensitivity={skinProfile.sensitivity || 3}
                timeAvailable={skinProfile.timeAvailable || "moderate"}
                preferences={skinProfile.preferences || []}
              />
              
              <div className="flex justify-center mt-10 gap-4">
                <Button 
                  onClick={handleSaveRoutine}
                  className="bg-skin-terracotta-500 hover:bg-skin-terracotta-600"
                >
                  Save Routine
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleEmailRoutine}
                  className="border-skin-brown-300 text-skin-brown-700 hover:bg-skin-brown-50"
                >
                  Email Routine
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
