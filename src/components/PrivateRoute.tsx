import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiresQuiz?: boolean;
}

const PrivateRoute = ({ children, requiresQuiz = false }: PrivateRouteProps) => {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();

  // If auth is still loading, show nothing (or a loader)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-skin-brown-600">Loading...</p>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If this route requires quiz completion and user hasn't done it
  if (requiresQuiz && user && !user.hasCompletedQuiz) {
    return <Navigate to="/quiz" replace />;
  }

  // Otherwise render the children
  return <>{children}</>;
};

export default PrivateRoute;
