import { motion } from "framer-motion";

export default function LoadingSpinner({ size = "md" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-custom-cyan rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-80 p-6 rounded-2xl shadow-xl animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gray-700 h-6 w-20 rounded-full"></div>
        <div className="bg-gray-700 h-4 w-16 rounded"></div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="bg-gray-700 h-4 w-full rounded"></div>
        <div className="bg-gray-700 h-4 w-3/4 rounded"></div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="bg-gray-700 h-3 w-24 rounded"></div>
          <div className="bg-gray-700 h-3 w-12 rounded"></div>
        </div>
        <div className="bg-gray-700 h-3 w-full rounded-full"></div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="bg-gray-700 h-3 w-16 rounded"></div>
        <div className="bg-gray-700 h-3 w-12 rounded"></div>
      </div>
    </div>
  );
}