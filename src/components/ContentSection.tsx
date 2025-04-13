import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

interface ContentProps {
  title: string;
  content: React.ReactNode;
  delay?: number;
}

const ContentSection: React.FC<ContentProps> = ({ title, content, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      className="relative p-8 rounded-xl bg-gray-800/50 backdrop-blur-lg mb-12 last:mb-0 w-full transform-gpu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 背景光效 */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: isHovered 
            ? "radial-gradient(circle at center, rgba(139, 92, 246, 0.15), rgba(0, 0, 0, 0) 70%)"
            : "radial-gradient(circle at center, rgba(139, 92, 246, 0), rgba(0, 0, 0, 0) 70%)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl" />
        <motion.div 
          className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"
          animate={{
            opacity: isHovered ? 0.5 : 0.3,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* 内容 */}
      <motion.div 
        className="relative z-10"
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          x: isHovered ? 10 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            backgroundPosition: isHovered ? "100% center" : "0% center",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.div 
          className="text-gray-300 prose prose-invert max-w-none"
          animate={{ opacity: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {content}
        </motion.div>
      </motion.div>

      {/* 装饰性元素 */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-500 rounded-full"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ContentSection; 