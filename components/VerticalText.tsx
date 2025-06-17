import React from 'react';
import { motion } from 'framer-motion';

interface VerticalTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const VerticalText: React.FC<VerticalTextProps> = ({ 
  text, 
  className = '', 
  delay = 0 
}) => {
  return (
    <motion.div 
      className={`vertical-text ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      {text}
    </motion.div>
  );
};

export default VerticalText; 