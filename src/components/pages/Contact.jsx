import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ApiService from '../../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const contactOffices = [
    {
      country: 'India',
      city: 'Bangalore',
      flag: '🇮🇳',
      address: 'Tecdia India Pvt. Ltd.\n[Insert Exact Location or Keep Placeholder]',
      phone: '+91-XXXXXXXXXX',
      email: 'recruit@tecdia.com',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      description: 'Our technology and R&D center in India'
    },
    {
      country: 'Japan',
      city: 'Tokyo',
      flag: '🇯🇵',
      address: 'Tecdia Co. Ltd.\nTokyo Headquarters\n[Insert Address]',
      phone: '+81-XX-XXXX-XXXX',
      email: 'info@tecdia.com',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop',
      description: 'Our headquarters and innovation hub'
    },
    {
      country: 'USA',
      city: 'Silicon Valley',
      flag: '🇺🇸',
      address: 'Tecdia USA\nSilicon Valley Office\n[Insert Address]',
      phone: '+1-XXX-XXX-XXXX',
      email: 'us@tecdia.com',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Our technology hub in the heart of innovation'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const data = await ApiService.submitContact(formData);
      setSubmitStatus({ type: 'success', message: data.message });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({ type: 'error', message: error.message || 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-tecdia-gray-100 max-w-3xl mx-auto"
          >
            Connect with our global team and start your journey with Tecdia
          </motion.p>
        </div>
      </section>

      {/* Contact Offices */}
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
              Our Offices
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Find the Tecdia office nearest to you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOffices.map((office, index) => (
              <motion.div
                key={office.city}
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
                    <p className="text-tecdia-gray-600 mb-4 leading-relaxed">
                      {office.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <span className="text-tecdia-orange text-lg">📍</span>
                        <div>
                          <h4 className="font-semibold text-tecdia-gray-900 mb-1">Address</h4>
                          <p className="text-sm text-tecdia-gray-600 whitespace-pre-line">
                            {office.address}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className="text-tecdia-orange text-lg">📞</span>
                        <div>
                          <h4 className="font-semibold text-tecdia-gray-900 mb-1">Phone</h4>
                          <p className="text-sm text-tecdia-gray-600">{office.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className="text-tecdia-orange text-lg">📧</span>
                        <div>
                          <h4 className="font-semibold text-tecdia-gray-900 mb-1">Email</h4>
                          <p className="text-sm text-tecdia-gray-600">{office.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-tecdia-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-tecdia-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl mb-4 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(255, 107, 0, 0.3)",
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg ${
                  isSubmitting 
                    ? 'bg-tecdia-gray-400 cursor-not-allowed' 
                    : 'bg-tecdia-orange text-white hover:bg-orange-600'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-tecdia-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Follow us on social media and stay updated with our latest news
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-tecdia-blue to-blue-600 rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6">Social Media</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🔗</span>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-sm opacity-90">[LinkedIn Profile Link]</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-semibold">Twitter</h4>
                    <p className="text-sm opacity-90">@TecdiaGlobal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📸</span>
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <p className="text-sm opacity-90">@tecdiaglobal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-tecdia-gray-100 to-tecdia-gray-200 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900 mb-6">Location</h3>
              <div className="aspect-video bg-tecdia-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-tecdia-gray-600 font-medium">Google Maps Integration</p>
                  <p className="text-sm text-tecdia-gray-500 mt-2">[Embedded Google Map Placeholder]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact; 