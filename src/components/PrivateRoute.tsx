import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useQuiz } from '@/contexts/QuizContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiresQuiz?: boolean;
}

const PrivateRoute = ({ children, requiresQuiz = false }: PrivateRouteProps) => {
  const { isAuthenticated, user, loading } = useAuth();
  const { isComplete } = useQuiz();
  const location = useLocation();

  // If auth is still loading, show nothing (or a loader)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-skin-brown-600">Loading...</p>
      </div>
    );
  }

  // If this route requires quiz completion and quiz is not completed
  if (requiresQuiz && !isComplete) {
    return <Navigate to="/quiz" replace />;
  }

  // If not authenticated and not coming from the quiz (allow quiz users as guests)
  if (!isAuthenticated && !isComplete) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Otherwise render the children
  return <>{children}</>;
};

export default PrivateRoute;
