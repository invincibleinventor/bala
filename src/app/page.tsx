'use client'
import Link from 'next/link';
import { useState } from 'react';
import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';
import {Experience} from '@/components/Experience'
import { Canvas } from '@react-three/fiber';
const config: AvatarCreatorConfig = {
  clearCache: false,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};
const style = { width: '100%', height: '100%', border: 'none' };
export default function Home() {

  /*
 <div className='flex h-max flex-col bg-neutral-900'>
          <div className='flex w-full flex-row items-center justify-between border-y border-y-neutral-800 bg-black bg-opacity-30 px-5 py-4 font-sans'>
            <h1 className='text-xs font-medium text-neutral-300'>OUTPUT</h1>
            <iconify-icon class=" ml-2" icon="codicon:chevron-up"></iconify-icon>


          </div>
          
         </div>
         */
/*         <img className=" rounded-md md:mx-auto" src="/images/bala.png"></img>
*/    
      return (
        
        
          <div className='no-scrollbar flex h-auto max-h-[calc(100vh-144px)] flex-col content-center items-center overflow-y-scroll md:py-0 lg:overflow-hidden'>
            <div className="my-auto mb-4 flex w-full flex-col-reverse md:mb-0 md:flex-row-reverse">
<div className="my-auto flex flex-col content-center px-8 py-6 md:w-3/5 md:px-14 md:py-10 ">
         <h1 className="font-neutral text-3xl text-neutral-300">
          Hi! I&apos;m
         </h1>
         <h1 className='text-6xl font-black text-white md:text-8xl'>
          Bala
         </h1>
         <h1 className='my-4 text-xs font-normal leading-relaxed text-neutral-400 md:text-sm lg:my-6 lg:text-sm'>I&apos;m a student from India passionate about Tech. I enjoy making scalable, effective web frontends and user interfaces for modern web applications</h1>
        <Link href={"/contact"} className="my-2 w-max border border-neutral-700 bg-black bg-opacity-10 px-5 py-3 text-sm font-medium text-white">Get In Touch</Link>
        <h1 className="font-neutral mt-10  text-lg  font-bold text-neutral-300 md:mt-8 md:text-xl">
          About This Site
         </h1>
        <h1 className='my-2 mt-4 text-xs font-normal leading-relaxed text-neutral-400  lg:text-sm'>This site is highly inspired and intentionally designed to mimic the popular IDE - VSCode by Microsoft. This is done intentionally to showcase the extensive capabilities of modern web technologies to mimic complex User Interfaces.<br></br><br></br> All VS-Code branded Icons and References are solely owned by Microsoft Corporation.<br></br><br></br>Please contact me for any trademark complaints. I shall be quick to respond.</h1>

         </div>
         <div className=' flex flex-row px-6 pb-5 pt-10 md:mt-10 md:w-2/5 md:p-0 md:pb-10 md:pl-10'>
         <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
                  </div>
         </div>
         
      
        </div>
      );
      
  
}
