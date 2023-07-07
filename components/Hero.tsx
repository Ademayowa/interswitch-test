import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import { Cormorant } from 'next/font/google';

export const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroPage() {
  return (
    <div className='h-screen bg-hero bg-cover bg-center-top relative'>
      <Navbar />

      <div className='h-full flex flex-col justify-center items-center'>
        <h1
          className={`text-white font-bold text-[2rem] sm:tracking-[.6rem] md:tracking-[.65rem] lg:tracking-[.75rem] absolute top-64 z-50 md: -mt-3 ${cormorant.className}`}
        >
          THE FORCE AWAKENS
        </h1>
        {/* Star Image Text */}
        <Image
          width={500}
          height={500}
          className='object-contain absolute top-40'
          src='/logo-hero-section.svg'
          alt='star-wars'
        />
        {/* Wars Image Text */}
        <Image
          width={500}
          height={500}
          className='object-contain absolute top-72'
          src='/wars.svg'
          alt='wars'
        />
      </div>
    </div>
  );
}
