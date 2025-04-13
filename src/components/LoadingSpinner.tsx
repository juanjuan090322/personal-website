import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
      />
      <div className="absolute mt-24 text-purple-400 text-sm font-medium animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default LoadingSpinner; 