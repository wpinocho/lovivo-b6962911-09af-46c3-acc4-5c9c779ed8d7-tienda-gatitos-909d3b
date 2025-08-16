import React, { useState } from 'react';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header: React.FC = () => {
  const { getCartItemsCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log('Header rendered, cart items count:', getCartItemsCount());

  return (
    <>
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-8 w-8 text-pink-200" />
              <h1 className="text-2xl md:text-3xl font-bold">Gatitos Adorables</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-pink-200 transition-colors">Inicio</a>
              <a href="#" className="hover:text-pink-200 transition-colors">Gatitos</a>
              <a href="#" className="hover:text-pink-200 transition-colors">Sobre Nosotros</a>
              <a href="#" className="hover:text-pink-200 transition-colors">Contacto</a>
            </nav>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;