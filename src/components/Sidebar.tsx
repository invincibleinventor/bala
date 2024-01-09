// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import { Familjen_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [file, setFile] = useState(false);

  const [expanded, setExpanded] = useState(true);

  const path = usePathname();
  let a = '';
  if (!path.includes('/main')) {
    a = '/';
  } else {
    a = '';
  }

  const paths = ['/git', '/search', '/projects', '/contact'];

  return (
    <div className="flex flex-row">
      <header className="flex h-auto flex-col content-center items-center border-r border-r-neutral-700 bg-neutral-800">
        <div
          className={`mx-auto flex flex-col ${
            path == '/' || path.includes('/main')
              ? 'border-l-2 border-l-blue-400'
              : 'border-l-2 border-l-neutral-800'
          }`}
        >
          <Link
            scroll={false}
            href={a}
            onClick={() => {
              if (path == '/' || path.includes('/main')) setFile(!file);
            }}
            className="flex content-center items-center p-4"
          >
            <iconify-icon
              class="text-[26px] text-neutral-500 hover:text-neutral-400"
              icon="codicon:files"
            ></iconify-icon>
          </Link>
        </div>
        <div
          className={`mx-auto flex flex-col ${
            path == '/search' ? 'border-l-2 border-l-blue-400' : 'border-l-2 border-l-neutral-800'
          }`}
        >
          <Link href="/search" scroll={false} className="flex content-center items-center p-4">
            <iconify-icon
              class="text-[26px] text-neutral-500 hover:text-neutral-400"
              icon="codicon:search"
            ></iconify-icon>
          </Link>
        </div>
        <div
          className={`mx-auto flex flex-col ${
            path == '/git' ? 'border-l-2 border-l-blue-400' : 'border-l-2 border-l-neutral-800'
          }`}
        >
          <Link href="/git" scroll={false} className="flex content-center items-center p-4">
            <iconify-icon
              class="text-[26px] text-neutral-500 hover:text-neutral-400"
              icon="codicon:source-control"
            ></iconify-icon>
          </Link>
        </div>
        <div
          className={`mx-auto flex flex-col ${
            path == '/projects' ? 'border-l-2 border-l-blue-400' : 'border-l-2 border-l-neutral-800'
          }`}
        >
          <Link scroll={false} href="/projects" className="flex content-center items-center p-4">
            <iconify-icon
              class="text-[26px] text-neutral-500 hover:text-neutral-400"
              icon="codicon:extensions"
            ></iconify-icon>
          </Link>
        </div>
        <div
          className={`mx-auto flex flex-col ${
            path == '/contact' ? 'border-l-2 border-l-blue-400' : 'border-l-2 border-l-neutral-800'
          }`}
        >
          <Link scroll={false} href="/contact" className="flex content-center items-center p-4">
            <iconify-icon
              class="text-[26px] text-neutral-500 hover:text-neutral-400"
              icon="codicon:account"
            ></iconify-icon>
          </Link>
        </div>
      </header>

      <header
        className={`flex h-[calc(100vh-48px)] w-48 flex-col content-center items-center border-r border-r-[#121212] bg-neutral-900 p-0 transition-all duration-200 ease-linear  ${
          file ? '' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-1">
          <div
            className="flex w-48 cursor-pointer flex-row content-center items-center space-x-0 p-1 pt-2"
            onClick={() => setExpanded(!expanded)}
          >
            <iconify-icon class="text-white ml-2" icon="codicon:chevron-down"></iconify-icon>

            <span className=" cursor-pointer px-2 py-1 text-[15px] font-medium text-neutral-200">
              BALA
            </span>
          </div>
          <div className={`flex flex-col space-y-1 ${expanded ? '' : 'hidden'}`}>
            <Link
              href="/"
              scroll={false}
              className={`flex w-48 shrink-0 flex-row content-center items-center space-x-1 bg-neutral-900  py-1  text-sm text-neutral-300 ${
                !path.includes('/main') && !paths.includes(path) ? 'neut-800  text-neutral-200' : ''
              }`}
            >
              <div className="ml-3 mr-auto flex flex-row content-center items-center space-x-1">
                <iconify-icon
                  class="mr-2 text-[12.5px] text-blue-400"
                  icon="logos:react"
                ></iconify-icon>

                <span className=" text-[15px] text-neutral-300">aboutMe.jsx</span>
              </div>
            </Link>
            <Link
              href="/main/languages"
              scroll={false}
              className={`flex w-48 shrink-0 flex-row content-center items-center space-x-1 bg-neutral-900  py-1  text-sm text-neutral-300 ${
                path == '/main/languages' ? 'neut-800  text-neutral-200' : ''
              }`}
            >
              <div className="ml-3 mr-auto flex flex-row content-center items-center space-x-1">
                <iconify-icon class=" mr-2 text-blue-400" icon="logos:javascript"></iconify-icon>

                <span className=" text-[15px] text-neutral-300">languages.js</span>
              </div>
            </Link>
            <Link
              href="/main/journey"
              scroll={false}
              className={`flex w-48 shrink-0 flex-row content-center items-center space-x-1 bg-neutral-900  py-1  text-sm text-neutral-300 ${
                path == '/main/journey' ? 'neut-800  text-neutral-200' : ''
              }`}
            >
              <div className="ml-3 mr-auto flex flex-row content-center items-center space-x-1">
                <iconify-icon class="text-[8px] mr-2" icon="logos:tailwindcss-icon"></iconify-icon>

                <span className=" text-[15px] text-neutral-300">journey.css</span>
              </div>
            </Link>
            <Link
              href="/main/reviews"
              scroll={false}
              className={`flex w-48 shrink-0 flex-row content-center items-center space-x-1 bg-neutral-900  py-1  text-sm text-neutral-300 ${
                path == '/main/reviews' ? 'neut-800  text-neutral-200' : ''
              }`}
            >
              <div className="ml-3 mr-auto flex flex-row content-center items-center space-x-1">
                <iconify-icon class="text-sm mr-2 text-blue-400" icon="logos:python"></iconify-icon>

                <span className=" text-[15px] text-neutral-300">reviews.py</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
