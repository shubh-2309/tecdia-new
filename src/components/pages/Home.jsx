import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const { t } = useTranslation();

  const features = [
    {
      title: t('home.features.impactful.title'),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      description: t('home.features.impactful.description')
    },
    {
      title: t('home.features.opportunities.title'),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      description: t('home.features.opportunities.description')
    },
    {
      title: t('home.features.future.title'),
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      description: t('home.features.future.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-tecdia-blue via-blue-800 to-tecdia-gray-900 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Tecdia Office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tecdia-blue/80 via-blue-800/80 to-tecdia-gray-900/80"></div>
        </div>



        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-inter mb-8 text-tecdia-gray-100 leading-relaxed"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-poppins font-bold mb-6 leading-tight"
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
              {t('home.hero.title')}
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-inter mb-12 text-tecdia-gray-100 max-w-4xl mx-auto leading-relaxed"
          >
            {t('home.hero.description')}
          </motion.div>

          {/* Feature Points */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200 overflow-hidden"
              >
                <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="text-tecdia-orange text-xl mb-3">●</div>
                <p className="text-lg font-medium text-white mb-2">{point.title}</p>
                <p className="text-sm text-tecdia-gray-200">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/careers">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 107, 0, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="px-10 py-4 bg-tecdia-orange text-white font-semibold rounded-xl text-lg hover:bg-orange-600 transition-all duration-200 shadow-lg"
              >
                {t('home.cta.exploreCareers')}
              </motion.button>
            </Link>
            <Link to="/recruitment-process">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white hover:text-tecdia-blue transition-all duration-200"
              >
                {t('home.cta.viewProcess')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 