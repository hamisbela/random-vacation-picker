import React, { useState } from 'react';
import { cities, type City } from '../data/cities';
import { Shuffle } from 'lucide-react';
import CityCard from './CityCard';

export default function Generator() {
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomCity = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * cities.length);
    
    setTimeout(() => {
      setCurrentCity(cities[randomIndex]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Random Vacation Picker - Where Should You Travel Next?</h1>
        <p className="text-xl text-gray-600">Let our vacation destination generator inspire your next adventure!</p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={generateRandomCity}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Shuffle className="h-5 w-5" />
          <span>{isLoading ? 'Finding your perfect vacation...' : 'Pick a Random Vacation'}</span>
        </button>
      </div>

      {currentCity && <CityCard city={currentCity} />}
    </div>
  );
}