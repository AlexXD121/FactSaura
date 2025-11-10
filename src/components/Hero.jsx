import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Eye, Brain, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const agents = [
    {
      icon: Eye,
      name: "Monitor Agents",
      description: "Scan 1000+ sources 24/7 for emerging misinformation",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      name: "Verification Agents",
      description: "Cross-reference claims with verified databases",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      name: "Learning Agents",
      description: "Adapt detection patterns using AI intelligence",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      name: "Response Agents",
      description: "Generate fact-checks in under 30 seconds",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-custom-black via-gray-900 to-custom-black px-4 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-custom-cyan opacity-10 rounded-full blur-3xl animate-pulse"
        ></motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"
        ></motion.div>
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse delay-2000"
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Crisis Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-custom-cyan to-blue-500 text-black px-6 py-3 rounded-xl text-center mb-8 shadow-lg border border-cyan-400/20 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              🛡️
            </motion.div>
            <span className="font-semibold">ACTIVE: Ukraine Crisis Monitoring</span>
            <span className="mx-2">|</span>
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-bold"
            >
              847 claims detected today
            </motion.span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">FactSaura: Your </span>
            <span className="bg-gradient-to-r from-custom-cyan via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
              Protective Aura
            </span>
            <br />
            <span className="text-white"> Against Crisis </span>
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Misinformation
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Real-time multimodal AI agent protection for global crises.
            <br />
            <span className="text-custom-cyan font-semibold">Detecting, verifying, and countering</span> dangerous misinformation in
            <span className="text-green-400 font-bold"> under 30 seconds</span>.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
        >
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-white to-gray-50 text-black p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 backdrop-blur-sm overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon with Gradient Background */}
                <div className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${agent.gradient} p-3 shadow-lg`}>
                  <Icon className="text-white w-full h-full" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {agent.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {agent.description}
                </p>
                
                {/* Sparkle Effect on Hover */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <motion.button 
            onClick={(e) => e.preventDefault()}
            className="group relative bg-gradient-to-r from-custom-cyan to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
              View Live Demo
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
