'use client';

import { useState } from 'react';
import StarshipList from './StarshipList';
import { Starship } from '@/types';

type StarshipGridProps = {
  starshipLists: Starship[];
};

export function StarshipGrid({ starshipLists }: StarshipGridProps) {
  const [searchText, setSearchText] = useState('');

  // Search filter by name or manufacturer
  const searchFilter = (starshipLists: Starship[]) => {
    return starshipLists.filter(
      (starship) =>
        starship.name.toLowerCase().includes(searchText.toLowerCase()) ||
        starship.model.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // Save the filtered array of objects
  const filteredstarshipLists = searchFilter(starshipLists);

  // Show the filtered array to user
  return (
    <>
      <div>
        <h2 className='text-center font-bold text-2xl my-8'>
          Popular Starship
        </h2>

        <div className='grid max-w-5xl mx-auto items-center gap-1 mb-8 px-4'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoComplete='off'
            id='starshipName'
            placeholder='Search Starship By Name or Model'
            className='block w-full p-4 text-gray-500 border border-slate-500 rounded-md bg-gray-50 sm:text-md focus:border-blue-500 outline-none'
          />
        </div>
      </div>

      <div className='mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7 px-10'>
        {filteredstarshipLists.map((starship) => {
          return (
            <StarshipList
              name={starship.name}
              model={starship.model}
              key={starship.name}
            />
          );
        })}
      </div>
    </>
  );
}
