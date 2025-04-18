
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import SkinProfileCard from "@/components/dashboard/SkinProfileCard";
import SkincareRoutine from "@/components/dashboard/SkincareRoutine";
import SkincareTips from "@/components/dashboard/SkincareTips";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
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

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-skin-brown-600">Loading your profile...</p>
        </div>
      </Layout>
    );
  }

  if (!skinProfile) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-skin-brown-800 mb-4">
              Let's Complete Your Quiz First
            </h2>
            <p className="text-skin-brown-600 mb-6">
              To see your personalized recommendations, we need to understand your skin.
            </p>
            <button 
              onClick={() => navigate("/quiz")}
              className="btn-primary"
            >
              Take the Quiz
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-skin-brown-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <SkinProfileCard 
                skinTone={skinProfile.skinTone}
                skinType={skinProfile.skinType}
                concerns={skinProfile.concerns}
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
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
