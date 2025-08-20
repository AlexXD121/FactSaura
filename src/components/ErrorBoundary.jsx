import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="min-h-screen bg-custom-black flex items-center justify-center p-4"
                >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl text-center max-w-md border border-gray-700">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5, repeat: 3 }}
                            className="mb-6"
                        >
                            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
                        </motion.div>

                        <h2 className="text-2xl font-bold text-white mb-4">
                            Oops! Something went wrong
                        </h2>

                        <p className="text-gray-300 mb-6">
                            We encountered an unexpected error. Don't worry, our AI agents are on it!
                        </p>

                        <motion.button
                            onClick={() => window.location.reload()}
                            className="bg-gradient-to-r from-custom-cyan to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RefreshCw size={20} />
                            Reload Page
                        </motion.button>
                    </div>
                </motion.div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;