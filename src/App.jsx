import { useState } from 'react';
import NavBar from './components/NavigationBar';

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
      <NavBar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        navigation={navigation}
      />
      {/* Other app content can go here */}
    </>
  );
}

export default App;



