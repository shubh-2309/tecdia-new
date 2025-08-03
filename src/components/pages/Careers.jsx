import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const jobListings = [
    {
      id: 1,
      title: 'R&D Engineer',
      department: 'Technical',
      location: 'Tokyo',
      type: 'Full-time',
      remote: 'Hybrid',
      description: 'Drive innovation in cutting-edge technologies and research.',
      requirements: ['Research Experience', 'Advanced Degree', 'Innovation Mindset', '5+ years experience']
    },
    {
      id: 2,
      title: 'Quality Control Specialist',
      department: 'Technical',
      location: 'Bangalore',
      type: 'Full-time',
      remote: 'On-site',
      description: 'Ensure excellence in our manufacturing processes and products.',
      requirements: ['Quality Management', 'ISO Standards', 'Attention to Detail', '3+ years experience']
    },
    {
      id: 3,
      title: 'IT Developer',
      department: 'Technical',
      location: 'San Francisco',
      type: 'Full-time',
      remote: 'Remote',
      description: 'Build scalable applications and lead technical initiatives.',
      requirements: ['React', 'Node.js', 'AWS', '5+ years experience']
    },
    {
      id: 4,
      title: 'Domestic Sales Manager',
      department: 'Sales',
      location: 'Tokyo',
      type: 'Full-time',
      remote: 'Hybrid',
      description: 'Lead sales initiatives and build client relationships in Japan.',
      requirements: ['B2B Sales', 'Japanese Market', 'CRM', '3+ years experience']
    },
    {
      id: 5,
      title: 'Global Sales Representative',
      department: 'Sales',
      location: 'San Francisco',
      type: 'Full-time',
      remote: 'Remote',
      description: 'Expand our global reach and build international partnerships.',
      requirements: ['International Sales', 'Communication', 'Market Research', '3+ years experience']
    },
    {
      id: 6,
      title: 'Trade Operations Specialist',
      department: 'Administrative',
      location: 'Bangalore',
      type: 'Full-time',
      remote: 'Hybrid',
      description: 'Manage import/export operations and logistics.',
      requirements: ['Trade Operations', 'Logistics', 'Documentation', '2+ years experience']
    },
    {
      id: 7,
      title: 'Production Manager',
      department: 'Administrative',
      location: 'Taipei',
      type: 'Full-time',
      remote: 'On-site',
      description: 'Oversee manufacturing processes and production efficiency.',
      requirements: ['Manufacturing', 'Process Optimization', 'Team Leadership', '4+ years experience']
    },
    {
      id: 8,
      title: 'General Affairs Coordinator',
      department: 'Administrative',
      location: 'Tokyo',
      type: 'Full-time',
      remote: 'Hybrid',
      description: 'Support our global operations and ensure smooth processes.',
      requirements: ['Administration', 'Coordination', 'Communication', '2+ years experience']
    }
  ];

  const departments = [
    {
      name: 'Technical',
      description: 'Drive innovation in R&D, Quality Control, and IT Development.',
      roles: ['R&D', 'Quality Control / Quality Assurance', 'IT Development'],
      image:'https://www.bing.com/images/search?q=Technical+Expertise+Icon&form=IRTRRL&fi'
    },
    {
      name: 'Sales',
      description: 'Build lasting relationships and drive growth across markets.',
      roles: ['Domestic & Global Sales'],
      image:''
    },
    {
      name: 'Administrative',
      description: 'Support our global operations and ensure excellence.',
      roles: ['Trade Operations', 'Import/Export', 'Production Management', 'General Affairs'],
      image:''
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const roleMatch = selectedRole === 'all' || job.department.toLowerCase() === selectedRole;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    const typeMatch = selectedType === 'all' || job.remote === selectedType;
    return roleMatch && locationMatch && typeMatch;
  });

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
            Careers at Tecdia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-tecdia-gray-100 max-w-3xl mx-auto"
          >
            Explore diverse opportunities across departments
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-tecdia-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-6 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent font-medium"
            >
              <option value="all">All Departments</option>
              <option value="technical">Technical</option>
              <option value="sales">Sales</option>
              <option value="administrative">Administrative</option>
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-6 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent font-medium"
            >
              <option value="all">All Locations</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Bangalore">Bangalore</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Taipei">Taipei</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-6 py-3 border border-tecdia-gray-300 rounded-xl focus:ring-2 focus:ring-tecdia-blue focus:border-transparent font-medium"
            >
              <option value="all">All Types</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 84, 166, 0.08)",
                }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-tecdia-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="text-3xl"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {job.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-poppins font-bold text-tecdia-gray-900">
                          {job.title}
                        </h3>
                        <p className="text-tecdia-gray-600 font-medium">{job.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-tecdia-orange text-white text-sm font-bold rounded-full">
                        {job.remote}
                      </span>
                    </div>
                  </div>

                  <p className="text-tecdia-gray-600 mb-6 text-lg leading-relaxed">{job.description}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-6 text-sm text-tecdia-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                         <Clock className="w-5 h-5 mr-2 text-gray-600" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-tecdia-gray-900 mb-3">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-tecdia-gray-100 text-tecdia-gray-700 text-sm rounded-full font-medium"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to={`/apply?role=${job.title}`}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 8px 25px rgba(255, 107, 0, 0.25)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-tecdia-orange text-white font-semibold py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg"
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-tecdia-gray-500 text-xl mb-6">No jobs match your current filters.</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedRole('all');
                  setSelectedLocation('all');
                  setSelectedType('all');
                }}
                className="px-8 py-3 bg-tecdia-blue text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Work at Tecdia */}
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
              Why Work at Tecdia?
            </h2>
            <p className="text-xl text-tecdia-gray-600 max-w-2xl mx-auto">
              Each position is backed by a supportive team and meaningful work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
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
                <div className="bg-gradient-to-br from-white to-tecdia-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-tecdia-gray-100 flex flex-col h-full">
                  
                  <h3 className="text-2xl font-bold text-tecdia-gray-900 mb-4">
                    {dept.name}
                  </h3>
                  <p className="text-tecdia-gray-600 leading-relaxed text-lg mb-6 flex-grow">
                    {dept.description}
                  </p>
                  <div className="space-y-2">
                    {dept.roles.map((role, idx) => (
                      <div key={idx} className="flex items-center text-sm text-tecdia-gray-700">
                        <span className="w-2 h-2 bg-tecdia-orange rounded-full mr-3"></span>
                        {role}
                      </div>
                    ))}
                  </div>
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
            Ready to Join Our Team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-tecdia-gray-100 mb-8"
          >
            Each position is backed by a supportive team and meaningful work
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
            <Link to="/recruitment-process">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white hover:text-tecdia-blue transition-all duration-300"
              >
                See Recruitment Process
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Careers; 