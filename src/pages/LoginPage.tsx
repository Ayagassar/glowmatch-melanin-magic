
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(!location.state?.signup);
  const { isAuthenticated } = useAuth();

  // Update state if navigated from elsewhere with signup param
  useEffect(() => {
    if (location.state?.signup) {
      setIsLogin(false);
    }
  }, [location.state]);

  // If user is already authenticated, redirect to recommendations
  if (isAuthenticated) {
    return <Navigate to="/recommendations" replace />;
  }

  return (
    <Layout>
      <div className="bg-skin-brown-50 py-16 min-h-[calc(100vh-64px-180px)]">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-medium text-skin-brown-800 mb-4">
                {isLogin ? "Sign In" : "Create Account"}
              </h1>
              <p className="text-skin-brown-600">
                {isLogin 
                  ? "Welcome back to GlowMatch AI" 
                  : "Start your personalized skincare journey"}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
              <div className="flex rounded-lg bg-skin-brown-100 p-1 mb-6">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 rounded-md transition-all font-medium text-sm ${
                    isLogin ? "bg-white shadow-sm text-skin-brown-800" : "text-skin-brown-600"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 rounded-md transition-all font-medium text-sm ${
                    !isLogin ? "bg-white shadow-sm text-skin-brown-800" : "text-skin-brown-600"
                  }`}
                >
                  Create Account
                </button>
              </div>

              {isLogin ? <LoginForm /> : <SignupForm />}
            </div>

            <p className="text-center text-skin-brown-600 text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-skin-terracotta-600 hover:text-skin-terracotta-700 font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
