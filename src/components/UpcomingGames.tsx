const upcomingGames = [
  {
    id: 1,
    title: "Star Atlas",
    releaseDate: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&h=400&fit=crop",
    description: "Explore vast galaxies in this epic space adventure"
  },
  {
    id: 2,
    title: "Medieval Kingdom",
    releaseDate: "April 1, 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    description: "Build and defend your empire in this strategy masterpiece"
  }
];

const UpcomingGames = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Upcoming Releases</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingGames.map((game) => (
            <div key={game.id} className="relative group">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-300 mb-2">{game.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-purple-400">Release: {game.releaseDate}</span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;