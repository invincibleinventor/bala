'use client'
import type { Metadata } from 'next';
import { CodeBlock, atomOneDark, vs2015 } from 'react-code-blocks';



export default function Home() {
 
      const showLineNumbers = true;
      const wrapLines = true;
      const codeBlock = true;
      return (
        <div
        className='h-full font-mono'
        >
          <CodeBlock
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
        </div>
      );
      
  
}
