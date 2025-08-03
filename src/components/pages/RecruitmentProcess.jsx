import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const RecruitmentProcess = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const processSteps = [
    {
      id: 1,
      title: 'Application Submission',
      description: 'Submit your resume or OPEN ES via email or LINE.',
      icon: '1',
      details: 'Start your journey by submitting your application through our preferred channels. We accept both traditional resumes and the Japanese OPEN ES format.',
      duration: '1-2 days',
      color: 'from-tecdia-blue to-blue-600'
    },
    {
      id: 2,
      title: 'Information Session',
      description: 'Online or in-person company introduction + Q&A with employees.',
      icon: '2',
      details: 'Learn about Tecdia\'s culture, values, and opportunities through an interactive session with our team members.',
      duration: '1 hour',
      color: 'from-tecdia-orange to-orange-600'
    },
    {
      id: 3,
      title: 'Document Screening',
      description: 'Our HR team will review your resume.',
      icon: '3',
      details: 'Our experienced HR team carefully evaluates your qualifications, experience, and alignment with our company values.',
      duration: '3-5 days',
      color: 'from-tecdia-green to-green-600'
    },
    {
      id: 4,
      title: 'Web Test',
      description: 'Evaluate your basic skills.',
      icon: '4',
      details: 'Complete an online assessment to evaluate your technical skills, problem-solving abilities, and cultural fit.',
      duration: '1-2 hours',
      color: 'from-tecdia-saffron to-orange-500'
    },
    {
      id: 5,
      title: 'First Interview',
      description: 'One-on-one with an HR team member (online available).',
      icon: '5',
      details: 'Meet with our HR team to discuss your background, career goals, and how you can contribute to Tecdia\'s mission.',
      duration: '45-60 minutes',
      color: 'from-tecdia-blue to-blue-600'
    },
    {
      id: 6,
      title: 'Final Interview',
      description: 'In-person interview with our President (mandatory physical presence).',
      icon: '6',
      details: 'The final step involves meeting with our President, Shingo Koyama, to discuss your vision and potential role at Tecdia.',
      duration: '1 hour',
      color: 'from-tecdia-orange to-orange-600'
    },
    {
      id: 7,
      title: 'Job Offer',
      description: 'Welcome to Tecdia.',
      icon: '7',
      details: 'Congratulations! You\'ll receive a formal offer letter and begin your onboarding process to join the Tecdia family.',
      duration: '1-2 weeks',
      color: 'from-tecdia-green to-green-600'
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
            Your Journey with Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-tecdia-gray-100 max-w-3xl mx-auto"
          >
            A transparent and comprehensive recruitment process designed to find the perfect fit
          </motion.p>
        </div>
      </section>

      {/* Process Flowchart */}
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
              Recruitment Process
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Our step-by-step approach to bringing exceptional talent into our team
            </p>
          </motion.div>

          {/* Desktop Flowchart */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Lines */}


              <div className="grid grid-cols-7 gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0, 84, 166, 0.08)",
                    }}
                    className="text-center cursor-pointer"
                    onClick={() => setSelectedStep(step)}
                  >
                    <div className="bg-gradient-to-br from-white to-tecdia-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-tecdia-gray-100">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-lg font-poppins font-bold text-tecdia-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-tecdia-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="mt-3 text-xs text-tecdia-orange font-medium">
                        {step.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-tecdia-blue to-tecdia-orange rounded-full"></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 8,
                    scale: 1.02,
                  }}
                  className="flex items-start mb-8 cursor-pointer"
                  onClick={() => setSelectedStep(step)}
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-lg border-4 border-white shadow-lg z-10`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <div className="ml-6 flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-tecdia-gray-100">
                      <h3 className="text-xl font-poppins font-bold text-tecdia-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-tecdia-gray-600 mb-3">
                        {step.description}
                      </p>
                      <div className="text-sm text-tecdia-orange font-medium">
                        Duration: {step.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-tecdia-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-tecdia-gray-100"
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
              ⚠️
            </motion.div>
            <blockquote className="text-xl text-tecdia-gray-700 font-medium italic">
              "The recruitment timeline may vary slightly based on position and location."
            </blockquote>
          </motion.div>
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
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-tecdia-gray-100 mb-8"
          >
            Begin your application process and take the first step towards joining our team
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/apply">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 107, 0, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-tecdia-orange text-white font-semibold rounded-xl text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg"
              >
                Apply Now
              </motion.button>
            </Link>
            <Link to="/careers">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white hover:text-tecdia-blue transition-all duration-300"
              >
                View Open Positions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal for Step Details */}
      {selectedStep && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedStep(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedStep.color} rounded-2xl flex items-center justify-center text-3xl`}>
                  {selectedStep.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900">
                    {selectedStep.title}
                  </h3>
                  <p className="text-tecdia-gray-600">Duration: {selectedStep.duration}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStep(null)}
                className="text-tecdia-gray-400 hover:text-tecdia-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-tecdia-gray-700 leading-relaxed text-lg mb-6">
              {selectedStep.details}
            </p>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStep(null)}
                className="px-6 py-3 bg-tecdia-blue text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}


    </div>
  );
};

export default RecruitmentProcess; 