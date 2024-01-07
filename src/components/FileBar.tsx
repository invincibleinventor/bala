// @ts-nocheck
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

export default function Filebar() {
  const path = usePathname();
  const paths = ['/search', '/git', '/projects', '/contact'];
  return (
    <header className="flex no-scrollbar overflow-x-scroll w-[calc(100vw-58px)] h-10 shrink-0 flex-row  bg-neutral-900">
      <Link
        href="/"
        className={`flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900  text-sm text-neutral-300 ${
          !path.includes('/main') && !paths.includes(path)
            ? 'neut-800 border-t-2 border-t-[#3b82f6] text-neutral-200'
            : ''
        }`}
      >
        <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

          <span className=" text-[14px] text-neutral-300">aboutMe.o</span>
        </div>
      </Link>
      <Link
        href="/main/languages"
        className={` flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900 text-sm text-neutral-300 ${
          path == '/main/languages'
            ? 'neut-800 border-t-2 border-t-[#3b82f6]    text-neutral-200'
            : ''
        }`}
      >
        <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

          <span className=" text-[14px] text-neutral-300">languages.js</span>
        </div>
      </Link>

      <Link
        href="/main/education"
        className={` flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900  text-sm text-neutral-300 ${
          path == '/main/education'
            ? 'neut-800 border-t-2 border-t-[#3b82f6]    text-neutral-200'
            : ''
        }`}
      >
        <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

          <span className=" text-[14px] text-neutral-300">education.o</span>
        </div>
      </Link>
      <Link
        href="/main/reviews"
        className={` flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900  text-sm text-neutral-300 ${
          path == '/main/reviews'
            ? 'neut-800 border-t-2 border-t-[#3b82f6]    text-neutral-200'
            : ''
        }`}
      >
        <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

          <span className=" text-[14px] text-neutral-300">reviews.o</span>
        </div>
      </Link>
    </header>
  );
}
