'use client';

// import type { Metadata } from 'next'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { Box, Button, Grommet, Header, Page as GPage, PageContent, Heading } from 'grommet'
import { Add, Search } from 'grommet-icons'
import LayoutProps from './layout.props'


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return children
}

export default Layout;