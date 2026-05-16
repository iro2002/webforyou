import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TermsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("termsAccepted");
    if (!hasAccepted) {
      // Small delay to let the site load first
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("termsAccepted", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Terms & Conditions
              </h3>
              
              <div className="text-gray-600 space-y-4 max-h-[40vh] overflow-y-auto pr-2 text-sm leading-relaxed">
                <p>
                  Welcome to our website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
                </p>
                <p>
                  <strong>1. Acceptance of Terms:</strong> The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                </p>
                <p>
                  <strong>2. Privacy:</strong> Your use of our website is also governed by our Privacy Policy. We are committed to protecting your privacy and security.
                </p>
                <p>
                  <strong>3. Intellectual Property:</strong> This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.
                </p>
                <p>
                  <strong>4. Use of Cookies:</strong> This website uses cookies to monitor browsing preferences. By clicking "I Accept", you consent to our use of cookies and agree to our terms.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleAccept}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c22924] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-black transition-all duration-300"
                >
                  I Accept
                </button>
                <button
                  onClick={handleAccept}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  Decline
                </button>
              </div>
            </div>
            
            {/* Red accent line at bottom */}
            <div className="h-1.5 w-full bg-[#c22924]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
