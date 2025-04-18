
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define types for our context
type User = {
  id: string;
  name: string;
  email: string;
  hasCompletedQuiz: boolean;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

// Create the context with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Mock user data for demo purposes
const MOCK_USER: User = {
  id: "user-1",
  name: "Amara Johnson",
  email: "amara@example.com",
  hasCompletedQuiz: false,
};

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("glowmatch_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function - in a real app, this would call your backend
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // This is just a mock - in a real app, you'd validate credentials with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setUser(MOCK_USER);
      localStorage.setItem("glowmatch_user", JSON.stringify(MOCK_USER));
    } finally {
      setLoading(false);
    }
  };

  // Signup function - in a real app, this would call your backend
  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      // This is just a mock - in a real app, you'd create a user with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      const newUser = { ...MOCK_USER, name, email };
      setUser(newUser);
      localStorage.setItem("glowmatch_user", JSON.stringify(newUser));
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("glowmatch_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
