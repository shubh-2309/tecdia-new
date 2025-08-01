import React from 'react';
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

// 🗝️ Replace with your actual Gemini API key here
const apiKey = "PASTE_YOUR_GEMINI_API_KEY_HERE";

// Function to call Gemini API for translation
async function translateWithGemini(text, targetLang = "Hindi") {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Translate this to ${targetLang}:\n"${text}"`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

// Custom hook for translation functionality
function useTranslation() {
  const translatePage = async (targetLang) => {
    const elements = [...document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li, td, th, caption')]
      .filter(el => el.innerText.trim() && !el.querySelector('*'));

    for (const el of elements) {
      const original = el.innerText;
      const translated = await translateWithGemini(original, targetLang);
      el.innerText = translated;
    }
  };

  return { translatePage };
}

// Modified Header component with language selector
function TranslatedHeader() {
  const { translatePage } = useTranslation();

  return (
    <Header>
      <select 
        onChange={(e) => translatePage(e.target.value)} 
        style={{ margin: "0 1rem", padding: "0.5rem" }}
      >
        <option value="">Select Language</option>
        <option value="Hindi">Hindi</option>
        <option value="French">French</option>
        <option value="Japanese">Japanese</option>
        <option value="Spanish">Spanish</option>
      </select>
    </Header>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <TranslatedHeader />
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
