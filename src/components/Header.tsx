import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Yono Rummy & Teen Patti</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search Yono Rummy, Teen Patti, Casino Games..."
                className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-gaming-red focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gaming-red font-medium transition-colors">
              Rummy Apps 51 Bonus
            </a>
            <a href="#" className="text-gray-700 hover:text-gaming-red font-medium transition-colors">
              Casino Slots Games
            </a>
            <a href="#" className="text-gray-700 hover:text-gaming-red font-medium transition-colors">
              Real Cash Withdrawal
            </a>
            <Button variant="gaming-primary" size="lg">
              Play Yono Rummy Free
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;