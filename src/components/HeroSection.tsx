import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=2400&h=1600&fit=crop"
        alt="Hero Game"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold text-white mb-4">Cyberpunk 2078</h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of gaming in this breathtaking open-world adventure.
              Pre-order now and get exclusive in-game content.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Pre-order Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;