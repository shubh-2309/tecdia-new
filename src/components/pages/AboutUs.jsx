import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const { t } = useTranslation();

  const products = [
    {
      title: t('about.products.rf.title'),
      description: t('about.products.rf.description'),
      icon: '📡',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop',
      learnMore: '#'
    },
    {
      title: t('about.products.ceramics.title'),
      description: t('about.products.ceramics.description'),
      icon: '🏺',
      image: 'manufacturing.png',
      learnMore: '#'
    },
    {
      title: t('about.products.laser.title'),
      description: t('about.products.laser.description'),
      icon: '⚡',
      image: 'laser.jpg',
      learnMore: '#'
    },
    {
      title: t('about.products.manufacturing.title'),
      description: t('about.products.manufacturing.description'),
      icon: '🏭',
      image: 'ceramic.png',
      learnMore: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-tecdia-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tecdia-blue to-blue-700 text-white py-20 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-tecdia-orange/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
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
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight"
          >
            {t('about.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-tecdia-gray-100 max-w-3xl mx-auto"
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-tecdia-gray-900 mb-4">
              {t('about.whatWeDo.title')}
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('about.whatWeDo.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-tecdia-blue/10 to-blue-600/10 rounded-3xl p-8 mb-8"
              >
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900 mb-4">
                  {t('about.whatWeDo.global.title')}
                </h3>
                <p className="text-tecdia-gray-600 leading-relaxed">
                  {t('about.whatWeDo.global.description')}
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Tecdia Global Operations"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-poppins font-bold text-tecdia-blue">1975</div>
                <div className="text-sm text-tecdia-gray-600">{t('about.whatWeDo.founded')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Products & Services Section */}
      <section className="py-20 bg-tecdia-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-tecdia-gray-900 mb-4">
              {t('about.products.title')}
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              {t('about.products.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 84, 166, 0.08)",
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-tecdia-gray-100 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 text-4xl">
                      {product.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-bold text-tecdia-gray-900 mb-3">
                      {product.title}
                    </h3>
                    
                    <p className="text-tecdia-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '45+', label: t('about.stats.years'), icon: '📅' },
              { number: '10+', label: t('about.stats.countries'), icon: '🌍' },
              { number: '450+', label: t('about.stats.employees'), icon: '👥' },
              { number: '1000+', label: t('about.stats.products'), icon: '🏭' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl mb-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-poppins font-bold text-tecdia-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-tecdia-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tecdia-blue to-blue-700 relative">
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6"
          >
            {t('about.cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-tecdia-gray-100 mb-8"
          >
            {t('about.cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/careers">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 107, 0, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-tecdia-orange text-white font-semibold rounded-xl text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg"
              >
                {t('about.cta.learnMore')}
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white hover:text-tecdia-blue transition-all duration-300"
              >
                {t('about.cta.contact')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default AboutUs; 