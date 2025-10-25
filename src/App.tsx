import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'strategy' | 'pilot'>('strategy');

  const handleOpenModal = (type: 'strategy' | 'pilot') => {
    setModalType(type);
    setModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onCTAClick={() => handleOpenModal('strategy')} />

      <Hero onCTAClick={() => handleOpenModal('strategy')} />

      <Problems />

      <Solutions />

      <SocialProof />

      <CTA
        onStrategyClick={() => handleOpenModal('strategy')}
        onPilotClick={() => handleOpenModal('pilot')}
      />

      <Footer />

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-30"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default App;
