import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, X, Info } from "lucide-react";
import { useState, useEffect } from "react";

export default function Toast({ message, type = "info", duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertTriangle,
    warning: AlertTriangle,
    info: Info
  };

  const colors = {
    success: "from-green-500 to-emerald-600",
    error: "from-red-500 to-red-600", 
    warning: "from-yellow-500 to-orange-500",
    info: "from-blue-500 to-cyan-500"
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={`fixed top-4 right-4 z-50 bg-gradient-to-r ${colors[type]} text-white px-6 py-4 rounded-xl shadow-2xl max-w-sm`}
        >
          <div className="flex items-center gap-3">
            <Icon size={20} />
            <p className="font-medium flex-1">{message}</p>
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(onClose, 300);
              }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}