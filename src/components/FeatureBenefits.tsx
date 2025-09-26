import { Crown, Zap, Users } from "lucide-react";

const FeatureBenefits = () => {
  const features = [
    {
      icon: Crown,
      title: "Premium Rummy Experience",
      description: "Enjoy Yono Rummy, Holy Rummy, Gold Rummy with premium graphics, smooth gameplay, and authentic casino experience. Top rummy game with 51 bonus.",
      bgColor: "bg-red-50",
      iconColor: "text-gaming-red"
    },
    {
      icon: Zap,
      title: "Unlimited Resources & Bonuses",
      description: "Get unlimited chips, 41 bonus, 100 bonus in rummy apps. Play casino slots, online casino games with instant withdrawal and real cash game benefits.",
      bgColor: "bg-orange-50",
      iconColor: "text-gaming-orange"
    },
    {
      icon: Users,
      title: "Global Gaming Community",
      description: "Connect with millions of players worldwide in real-time. Play 3 Patti Gold, casino bonuses, winning casino slots with trusted rummy apps in India.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Yono Rummy, Teen Patti & Casino Games - Features & Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the best online casino games, top rummy apps with 51 bonus, winning casino slots, and real cash withdrawal games. Play trusted rummy apps in India with instant withdrawal features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-24 h-24 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`w-12 h-12 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefits;