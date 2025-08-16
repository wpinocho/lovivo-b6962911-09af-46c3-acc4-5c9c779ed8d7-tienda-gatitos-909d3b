import React from 'react';
import { HeartIcon, ShoppingCartIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Kitten } from '../types/kitten';
import { useCart } from '../context/CartContext';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addToCart, cartItems } = useCart();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const isInCart = cartItems.some(item => item.id === kitten.id);

  console.log('KittenCard rendered for:', kitten.name, 'In cart:', isInCart);

  const handleAddToCart = () => {
    console.log('Add to cart clicked for:', kitten.name);
    addToCart(kitten);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log('Favorite toggled for:', kitten.name);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
        >
          {isFavorite ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
        {kitten.vaccinated && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
            <CheckCircleIcon className="h-3 w-3 mr-1" />
            Vacunado
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <span className="text-2xl font-bold text-purple-600">${kitten.price}</span>
        </div>
        
        <div className="space-y-1 mb-3">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Raza:</span> {kitten.breed}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Edad:</span> {kitten.age}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Color:</span> {kitten.color}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Género:</span> {kitten.gender}
          </p>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{kitten.description}</p>
        
        <button
          onClick={handleAddToCart}
          disabled={isInCart || !kitten.available}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
            isInCart
              ? 'bg-green-100 text-green-700 cursor-not-allowed'
              : kitten.available
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCartIcon className="h-4 w-4" />
          <span>
            {isInCart ? 'En el carrito' : kitten.available ? 'Adoptar' : 'No disponible'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default KittenCard;