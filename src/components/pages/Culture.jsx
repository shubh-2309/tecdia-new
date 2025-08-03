import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Culture = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const timelineEvents = [
    {
      year: '1976',
      title: 'Founded in Tokyo, Japan',
      description: 'From diamond scalpels to electronic components, Tecdia has continually adapted and innovated.',
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
    },
    {
      year: '1985',
      title: 'Expansion to Silicon Valley, USA',
      description: 'Marking our first international expansion and entry into the global tech scene.',
      icon: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop'
    },
    {
      year: '1993',
      title: 'Launch of Cebu Manufacturing Facility',
      description: 'Establishing our manufacturing capabilities in the Philippines.',
      icon: '🇵🇭',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    },
    {
      year: '2000s',
      title: 'Global expansion – Taiwan, Korea, China, Australia',
      description: 'Rapid expansion across Asia-Pacific region.',
      icon: '🌏',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      year: '2020s',
      title: 'Advancing precision tech in 3D printing, medical components',
      description: 'Continuing innovation in cutting-edge technologies.',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop'
    }
  ];

  const cultureValues = [
    {
      title: 'Innovation with Intention',
      description: 'We encourage bold ideas and a free-thinking environment. Innovation here means solving real challenges, not just brainstorming buzzwords.',
      icon: '💡',
      color: 'from-tecdia-blue to-blue-600',
      image: 'image -5.jpg'
    },
    {
      title: 'Respect for Diversity',
      description: 'With global offices and a cross-cultural team, we value every perspective. You belong here, just as you are.',
      icon: '🌍',
      color: 'from-tecdia-orange to-orange-600',
      image: 'image -9.jpg'
    },
    {
      title: 'People-First Approach',
      description: 'We value teamwork and kindness. No egos. Just great minds working together.',
      icon: '🤝',
      color: 'from-tecdia-green to-green-600',
      image: 'image 2.jpg'
    },
    {
      title: 'Growth-Focused',
      description: 'We support your personal and professional development — every step of the way.',
      icon: '🚀',
      color: 'from-tecdia-saffron to-orange-500',
      image: 'image -3.jpg'
    }
  ];

  const futureGoals = [
    'Smart manufacturing integrations',
    'Expanded global research collaborations',
    'Growth into medical and additive manufacturing markets'
  ];

  return (
    <div className="min-h-screen bg-tecdia-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tecdia-blue to-blue-700 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
            alt="Tecdia Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tecdia-blue/80 to-blue-700/80"></div>
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
            Our Culture at Tecdia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-tecdia-gray-100 max-w-3xl mx-auto"
          >
            Building a global community where innovation meets collaboration
          </motion.p>
        </div>
      </section>

      {/* Culture Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 84, 166, 0.08)",
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-tecdia-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-tecdia-gray-100 overflow-hidden">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-105 transition-transform duration-300`}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-tecdia-gray-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-tecdia-blue to-blue-600 rounded-3xl p-10 text-white">
              <motion.div
                className="text-3xl mb-6"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ●
              </motion.div>
              <blockquote className="text-2xl md:text-3xl font-poppins font-bold italic">
                "When you work at Tecdia, you're not just an employee — you're part of a mission."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              From Tokyo to the world: Tecdia's growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-tecdia-blue to-tecdia-orange h-full rounded-full"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 15px 30px rgba(0, 84, 166, 0.1)",
                    }}
                    className="bg-white rounded-3xl p-8 shadow-lg border border-tecdia-gray-100 overflow-hidden"
                  >
                    <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="text-2xl font-poppins font-bold text-tecdia-blue mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-tecdia-gray-900 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-tecdia-gray-600 text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-5 h-5 bg-tecdia-orange rounded-full border-4 border-white shadow-lg z-10"
                />
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
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
              The Road Ahead
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Our future includes exciting developments and innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={goal}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-gradient-to-br from-tecdia-gray-50 to-white rounded-2xl p-8 shadow-lg border border-tecdia-gray-100 text-center"
              >
                <motion.div
                  className="text-3xl mb-4 text-tecdia-orange"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ●
                </motion.div>
                <p className="text-lg text-tecdia-gray-700 leading-relaxed font-medium">
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Culture; 