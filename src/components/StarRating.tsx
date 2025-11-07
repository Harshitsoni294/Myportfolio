import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  maxStars?: number;
  label?: string;
}

export const StarRating = ({ rating, setRating, maxStars = 5, label }: StarRatingProps) => {
  return (
    <div>
      {label && (
        <label className="block text-white mb-2 font-medium">{label}</label>
      )}
      <div className="flex gap-2">
        {Array.from({ length: maxStars }, (_, index) => {
          const starValue = index + 1;
          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => setRating(starValue)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none transition-all duration-200"
            >
              <Star
                size={maxStars <= 5 ? 32 : 24}
                className={`${
                  starValue <= rating
                    ? 'fill-emerald-400 text-emerald-400'
                    : 'text-gray-400 hover:text-emerald-300'
                } transition-colors duration-200`}
              />
            </motion.button>
          );
        })}
        {rating > 0 && (
          <span className="ml-2 text-emerald-400 font-medium self-center">
            {rating}/{maxStars}
          </span>
        )}
      </div>
    </div>
  );
};
