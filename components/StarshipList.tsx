import Image from 'next/image';
import Link from 'next/link';

type StarshipProps = {
  name: string;
  model: string;
  manufacturer: string;
};

export default function StarshipList({
  name,
  model,
  manufacturer,
}: StarshipProps) {
  return (
    <div className='mx-auto max-w-2xl'>
      <Image
        width={450}
        height={400}
        className='object-contain'
        src='/starship-2.jpg'
        alt='starship'
      />

      <h2 className='text-lg font-bold text-gray-700 mt-4'>{name}</h2>
      <p className='max-w-sm text-gray-700 mt-2'>
        {' '}
        {model}. {manufacturer}.
      </p>

      {/* Readmore Btn */}
      <div className='mt-5'>
        <button className='bg-gray-50 font-semibold border border-slate-300 hover:border-slate-500 px-4 py-2 text-gray-500'>
          Read More
        </button>
      </div>
    </div>
  );
}
