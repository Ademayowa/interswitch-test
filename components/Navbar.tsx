import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants/index';

export default function Navbar() {
  return (
    <nav className='absolute top-0 left-0 right-0 p-5 flex justify-between items-center md:px-20 px-5'>
      <div>
        <Image
          width={80}
          height={80}
          className='object-contain'
          src='/logo.png'
          alt='logo'
        />
      </div>

      {/* Navbar Links */}
      <ul className='flex space-x-3 md:space-x-6 flex-1 items-center justify-end'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className='cursor-pointer text-lg text-white'>
            <Link href={`${nav.page}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
