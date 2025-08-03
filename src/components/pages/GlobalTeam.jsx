import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

const GlobalTeam = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const globalOffices = [
    {
      country: 'Japan',
      city: 'Tokyo',
      type: 'Headquarters',
      description: 'Our main office and innovation hub where strategic decisions are made.',
      specialties: ['R&D', 'Strategic Planning', 'Global Operations'],
      teamSize: '45+',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      story: 'Founded in 1976, Tokyo remains the heart of Tecdia\'s operations and innovation.'
    },
    {
      country: 'USA',
      city: 'Silicon Valley',
      type: 'Technology Hub',
      description: 'Our US base for cutting-edge technology development and partnerships.',
      specialties: ['AI/ML', 'Software Development', 'Partnerships'],
      teamSize: '22+',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop',
      story: 'Established in 1985, our Silicon Valley office connects us to the world\'s leading tech ecosystem.'
    },
    {
      country: 'Philippines',
      city: 'Cebu',
      type: 'Manufacturing',
      description: 'Our manufacturing facility producing high-quality components.',
      specialties: ['Manufacturing', 'Quality Control', 'Production'],
      teamSize: '120+',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      story: 'Since 1993, Cebu has been our manufacturing excellence center.'
    },
    {
      country: 'Taiwan',
      city: 'Taipei',
      type: 'Operations',
      description: 'Regional operations and supply chain management.',
      specialties: ['Operations', 'Supply Chain', 'Regional Management'],
      teamSize: '35+',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      story: 'Our Taipei office manages critical operations across the Asia-Pacific region.'
    },
    {
      country: 'Korea',
      city: 'Seoul',
      type: 'R&D Center',
      description: 'Advanced research and development in electronics.',
      specialties: ['Electronics R&D', 'Innovation', 'Technology'],
      teamSize: '28+',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop',
      story: 'Seoul\'s tech expertise drives our electronic component innovation.'
    },
    {
      country: 'China',
      city: 'Shanghai, Shenzhen, Chengdu',
      type: 'Regional Offices',
      description: 'Multiple locations serving the Chinese market and manufacturing.',
      specialties: ['Market Development', 'Manufacturing', 'Local Operations'],
      teamSize: '85+',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      story: 'Our presence across China enables us to serve this critical market effectively.'
    },
    {
      country: 'Vietnam',
      city: 'Ho Chi Minh City',
      type: 'Manufacturing',
      description: 'Emerging manufacturing capabilities and cost optimization.',
      specialties: ['Manufacturing', 'Cost Optimization', 'Emerging Markets'],
      teamSize: '45+',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      story: 'Vietnam represents our commitment to emerging market opportunities.'
    },
    {
      country: 'Australia',
      city: 'Sydney',
      type: 'Regional Office',
      description: 'Oceania operations and market development.',
      specialties: ['Market Development', 'Regional Sales', 'Customer Support'],
      teamSize: '18+',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      story: 'Sydney serves as our gateway to the Australian and Pacific markets.'
    },
    {
      country: 'Europe',
      city: 'Amsterdam',
      type: 'European Hub',
      description: 'Our European headquarters opened in 2014.',
      specialties: ['European Operations', 'Market Development', 'Regional HQ'],
      teamSize: '32+',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop',
      story: 'Amsterdam connects us to the European market and innovation ecosystem.'
    },
    {
      country: 'India',
      city: 'Bangalore',
      type: 'Technology Center',
      description: 'Our technology and R&D center in India.',
      specialties: ['Software Development', 'R&D', 'Technology Innovation'],
      teamSize: '38+',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      story: 'Bangalore\'s tech talent drives our software and innovation initiatives.'
    }
  ];

  const teamStories = [
    {
      name: 'Yuki Tanaka',
      role: 'R&D Engineer',
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      story: '"Working at Tecdia has allowed me to work on cutting-edge technologies while being part of a truly global team. The collaborative environment here is unmatched."',
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      location: 'Silicon Valley, USA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      story: '"The diversity of perspectives at Tecdia is incredible. Every day I learn something new from colleagues around the world."',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Software Developer',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      story: '"Tecdia\'s commitment to innovation and global collaboration has given me opportunities I never thought possible."',
    },
    {
      name: 'Maria Santos',
      role: 'Quality Control Specialist',
      location: 'Cebu, Philippines',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      story: '"Being part of Tecdia\'s manufacturing excellence team has taught me the importance of precision and quality in everything we do."',
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
            Our Global Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-tecdia-gray-100 max-w-3xl mx-auto"
          >
            Tecdia has a growing footprint across the globe
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Countries' },
              { number: '450+', label: 'Team Members'},
              { number: '8+', label: 'Languages'},
              { number: '12+', label: 'Time Zones' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* Global Offices */}
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
              Global Offices
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Our team spans across continents — united by a shared passion for technology and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalOffices.map((office, index) => (
              <motion.div
                key={office.city}
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
                      src={office.image}
                      alt={`${office.city} office`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 text-3xl">
                      {office.flag}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-poppins font-bold text-xl">
                        {office.city}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {office.country}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-tecdia-orange text-white text-xs font-bold rounded-full">
                        {office.type}
                      </span>
                      <span className="text-sm text-tecdia-gray-500 font-medium">
                        {office.teamSize} team
                      </span>
                    </div>
                    
                    <p className="text-tecdia-gray-600 mb-4 leading-relaxed">
                      {office.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-tecdia-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-tecdia-gray-100 text-tecdia-gray-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm text-tecdia-gray-600 italic">
                      "{office.story}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stories */}
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
              Team Stories
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Hear from our team members around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamStories.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 84, 166, 0.08)",
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-tecdia-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-tecdia-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-tecdia-gray-200"
                      />
                      <div className="absolute -bottom-1 -right-1 text-lg">
                        {member.flag}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-poppins font-bold text-tecdia-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-tecdia-gray-600 font-medium">
                        {member.role}
                      </p>
                      <p className="text-sm text-tecdia-gray-500">
                        {member.location}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-tecdia-gray-700 leading-relaxed italic">
                    "{member.story}"
                  </blockquote>
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
            Join Our Global Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-tecdia-gray-100 mb-8"
          >
            Be part of our international community of innovators and problem-solvers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(255, 107, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-tecdia-orange text-white font-semibold rounded-xl text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              View Open Positions
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white hover:text-tecdia-blue transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default GlobalTeam; 