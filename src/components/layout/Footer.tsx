
import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

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
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-skin-brown-800 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://instagram.com/glowmatchai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-skin-brown-600 hover:text-skin-brown-800 flex items-center gap-2"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/glowmatchai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-skin-brown-600 hover:text-skin-brown-800 flex items-center gap-2"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
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
      
      {/* Mobile fixed copyright */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-skin-brown-100 py-2 px-4 text-center border-t border-skin-brown-200">
        <p className="text-skin-brown-600 text-xs">
          © {new Date().getFullYear()} GlowMatch AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
