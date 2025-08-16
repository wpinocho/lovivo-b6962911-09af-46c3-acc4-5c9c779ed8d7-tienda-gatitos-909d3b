import React, { useState, useMemo } from 'react';
import { kittens } from '../data/kittens';
import KittenCard from './KittenCard';
import Filters from './Filters';
import { Kitten } from '../types/kitten';

const KittenStore: React.FC = () => {
  const [selectedBreed, setSelectedBreed] = useState('Todos');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  console.log('KittenStore rendered with filters:', { selectedBreed, selectedGender, priceRange });

  const filteredKittens = useMemo(() => {
    return kittens.filter((kitten: Kitten) => {
      const breedMatch = selectedBreed === 'Todos' || kitten.breed === selectedBreed;
      const genderMatch = selectedGender === 'Todos' || kitten.gender === selectedGender;
      const priceMatch = kitten.price >= priceRange[0] && kitten.price <= priceRange[1];
      
      return breedMatch && genderMatch && priceMatch && kitten.available;
    });
  }, [selectedBreed, selectedGender, priceRange]);

  console.log('Filtered kittens count:', filteredKittens.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Encuentra tu Compañero Perfecto
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre gatitos adorables esperando un hogar lleno de amor. 
            Cada uno ha sido cuidado con cariño y está listo para ser parte de tu familia.
          </p>
        </div>

        <Filters
          selectedBreed={selectedBreed}
          selectedGender={selectedGender}
          priceRange={priceRange}
          onBreedChange={setSelectedBreed}
          onGenderChange={setSelectedGender}
          onPriceRangeChange={setPriceRange}
        />

        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredKittens.length} gatito{filteredKittens.length !== 1 ? 's' : ''} disponible{filteredKittens.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredKittens.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐱</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No se encontraron gatitos
            </h3>
            <p className="text-gray-500">
              Intenta ajustar los filtros para ver más opciones
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKittens.map((kitten) => (
              <KittenCard key={kitten.id} kitten={kitten} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default KittenStore;