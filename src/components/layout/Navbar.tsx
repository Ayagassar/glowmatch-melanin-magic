import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/Screenshot_2025-04-21_at_15.23.24-removebg-preview.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="py-4 md:py-6 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-xl font-serif font-medium text-skin-brown-800">
          <img src={logo} alt="GlowMatch Logo" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/quiz" className="text-skin-brown-700 hover:text-skin-brown-900">
            Take the Quiz
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-skin-brown-700 hover:text-skin-brown-900">
                My Profile
              </Link>
              <button 
                onClick={handleLogout}
                className="btn-outline"
              >
                Log Out
              </button>
            </div>
          ) : (
            <button onClick={handleSignIn} className="btn-primary">
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-skin-brown-800"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 border-t border-skin-brown-200">
          <Link
            to="/quiz"
            className="text-skin-brown-700 hover:text-skin-brown-900 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Take the Quiz
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-skin-brown-700 hover:text-skin-brown-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
              <button 
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="btn-outline text-center"
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                handleSignIn();
                setIsMenuOpen(false);
              }}
              className="btn-primary text-center"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
