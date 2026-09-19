'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface CustomLinkProps{
    children: ReactNode;
    path: string;
}
const CustomLink = ({ children, path }: CustomLinkProps) => {
    const pathName = usePathname();
    const isSamePath = path === pathName;
  return (
      <Link
          className={`${isSamePath ? 'text-[#00d991]' : ''} font-medium text-sm`}
          href={path}
      >
          {children}
      </Link>
  );
};

export default CustomLink;