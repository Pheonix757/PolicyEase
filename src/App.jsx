import { useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import PolicyList from './sections/PolicyList';
import PolicyDetail from './sections/PolicyDetail';
import HowItWorks from './sections/HowItWorks';
import TechStack from './sections/TechStack';
import TeamSection from './sections/TeamSection';
import AboutDetail from './sections/AboutDetail';
import EligibilityChecker from './sections/EligibilityChecker';
import './index.css';

function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState('home'); // home, policy-list, policy-detail
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [returnView, setReturnView] = useState('home'); // tracks where to go back from detail view

  // Handlers
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentView('policy-list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPolicy = (policy, source = 'policy-list') => {
    setSelectedPolicy(policy);
    setReturnView(source);
    setCurrentView('policy-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCategories = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('categories');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBackToPolicyList = () => {
    setCurrentView(returnView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (target) => {
    if (target === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'categories') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('categories');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('categories');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (target === 'about') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (target === 'eligibility') {
      setCurrentView('eligibility-checker');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    handleNav('categories');
  };

  const handleLearnMore = () => {
    setCurrentView('about-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header onNav={handleNav} />

      <main>
        {currentView === 'home' && (
          <>
            <Hero
              onExplore={handleExplore}
              onLearnMore={handleLearnMore}
              onCheckEligibility={() => handleNav('eligibility')}
            />
            <Categories id="categories" onSelectCategory={handleSelectCategory} />
            <HowItWorks />
            <TechStack />
            <TeamSection />
          </>
        )}

        {currentView === 'policy-list' && selectedCategory && (
          <PolicyList
            category={selectedCategory}
            onSelectPolicy={(p) => handleSelectPolicy(p, 'policy-list')}
            onBack={handleBackToCategories}
          />
        )}

        {currentView === 'policy-detail' && selectedPolicy && (
          <PolicyDetail
            policy={selectedPolicy}
            onBack={handleBackToPolicyList}
          />
        )}

        {currentView === 'about-detail' && (
          <AboutDetail onBack={() => setCurrentView('home')} />
        )}

        {currentView === 'eligibility-checker' && (
          <EligibilityChecker
            onSelectPolicy={(p) => handleSelectPolicy(p, 'eligibility-checker')}
            onBack={() => setCurrentView('home')}
          />
        )}
      </main>

      <footer style={{
        padding: 'var(--space-8) 0',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        borderTop: '1px solid var(--color-border)',
        marginTop: 'auto'
      }}>
        <div className="container">
          <p style={{ marginBottom: 'var(--space-2)' }}>&copy; 2026 PolicyEase. Built for Citizens.</p>
          <p style={{ fontSize: '0.875rem' }}>Simplified. Verified. Trusted.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
