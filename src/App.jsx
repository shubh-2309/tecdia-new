import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ShingoVision from './components/pages/ShingoVision';
import Culture from './components/pages/Culture';
import Careers from './components/pages/Careers';
import RecruitmentProcess from './components/pages/RecruitmentProcess';
import GlobalTeam from './components/pages/GlobalTeam';
import Contact from './components/pages/Contact';
import Apply from './components/pages/Apply';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/shingo-vision" element={<ShingoVision />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/recruitment-process" element={<RecruitmentProcess />} />
              <Route path="/global-team" element={<GlobalTeam />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

// ScrollToTop component that uses the hook inside Router context
function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default App;
