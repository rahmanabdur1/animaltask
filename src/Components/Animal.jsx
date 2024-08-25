"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';

const Animal = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  console.log(query,'a');

  // Sample logic using query (for demonstration)
  const animals = ['Lion', 'Tiger', 'Bear', 'Elephant', 'Leopard', 'Giraffe'];
  const filteredAnimals = animals.filter(animal => animal.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='absolute top-[219px] left-[135px] grid gap-[17px] 
      grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
      {filteredAnimals.map((animal, index) => (
        <span
          key={index}
          className='md:w-[160px] md:h-[191px] sm:w-[100px] sm:h-[120px] p-[46px_16.24px_46.6px_17px] gap-0 rounded-[8px] border-[1px] border-[rgba(20,20,20,1)] bg-[rgba(5,5,5,1)] text-white'>
          {animal}
        </span>
      ))}
    </div>
  );
};

export default Animal;
