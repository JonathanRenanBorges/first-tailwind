import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apenas o controle do dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-neutral-100 relative dark:bg-neutral-950 transition-colors duration-300">
      {/* Botão de dark mode (única interação mantida) */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-[#3165ff] text-neutral-950 shadow-lg hover:bg-[#3165ff] transition-colors z-10"
      >
        <i className={`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`}></i>
      </button>

      {/* Container principal SEM cursor */}
      <div className="mobile-scroll-container">
        {/* Backgrounds (mantidos do seu original) */}
        <div className='absolute inset-0 -z-10'>
          <div className='absolute inset-0 opacity-30 dark:hidden' 
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}>
          </div>
        </div>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute inset-0 dark:hidden' 
            style={{
              backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>
        </div>

        {/* Seu conteúdo principal */}
        <Hero />
      </div>
    </div>
  );
};

export default App;