import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 ml-80">
          <Navigation 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          <main className="p-8">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;