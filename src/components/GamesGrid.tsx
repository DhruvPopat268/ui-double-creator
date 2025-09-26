import GameCard from "./GameCard";
import teenPattiMaster from "@/assets/teen-patti-master.png";
import teenPattiMod from "@/assets/teen-patti-mod.png";
import teenPattiUnlimited from "@/assets/teen-patti-unlimited.png";
import teenPattiOnline from "@/assets/teen-patti-online.png";
import teenPattiGold from "@/assets/teen-patti-gold.png";
import teenPattiRoyal from "@/assets/teen-patti-royal.png";
import teenPattiLive from "@/assets/teen-patti-live.png";
import teenPattiCash from "@/assets/teen-patti-cash.png";
import worldSeriesPoker from "@/assets/world-series-poker.png";
import omahaPoker from "@/assets/omaha-poker.png";
import klondikeSolitaire from "@/assets/klondike-solitaire.png";
import spiderSolitaire from "@/assets/spider-solitaire.png";

const GamesGrid = () => {
  const gameCategories = [
    {
      title: "Teen Patti Master Games - Play Free Online with Unlimited Chips",
      games: [
        {
          title: "Teen Patti Master",
          description: "Play Teen Patti Master free online with unlimited chips! The most popular card game.",
          rating: 4.8,
          downloads: "50M+",
          category: "Teen Patti",
          iconImage: teenPattiMaster
        },
        {
          title: "Teen Patti Master Mod APK",
          description: "Download Teen Patti Master Mod APK with unlimited chips and premium features.",
          rating: 4.9,
          downloads: "25M+",
          category: "Teen Patti",
          iconImage: teenPattiMod
        },
        {
          title: "Teen Patti Master Unlimited",
          description: "Teen Patti Master with unlimited chips and coins. Play without restrictions.",
          rating: 4.7,
          downloads: "30M+",
          category: "Teen Patti",
          iconImage: teenPattiUnlimited
        },
        {
          title: "Teen Patti Master Online",
          description: "Play Teen Patti Master online with real players. Join tournaments and win big!",
          rating: 4.6,
          downloads: "40M+",
          category: "Teen Patti",
          iconImage: teenPattiOnline
        },
        {
          title: "Teen Patti Gold",
          description: "Experience Teen Patti Gold - the premium version of India's favorite card game.",
          rating: 4.5,
          downloads: "35M+",
          category: "Teen Patti",
          iconImage: teenPattiGold
        },
        {
          title: "Teen Patti Royal",
          description: "Teen Patti Royal brings you the royal experience of India's most beloved card game.",
          rating: 4.4,
          downloads: "20M+",
          category: "Teen Patti",
          iconImage: teenPattiRoyal
        },
        {
          title: "Teen Patti Live",
          description: "Play Teen Patti Live with real dealers and players. Experience live casino action.",
          rating: 4.3,
          downloads: "15M+",
          category: "Teen Patti",
          iconImage: teenPattiLive
        },
        {
          title: "Teen Patti Cash",
          description: "Win real cash in Teen Patti Cash! Play skill-based Teen Patti games online.",
          rating: 4.2,
          downloads: "18M+",
          category: "Teen Patti",
          iconImage: teenPattiCash
        }
      ]
    },
    {
      title: "Poker Games - Texas Hold'em & More",
      games: [
        {
          title: "World Series Poker",
          description: "Official WSOP experience with authentic tournaments and cash games.",
          rating: 4.8,
          downloads: "75M+",
          category: "Poker",
          iconImage: worldSeriesPoker
        },
        {
          title: "Omaha Hi-Lo",
          description: "Advanced poker variant with split-pot action and strategic gameplay.",
          rating: 4.5,
          downloads: "12M+",
          category: "Poker",
          iconImage: omahaPoker
        },
        {
          title: "7-Card Stud",
          description: "Classic stud poker with traditional rules and authentic casino experience.",
          rating: 4.3,
          downloads: "8M+",
          category: "Poker",
          iconImage: worldSeriesPoker
        },
        {
          title: "Caribbean Stud",
          description: "Tropical poker adventure with progressive jackpots and island themes.",
          rating: 4.4,
          downloads: "18M+",
          category: "Poker",
          iconImage: omahaPoker
        }
      ]
    },
    {
      title: "Solitaire Games - Classic & Modern Variants",
      games: [
        {
          title: "Klondike Solitaire",
          description: "The classic solitaire game that started it all - timeless card entertainment.",
          rating: 4.8,
          downloads: "200M+",
          category: "Solitaire",
          iconImage: klondikeSolitaire
        },
        {
          title: "Spider Solitaire",
          description: "Multi-suit challenge with strategic gameplay and increasing difficulty levels.",
          rating: 4.7,
          downloads: "150M+",
          category: "Solitaire",
          iconImage: spiderSolitaire
        },
        {
          title: "FreeCell Master",
          description: "Strategic solitaire game where skill matters more than luck.",
          rating: 4.6,
          downloads: "80M+",
          category: "Solitaire",
          iconImage: klondikeSolitaire
        },
        {
          title: "Pyramid Solitaire",
          description: "Ancient pyramid puzzle with Egyptian themes and mystical gameplay.",
          rating: 4.5,
          downloads: "60M+",
          category: "Solitaire",
          iconImage: spiderSolitaire
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {gameCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              <button className="text-gaming-red hover:text-gaming-orange font-medium transition-colors">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.games.map((game, gameIndex) => (
                <GameCard key={gameIndex} {...game} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesGrid;