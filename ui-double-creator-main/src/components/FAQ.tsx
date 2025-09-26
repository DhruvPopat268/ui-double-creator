const FAQ = () => {
  const faqs = [
    {
      question: "Is Yono Rummy free to play with 51 bonus?",
      answer: "Yes! Yono Rummy is free to download and play with instant 51 bonus on signup. Enjoy all rummy games, casino slots, and online casino games without any charges."
    },
    {
      question: "How to download 3 Patti Gold APK with real cash withdrawal?",
      answer: "Download 3 Patti Gold APK directly from our website. The app includes real cash withdrawal, 3 Patti cash games, Teen Patti real cash features, and instant money withdrawal options."
    },
    {
      question: "Which are the best rummy apps with instant withdrawal in India?",
      answer: "Top rummy apps include Yono Rummy, Holy Rummy 51 bonus, Gold Rummy, Rummy Nabob with 41 bonus. All are trusted rummy apps in India with fast withdrawal and legal gameplay."
    },
    {
      question: "Are casino games and slots safe to play online?",
      answer: "Yes, our casino games, winning casino slots, and online casino games use certified security measures. Play casino bonuses, new slot games, and casino slot games with complete safety."
    },
    {
      question: "What is Teen Patti Master and how to play online?",
      answer: "Teen Patti Master is India's #1 card game. Play online Teen Patti with real players, join tournaments, and experience Teen Patti real cash games with authentic Indian gaming rules."
    },
    {
      question: "How do real cash games and money withdrawal work?",
      answer: "Real cash games allow you to earn money while playing. Win in rummy cash games, casino games, Teen Patti real cash, and withdraw earnings instantly through secure payment methods."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Yono Rummy, 3 Patti Gold, Casino Games - Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Common questions about Yono Rummy APK download, 3 Patti Gold real cash withdrawal, Teen Patti Master games, casino slots, and trusted rummy apps in India.
          </p>
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