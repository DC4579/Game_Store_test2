import { motion } from 'framer-motion';
import { useCartStore } from '../store/cartStore';

const newReleases = [
  {
    id: 101,
    title: "Neon Horizon",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
    releaseDate: "February 28, 2024",
    description: "A cyberpunk adventure in a dystopian future"
  },
  {
    id: 102,
    title: "Forest Kingdom",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop",
    releaseDate: "March 5, 2024",
    description: "Explore a magical forest realm"
  },
  {
    id: 103,
    title: "Speed Demons",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=450&fit=crop",
    releaseDate: "March 10, 2024",
    description: "High-octane racing action"
  }
];

const NewReleases = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">New Releases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newReleases.map((game) => (
          <motion.div
            key={game.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2">{game.title}</h2>
              <p className="text-gray-400 mb-4">{game.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-400 font-bold">${game.price}</span>
                <span className="text-gray-400">Release: {game.releaseDate}</span>
              </div>
              <button
                onClick={() => addItem(game)}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Pre-order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;