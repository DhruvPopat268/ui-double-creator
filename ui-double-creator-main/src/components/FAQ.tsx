const FAQ = () => {
  const faqs = [
    {
      question: "Is Teen Patti Master free to play?",
      answer: "Yes! Teen Patti Master is completely free to play online. No download required, just open your browser and start playing instantly with unlimited access."
    },
    {
      question: "Can I play Teen Patti Master with real players?",
      answer: "Absolutely! Teen Patti Master connects you with millions of real players worldwide. Join multiplayer tables, tournaments, and compete for top rankings."
    },
    {
      question: "How to download Teen Patti Master Mod APK?",
      answer: "You can download Teen Patti Master Mod APK directly from our website. The mod version includes unlimited chips, premium features, and ad-free gameplay experience."
    },
    {
      question: "Is Teen Patti Master safe and secure?",
      answer: "Yes, Teen Patti Master uses advanced security measures to protect your data and ensure fair gameplay. All games are certified and use random number generation."
    },
    {
      question: "What are unlimited chips in Teen Patti Master?",
      answer: "Unlimited chips allow you to play Teen Patti Master without worrying about running out of money. Perfect for practice and high-stakes gaming without financial risk."
    },
    {
      question: "What devices support Teen Patti Master?",
      answer: "Teen Patti Master works on all devices - desktop, tablet, and mobile. Play seamlessly across platforms with your account and progress synced."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Teen Patti Master - Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-card-gaming">
              <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;