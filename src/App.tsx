import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import HeroSection from './components/HeroSection';
import FeaturedGames from './components/FeaturedGames';
import UpcomingGames from './components/UpcomingGames';
import GameCategories from './components/GameCategories';
import NewReleases from './pages/NewReleases';
import Deals from './pages/Deals';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <FeaturedGames />
              <UpcomingGames />
              <GameCategories />
            </main>
          } />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;