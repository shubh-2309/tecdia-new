import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

const ShingoVision = () => {
  const [language, setLanguage] = useState('EN');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const { t } = useTranslation();

  const quotes = {
    EN: [
      "Let's do this.",
      "These three words define our mission to go beyond boundaries and create meaningful technological advancements.",
      "At Tecdia, we believe in the power of curiosity, innovation, and unity.",
      "My vision is to cultivate an environment where individuals grow by solving real-world problems, working together, and never backing down from a challenge.",
      "We are not just a company — we are a family that moves technology forward with passion."
    ],
    JP: [
      "やりましょう。",
      "この3つの言葉が、境界を超えて意味のある技術的進歩を創造するという私たちの使命を定義しています。",
      "テクディアでは、好奇心、イノベーション、そして団結の力を信じています。",
      "私のビジョンは、個人が現実の問題を解決し、協力し、挑戦から決して後退しない環境を育むことです。",
      "私たちは単なる会社ではありません — 情熱を持って技術を前進させる家族です。"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-tecdia-blue via-blue-800 to-tecdia-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
            alt="Shingo Koyama"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tecdia-blue/60 via-blue-800/60 to-tecdia-gray-900/60"></div>
        </div>

        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-tecdia-orange/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-tecdia-saffron/8 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight"
              animate={{
                textShadow: [
                  "0 0 30px rgba(255,255,255,0.3)",
                  "0 0 50px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {language === 'EN' ? "A Message from Our President" : "社長からのメッセージ"}
            </motion.h1>
            
            <motion.h2
              className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-tecdia-orange"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,107,0,0.4)",
                  "0 0 30px rgba(255,107,0,0.6)",
                  "0 0 20px rgba(255,107,0,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              — Shingo Koyama
            </motion.h2>
          </motion.div>

          {/* Language Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {['EN', 'JP'].map((lang) => (
              <motion.button
                key={lang}
                onClick={() => setLanguage(lang)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-150 ${
                  language === lang
                    ? 'bg-tecdia-orange text-white shadow-lg'
                    : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
                }`}
              >
                {lang}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <motion.div
              className="text-5xl md:text-7xl font-poppins font-bold mb-8"
              animate={{
                textShadow: [
                  "0 0 40px rgba(255,255,255,0.4)",
                  "0 0 60px rgba(255,255,255,0.6)",
                  "0 0 40px rgba(255,255,255,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "Let's do this."
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statements */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-tecdia-gray-900 mb-4">
              {language === 'EN' ? "Our Vision" : "私たちのビジョン"}
            </h2>
          </motion.div>

          <div className="space-y-12">
            {quotes[language].slice(1).map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 20px 40px rgba(0, 84, 166, 0.08)",
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-tecdia-gray-50 to-white rounded-3xl p-10 shadow-lg border border-tecdia-gray-100">
                  <motion.div
                    className="text-tecdia-orange text-3xl mb-6"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ●
                  </motion.div>
                  <p className="text-xl md:text-2xl text-tecdia-gray-700 leading-relaxed font-inter">
                    {quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* President Signature */}
      <section className="py-20 bg-gradient-to-r from-tecdia-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              {language === 'EN' ? "President, Tecdia Co. Ltd." : "テクディア株式会社 社長"}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-poppins font-bold text-tecdia-orange"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,107,0,0.3)",
                "0 0 30px rgba(255,107,0,0.5)",
                "0 0 20px rgba(255,107,0,0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Shingo Koyama
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default ShingoVision; 