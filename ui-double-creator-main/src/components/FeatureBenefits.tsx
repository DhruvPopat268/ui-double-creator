import { Crown, Zap, Users } from "lucide-react";

const FeatureBenefits = () => {
  const features = [
    {
      icon: Crown,
      title: "Premium Experience",
      description: "Enjoy Teen Patti Master with premium graphics, smooth gameplay, and authentic casino experience",
      bgColor: "bg-red-50",
      iconColor: "text-gaming-red"
    },
    {
      icon: Zap,
      title: "Unlimited Resources",
      description: "Get unlimited chips, coins, and premium features in Teen Patti Master mod version",
      bgColor: "bg-orange-50",
      iconColor: "text-gaming-orange"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with millions of Teen Patti Master players worldwide in real-time multiplayer games",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Teen Patti Master Game Features & Benefits
          </h2>
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