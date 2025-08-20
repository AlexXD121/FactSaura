import { useState } from "react";
import { Menu } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-custom-black/80 backdrop-blur-xl z-50 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-custom-cyan to-blue-400 bg-clip-text text-transparent">
            FactSaura
          </h1>
        </motion.div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Features", "Demo", "Contact"].map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-white hover:text-custom-cyan transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-custom-cyan"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setOpen(true)}
            className="p-3 text-white hover:text-custom-cyan rounded-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-50"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative bg-custom-gray w-3/4 max-w-xs h-full p-6"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-custom-cyan">FactSaura</h1>
            <button onClick={() => setOpen(false)} className="text-white">
              ✕
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {["Home", "Features", "Demo", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-white hover:text-custom-cyan transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </Dialog>
    </nav>
  );
}
