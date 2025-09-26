import { Facebook, Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Popular Games",
      links: [
        "Texas Hold'em",
        "Solitaire",
        "Blackjack",
        "Hearts",
        "Gin Rummy"
      ]
    },
    {
      title: "Community",
      links: [
        "Tournaments",
        "Leaderboards", 
        "Forums",
        "Game Rules",
        "Strategy Guides"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Contact Us",
        "Privacy Policy",
        "Terms of Service",
        "Fair Play"
      ]
    }
  ];

  return (
    <footer className="bg-gaming-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">CardHub</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your ultimate destination for card games. Play classic and modern card games with players worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 CardHub. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Made with Readdy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;