import { Gamepad2, Sword, Brain, Car } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Action",
    icon: Sword,
    games: "1.2k+ Games"
  },
  {
    id: 2,
    name: "Adventure",
    icon: Gamepad2,
    games: "800+ Games"
  },
  {
    id: 3,
    name: "Strategy",
    icon: Brain,
    games: "500+ Games"
  },
  {
    id: 4,
    name: "Racing",
    icon: Car,
    games: "300+ Games"
  }
];

const GameCategories = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <category.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-400">{category.games}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;