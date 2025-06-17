import React from 'react';
import { motion } from 'framer-motion';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface TabMenuProps {
  currentSeason: Season;
  onSeasonChange: (season: Season) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ currentSeason, onSeasonChange }) => {
  const seasons: { id: Season; name: string; color: string }[] = [
    { id: 'spring', name: '春', color: 'bg-sakura' },
    { id: 'summer', name: '夏', color: 'bg-mizuiro' },
    { id: 'autumn', name: '秋', color: 'bg-momiji' },
    { id: 'winter', name: '冬', color: 'bg-snow' },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex p-1 bg-washi border border-black/20 rounded-lg shadow-md">
        {seasons.map((season) => (
          <motion.button
            key={season.id}
            className={`px-6 py-2 mx-1 rounded-md font-mincho text-lg transition-colors
              ${currentSeason === season.id 
                ? `${season.color} text-black` 
                : 'text-black/70 hover:text-black'}`}
            onClick={() => onSeasonChange(season.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {season.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TabMenu; 