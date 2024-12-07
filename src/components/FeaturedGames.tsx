import { motion } from 'framer-motion';

const games = [
  {
    id: 1,
    title: "Eternal Legends",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop",
    price: "$59.99",
    rating: 4.8
  },
  {
    id: 2,
    title: "Space Warriors",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop",
    price: "$49.99",
    rating: 4.5
  },
  {
    id: 3,
    title: "Dragon's Quest",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop",
    price: "$54.99",
    rating: 4.9
  }
];

const FeaturedGames = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">{game.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-300">{game.rating}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;