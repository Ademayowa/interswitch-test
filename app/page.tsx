import Hero from '@/components/Hero';
import { StarshipGrid } from '@/components/StarshipGrid';
import { getStarshipList } from '@/lib/starshipsApi';

export default async function HomePage() {
  const starshipLists = await getStarshipList();

  return (
    <>
      <Hero />
      <div className='xxl:mx-auto xxl:max-w-7xl'>
        <StarshipGrid starshipLists={starshipLists} />
      </div>
    </>
  );
}
