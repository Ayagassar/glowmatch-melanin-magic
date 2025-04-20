
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-skin-brown-100 py-12 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-skin-brown-800 mb-4">GlowMatch AI</h3>
            <p className="text-skin-brown-600 mb-4">
              Personalized skincare recommendations for melanin-rich skin.
            </p>
            <p className="text-skin-brown-600 text-sm">
              © {new Date().getFullYear()} GlowMatch AI. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-skin-brown-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-skin-brown-600 hover:text-skin-brown-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-skin-brown-600 hover:text-skin-brown-800">
                  Take the Quiz
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-skin-brown-600 hover:text-skin-brown-800">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-skin-brown-800 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-skin-brown-600 hover:text-skin-brown-800">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-skin-brown-600 hover:text-skin-brown-800">
                  Twitter
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-skin-brown-600 hover:text-skin-brown-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
