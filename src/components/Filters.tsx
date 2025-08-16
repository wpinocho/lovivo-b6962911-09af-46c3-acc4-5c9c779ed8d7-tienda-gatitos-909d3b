import React from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

interface FiltersProps {
  selectedBreed: string;
  selectedGender: string;
  priceRange: [number, number];
  onBreedChange: (breed: string) => void;
  onGenderChange: (gender: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedBreed,
  selectedGender,
  priceRange,
  onBreedChange,
  onGenderChange,
  onPriceRangeChange
}) => {
  const breeds = ['Todos', 'Persa', 'Maine Coon', 'Siamés', 'Británico de pelo corto', 'Ragdoll', 'Bengalí'];
  const genders = ['Todos', 'Macho', 'Hembra'];

  console.log('Filters rendered with:', { selectedBreed, selectedGender, priceRange });

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex items-center mb-4">
        <FunnelIcon className="h-5 w-5 text-purple-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Raza</label>
          <select
            value={selectedBreed}
            onChange={(e) => onBreedChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
          <select
            value={selectedGender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {genders.map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <div className="flex space-x-2">
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
              className="flex-1"
            />
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;