'use client'
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CodeBlock, atomOneDark, vs2015 } from 'react-code-blocks';



export default function Home() {
 /*
 <div className='flex h-max flex-col bg-neutral-900'>
          <div className='flex w-full flex-row items-center justify-between border-y border-y-neutral-800 bg-black bg-opacity-30 px-5 py-4 font-sans'>
            <h1 className='text-xs font-medium text-neutral-300'>OUTPUT</h1>
            <iconify-icon class=" ml-2" icon="codicon:chevron-up"></iconify-icon>


          </div>
          
         </div>
         */
      const showLineNumbers = true;
      const wrapLines = true;
      const codeBlock = true;
      return (
        
        
          <div className='flex h-auto flex-col content-center items-center overflow-y-scroll pb-10  md:pb-0'>
            <div className="my-auto mb-4 flex w-full flex-col-reverse md:mb-0 md:flex-row">
<div className="flex flex-col  content-center px-8 py-6 md:w-3/5 md:px-14 md:py-10">
         <h1 className="font-neutral text-3xl text-neutral-300">
          Hi! I&apos;m
         </h1>
         <h1 className='text-6xl font-black text-white md:text-8xl'>
          Bala
         </h1>
         <h1 className='my-4 text-xs font-normal leading-relaxed text-neutral-400 md:text-sm lg:my-2'>I&apos;m a student from India passionate about Tech. I enjoy making scalable, effective web frontends and user interfaces for modern web applications</h1>
        <Link href={"/contact"} className="my-2 w-max border border-neutral-700 bg-black bg-opacity-10 px-5 py-3 text-sm font-medium text-white">Get In Touch</Link>
        <h1 className="font-neutral mt-10  text-lg  font-bold text-neutral-300 md:mt-4 md:text-xl">
          About This Site
         </h1>
        <h1 className='my-2 text-xs font-normal leading-relaxed  text-neutral-500'>This site is highly inspired and intentionally designed to mimic the popular IDE - VSCode by Microsoft. This is done intentionally to showcase the extensive capabilities of modern web technologies to mimic complex User Interfaces.<br></br><br></br> All VS-Code branded Icons and Refernces are solely owned by Microsoft Corporation.</h1>

         </div>
         <div className=' flex flex-row px-6 pb-5 pt-10 md:mt-14 md:w-2/5 md:p-0'>
         <img className="max-h-[176px] max-w-[176px] rounded-md md:mx-auto" src="/images/bala.png"></img>
         </div>
         </div>
         
      
        </div>
      );
      
  
}
