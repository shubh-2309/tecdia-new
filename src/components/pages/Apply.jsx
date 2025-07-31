import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const Apply = () => {
  const [searchParams] = useSearchParams();
  const selectedRole = searchParams.get('role') || '';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: selectedRole,
    experience: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    source: '',
    availability: '',
    salary: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const availableRoles = [
    'R&D Engineer',
    'Quality Control Specialist',
    'IT Developer',
    'Domestic Sales Manager',
    'Global Sales Representative',
    'Trade Operations Specialist',
    'Production Manager',
    'General Affairs Coordinator'
  ];

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-10 years)',
    'Expert Level (10+ years)'
  ];

  const sources = [
    'Company Website',
    'LinkedIn',
    'Indeed',
    'Referral',
    'Job Fair',
    'University Career Center',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Application submitted:', formData);
    setIsSubmitting(false);
    // Handle success/redirect
  };

  const ApplicationPreview = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => setShowPreview(false)}
    >
      <motion.div
        className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900">
            Application Preview
          </h3>
          <button
            onClick={() => setShowPreview(false)}
            className="text-tecdia-gray-400 hover:text-tecdia-gray-600 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-tecdia-gray-600">Name</label>
              <p className="text-tecdia-gray-900">{formData.firstName} {formData.lastName}</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-tecdia-gray-600">Email</label>
              <p className="text-tecdia-gray-900">{formData.email}</p>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-semibold text-tecdia-gray-600">Role Applied For</label>
            <p className="text-tecdia-gray-900">{formData.role}</p>
          </div>
          
          <div>
            <label className="text-sm font-semibold text-tecdia-gray-600">Experience Level</label>
            <p className="text-tecdia-gray-900">{formData.experience}</p>
          </div>
          
          <div>
            <label className="text-sm font-semibold text-tecdia-gray-600">Cover Letter</label>
            <p className="text-tecdia-gray-900 text-sm leading-relaxed">{formData.coverLetter}</p>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowPreview(false)}
            className="px-6 py-3 border border-tecdia-gray-300 text-tecdia-gray-700 rounded-xl hover:bg-tecdia-gray-50 transition-colors font-semibold"
          >
            Edit Application
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="px-6 py-3 bg-tecdia-orange text-white rounded-xl hover:bg-orange-600 transition-colors font-semibold"
          >
            Submit Application
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

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
            Apply to Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-tecdia-gray-100 max-w-3xl mx-auto"
          >
            Take the first step towards your career at Tecdia
          </motion.p>
        </div>
      </section>

      {/* Application Form */}
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
              Application Form
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Complete the form below to submit your application
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-tecdia-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900 mb-6">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
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
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Position Information */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900 mb-6">
                  Position Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Role Applied For *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                    >
                      <option value="">Select a role</option>
                      {availableRoles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                    >
                      <option value="">Select experience level</option>
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900 mb-6">
                  Resume & Documents
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Resume/CV *
                    </label>
                    <div className="border-2 border-dashed border-tecdia-gray-300 rounded-xl p-6 text-center hover:border-tecdia-blue transition-colors">
                      <div className="text-3xl mb-4">📄</div>
                      <p className="text-tecdia-gray-600 mb-2">
                        {formData.resume ? formData.resume.name : 'Drag and drop your resume here, or click to browse'}
                      </p>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        required
                        className="hidden"
                      />
                      <label htmlFor="resume" className="cursor-pointer">
                        <span className="text-tecdia-blue hover:text-blue-700 font-semibold">
                          Choose File
                        </span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900 mb-6">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                      placeholder="https://your-portfolio.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                      placeholder="https://linkedin.com/in/your-profile"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="source" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                    >
                      <option value="">Select an option</option>
                      {sources.map(source => (
                        <option key={source} value={source}>{source}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Expected Start Date
                    </label>
                    <input
                      type="date"
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="salary" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                      Expected Salary (Optional)
                    </label>
                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors"
                      placeholder="e.g., $50,000 - $70,000"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-tecdia-gray-900 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent transition-colors resize-none"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-tecdia-gray-200">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPreview(true)}
                  className="flex-1 px-8 py-4 border-2 border-tecdia-blue text-tecdia-blue rounded-xl hover:bg-tecdia-blue hover:text-white transition-all duration-300 font-semibold"
                >
                  Preview Application
                </motion.button>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ 
                    scale: isSubmitting ? 1 : 1.02,
                    boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(255, 107, 0, 0.3)",
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="flex-1 px-8 py-4 bg-tecdia-orange text-white rounded-xl hover:bg-orange-600 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Application Tips */}
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
              Application Tips
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Make your application stand out with these helpful tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: 'Tailor Your Cover Letter',
                description: 'Customize your cover letter to highlight relevant experience and explain why you\'re interested in this specific role at Tecdia.'
              },
              {
                icon: '📄',
                title: 'Update Your Resume',
                description: 'Ensure your resume is current and highlights achievements that align with the role requirements.'
              },
              {
                icon: '🔍',
                title: 'Research Our Company',
                description: 'Familiarize yourself with Tecdia\'s culture, values, and recent projects to show genuine interest.'
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
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
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-tecdia-gray-100">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {tip.icon}
                  </motion.div>
                  <h3 className="text-xl font-poppins font-bold text-tecdia-gray-900 mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-tecdia-gray-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {showPreview && <ApplicationPreview />}


    </div>
  );
};

export default Apply; 