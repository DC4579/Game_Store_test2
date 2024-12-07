import { motion } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { Tag } from 'lucide-react';

const deals = [
  {
    id: 201,
    title: "Ancient Legends",
    originalPrice: 59.99,
    price: 29.99,
    discount: 50,
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&h=450&fit=crop",
    endDate: "March 1, 2024"
  },
  {
    id: 202,
    title: "Space Explorer",
    originalPrice: 49.99,
    price: 19.99,
    discount: 60,
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&h=450&fit=crop",
    endDate: "March 3, 2024"
  },
  {
    id: 203,
    title: "Dragon's Legacy",
    originalPrice: 39.99,
    price: 15.99,
    discount: 60,
    image: "https://images.unsplash.com/photo-1513807762437-8c8dee6b3776?w=800&h=450&fit=crop",
    endDate: "March 5, 2024"
  }
];

const Deals = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Tag className="w-8 h-8 text-purple-400" />
        <h1 className="text-4xl font-bold text-white">Special Deals</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deals.map((game) => (
          <motion.div
            key={game.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-lg overflow-hidden relative"
          >
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full">
              -{game.discount}%
            </div>
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2">{game.title}</h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-400 line-through">${game.originalPrice}</span>
                <span className="text-purple-400 font-bold">${game.price}</span>
              </div>
              <p className="text-gray-400 mb-4">Deal ends: {game.endDate}</p>
              <button
                onClick={() => addItem({ ...game, price: game.price })}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Deals;