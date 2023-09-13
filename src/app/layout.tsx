'use client';
import './globals.css';

import { MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LayoutProps from './layout.props';

import { Button } from '@/components/ui/button';

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
        h-full
        bg-primary 
        text-sm 
        text-black
      ">
      <body className={`
        ${roboto.className} 
        flex 
        flex-col 
        gap-y-20
      `}>
        <header className="flex flex-col gap-6 p-10 md:flex-row">
          <nav className="
            flex 
            w-full
            shrink-0 
            flex-col 
            gap-2 
            md:w-72
          ">
            {/* MENU  */}
            <Button
              className='w-full md:w-fit'
              active={pathname === '/'}
              asChild>
              <Link href="/">
                <MagnifyingGlassIcon className='h-6 w-6' />
                Buscar reseñas
              </Link>
            </Button>
            <Button
              className='w-full md:w-fit'
              active={pathname === '/enviar'}
              asChild>
              <Link href="/enviar">
                <PencilIcon className='h-6 w-6' />
                Enviar una reseña
              </Link>
            </Button>
          </nav>
          <div className="
            order-first
            flex
            w-full
            grow
            justify-center 
            px-16 
            md:order-none
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
          <div className="w-full shrink-0 md:w-72">
            {/* ACCOUNT INFORMATION */}
          </div>
        </header>
        <main className='flex justify-center p-2'>
          {children}
        </main>

      </body>
    </html>
  );
};

export default Layout;
