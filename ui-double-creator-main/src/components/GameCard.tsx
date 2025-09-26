import { Star, Download } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  rating: number;
  downloads: string;
  category: string;
  iconImage: string;
}

const GameCard = ({ title, description, rating, downloads, category, iconImage }: GameCardProps) => {
  return (
    <a 
      href="https://hh7.pw/aw/s2rq3h" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-card-gaming hover:shadow-gaming transition-all duration-300 p-4 cursor-pointer group"
    >
      <div className="flex items-center space-x-4">
        {/* Game Icon */}
        <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
          <img 
            src={iconImage} 
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Game Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{title}</h3>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
          
          {/* Category Badge */}
          <span className="inline-block px-2 py-1 bg-gaming-red/10 text-gaming-red text-xs rounded-full font-medium mb-2">
            {category}
          </span>

          {/* Rating and Downloads */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-gaming-gold fill-current" />
              <span className="text-xs font-medium text-gray-700">{rating}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Download className="w-3 h-3" />
              <span className="text-xs">{downloads}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default GameCard;