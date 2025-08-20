import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Image,
  Video,
  Mic,
  AlertTriangle,
  Move,
  Maximize2,
  Minimize2,
} from "lucide-react";

export default function MobileDemo() {
  const [active, setActive] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 200 }); // Bottom left starting position
  const dragRef = useRef(null);

  const tabs = [
    {
      name: "Chat",
      icon: MessageCircle,
      content: (
        <div className="space-y-2">
          <div className="bg-blue-100 p-2 rounded-lg border-l-4 border-blue-500">
            <p className="text-black text-xs font-medium">
              "Ghost of Kyiv shot down 40 planes"
            </p>
            <p className="text-gray-600 text-xs">📍 Twitter • 2.3M shares</p>
          </div>
          <div className="bg-red-100 p-2 rounded-lg border-l-4 border-red-500">
            <div className="flex items-center gap-1 mb-1">
              <AlertTriangle className="text-red-500" size={12} />
              <p className="text-red-800 font-semibold text-xs">
                Confidence: 15/100
              </p>
            </div>
            <p className="text-red-700 text-xs">⚠️ Unverified claim</p>
          </div>
          <div className="bg-green-100 p-1 rounded-lg">
            <p className="text-green-800 text-xs">✅ Fact-checked in 28s</p>
          </div>
        </div>
      ),
    },
    {
      name: "Image",
      icon: Image,
      content: (
        <div className="space-y-2">
          <div className="bg-gray-200 h-12 rounded-lg flex items-center justify-center">
            <Image className="text-gray-600" size={16} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-black text-xs">Deepfake</span>
              <span className="text-green-600 text-xs">✅ 98%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black text-xs">Source</span>
              <span className="text-yellow-600 text-xs">⚠️ Pending</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Voice",
      icon: Mic,
      content: (
        <div className="space-y-2 text-center">
          <div className="bg-custom-cyan bg-opacity-20 p-3 rounded-full w-10 h-10 mx-auto flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Mic className="text-custom-cyan" size={16} />
            </motion.div>
          </div>
          <div className="space-y-1">
            <p className="text-black text-xs font-medium">Voice Analysis</p>
            <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
              <motion.div
                className="bg-custom-cyan h-full rounded-full"
                animate={{ width: ["0%", "75%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <p className="text-green-600 text-xs">✅ Human detected</p>
          </div>
        </div>
      ),
    },
    {
      name: "Video",
      icon: Video,
      content: (
        <div className="space-y-2">
          <div className="bg-black h-12 rounded-lg flex items-center justify-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-blue-500 bg-opacity-20"
              animate={{ x: [-50, 50, -50] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <Video className="text-white z-10" size={16} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-black text-xs">Frames</span>
              <span className="text-custom-cyan text-xs">847/1200</span>
            </div>
            <div className="bg-gray-200 rounded-full h-1">
              <div className="bg-custom-cyan h-full rounded-full w-2/3"></div>
            </div>
            <p className="text-green-600 text-xs">✅ No tampering</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      ref={dragRef}
      drag
      dragMomentum={false}
      dragConstraints={{
        left: 0,
        right: typeof window !== 'undefined' ? window.innerWidth - (isExpanded ? 400 : 280) : 800,
        top: 80,
        bottom: typeof window !== 'undefined' ? window.innerHeight - (isExpanded ? 600 : 400) : 600,
      }}
      initial={{ x: position.x, y: position.y, scale: 0.8, opacity: 0 }}
      animate={{ x: position.x, y: position.y, scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed z-50 cursor-move"
      style={{ left: position.x, top: position.y }}
      whileDrag={{ scale: 1.05, zIndex: 100 }}
    >
      <div
        className={`bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-600/50 backdrop-blur-xl transition-all duration-500 ${
          isExpanded ? "w-96 h-[600px]" : "w-72 h-96"
        }`}
      >
        {/* Drag Handle & Controls */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 flex items-center justify-between cursor-move border-b border-gray-600/50">
          <div className="flex items-center gap-3">
            <Move className="text-gray-400" size={16} />
            <div className="bg-gradient-to-r from-gray-600 to-gray-500 w-16 h-1.5 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </motion.button>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-white p-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3
                className={`text-black font-bold ${
                  isExpanded ? "text-base" : "text-sm"
                }`}
              >
                FactSaura AI Agent
              </h3>
              <p className="text-gray-600 text-xs">Crisis Monitoring • Live</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 text-xs font-medium">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-around bg-gray-100 p-2 border-b border-gray-200">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => setActive(index)}
                className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                  active === index
                    ? "bg-custom-cyan text-white shadow-lg"
                    : "text-gray-600 hover:text-custom-cyan hover:bg-gray-200"
                }`}
              >
                <Icon size={isExpanded ? 20 : 16} />
                <span
                  className={`${
                    isExpanded ? "text-sm" : "text-xs"
                  } mt-1 font-medium`}
                >
                  {tab.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div
          className={`bg-white p-3 overflow-auto ${
            isExpanded ? "h-96" : "h-48"
          }`}
        >
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {tabs[active].content}
          </motion.div>
        </div>

        {/* Status Bar */}
        <div className="bg-gradient-to-r from-custom-cyan to-blue-500 text-black p-3 text-center">
          <motion.p 
            className="text-sm font-semibold"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {isExpanded
              ? "🛡️ Expanded View • Drag to move • Click minimize to shrink"
              : "🛡️ Drag me around! Click expand for more details"}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
