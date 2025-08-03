import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.president'), href: '/shingo-vision' },
    { name: t('nav.culture'), href: '/culture' },
    { name: t('nav.careers'), href: '/careers' },
    { name: t('nav.process'), href: '/recruitment-process' },
    { name: t('nav.globalTeam'), href: '/global-team' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-tecdia-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
         <Link to="/" className="flex items-center space-x-2 flex-shrink-0 ml-0">
         <motion.img
         whileHover={{ scale: 1.05 }}
         transition={{ duration: 0.15 }}
         src="/tecdia logo.jpg"
         alt="TECINDIA Logo"
         className="w-10 h-10 rounded-xl object-cover"
         />
         <span className="text-xl font-poppins font-bold text-tecdia-gray-900">
          TECINDIA
          </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 ml-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-2 lg:px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-tecdia-blue bg-tecdia-blue/10'
                    : 'text-tecdia-gray-700 hover:text-tecdia-blue hover:bg-tecdia-gray-50'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-tecdia-blue/10 rounded-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 800, damping: 40 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Toggle and CTA */}
          <div className="flex items-center space-x-4 flex-shrink-0 ml-auto mr-0 pl-8">
            {/* Language Toggle */}
            <div className="flex items-center space-x-3">
              {['EN', 'JP', 'CN'].map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-150 ${
                    language === lang
                      ? 'bg-tecdia-blue text-white shadow-md'
                      : 'bg-tecdia-gray-100 text-tecdia-gray-700 hover:bg-tecdia-gray-200'
                  }`}
                >
                  {lang}
                </motion.button>
              ))}
            </div>

            {/* Apply Now Button */}
            <Link to="/apply" className="ml-6">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 4px 12px rgba(255, 107, 0, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
                className="hidden sm:inline-flex items-center px-4 py-2 bg-tecdia-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-all duration-150 shadow-md"
              >
                {t('nav.applyNow')}
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-tecdia-gray-700 hover:text-tecdia-blue hover:bg-tecdia-gray-100 transition-colors duration-150"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-tecdia-gray-200 bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                    isActive(item.href)
                      ? 'text-tecdia-blue bg-tecdia-blue/10'
                      : 'text-tecdia-gray-700 hover:text-tecdia-blue hover:bg-tecdia-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-tecdia-gray-200">
                <Link
                  to="/apply"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 bg-tecdia-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-150"
                >
                  {t('nav.applyNow')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
