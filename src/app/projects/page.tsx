// @ts-nocheck
'use client'
import type { Metadata } from 'next';
import Link from 'next/link';
import { CodeBlock, atomOneDark, vs2015 } from 'react-code-blocks';



export default function Home() {
 
      const showLineNumbers = true;
      const wrapLines = true;
      const codeBlock = true;
      /* <CodeBlock
customStyle={{
  height:'100%',
}}           text={`{
  "bindows": {
    "time": "september 2021 - january - 2022",
    "status": "discontinued",
    "description": "it aims at emulating the overall \nui of windows 11 as an attempt \nto showcase the capabilities of \nmodern web technologies",
    "technologies-used": "typescript,bootstrap,webpack",
    "link": "https://w11.vercel.app"
  },
  "calistnx": {
    "time": "september 2023 - current",
    "status": "actively maintained",
    "description": "it is a website built with wordpress \nfor a social media influencer with \nmodern features like courses, \nupi payments and more",
    "technologies": "wordpress, woocommerce, stripe",
    "link": "https://calistnx.com"
  },
  "internal-tools-for-the-tvs": {
    "time": "august 2022 - current",
    "status": "maintained",
    "description": "a suite of tools for \nmanaging several student and staff \ndata, organizing and compiling \nthem to provide beautiful insights. \nAdditionally, a set of complex software \nfor collection and showcasing \nof data through \nsimplified web-frontends",
    "technologies": "supabase, qwikJS, typescript, tailwindcss, redis",
    "link": "private in-organization access"
  },
  "filmhoodjournal": {
    "time": "january 2023 - current",
    "status": "maintained",
    "description": "a website for an young \naspiring filmmaker to put out \ntheir thoughts on to the web publicly",
    "technologies": "wordpress",
    "link": "https://filmhoodjournal.com"
  },
  "tvs-golden-jubilee": {
    "time": "september 2022 - december 2022",
    "status": "discontinued and broken",
    "description": "a landing page used for registering \nand enrolling participants that were a part \nof the interschool 50th year celebration at \nThe TVS School along with a dashboard for \nviewing and tracking events within the fest",
    "technologies": "supabase, nodeJS, expressJS, tailwindcss, material-tailwind, qwikJS, typescript",
    "link": "https://goldnew.netlify.app"
  },
  "personal-portfolio": {
    "time": "november 2023 - current",
    "status": "actively maintained",
    "description": "a portfolio themed to mimic \nthe look and feel of VSCode",
    "technologies": "tailwind,nextjs",
    "link": "you are here right now"
  },
  "more-to-come": {
    "stay-tuned": "true"
  }
}`}

            language={'json'}
            theme={vs2015}
            {...{ showLineNumbers, wrapLines, codeBlock }}
          />
          */
      return (
        <div className="container mx-auto h-auto max-h-full overflow-y-scroll">
<div className="grid grid-cols-1  gap-6  p-6  md:grid-cols-2 lg:grid-cols-4">
<div
            className="relative flex h-[500px] flex-col bg-black bg-opacity-20"
          >
            <img src="/images/1.png" className='h-44 w-full'></img>
            <h1 className="font-jost mt-6 px-4 text-lg font-bold text-neutral-300">Bindows 11</h1>
          <h1 className='mt-1 px-4 text-xs leading-relaxed text-neutral-400'>It aims at emulating the overall UI of Windows11 as an attempt to showcase the capabilities of modern web technologies</h1>
          <h1 className="font-jost mt-4 px-4 text-sm font-semibold text-neutral-300">Technologies Used</h1>
          <h1 className='mt-2 px-4 text-xs text-neutral-400'>Typescript, VanillaCSS</h1>
          <Link href="https://w11.vercel.app" className="absolute bottom-0 mt-4 flex w-full content-center items-center bg-black bg-opacity-20 py-2">
          <div className='mx-auto flex flex-row content-center items-center space-x-2'>
          <iconify-icon class="text-[14px] text-neutral-500 hover:text-neutral-400" icon="codicon:source-control"></iconify-icon>
          <h1 className='font-jost text-sm font-medium text-neutral-400'>Project Link</h1>
          </div>
        </Link>
          </div>
          <div
            className="relative flex h-[500px] flex-col bg-black bg-opacity-20"
          >
            <img src="/images/2.png" className='h-44 w-full'></img>
            <h1 className="font-jost mt-6 px-4 text-lg font-bold text-neutral-300">Filmhood Journal</h1>
          <h1 className='mt-1 px-4 text-xs leading-relaxed text-neutral-400'>A hobby wordpress website for an young aspiring filmmaker friend of mine to put out his thoughts on to the web publicly</h1>
          <h1 className="font-jost mt-4 px-4 text-sm font-semibold text-neutral-300">Technologies Used</h1>
          <h1 className='mt-2 px-4 text-xs text-neutral-400'>Wordpress, Google Analytics</h1>
          <Link href="https://filmhoodjournal.com" className="absolute bottom-0 mt-4 flex w-full content-center items-center bg-black bg-opacity-20 py-2">
          <div className='mx-auto flex flex-row content-center items-center space-x-2'>
          <iconify-icon class="text-[14px] text-neutral-500 hover:text-neutral-400" icon="codicon:source-control"></iconify-icon>
          <h1 className='font-jost text-sm font-medium text-neutral-400'>Project Link</h1>
          </div>
        </Link>
          </div>
          <div
            className="relative flex h-[500px] flex-col bg-black bg-opacity-20"
          >
            <img src="/images/3.png" className='h-44 w-full'></img>
            <h1 className="font-jost mt-6 px-4 text-lg font-bold text-neutral-300">Calistnx</h1>
          <h1 className='mt-1 px-4 text-xs leading-relaxed text-neutral-400'>It is a website built with WordPress for a social media influencer with modern ecommerce features like creating and managing video based courses, accepting UPI payments and more</h1>
          <h1 className="font-jost mt-4 px-4 text-sm font-semibold text-neutral-300">Technologies Used</h1>
          <h1 className='mt-2 px-4 text-xs leading-relaxed text-neutral-400'>Wordpress, WooCommerce, Knit Pay, Stripe, Google Analytics</h1>
          <Link href="https://calistnx.com" className="absolute bottom-0 mt-4 flex w-full content-center items-center bg-black bg-opacity-20 py-2">
          <div className='mx-auto flex flex-row content-center items-center space-x-2'>
          <iconify-icon class="text-[14px] text-neutral-500 hover:text-neutral-400" icon="codicon:source-control"></iconify-icon>
          <h1 className='font-jost text-sm font-medium text-neutral-400'>Project Link</h1>
          </div>
        </Link>
          </div>
          
         
        </div>
      </div>
      );
      
  
}
