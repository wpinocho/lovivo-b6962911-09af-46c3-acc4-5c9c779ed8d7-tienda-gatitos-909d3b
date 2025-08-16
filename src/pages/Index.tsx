import React from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import KittenStore from '../components/KittenStore';

const Index = () => {
  console.log('Index page rendered');
  
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <KittenStore />
      </div>
    </CartProvider>
  );
};

export default Index;