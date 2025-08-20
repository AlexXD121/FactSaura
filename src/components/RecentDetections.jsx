import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Share,
  AlertTriangle,
  CheckCircle,
  Search,
  X,
  RefreshCw,
} from "lucide-react";
import { Dialog } from "@headlessui/react";
import { recentDetections } from "../data/mockData";
import { SkeletonCard } from "./LoadingSpinner";

export default function RecentDetections() {
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "bg-green-500";
      case "misinformation":
        return "bg-red-500";
      case "investigating":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "verified":
        return <CheckCircle size={16} />;
      case "misinformation":
        return <AlertTriangle size={16} />;
      case "investigating":
        return <Search size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  return (
    <section className="py-16 px-4 bg-custom-gray">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent <span className="text-custom-cyan">Detections</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Live feed of misinformation claims being detected and verified by
              our AI agents in real-time
            </p>
            <motion.button
              onClick={handleRefresh}
              className="p-2 rounded-full bg-custom-cyan/20 hover:bg-custom-cyan/30 text-custom-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={isRefreshing}
            >
              <motion.div
                animate={isRefreshing ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
              >
                <RefreshCw size={20} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {[
            { value: "847", label: "Claims Today", gradient: "from-red-500 to-orange-500" },
            { value: "28s", label: "Avg Response", gradient: "from-green-500 to-emerald-500" },
            { value: "1,247", label: "Sources Monitored", gradient: "from-blue-500 to-cyan-500" },
            { value: "94.2%", label: "Accuracy Rate", gradient: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50 text-center hover:border-custom-cyan/50 transition-all duration-300 group"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-3`}>
                <motion.p 
                  className="text-3xl font-bold text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
              </div>
              <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="overflow-x-auto pb-4"
        >
          <div className="flex space-x-6 w-max">
            {isLoading ? (
              // Show skeleton cards while loading
              Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              recentDetections.map((detection, index) => (
              <motion.div
                key={detection.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedClaim(detection)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedClaim(detection);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for claim: ${detection.claim}`}
                className="bg-gradient-to-br from-white to-gray-50 w-80 p-6 rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-200/50 backdrop-blur-sm group focus:ring-2 focus:ring-custom-cyan focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-white text-xs font-medium flex items-center gap-2 ${getStatusColor(
                      detection.status
                    )}`}
                  >
                    {getStatusIcon(detection.status)}
                    {detection.status.toUpperCase()}
                  </div>
                  <span className="text-gray-600 text-xs">
                    {detection.time}
                  </span>
                </div>

                {/* Claim */}
                <h3 className="text-black font-semibold mb-3 line-clamp-2">
                  "{detection.claim}"
                </h3>

                {/* Confidence Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 text-sm font-semibold">
                      Confidence Score
                    </span>
                    <span className="text-black font-bold text-lg">
                      {detection.confidence}/100
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${detection.confidence}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                      className={`h-full rounded-full relative ${
                        detection.confidence > 70
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : detection.confidence > 40
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                          : "bg-gradient-to-r from-red-400 to-red-600"
                      }`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{detection.source}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share size={14} />
                    <span>{detection.shares}</span>
                  </div>
                </div>
              </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-8"
        >
          <button className="bg-custom-cyan hover:bg-cyan-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Detections →
          </button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <Dialog
        open={!!selectedClaim}
        onClose={() => setSelectedClaim(null)}
        className="fixed inset-0 z-50"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full max-h-96 overflow-y-auto"
          >
            {selectedClaim && (
              <>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">
                    Fact-Check Details
                  </h3>
                  <button
                    onClick={() => setSelectedClaim(null)}
                    className="text-gray-500 hover:text-black"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Claim:</h4>
                    <p className="text-gray-700">"{selectedClaim.claim}"</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-2">Source:</h4>
                    <p className="text-gray-700">{selectedClaim.source}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Verification Status:
                    </h4>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm ${getStatusColor(
                        selectedClaim.status
                      )}`}
                    >
                      {getStatusIcon(selectedClaim.status)}
                      {selectedClaim.status.toUpperCase()}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-2">Analysis:</h4>
                    <p className="text-gray-700 text-sm">
                      {selectedClaim.status === "misinformation"
                        ? "Our AI agents found no credible sources supporting this claim. Cross-referenced with official databases and fact-checking organizations."
                        : selectedClaim.status === "verified"
                        ? "Confirmed by multiple reliable sources and official channels. Information verified through cross-referencing."
                        : "Currently under investigation by our verification agents. Awaiting confirmation from additional sources."}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Confidence Score:
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-200 rounded-full h-3 flex-1">
                        <div
                          className={`h-full rounded-full ${
                            selectedClaim.confidence > 70
                              ? "bg-green-500"
                              : selectedClaim.confidence > 40
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${selectedClaim.confidence}%` }}
                        />
                      </div>
                      <span className="font-bold text-black">
                        {selectedClaim.confidence}/100
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </Dialog>
    </section>
  );
}
