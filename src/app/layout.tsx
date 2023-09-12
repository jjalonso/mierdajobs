'use client';
import './globals.css';

import { MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LayoutProps from './layout.props';

import { NavButton } from '@/components/Button';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <html
      lang="es"
      className="
        bg-primary
        h-full 
        text-sm 
        text-black
      ">
      <body className={`
        ${roboto.className} 
        flex 
        flex-col 
        gap-y-20
      `}>
        <header className="flex p-10">
          <nav className="
            flex 
            w-72 
            shrink-0 
            flex-col 
            gap-2
          ">
            {/* MENU  */}
            <Link href="/">
              <NavButton active={pathname === '/'}>
                <MagnifyingGlassIcon className='h-6 w-6' />
                Buscar reseñas
              </NavButton>
            </Link>
            <Link href="/enviar">
              <NavButton active={pathname === '/enviar'}>
                <PencilIcon className='h-6 w-6' />
                Enviar una reseña

              </NavButton>
            </Link>
          </nav>
          <div className="
            flex 
            min-w-fit 
            grow 
            justify-center 
            px-16
          ">
            <a href="/">
              <Image
                src="/logo.svg"
                width="250"
                height="0"
                alt="logo"
              />
            </a>
          </div>
          <div className="w-72 shrink-0">
            {/* ACCOUNT INFORMATION */}
          </div>
        </header>
        <main className='flex justify-center'>
          {children}
        </main>

      </body>
    </html>
  );
};

export default Layout;
