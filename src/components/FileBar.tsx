// @ts-nocheck
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
export default function Filebar() {
const path = usePathname()
const paths = ['/search','/git','/projects','/contact']
  return (
    <header className="flex h-10 flex-row  bg-neutral-900">
    
          <Link href="/" className={`flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900  text-sm text-neutral-300 ${!(path).includes('/main') && !(paths.includes(path))?'neut-800 border-t-2 border-t-[#3b82f6] text-neutral-200':''}`}>
            <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

            <span className=" text-[14px] text-neutral-300">aboutMe.o</span>
            </div>
            </Link>
            <Link href="/main/languages" className={` flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900 text-sm text-neutral-300 ${path=='/main/languages'?'neut-800 border-t-2 border-t-[#3b82f6]    text-neutral-200':''}`}>
            <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

            <span className=" text-[14px] text-neutral-300">languages.o</span>
            </div>
            </Link>

            <Link href="/main/education" className={` flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900  text-sm text-neutral-300 ${path=='/main/education'?'neut-800 border-t-2 border-t-[#3b82f6]    text-neutral-200':''}`}>
            <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

            <span className=" text-[14px] text-neutral-300">education.o</span>
            </div>
            </Link>
            <Link href="/main/testimonials" className={` flex h-10 w-40 shrink-0 flex-row content-center items-center space-x-1 border-t-2 border-t-[#121212] bg-neutral-900  text-sm text-neutral-300 ${path=='/main/testimonials'?'neut-800 border-t-2 border-t-[#3b82f6]    text-neutral-200':''}`}>
            <div className="ml-5 mr-auto flex flex-row content-center items-center space-x-1">
          <iconify-icon class="text-2xl text-blue-400" icon="clarity:code-line"></iconify-icon>

            <span className=" text-[14px] text-neutral-300">testimonials.o</span>
            </div>
            </Link>
       
           
    
        </header>
  );
}
