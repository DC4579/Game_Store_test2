import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
      transition={{ type: 'tween' }}
      className={`fixed right-0 top-0 h-full w-96 bg-gray-900 shadow-xl z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <h2 className="text-xl font-bold text-white">Your Cart</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
        {items.length === 0 ? (
          <p className="text-gray-400 text-center">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex gap-4 mb-4 bg-gray-800 p-4 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-purple-400">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="text-gray-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-400 hover:text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto text-red-500 hover:text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
          <div className="flex justify-between mb-4">
            <span className="text-white">Total:</span>
            <span className="text-purple-400 font-bold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Checkout
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;