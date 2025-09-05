import { useState } from 'react';
import NavBar from './components/header/NavigationBar.jsx';
import MainContent from './components/main/Main.jsx';
import Footer from './components/footer/FooterContent.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
    {/* Navigation Menu Content */}
      <NavBar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        navigation={navigation}
      />

      {/* Main  Content */}
       <MainContent/>

       {/* Footer Content */}
      <Footer />
      
    </>
  );
}

export default App;



