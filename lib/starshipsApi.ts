import { Starship } from '@/types';

export async function getStarshipList(): Promise<Starship[]> {
  const response = await fetch('https://swapi.dev/api/starships');
  const data = await response.json();

  return data.results;
}

// https://swapi.dev/api/starships/?name=deathstar
