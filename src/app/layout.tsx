"use client"
import Image from 'next/image';
import './globals.css'
import { Roboto } from 'next/font/google'
// import type { Metadata } from 'next'
import LayoutProps from './layout.props'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GhostButton } from '@/components/Button/Button';
import { Search, Forward } from 'lucide-react';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <html lang="es" className='bg-brand-purple h-full'>
        <body className={roboto.className}>
              <header className='p-10 flex'>
                <nav className='flex flex-col w-72 shrink-0 gap-1'>
                  {/* MENU  */}
                  <Link href="/">
                    <GhostButton active={pathname === '/'}>
                      <Search />
                      Buscar reseñas
                    </GhostButton>
                  </Link>
                  <Link href="/enviar">
                    <GhostButton active={pathname === '/enviar'}>
                      <Forward />
                      Enviar una reseña
                    </GhostButton>
                  </Link>
                </nav>
                <div className='flex flex-grow min-w-fit justify-center px-16'>
                  <a href="/">
                    <Image src="/logo.svg" width="250" height="50" alt="logo"/>
                  </a>
                </div>
                <div className='w-72 shrink-0'>
                  {/* ACCOUNT INFORMATION */}
                </div>
              </header>
              <main>

              {children}
              </main>

        </body>
      </html>
  );
}

export default Layout;