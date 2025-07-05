// @ts-nocheck
'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { atomOneDark, CodeBlock, vs2015 } from 'react-code-blocks';

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
    <div className="container no-scrollbar mx-auto w-[calc(100vw-58px)]  overflow-y-scroll">
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">

      
      <div className="relative flex h-[500px] flex-col bg-black bg-opacity-20">
          <img src="/images/5.png" className="w-full h-44"></img>
          <h1 className="px-4 mt-6 text-lg font-bold font-jost text-neutral-300">Falar</h1>
          <h1 className="px-4 mt-1 text-xs leading-relaxed text-neutral-400">
            Falar is a new coming-of-the-age content publishing platform that aims at providing an
            accessible platform for people to publish their written works to the public for free.
          </h1>
          <h1 className="px-4 mt-4 text-sm font-semibold font-jost text-neutral-300">
            Technologies Used
          </h1>
          <h1 className="px-4 mt-2 text-xs leading-relaxed text-neutral-400">
            Next.JS, Supabase, TailwindCSS, Amazon S3
          </h1>
          <Link
            href="https://falarapp.vercel.app"
            className="flex absolute bottom-0 content-center items-center py-2 mt-4 w-full bg-black bg-opacity-20"
          >
            <div className="flex flex-row content-center items-center mx-auto space-x-2">
              <iconify-icon
                class="text-[14px] text-neutral-500 hover:text-neutral-400"
                icon="codicon:source-control"
              ></iconify-icon>
              <h1 className="text-sm font-medium font-jost text-neutral-400">Project Link</h1>
            </div>
          </Link>
        </div>

          <div className="relative flex h-[500px] flex-col bg-black bg-opacity-20">
          <img src="/images/8.png" className="w-full h-44"></img>
          <h1 className="px-4 mt-6 text-lg font-bold font-jost text-neutral-300">VSCode Portfolio</h1>
          <h1 className="px-4 mt-1 text-xs leading-relaxed text-neutral-400">
                          The website you are looking at right now. This is a cool little portfolio website to showcase my projects but with a twist - it is themed to look and feel like you are inside VSCode - the popular IDE from Microsoft!
 </h1>
          <h1 className="px-4 mt-4 text-sm font-semibold font-jost text-neutral-300">
            Technologies Used
          </h1>
          <h1 className="px-4 mt-2 text-xs leading-relaxed text-neutral-400">
            Next.JS, TailwindCSS, TypeScript
          </h1>
          <Link
            href="https://baladev.in"
            className="flex absolute bottom-0 content-center items-center py-2 mt-4 w-full bg-black bg-opacity-20"
          >
            <div className="flex flex-row content-center items-center mx-auto space-x-2">
              <iconify-icon
                class="text-[14px] text-neutral-500 hover:text-neutral-400"
                icon="codicon:source-control"
              ></iconify-icon>
              <h1 className="text-sm font-medium font-jost text-neutral-400">Project Link</h1>
            </div>
          </Link>
        </div>

          <div className="relative flex h-[500px] flex-col bg-black bg-opacity-20">
          <img src="/images/6.png" className="w-full h-44"></img>
          <h1 className="px-4 mt-6 text-lg font-bold font-jost text-neutral-300">MacOS Next</h1>
          <h1 className="px-4 mt-1 text-xs leading-relaxed text-neutral-400">
                            MacOS Next is a Next.JS simulation of the popular MacOS Sonoma UI. It holds impressive animations, a dock, a menu bar, window management, the launchpad and more. This project primarily focuses on showcasing my effective frontend skills
 </h1>
          <h1 className="px-4 mt-4 text-sm font-semibold font-jost text-neutral-300">
            Technologies Used
          </h1>
          <h1 className="px-4 mt-2 text-xs leading-relaxed text-neutral-400">
            Next.JS, TailwindCSS
          </h1>
          <Link
            href="https://falarapp.vercel.app"
            className="flex absolute bottom-0 content-center items-center py-2 mt-4 w-full bg-black bg-opacity-20"
          >
            <div className="flex flex-row content-center items-center mx-auto space-x-2">
              <iconify-icon
                class="text-[14px] text-neutral-500 hover:text-neutral-400"
                icon="codicon:source-control"
              ></iconify-icon>
              <h1 className="text-sm font-medium font-jost text-neutral-400">Project Link</h1>
            </div>
          </Link>
        </div>


          <div className="relative flex h-[500px] flex-col bg-black bg-opacity-20">
          <img src="/images/7.png" className="w-full h-44"></img>
          <h1 className="px-4 mt-6 text-lg font-bold font-jost text-neutral-300">W11Web</h1>
          <h1 className="px-4 mt-1 text-xs leading-relaxed text-neutral-400">
                           W11Web is a very special project I did when i started leveraging vanillaCSS for complex frontends for the first time. As the name suggests, W11Web is a web simulation of the popular windows 11 desktop environment with effective window management and application management features.
 </h1>
          <h1 className="px-4 mt-4 text-sm font-semibold font-jost text-neutral-300">
            Technologies Used
          </h1>
          <h1 className="px-4 mt-2 text-xs leading-relaxed text-neutral-400">
            TypeScript, CSS, Webpack
          </h1>
          <Link
            href="https://w11web.vercel.app"
            className="flex absolute bottom-0 content-center items-center py-2 mt-4 w-full bg-black bg-opacity-20"
          >
            <div className="flex flex-row content-center items-center mx-auto space-x-2">
              <iconify-icon
                class="text-[14px] text-neutral-500 hover:text-neutral-400"
                icon="codicon:source-control"
              ></iconify-icon>
              <h1 className="text-sm font-medium font-jost text-neutral-400">Project Link</h1>
            </div>
          </Link>
        </div>
        
        <div className="relative flex h-[500px] flex-col bg-black bg-opacity-20">
          <img src="/images/2.png" className="w-full h-44"></img>
          <h1 className="px-4 mt-6 text-lg font-bold font-jost text-neutral-300">
            Filmhood Journal
          </h1>
          <h1 className="px-4 mt-1 text-xs leading-relaxed text-neutral-400">
            A hobby wordpress website for an young aspiring filmmaker friend of mine to put out his
            thoughts on to the web publicly
          </h1>
          <h1 className="px-4 mt-4 text-sm font-semibold font-jost text-neutral-300">
            Technologies Used
          </h1>
          <h1 className="px-4 mt-2 text-xs text-neutral-400">Wordpress, Google Analytics</h1>
          <Link
            href="https://filmhoodjournal.com"
            className="flex absolute bottom-0 content-center items-center py-2 mt-4 w-full bg-black bg-opacity-20"
          >
            <div className="flex flex-row content-center items-center mx-auto space-x-2">
              <iconify-icon
                class="text-[14px] text-neutral-500 hover:text-neutral-400"
                icon="codicon:source-control"
              ></iconify-icon>
              <h1 className="text-sm font-medium font-jost text-neutral-400">Project Link</h1>
            </div>
          </Link>
        </div>
        <div className="relative flex h-[500px] flex-col bg-black bg-opacity-20">
          <img src="/images/3.png" className="w-full h-44"></img>
          <h1 className="px-4 mt-6 text-lg font-bold font-jost text-neutral-300">Calistnx</h1>
          <h1 className="px-4 mt-1 text-xs leading-relaxed text-neutral-400">
            It is a website built with WordPress for a social media influencer with modern ecommerce
            features like creating and managing video based courses, accepting UPI payments and more
          </h1>
          <h1 className="px-4 mt-4 text-sm font-semibold font-jost text-neutral-300">
            Technologies Used
          </h1>
          <h1 className="px-4 mt-2 text-xs leading-relaxed text-neutral-400">
            Wordpress, WooCommerce, Knit Pay, Stripe, Google Analytics
          </h1>
          <Link
            href="https://calistnx.com"
            className="flex absolute bottom-0 content-center items-center py-2 mt-4 w-full bg-black bg-opacity-20"
          >
            <div className="flex flex-row content-center items-center mx-auto space-x-2">
              <iconify-icon
                class="text-[14px] text-neutral-500 hover:text-neutral-400"
                icon="codicon:source-control"
              ></iconify-icon>
              <h1 className="text-sm font-medium font-jost text-neutral-400">Project Link</h1>
            </div>
          </Link>
        </div>

        <div className="relative flex h-[500px] flex-col bg-black bg-opacity-20">
          <img src="/images/4.png" className="w-full h-44"></img>
          <h1 className="px-4 mt-6 text-lg font-bold font-jost text-neutral-300">
            TTS Internal Tools
          </h1>
          <h1 className="px-4 mt-1 text-xs leading-relaxed text-neutral-400">
            It is a comprehensive web app that acted as the one-stop solution for electronic
            management of all data that was accumulated during the Golden Jubilee fests at The TVS
            during 2022.
          </h1>
          <h1 className="px-4 mt-4 text-sm font-semibold font-jost text-neutral-300">
            Technologies Used
          </h1>
          <h1 className="px-4 mt-2 text-xs leading-relaxed text-neutral-400">
            Qwik JS, TailwindCSS, Supabase, AppWrite, Storage VPS (Ubuntu)
          </h1>
          <Link
            href="https://calistnx.com"
            className="flex absolute bottom-0 content-center items-center py-2 mt-4 w-full bg-black bg-opacity-20"
          >
            <div className="flex flex-row content-center items-center mx-auto space-x-2">
              <iconify-icon
                class="text-[14px] text-neutral-500 hover:text-neutral-400"
                icon="codicon:source-control"
              ></iconify-icon>
              <h1 className="text-sm font-medium font-jost text-neutral-400">Project Link</h1>
            </div>
          </Link>
        </div>
       
      </div>
    </div>
  );
}
