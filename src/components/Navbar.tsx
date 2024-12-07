import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar = ({ onCartClick }: NavbarProps) => {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">GameVault</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/store" className="hover:text-purple-400 transition-colors">Store</Link>
            <Link to="/new-releases" className="hover:text-purple-400 transition-colors">New Releases</Link>
            <Link to="/categories" className="hover:text-purple-400 transition-colors">Categories</Link>
            <Link to="/deals" className="hover:text-purple-400 transition-colors">Deals</Link>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors" />
            <div className="relative">
              <ShoppingCart
                onClick={onCartClick}
                className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors"
              />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            <User className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors" />
            <Menu className="w-5 h-5 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;