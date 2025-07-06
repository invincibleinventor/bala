// @ts-nocheck

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Titlebar() {
  return (
    <header className="relative flex h-12 w-screen flex-row content-center items-center border-b border-b-neutral-800 bg-neutral-900 px-4 py-2">
      <iconify-icon class="mr-4 text-xl" icon="devicon:vscode"></iconify-icon>

      <div className="hidden flex-row space-x-1 lg:flex">
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          File
        </div>
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          Edit
        </div>
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          Selection
        </div>
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          View
        </div>
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          Go
        </div>
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          Run
        </div>
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          Terminal
        </div>
        <div className="cursor-pointer rounded-md px-2 py-1 text-[14px] text-neutral-300 hover:bg-neutral-700 hover:text-neutral-200">
          Help
        </div>
      </div>
      <div className="absolute w-screen">
        <span className=" mx-auto inset-y-[25%] z-10 block w-max text-[15px]   text-neutral-300 ">
          Bala.tbr - <span className="hidden lg:inline-block">VSCode</span>
          <span className="inline-block lg:hidden">VSCode</span>
        </span>
      </div>
      <div className='ml-auto flex flex-row items-center content-center space-x-[12px]'>
        <div className='w-[14px] h-[14px] bg-red-600 rounded-full'></div>
        <div className='w-[14px] h-[14px] bg-yellow-600 rounded-full'></div>
        <div className='w-[14px] h-[14px] bg-green-600 rounded-full'></div>
      </div>
    </header>
  );
}
