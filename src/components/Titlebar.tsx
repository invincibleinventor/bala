// @ts-nocheck

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Titlebar() {
  return (
    <header className="fixed flex h-12 w-screen flex-row content-center items-center border-b border-b-neutral-800 bg-neutral-900 px-4 py-2">
<iconify-icon class="mr-4 text-xl" icon="devicon:vscode"></iconify-icon>

      <div className="hidden flex-row space-x-1 lg:flex">
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">File</span>
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">Edit</span>
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">Selection</span>
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">View</span>
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">Go</span>
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">Run</span>
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">Terminal</span>
        <span className="cursor-pointer rounded-md px-2 py-1 text-[15px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">Help</span>
      </div>
      <span className="inset-x-[50%] inset-y-[25%] z-10 block w-full text-[15px]   text-neutral-300   lg:absolute">Portfolio.jsx - bala - <span className="hidden lg:inline-block">Visual Studio Code</span><span className="inline-block lg:hidden">VSCode</span></span>

    </header>
  );
}
