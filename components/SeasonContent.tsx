import React from 'react';
import { motion } from 'framer-motion';
import { Season } from './TabMenu';
import VerticalText from './VerticalText';

interface SeasonContentProps {
  season: Season;
}

const seasonData = {
  spring: {
    title: '',
    description: '',
    poem: '',
    imagePath: '',
    color: 'bg-sakura',
  },
  summer: {
    title: '',
    description: '',
    poem: '',
    imagePath: '',
    color: 'bg-mizuiro',
  },
  autumn: {
    title: '',
    description: '',
    poem: '',
    imagePath: '',
    color: 'bg-momiji',
  },
  winter: {
    title: '',
    description: '',
    poem: '',
    imagePath: '',
    color: 'bg-snow',
  },
};

const SeasonContent: React.FC<SeasonContentProps> = ({ season }) => {
  const content = seasonData[season];

  return (
    <motion.div
      key={season}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-center gap-8"
    >
      <motion.div 
        className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`aspect-w-16 aspect-h-9 ${content.color} flex items-center justify-center`}>
          <p className="text-center text-black/70 italic">
            {/* 画像がない場合のプレースホルダー */}
            Under Construction
          </p>
        </div>
      </motion.div>

      <div className="w-full md:w-1/2 flex flex-col items-center">
        <motion.h2 
          className="text-2xl font-mincho mb-4 text-black"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>
        
        <motion.p 
          className="text-black/80 mb-6 text-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.description}
        </motion.p>
        
        <div className="h-40 flex justify-center items-center">
          <VerticalText 
            text={content.poem} 
            className="text-xl font-mincho text-black/90"
            delay={0.4}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SeasonContent; 