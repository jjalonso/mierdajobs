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
  return children
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
        <header className="flex p-10">
          <nav className="
            flex 
            w-72 
            shrink-0 
            flex-col 
            gap-2
          ">
            {/* MENU  */}
            <Button
              active={pathname === '/'}
              asChild>
              <Link href="/">
                <MagnifyingGlassIcon className='h-6 w-6' />
                Buscar reseñas
              </Link>
            </Button>
            <Button
              active={pathname === '/enviar'}
              asChild>
              <Link href="/enviar">
                <PencilIcon className='h-6 w-6' />
                Enviar una reseña
              </Link>
            </Button>
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
