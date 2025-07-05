// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const Tags = dynamic(() => import('@/components/skills'), { ssr: false });
export default function Home() {
  return (
    <div className="no-scrollbar flex h-auto overflow-x-hidden  w-[calc(100vw-58px)] flex-col content-center items-center overflow-y-scroll md:py-0 lg:overflow-hidden">
      <div className="flex flex-col-reverse my-auto mb-4 w-full md:mb-0 md:flex-row-reverse">
        <div className="flex flex-col content-center px-8 py-6 my-auto md:w-3/6 md:px-14 md:py-10">
          <h1 className="text-3xl font-neutral text-neutral-300">hola! I&apos;m</h1>
          <h1 className="text-6xl font-black -ml-[1px] text-white md:text-8xl">bala.tbr</h1>
          <h1
            className="my-4 text-xs font-normal text-neutral-400 md:text-sm lg:my-6 lg:text-sm"
            style={{ lineHeight: 2 }}
          >
            i&apos;m a student from India passionate about tech. i enjoy making scalable, effective
            web frontends and user interfaces for modern web applications
          </h1>
          <Link
            href={'/contact'}
            className="px-5 py-3 my-2 w-max text-sm font-medium text-white bg-black bg-opacity-10 border transition-all duration-100 ease-linear hover:bg-sky-600 border-neutral-700"
          >
            get in touch
          </Link>
          <h1 className="mt-10 text-lg font-bold font-neutral text-neutral-300 md:mt-8 md:text-xl">
            about <span className="underline">Me</span>
          </h1>
          <h1
            style={{ lineHeight: 2 }}
            className="my-2 mt-4 text-xs font-normal leading-relaxed text-neutral-400 lg:text-sm"
          >
            <ul className="px-[2px] space-y-2">
              <li>
                <div className="flex flex-row content-center items-center space-x-2">
                  <h1 style={{ lineHeight: 2.4 }}>
                    I'm a passionate geek from India that loves to tinker with{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        everything not backend
                      </div>
                      <div className="bg-fuchsia-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>frontend</span>
                      </div>
                    </div>
                    {'. '}
                    i'm an ardent lover of{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        an os dumbo
                      </div>
                      <div className="bg-cyan-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>linux</span>
                      </div>{' '}
                    </div>{' '}
                    and{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        free & open source
                      </div>
                      <div className="bg-neutral-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>foss</span>
                      </div>{' '}
                    </div>
                    principles
                    {'. '}
                    i'm a self taught web dev, open to help and{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        learn english
                      </div>
                      <div className="bg-violet-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>collaborate</span>
                      </div>{' '}
                    </div>
                    with people. i'm best at using{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        react js framework
                      </div>
                      <div className="bg-green-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>next.js</span>
                      </div>{' '}
                    </div>{' '}
                    and i am a fan of{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        css framework
                      </div>
                      <div className="bg-teal-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>tailwindcss</span>
                      </div>{' '}
                    </div>
                    {'. '}
                    i'm familar with VC systems like{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        makes life easy
                      </div>
                      <div className="bg-red-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>git</span>
                      </div>{' '}
                    </div>
                    and essential tools like{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        complicated shit{' '}
                      </div>
                      <div className="bg-orange-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>docker</span>
                      </div>{' '}
                    </div>
                    {'. '}i love using{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        vscode meh
                      </div>
                      <div className="bg-yellow-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>vsc</span>
                      </div>{' '}
                    </div>{' '}
                    and{' '}
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        The IDE for chads
                      </div>
                      <div className="bg-pink-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>nvim</span>
                      </div>{' '}
                    </div>
                    {'. '}
                    PS: i use
                    <div className="inline-flex group relative h-[16.57px] flex flex-col items-center content-center">
                      <div className="hidden absolute right-0 left-0 bottom-6 px-4 py-2 mx-auto w-max text-xs bg-blue-400 rounded-md border shadow-lg group-hover:block text-neutral-400 neut-800 border-neutral-700">
                        linux distro
                      </div>
                      <div className="bg-sky-700 cursor-pointer inline-flex mx-1 rounded-md h-[16.57px] flex items-center content-center px-2  text-white font-medium">
                        <span>arch</span>
                      </div>{' '}
                    </div>
                    btw :P
                  </h1>
                </div>
                <div className="border border-neutral-700 bg-black bg-opacity-10 px-6 py-2 mt-[27px]">
                  <div className="flex flex-row justify-between content-center items-center mx-auto">
                    <h1>
                      learn more about this site{' '}
                      <span className="hidden md:inline-block">and read how i made this</span>
                    </h1>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://evoltwebs.vercel.app/post/100"
                      className="text-xs font-medium text-white duration-100 ease-linear cursor-pointer hover:text-blue-400 hover:underline animate-all"
                    >
                      visit blog &gt;
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </h1>
        </div>
        <div className="flex flex-row content-center items-center px-6 pt-10 pb-5 md:mt-10 md:w-3/6 md:p-0 md:pb-10 md:pl-10">
          <div className="hidden">
            <svg
              className="lg:w-[500px] lg:h-[500px] xl:h-[500px] xl:w-[800px] w-96 h-96 mx-auto my-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g fill="none">
                <path
                  fill="#B87E78"
                  d="M12.668 19.244a.216.216 0 01-.043-.239h-.438l.32.996c.262.078.54.051.59-.113a.318.318 0 00-.074-.3 8.834 8.834 0 01-.355-.344"
                />
                <path
                  fill="#D89888"
                  d="M19.333 19.244a.216.216 0 00.043-.239h.437l-.32.996c-.262.078-.54.051-.59-.113a.318.318 0 01.074-.3c.083-.078.271-.254.355-.344"
                />
                <g filter="url(#a)">
                  <path
                    fill="#E3AB9B"
                    d="M12.112 20.524c-.938-1.982-.769-6.258-.488-7.823h1.672c-.071 2.425.04 5.243.178 6.511.011.103.084.214 0 .276a.29.29 0 01-.438-.115l-.117-.263a.184.184 0 00-.226-.099.176.176 0 00-.12.201c.061.3.172.678.265.973a.418.418 0 01-.239.513c-.186.076-.401.008-.487-.174"
                  />
                  <path
                    fill="url(#b)"
                    d="M12.112 20.524c-.938-1.982-.769-6.258-.488-7.823h1.672c-.071 2.425.04 5.243.178 6.511.011.103.084.214 0 .276a.29.29 0 01-.438-.115l-.117-.263a.184.184 0 00-.226-.099.176.176 0 00-.12.201c.061.3.172.678.265.973a.418.418 0 01-.239.513c-.186.076-.401.008-.487-.174"
                  />
                </g>
                <path
                  fill="#FACBB3"
                  d="M19.888 20.524c.938-1.982.769-6.258.487-7.823h-1.671c.071 2.425-.156 5.253-.294 6.522a.29.29 0 00.555.15l.116-.263a.184.184 0 01.226-.099.176.176 0 01.12.201c-.061.3-.172.678-.265.973a.418.418 0 00.239.513c.186.076.401.008.487-.174"
                />
                <path
                  fill="url(#c)"
                  d="M19.888 20.524c.938-1.982.769-6.258.487-7.823h-1.671c.071 2.425-.156 5.253-.294 6.522a.29.29 0 00.555.15l.116-.263a.184.184 0 01.226-.099.176.176 0 01.12.201c-.061.3-.172.678-.265.973a.418.418 0 00.239.513c.186.076.401.008.487-.174"
                />
                <path
                  fill="url(#d)"
                  d="M19.888 20.524c.938-1.982.769-6.258.487-7.823h-1.671c.071 2.425-.156 5.253-.294 6.522a.29.29 0 00.555.15l.116-.263a.184.184 0 01.226-.099.176.176 0 01.12.201c-.061.3-.172.678-.265.973a.418.418 0 00.239.513c.186.076.401.008.487-.174"
                />
                <path
                  fill="#3B97DB"
                  d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 01-.098-.12"
                />
                <path
                  fill="url(#e)"
                  d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 01-.098-.12"
                />
                <path
                  fill="url(#f)"
                  d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 01-.098-.12"
                />
                <path
                  fill="url(#g)"
                  d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 01-.098-.12"
                />
                <path
                  fill="url(#h)"
                  d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 01-.098-.12"
                />
                <g filter="url(#i)">
                  <path
                    stroke="#FFC9B6"
                    strokeWidth={0.3}
                    d="M19.813 12.581c.125 1 .3 3.575 0 5.875"
                  />
                </g>
                <path
                  fill="#4FA0F0"
                  d="M20.468 12.744c-.487-2.254-1.629-3.333-3.03-3.829v3.95h2.932a.1.1 0 00.098-.12"
                />
                <path
                  fill="url(#j)"
                  d="M20.468 12.744c-.487-2.254-1.629-3.333-3.03-3.829v3.95h2.932a.1.1 0 00.098-.12"
                />
                <path
                  fill="url(#k)"
                  d="M20.468 12.744c-.487-2.254-1.629-3.333-3.03-3.829v3.95h2.932a.1.1 0 00.098-.12"
                />
                <g filter="url(#l)">
                  <path
                    fill="#827A8A"
                    d="M13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
                  />
                </g>
                <path
                  fill="url(#m)"
                  d="M13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
                />
                <path
                  fill="url(#n)"
                  d="M13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
                />
                <path
                  fill="url(#o)"
                  d="M13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
                />
                <path
                  fill="url(#p)"
                  d="M13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
                />
                <g filter="url(#q)">
                  <path
                    fill="url(#r)"
                    d="M12.941 11.61a3.059 3.059 0 016.118 0v4.442a.094.094 0 01-.094.094h-5.93a.094.094 0 01-.094-.094z"
                  />
                  <path
                    fill="url(#s)"
                    d="M12.941 11.61a3.059 3.059 0 016.118 0v4.442a.094.094 0 01-.094.094h-5.93a.094.094 0 01-.094-.094z"
                  />
                </g>
                <path
                  fill="url(#t)"
                  d="M12.941 11.61a3.059 3.059 0 016.118 0v4.442a.094.094 0 01-.094.094h-5.93a.094.094 0 01-.094-.094z"
                />
                <path
                  fill="url(#u)"
                  d="M12.941 11.61a3.059 3.059 0 016.118 0v4.442a.094.094 0 01-.094.094h-5.93a.094.094 0 01-.094-.094z"
                />
                <path
                  fill="url(#v)"
                  d="M12.941 11.61a3.059 3.059 0 016.118 0v4.442a.094.094 0 01-.094.094h-5.93a.094.094 0 01-.094-.094z"
                />
                <path fill="url(#w)" d="M15.129 7.458h1.742V8.81a.871.871 0 01-1.742 0z" />
                <g filter="url(#x)">
                  <path
                    fill="#5D4480"
                    d="M12.434 29.904v.242H15.5v-1.598h-1.992c-.102.367-.574.754-.817.914a.539.539 0 00-.257.442"
                  />
                </g>
                <path
                  fill="url(#y)"
                  d="M19.566 29.904v.242H16.5v-1.598h1.992c.102.367.574.754.817.914a.54.54 0 01.257.442"
                />
                <path
                  fill="url(#z)"
                  d="M19.566 29.904v.242H16.5v-1.598h1.992c.102.367.574.754.817.914a.54.54 0 01.257.442"
                />
                <g filter="url(#A)">
                  <path
                    fill="#9D98A2"
                    d="M13.841 16.466l.469 11.766h.812v-10.61h2.203v10.61h.672l.438-11.766z"
                  />
                </g>
                <g filter="url(#B)">
                  <circle cx={13.815} cy={5.815} r={0.769} fill="url(#C)" />
                </g>
                <g filter="url(#D)">
                  <circle cx={13.815} cy={5.815} r={0.458} fill="url(#E)" />
                </g>
                <g filter="url(#F)">
                  <circle cx={18.195} cy={5.815} r={0.769} fill="url(#G)" />
                  <circle cx={18.195} cy={5.815} r={0.769} fill="url(#H)" />
                </g>
                <g filter="url(#I)">
                  <circle cx={18.195} cy={5.815} r={0.458} fill="#E4AF9A" />
                  <circle cx={18.195} cy={5.815} r={0.458} fill="url(#J)" />
                  <circle cx={18.195} cy={5.815} r={0.458} fill="url(#K)" />
                </g>
                <g filter="url(#L)">
                  <path
                    fill="url(#M)"
                    d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 00.173-.393v-.393a.24.24 0 01.198-.246 7.588 7.588 0 011.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 01.197.246v.393c0 .147.074.295.173.393.231.162.217.25.198.442-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383-.065-.836-.093-1.675-.169-2.51"
                  />
                  <path
                    fill="url(#N)"
                    d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 00.173-.393v-.393a.24.24 0 01.198-.246 7.588 7.588 0 011.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 01.197.246v.393c0 .147.074.295.173.393.231.162.217.25.198.442-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383-.065-.836-.093-1.675-.169-2.51"
                  />
                  <path
                    fill="url(#O)"
                    d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 00.173-.393v-.393a.24.24 0 01.198-.246 7.588 7.588 0 011.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 01.197.246v.393c0 .147.074.295.173.393.231.162.217.25.198.442-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383-.065-.836-.093-1.675-.169-2.51"
                  />
                  <path
                    fill="url(#P)"
                    d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 00.173-.393v-.393a.24.24 0 01.198-.246 7.588 7.588 0 011.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 01.197.246v.393c0 .147.074.295.173.393.231.162.217.25.198.442-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383-.065-.836-.093-1.675-.169-2.51"
                  />
                  <path
                    fill="url(#Q)"
                    d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 00.173-.393v-.393a.24.24 0 01.198-.246 7.588 7.588 0 011.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 01.197.246v.393c0 .147.074.295.173.393.231.162.217.25.198.442-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383-.065-.836-.093-1.675-.169-2.51"
                  />
                  <path
                    fill="url(#R)"
                    d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 00.173-.393v-.393a.24.24 0 01.198-.246 7.588 7.588 0 011.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 01.197.246v.393c0 .147.074.295.173.393.231.162.217.25.198.442-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383-.065-.836-.093-1.675-.169-2.51"
                  />
                </g>
                <g filter="url(#S)">
                  <path
                    fill="url(#T)"
                    d="M17.826 3.225l-1.417.472a.482.482 0 00.216.936l1.41-.189z"
                  />
                </g>
                <g filter="url(#U)">
                  <path
                    fill="#242324"
                    d="M18.22 2.832l.198.098a.906.906 0 01.469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 01-.173-.393v-.393a.265.265 0 00-.197-.246 7.595 7.595 0 00-1.803-.196 7.58 7.58 0 00-1.803.196.24.24 0 00-.198.246v.393a.49.49 0 01-.173.393l-.074.073c-.099.074-.148.221-.148.344.025.27.05.663.05.663h-.023a.292.292 0 01-.274-.245l-.272-1.4a.94.94 0 01.494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 011.013-.147c.247.073.518.073.765 0a1.11 1.11 0 011.087.245l.37.369c.1.123.223.196.37.27"
                  />
                  <path
                    fill="url(#V)"
                    d="M18.22 2.832l.198.098a.906.906 0 01.469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 01-.173-.393v-.393a.265.265 0 00-.197-.246 7.595 7.595 0 00-1.803-.196 7.58 7.58 0 00-1.803.196.24.24 0 00-.198.246v.393a.49.49 0 01-.173.393l-.074.073c-.099.074-.148.221-.148.344.025.27.05.663.05.663h-.023a.292.292 0 01-.274-.245l-.272-1.4a.94.94 0 01.494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 011.013-.147c.247.073.518.073.765 0a1.11 1.11 0 011.087.245l.37.369c.1.123.223.196.37.27"
                  />
                  <path
                    fill="url(#W)"
                    d="M18.22 2.832l.198.098a.906.906 0 01.469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 01-.173-.393v-.393a.265.265 0 00-.197-.246 7.595 7.595 0 00-1.803-.196 7.58 7.58 0 00-1.803.196.24.24 0 00-.198.246v.393a.49.49 0 01-.173.393l-.074.073c-.099.074-.148.221-.148.344.025.27.05.663.05.663h-.023a.292.292 0 01-.274-.245l-.272-1.4a.94.94 0 01.494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 011.013-.147c.247.073.518.073.765 0a1.11 1.11 0 011.087.245l.37.369c.1.123.223.196.37.27"
                  />
                  <path
                    fill="url(#X)"
                    d="M18.22 2.832l.198.098a.906.906 0 01.469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 01-.173-.393v-.393a.265.265 0 00-.197-.246 7.595 7.595 0 00-1.803-.196 7.58 7.58 0 00-1.803.196.24.24 0 00-.198.246v.393a.49.49 0 01-.173.393l-.074.073c-.099.074-.148.221-.148.344.025.27.05.663.05.663h-.023a.292.292 0 01-.274-.245l-.272-1.4a.94.94 0 01.494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 011.013-.147c.247.073.518.073.765 0a1.11 1.11 0 011.087.245l.37.369c.1.123.223.196.37.27"
                  />
                  <path
                    fill="url(#Y)"
                    d="M18.22 2.832l.198.098a.906.906 0 01.469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 01-.173-.393v-.393a.265.265 0 00-.197-.246 7.595 7.595 0 00-1.803-.196 7.58 7.58 0 00-1.803.196.24.24 0 00-.198.246v.393a.49.49 0 01-.173.393l-.074.073c-.099.074-.148.221-.148.344.025.27.05.663.05.663h-.023a.292.292 0 01-.274-.245l-.272-1.4a.94.94 0 01.494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 011.013-.147c.247.073.518.073.765 0a1.11 1.11 0 011.087.245l.37.369c.1.123.223.196.37.27"
                  />
                </g>
                <g filter="url(#Z)">
                  <path
                    fill="#D89992"
                    d="M15.874 5.758l-.377.783c-.047.16.065.322.224.322h.34c.159 0 .271-.164.224-.322l-.229-.783c-.05-.173-.13-.173-.182 0"
                  />
                </g>
                <g filter="url(#aa)">
                  <path
                    fill="#FBC4B1"
                    d="M15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 00.24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                  />
                  <path
                    fill="url(#ab)"
                    d="M15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 00.24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                  />
                  <path
                    fill="url(#ac)"
                    d="M15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 00.24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                  />
                  <path
                    fill="url(#ad)"
                    d="M15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 00.24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                  />
                  <path
                    fill="url(#ae)"
                    d="M15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 00.24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                  />
                </g>
                <path
                  fill="#88024E"
                  d="M16.001 7.256c-.234 0-.453-.055-.638-.151-.063-.032-.13.039-.09.096a.87.87 0 00.728.39.872.872 0 00.729-.39c.04-.06-.028-.128-.091-.096a1.376 1.376 0 01-.638.15"
                />
                <g filter="url(#af)">
                  <path
                    fill="#1E1E1E"
                    d="M17.714 4.562h-.001V4.56l-.003-.002-.006-.004a.548.548 0 00-.07-.05 1.304 1.304 0 00-.88-.17.246.246 0 10.075.486.813.813 0 01.543.1.437.437 0 01.03.02.246.246 0 00.311-.379"
                  />
                </g>
                <g filter="url(#ag)">
                  <path
                    fill="#1E1E1E"
                    d="M14.264 4.562l.001-.001.002-.002.006-.004a.68.68 0 01.071-.05 1.304 1.304 0 01.88-.17.246.246 0 11-.076.486.813.813 0 00-.543.1.403.403 0 00-.025.018l-.004.003a.246.246 0 01-.312-.38"
                  />
                </g>
                <path
                  fill="#fff"
                  d="M17.1 5.156c.301 0 .555.207.624.487a.126.126 0 01-.123.157h-1.027a.106.106 0 01-.105-.125.644.644 0 01.631-.52"
                />
                <path
                  fill="url(#ah)"
                  d="M17.005 5.281a.41.41 0 01.396.52h-.793a.412.412 0 01.398-.52"
                />
                <path
                  fill="#000"
                  d="M16.77 5.692c0-.13.105-.235.235-.235a.234.234 0 01.21.343h-.417a.214.214 0 01-.028-.108"
                />
                <g filter="url(#ai)">
                  <path
                    fill="#C7A7A3"
                    d="M16.975 5.368c.03.039-.032.087-.101.139-.07.052-.122.088-.15.05-.03-.04.003-.114.072-.166.07-.052.15-.062.18-.023"
                  />
                  <path
                    fill="url(#aj)"
                    d="M16.975 5.368c.03.039-.032.087-.101.139-.07.052-.122.088-.15.05-.03-.04.003-.114.072-.166.07-.052.15-.062.18-.023"
                  />
                </g>
                <g filter="url(#ak)">
                  <path
                    fill="url(#al)"
                    d="M17.371 5.638a.387.387 0 00-.106-.213l-.12.131.054.105z"
                  />
                </g>
                <path
                  fill="#fff"
                  d="M14.9 5.156a.644.644 0 00-.625.487c-.02.08.042.157.124.157h1.027c.065 0 .117-.06.104-.125a.645.645 0 00-.63-.52"
                />
                <path
                  fill="url(#am)"
                  d="M14.994 5.281a.41.41 0 00-.396.52h.794a.414.414 0 00-.398-.52"
                />
                <path
                  fill="#000"
                  d="M15.23 5.692a.234.234 0 00-.236-.235.234.234 0 00-.209.343h.417a.233.233 0 00.028-.108"
                />
                <g filter="url(#an)">
                  <path
                    fill="url(#ao)"
                    d="M15.37 5.644c0-.133-.108-.222-.137-.248l-.133.128.082.166z"
                  />
                </g>
                <g filter="url(#ap)" transform="rotate(-27.914 14.87 5.456)">
                  <ellipse
                    cx={14.87}
                    cy={5.456}
                    fill="#C7A7A3"
                    fillOpacity={0.9}
                    rx={0.179}
                    ry={0.091}
                  />
                  <ellipse cx={14.87} cy={5.456} fill="url(#aq)" rx={0.179} ry={0.091} />
                </g>
                <g filter="url(#ar)">
                  <path
                    stroke="url(#as)"
                    strokeLinecap="round"
                    strokeWidth={0.1}
                    d="M16.766 4.496c.198-.035.584-.025.851.183"
                  />
                </g>
                <g filter="url(#at)">
                  <path
                    stroke="url(#au)"
                    strokeLinecap="round"
                    strokeWidth={0.1}
                    d="M14.362 4.734c.15-.133.48-.273.887-.208"
                  />
                </g>
                <g filter="url(#av)">
                  <path
                    stroke="url(#aw)"
                    strokeLinecap="round"
                    strokeWidth={0.25}
                    d="M13.914 3.6v.413c-.004.068-.032.221-.119.286"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="b"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(-1.84375 0 0 -12.369 13.357 16.715)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.138} stopColor="#D0756E" />
                    <stop offset={1} stopColor="#D0756E" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="c"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(1.60938 0 0 15.4135 18.872 16.715)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.101} stopColor="#FF9682" />
                    <stop offset={1} stopColor="#FF9682" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="d"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.1836 -.5625 .3991 .13026 19.319 19.109)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D48F89" />
                    <stop offset={1} stopColor="#D48F89" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="e"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="rotate(-168.523 7.537 5.838) scale(2.27735 4.86372)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.638} stopColor="#5BA1D3" stopOpacity={0} />
                    <stop offset={1} stopColor="#5BA1D3" />
                  </radialGradient>
                  <radialGradient
                    id="f"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(-1.51587 1.2383 -.95063 -1.16372 14.562 8.915)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3A87B0" />
                    <stop offset={1} stopColor="#3A87B0" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="h"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(-.35938 2.17188 -.8973 -.14848 13.246 11.794)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#257AD3" />
                    <stop offset={1} stopColor="#257AD3" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="j"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.875 -.3125 1.2963 3.62963 18.794 12.06)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.251} stopColor="#2680E1" />
                    <stop offset={1} stopColor="#2680E1" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="n"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 -.35938 1.91919 0 16 18.185)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6A597B" />
                    <stop offset={1} stopColor="#6A597B" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="o"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 -.26953 1.85938 0 18.075 28.548)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA9BA7" />
                    <stop offset={1} stopColor="#AA9BA7" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="p"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 -.32813 1.20581 0 14.794 28.638)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA9BA7" />
                    <stop offset={1} stopColor="#AA9BA7" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="s"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="rotate(140.013 7.411 8.269) scale(2.52874 3.92481)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4DB7F8" />
                    <stop offset={1} stopColor="#49A1F7" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="v"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.23437 1.1172 -3.2104 .6735 15.278 8.552)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.167} stopColor="#39779B" />
                    <stop offset={1} stopColor="#499DE8" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="w"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="rotate(47.115 -1.634 21.948) scale(1.92684 2.44284)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.526} stopColor="#CC9698" />
                    <stop offset={1} stopColor="#E0B8B0" />
                  </radialGradient>
                  <radialGradient
                    id="z"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(-1.66284 -.84375 .32903 -.64844 19.566 29.498)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#635185" />
                    <stop offset={1} stopColor="#635185" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="C"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.80803 0 0 1.41406 13.046 5.815)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.351} stopColor="#CF9888" />
                    <stop offset={1} stopColor="#BE8C77" />
                  </radialGradient>
                  <radialGradient
                    id="H"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.38066 -.27718 .31636 .43447 18.366 5.693)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.543} stopColor="#D9AA94" />
                    <stop offset={1} stopColor="#D9AA94" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="J"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.37815 -.69553 .4071 .22133 18.176 6.193)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.755} stopColor="#D6A38D" stopOpacity={0} />
                    <stop offset={0.916} stopColor="#D6A38D" />
                  </radialGradient>
                  <radialGradient
                    id="K"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.1194 .11818 -.15235 .1539 18.195 5.814)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D5A58E" />
                    <stop offset={1} stopColor="#D5A58E" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="N"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 4.34448 -5.8974 0 16.014 4.928)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.557} stopColor="#D7A09D" stopOpacity={0} />
                    <stop offset={1} stopColor="#B07F87" />
                  </radialGradient>
                  <radialGradient
                    id="Q"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 -.60185 .74073 0 17.081 5.23)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F5B7A7" />
                    <stop offset={1} stopColor="#F5B7A7" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="R"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 -.64043 .79643 0 14.982 5.214)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D0958D" />
                    <stop offset={1} stopColor="#D0958D" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="V"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(.36736 -1.36138 .50484 .13623 18.002 3.924)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#464344" />
                    <stop offset={1} stopColor="#464344" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="W"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(1.76115 .16207 -.08714 .94696 17.245 3.114)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.335} stopColor="#4A4648" />
                    <stop offset={1} stopColor="#4A4648" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="X"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 .77318 -1.19743 0 16.001 1.854)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#423D3F" />
                    <stop offset={1} stopColor="#423D3F" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="Y"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(1.4154 -1.03724 1.62502 2.21746 13.032 4.994)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#463C39" />
                    <stop offset={1} stopColor="#463C39" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="ae"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 .09066 -.29128 0 16.152 6.554)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFD7C1" />
                    <stop offset={1} stopColor="#FFD7C1" stopOpacity={0} />
                  </radialGradient>
                  <radialGradient
                    id="ah"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 .37349 -.59407 0 17.004 5.5)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.802} stopColor="#7D574A" />
                    <stop offset={1} stopColor="#694B43" />
                    <stop offset={1} stopColor="#804D49" />
                    <stop offset={1} stopColor="#664944" />
                  </radialGradient>
                  <radialGradient
                    id="aj"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(-.10676 -.13758 .18941 -.14699 16.9 5.54)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.766} stopColor="#FFE6E2" stopOpacity={0} />
                    <stop offset={0.966} stopColor="#FFE6E2" />
                  </radialGradient>
                  <radialGradient
                    id="am"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(0 .3735 -.5941 0 14.995 5.5)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.802} stopColor="#7D574A" />
                    <stop offset={1} stopColor="#694B43" />
                    <stop offset={1} stopColor="#804D49" />
                    <stop offset={1} stopColor="#664944" />
                  </radialGradient>
                  <radialGradient
                    id="aq"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(-.00356 -.22745 .2734 -.00428 14.865 5.602)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.766} stopColor="#FFE6E2" stopOpacity={0} />
                    <stop offset={0.966} stopColor="#FFE6E2" />
                  </radialGradient>
                  <filter
                    id="a"
                    width={2.311}
                    height={8.028}
                    x={11.403}
                    y={12.701}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.2} />
                    <feGaussianBlur stdDeviation={0.1} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.972549 0 0 0 0 0.74902 0 0 0 0 0.658824 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="i"
                    width={1.464}
                    height={6.913}
                    x={19.164}
                    y={12.063}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.25} />
                  </filter>
                  <filter
                    id="l"
                    width={6.169}
                    height={12.453}
                    x={13.016}
                    y={16.095}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.2} />
                    <feGaussianBlur stdDeviation={0.4} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.486275 0 0 0 0 0.462745 0 0 0 0 0.505882 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="q"
                    width={6.517}
                    height={7.994}
                    x={12.941}
                    y={8.552}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.4} dy={0.4} />
                    <feGaussianBlur stdDeviation={0.4} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.368627 0 0 0 0 0.560784 0 0 0 0 0.784314 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="x"
                    width={3.316}
                    height={1.848}
                    x={12.434}
                    y={28.548}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.25} dy={0.25} />
                    <feGaussianBlur stdDeviation={0.25} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.313726 0 0 0 0 0.235294 0 0 0 0 0.431373 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="A"
                    width={6.594}
                    height={13.766}
                    x={12.841}
                    y={15.466}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.5} />
                  </filter>
                  <filter
                    id="B"
                    width={1.737}
                    height={1.537}
                    x={13.046}
                    y={5.046}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.2} />
                    <feGaussianBlur stdDeviation={0.15} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.917647 0 0 0 0 0.694118 0 0 0 0 0.607843 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="D"
                    width={1.916}
                    height={1.916}
                    x={12.857}
                    y={4.856}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.25} />
                  </filter>
                  <filter
                    id="F"
                    width={1.787}
                    height={1.787}
                    x={17.427}
                    y={4.796}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.25} dy={-0.25} />
                    <feGaussianBlur stdDeviation={0.25} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.843137 0 0 0 0 0.623529 0 0 0 0 0.580392 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="I"
                    width={1.916}
                    height={1.916}
                    x={17.237}
                    y={4.856}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.25} />
                  </filter>
                  <filter
                    id="L"
                    width={4.777}
                    height={5.638}
                    x={13.626}
                    y={3.225}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={0.1} />
                    <feGaussianBlur stdDeviation={0.075} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.615686 0 0 0 0 0.509804 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="S"
                    width={2.955}
                    height={2.412}
                    x={15.579}
                    y={2.725}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.25} />
                  </filter>
                  <filter
                    id="U"
                    width={5.802}
                    height={3.804}
                    x={13.1}
                    y={1.754}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={-0.1} />
                    <feGaussianBlur stdDeviation={0.075} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.0392157 0 0 0 0 0.00784314 0 0 0 0 0.0196078 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="Z"
                    width={2.31}
                    height={2.735}
                    x={14.736}
                    y={4.878}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.375} />
                  </filter>
                  <filter
                    id="aa"
                    width={1.064}
                    height={1.435}
                    x={15.469}
                    y={5.453}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.05} />
                  </filter>
                  <filter
                    id="af"
                    width={1.507}
                    height={1.078}
                    x={16.545}
                    y={3.919}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.25} dy={-0.4} />
                    <feGaussianBlur stdDeviation={0.3} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.0431373 0 0 0 0 0.0196078 0 0 0 0 0.027451 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="ag"
                    width={1.507}
                    height={1.078}
                    x={14.175}
                    y={3.919}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx={0.25} dy={-0.4} />
                    <feGaussianBlur stdDeviation={0.3} />
                    <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 0.0431373 0 0 0 0 0.0196078 0 0 0 0 0.027451 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                  </filter>
                  <filter
                    id="ai"
                    width={0.47}
                    height={0.428}
                    x={16.612}
                    y={5.244}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.05} />
                  </filter>
                  <filter
                    id="ak"
                    width={0.626}
                    height={0.636}
                    x={16.945}
                    y={5.225}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.1} />
                  </filter>
                  <filter
                    id="an"
                    width={0.67}
                    height={0.695}
                    x={14.9}
                    y={5.196}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.1} />
                  </filter>
                  <filter
                    id="ap"
                    width={0.528}
                    height={0.432}
                    x={14.606}
                    y={5.24}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.05} />
                  </filter>
                  <filter
                    id="ar"
                    width={1.252}
                    height={0.599}
                    x={16.566}
                    y={4.28}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.075} />
                  </filter>
                  <filter
                    id="at"
                    width={1.287}
                    height={0.625}
                    x={14.162}
                    y={4.31}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.075} />
                  </filter>
                  <filter
                    id="av"
                    width={0.869}
                    height={1.45}
                    x={13.42}
                    y={3.224}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation={0.125} />
                  </filter>
                  <linearGradient
                    id="g"
                    x1={12.466}
                    x2={12.466}
                    y1={12.865}
                    y2={12.712}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3270C8" />
                    <stop offset={1} stopColor="#2C7CD5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="k"
                    x1={19.747}
                    x2={19.747}
                    y1={12.951}
                    y2={12.247}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4E73C8" />
                    <stop offset={1} stopColor="#3686DF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="m"
                    x1={16}
                    x2={16}
                    y1={16.095}
                    y2={16.529}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#856988" />
                    <stop offset={1} stopColor="#856988" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="r"
                    x1={16}
                    x2={16}
                    y1={9.185}
                    y2={16.146}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#46A3F0" />
                    <stop offset={1} stopColor="#3B70D0" />
                  </linearGradient>
                  <linearGradient
                    id="t"
                    x1={17.606}
                    x2={17.606}
                    y1={16.146}
                    y2={14.029}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3B70CF" />
                    <stop offset={1} stopColor="#3B70CF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="u"
                    x1={17.231}
                    x2={17.231}
                    y1={16.099}
                    y2={15.81}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4656B3" />
                    <stop offset={1} stopColor="#4475D1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="y"
                    x1={18.247}
                    x2={16.5}
                    y1={29.81}
                    y2={29.607}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5A3F7C" />
                    <stop offset={1} stopColor="#462F5E" />
                  </linearGradient>
                  <linearGradient
                    id="E"
                    x1={13.815}
                    x2={13.52}
                    y1={5.943}
                    y2={5.943}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BA7C6B" />
                    <stop offset={1} stopColor="#BE8474" />
                  </linearGradient>
                  <linearGradient
                    id="G"
                    x1={18.695}
                    x2={18.319}
                    y1={5.312}
                    y2={6.48}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FBD3BD" />
                    <stop offset={1} stopColor="#F0B8A4" />
                  </linearGradient>
                  <linearGradient
                    id="M"
                    x1={17.859}
                    x2={14.343}
                    y1={5.994}
                    y2={6.518}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFDABF" />
                    <stop offset={1} stopColor="#EAAB97" />
                  </linearGradient>
                  <linearGradient
                    id="O"
                    x1={13.403}
                    x2={14.949}
                    y1={6.697}
                    y2={6.75}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A58787" />
                    <stop offset={1} stopColor="#DEAD9D" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="P"
                    x1={13.517}
                    x2={14.383}
                    y1={7.235}
                    y2={7.204}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E8AD97" />
                    <stop offset={1} stopColor="#E8AD97" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="T"
                    x1={15.756}
                    x2={19.506}
                    y1={4.62}
                    y2={3.277}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFDEC4" />
                    <stop offset={1} stopColor="#FFDEC4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="ab"
                    x1={15.603}
                    x2={16.035}
                    y1={6.297}
                    y2={6.297}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DFA790" />
                    <stop offset={1} stopColor="#DFA790" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="ac"
                    x1={16.433}
                    x2={15.961}
                    y1={6.446}
                    y2={6.439}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFDFC4" />
                    <stop offset={1} stopColor="#FFDFC4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="ad"
                    x1={16.091}
                    x2={16.091}
                    y1={6.788}
                    y2={6.524}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DC9C96" />
                    <stop offset={1} stopColor="#DC9C96" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="al"
                    x1={17.362}
                    x2={17.218}
                    y1={5.525}
                    y2={5.614}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B4948D" />
                    <stop offset={1} stopColor="#B4948D" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="ao"
                    x1={15.338}
                    x2={15.193}
                    y1={5.525}
                    y2={5.614}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B4948D" />
                    <stop offset={1} stopColor="#B4948D" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="as"
                    x1={17.37}
                    x2={17.176}
                    y1={4.54}
                    y2={4.145}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#353435" />
                    <stop offset={1} stopColor="#353435" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="au"
                    x1={14.927}
                    x2={14.379}
                    y1={4.481}
                    y2={4.252}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#353435" />
                    <stop offset={1} stopColor="#353435" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="aw"
                    x1={13.855}
                    x2={13.855}
                    y1={3.554}
                    y2={4.547}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3C393A" />
                    <stop offset={1} stopColor="#3C393A" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </g>
            </svg>
          </div>
          <div className="py-10 mx-auto my-auto lg:py-0">
            <Tags />
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
