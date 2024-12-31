import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SelectionCardProps {
  title: string;
  icon?: string;
  selected: boolean;
  onClick: () => void;
  subtitle?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  icon,
  selected,
  onClick,
  subtitle,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        cursor-pointer p-4 rounded-lg border-2 transition-colors
        ${selected 
          ? 'border-[#059669] bg-[#D1FAE5]' 
          : 'border-gray-200 hover:border-[#059669]'
        }
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <div>
            <h3 className="font-medium">{title}</h3>
            {subtitle && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
        </div>
        {selected && (
          <Check className="text-[#059669]" size={20} />
        )}
      </div>
    </motion.div>
  );
};

export default SelectionCard;