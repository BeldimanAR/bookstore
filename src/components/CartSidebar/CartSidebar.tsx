// src/components/CartSidebar/CartSidebar.tsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import SuccessModal from '../Shared/SuccessModal';

export const CartSidebar: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, submitCart } =
    useContext(CartContext);

  // Local state to control the success modal
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmitCart = () => {
    submitCart();
    setIsSuccessModalOpen(true);
  };

  return (
    <aside className="p-4 border-t lg:border-t-0 lg:border-l bg-gray-50 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 shadow rounded flex flex-col space-y-2"
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">by {item.author}</div>
              <div className="text-sm">Unit Price: ${item.price.toFixed(2)}</div>
              <div className="flex items-center">
                <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm">
                  Qty:
                </label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min={1}
                  max={item.stock}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 border border-gray-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 text-sm hover:underline self-start"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <div className="font-semibold mb-2 text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button
            onClick={handleSubmitCart}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Cart
          </button>
        </div>
      )}

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message="Cart submitted successfully!"
      />
    </aside>
  );
};
