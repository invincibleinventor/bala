// @ts-nocheck
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="no-scrollbar flex h-auto md:max-h-full max-h-[calc(100vh-144px)] flex-col content-center items-center overflow-y-scroll md:py-0 lg:overflow-hidden">
      <div className="my-auto mb-4 flex w-full flex-col-reverse md:mb-0 md:flex-row-reverse">
        <div className="my-auto flex flex-col content-center px-8 py-6 md:w-3/5 md:px-14 md:py-10 ">
          <h1 className="font-neutral text-3xl text-neutral-300">hi! I&apos;m</h1>
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
            className="my-2 w-max border border-neutral-700 bg-black bg-opacity-10 px-5 py-3 text-sm font-medium text-white"
          >
            get in touch
          </Link>
          <h1 className="font-neutral mt-10  text-lg  font-bold text-neutral-300 md:mt-8 md:text-xl">
            about <span className="underline">Me</span>
          </h1>
          <h1
            style={{ lineHeight: 2 }}
            className="my-2 mt-4 text-xs font-normal leading-relaxed text-neutral-400  lg:text-sm"
          >
            <ul className="px-[2px] space-y-2">
              <li>
                <div className="flex flex-row items-center content-center space-x-2">
                  <h1 style={{ lineHeight: 2.4 }}>
                    I'm a high schooler from India that loves creating{' '}
                    <span className="bg-cyan-700 rounded-md px-2 mx-1 text-white font-medium">
                      frontends
                    </span>{' '}
                    that scale and i'm an ardent lover of{' '}
                    <span className="bg-neutral-700 rounded-md px-2 mx-1 text-white font-medium">
                      linux
                    </span>{' '}
                    and{' '}
                    <span className="bg-pink-700 rounded-md px-2 mx-1 text-white font-medium">
                      foss
                    </span>{' '}
                    i'm a self taught web dev and i'm open to help and{' '}
                    <span className="bg-green-700 rounded-md px-2 mx-1 text-white font-medium">
                      collaborate
                    </span>{' '}
                    with people. i'm at my most comfy self at{' '}
                    <span className="bg-blue-700 rounded-md px-2 mx-1 text-white font-medium">
                      next.js
                    </span>{' '}
                    and i use{' '}
                    <span className="bg-violet-700 rounded-md px-2 mx-1 text-white font-medium">
                      tailwindcss
                    </span>{' '}
                    i'm quite familar with version control systems like and essential tools like{' '}
                    <span className="bg-teal-700 rounded-md px-2 mx-1 text-white font-medium">
                      git
                    </span>{' '}
                    and i also love using{' '}
                    <span className="bg-orange-700 rounded-md px-2 mx-1 text-white font-medium">
                      vsc
                    </span>{' '}
                    and{' '}
                    <span className="bg-cyan-700 rounded-md px-2 mx-1 text-white font-medium">
                      nvim
                    </span>{' '}
                    PS: i use{' '}
                    <span className="bg-sky-700 rounded-md px-2 mx-1 text-white font-medium">
                      arch
                    </span>{' '}
                    btw :P
                  </h1>
                </div>
                <div className="border border-neutral-700 bg-black bg-opacity-10 px-6 py-2 mt-[27px]">
                  <div className="mx-auto flex flex-row justify-between items-center content-center">
                    <h1>
                      learn more about this site{' '}
                      <span className="hidden md:inline-block">and read how i made this</span>
                    </h1>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://evoltwebs.vercel.app/post/100"
                      className="hover:text-blue-400 hover:underline duration-100 ease-linear animate-all cursor-pointer font-medium text-xs text-white"
                    >
                      visit blog &gt;
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </h1>
        </div>
        <div className=" flex flex-row px-6 pb-5 pt-10 md:mt-10 md:w-2/5 md:p-0 md:pb-10 md:pl-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[500px] lg:h-[500px] xl:h-[600px] xl:w-[700px] w-96 h-96 mx-auto my-auto"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="#B87E78"
                d="M12.668 19.244a.216.216 0 0 1-.043-.239h-.438l.32.996c.262.078.54.051.59-.113a.318.318 0 0 0-.074-.3a8.834 8.834 0 0 1-.355-.344"
              />
              <path
                fill="#D89888"
                d="M19.333 19.244a.216.216 0 0 0 .043-.239h.437l-.32.996c-.262.078-.54.051-.59-.113a.318.318 0 0 1 .074-.3c.083-.078.271-.254.355-.344"
              />
              <g filter="url(#f1236idu)">
                <path
                  fill="#E3AB9B"
                  d="M12.112 20.524c-.938-1.982-.769-6.258-.488-7.823h1.672c-.071 2.425.04 5.243.178 6.511c.011.103.084.214 0 .276a.29.29 0 0 1-.438-.115l-.117-.263a.184.184 0 0 0-.226-.099a.176.176 0 0 0-.12.201c.061.3.172.678.265.973a.418.418 0 0 1-.239.513c-.186.076-.401.008-.487-.174"
                />
                <path
                  fill="url(#f1236id0)"
                  d="M12.112 20.524c-.938-1.982-.769-6.258-.488-7.823h1.672c-.071 2.425.04 5.243.178 6.511c.011.103.084.214 0 .276a.29.29 0 0 1-.438-.115l-.117-.263a.184.184 0 0 0-.226-.099a.176.176 0 0 0-.12.201c.061.3.172.678.265.973a.418.418 0 0 1-.239.513c-.186.076-.401.008-.487-.174"
                />
              </g>
              <path
                fill="#FACBB3"
                d="M19.888 20.524c.938-1.982.769-6.258.487-7.823h-1.671c.071 2.425-.156 5.253-.294 6.522a.29.29 0 0 0 .555.15l.116-.263a.184.184 0 0 1 .226-.099a.176.176 0 0 1 .12.201c-.061.3-.172.678-.265.973a.418.418 0 0 0 .239.513c.186.076.401.008.487-.174"
              />
              <path
                fill="url(#f1236id1)"
                d="M19.888 20.524c.938-1.982.769-6.258.487-7.823h-1.671c.071 2.425-.156 5.253-.294 6.522a.29.29 0 0 0 .555.15l.116-.263a.184.184 0 0 1 .226-.099a.176.176 0 0 1 .12.201c-.061.3-.172.678-.265.973a.418.418 0 0 0 .239.513c.186.076.401.008.487-.174"
              />
              <path
                fill="url(#f1236id2)"
                d="M19.888 20.524c.938-1.982.769-6.258.487-7.823h-1.671c.071 2.425-.156 5.253-.294 6.522a.29.29 0 0 0 .555.15l.116-.263a.184.184 0 0 1 .226-.099a.176.176 0 0 1 .12.201c-.061.3-.172.678-.265.973a.418.418 0 0 0 .239.513c.186.076.401.008.487-.174"
              />
              <path
                fill="#3B97DB"
                d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 0 1-.098-.12"
              />
              <path
                fill="url(#f1236id3)"
                d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 0 1-.098-.12"
              />
              <path
                fill="url(#f1236id4)"
                d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 0 1-.098-.12"
              />
              <path
                fill="url(#f1236id1i)"
                d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 0 1-.098-.12"
              />
              <path
                fill="url(#f1236id5)"
                d="M11.533 12.744c.486-2.254 1.628-3.333 3.03-3.829v3.95H11.63a.1.1 0 0 1-.098-.12"
              />
              <g filter="url(#f1236idv)">
                <path
                  stroke="#FFC9B6"
                  stroke-width=".3"
                  d="M19.813 12.581c.125 1 .3 3.575 0 5.875"
                />
              </g>
              <path
                fill="#4FA0F0"
                d="M20.468 12.744c-.487-2.254-1.629-3.333-3.03-3.829v3.95h2.932a.1.1 0 0 0 .098-.12"
              />
              <path
                fill="url(#f1236id6)"
                d="M20.468 12.744c-.487-2.254-1.629-3.333-3.03-3.829v3.95h2.932a.1.1 0 0 0 .098-.12"
              />
              <path
                fill="url(#f1236id1j)"
                d="M20.468 12.744c-.487-2.254-1.629-3.333-3.03-3.829v3.95h2.932a.1.1 0 0 0 .098-.12"
              />
              <g filter="url(#f1236idw)">
                <path
                  fill="#827A8A"
                  d="m13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86c.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
                />
              </g>
              <path
                fill="url(#f1236id1k)"
                d="m13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86c.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
              />
              <path
                fill="url(#f1236id7)"
                d="m13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86c.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
              />
              <path
                fill="url(#f1236id8)"
                d="m13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86c.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
              />
              <path
                fill="url(#f1236id9)"
                d="m13.016 16.095l.484 12.453h2l.238-9.523c0-.328.029-.86.262-.86c.212 0 .263.555.262.86l.238 9.523h2l.484-12.453z"
              />
              <g filter="url(#f1236idx)">
                <path
                  fill="url(#f1236id1l)"
                  d="M12.941 11.61a3.059 3.059 0 0 1 6.118 0v4.442a.094.094 0 0 1-.094.094h-5.93a.094.094 0 0 1-.094-.094z"
                />
                <path
                  fill="url(#f1236ida)"
                  d="M12.941 11.61a3.059 3.059 0 0 1 6.118 0v4.442a.094.094 0 0 1-.094.094h-5.93a.094.094 0 0 1-.094-.094z"
                />
              </g>
              <path
                fill="url(#f1236id1m)"
                d="M12.941 11.61a3.059 3.059 0 0 1 6.118 0v4.442a.094.094 0 0 1-.094.094h-5.93a.094.094 0 0 1-.094-.094z"
              />
              <path
                fill="url(#f1236id1n)"
                d="M12.941 11.61a3.059 3.059 0 0 1 6.118 0v4.442a.094.094 0 0 1-.094.094h-5.93a.094.094 0 0 1-.094-.094z"
              />
              <path
                fill="url(#f1236idb)"
                d="M12.941 11.61a3.059 3.059 0 0 1 6.118 0v4.442a.094.094 0 0 1-.094.094h-5.93a.094.094 0 0 1-.094-.094z"
              />
              <path fill="url(#f1236idc)" d="M15.129 7.458h1.742V8.81a.871.871 0 0 1-1.742 0z" />
              <g filter="url(#f1236idy)">
                <path
                  fill="#5D4480"
                  d="M12.434 29.904v.242H15.5v-1.598h-1.992c-.102.367-.574.754-.817.914a.539.539 0 0 0-.257.442"
                />
              </g>
              <path
                fill="url(#f1236id1o)"
                d="M19.566 29.904v.242H16.5v-1.598h1.992c.102.367.574.754.817.914a.54.54 0 0 1 .257.442"
              />
              <path
                fill="url(#f1236idd)"
                d="M19.566 29.904v.242H16.5v-1.598h1.992c.102.367.574.754.817.914a.54.54 0 0 1 .257.442"
              />
              <g filter="url(#f1236idz)">
                <path
                  fill="#9D98A2"
                  d="m13.841 16.466l.469 11.766h.812v-10.61h2.203v10.61h.672l.438-11.766z"
                />
              </g>
              <g filter="url(#f1236id10)">
                <circle cx="13.815" cy="5.815" r=".769" fill="url(#f1236ide)" />
              </g>
              <g filter="url(#f1236id11)">
                <circle cx="13.815" cy="5.815" r=".458" fill="url(#f1236id1p)" />
              </g>
              <g filter="url(#f1236id12)">
                <circle cx="18.195" cy="5.815" r=".769" fill="url(#f1236id1q)" />
                <circle cx="18.195" cy="5.815" r=".769" fill="url(#f1236idf)" />
              </g>
              <g filter="url(#f1236id13)">
                <circle cx="18.195" cy="5.815" r=".458" fill="#E4AF9A" />
                <circle cx="18.195" cy="5.815" r=".458" fill="url(#f1236idg)" />
                <circle cx="18.195" cy="5.815" r=".458" fill="url(#f1236idh)" />
              </g>
              <g filter="url(#f1236id14)">
                <path
                  fill="url(#f1236id1r)"
                  d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 0 0 .173-.393v-.393a.24.24 0 0 1 .198-.246a7.588 7.588 0 0 1 1.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 0 1 .197.246v.393c0 .147.074.295.173.393c.231.162.217.25.198.442c-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383c-.065-.836-.093-1.675-.169-2.51"
                />
                <path
                  fill="url(#f1236idi)"
                  d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 0 0 .173-.393v-.393a.24.24 0 0 1 .198-.246a7.588 7.588 0 0 1 1.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 0 1 .197.246v.393c0 .147.074.295.173.393c.231.162.217.25.198.442c-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383c-.065-.836-.093-1.675-.169-2.51"
                />
                <path
                  fill="url(#f1236id1s)"
                  d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 0 0 .173-.393v-.393a.24.24 0 0 1 .198-.246a7.588 7.588 0 0 1 1.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 0 1 .197.246v.393c0 .147.074.295.173.393c.231.162.217.25.198.442c-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383c-.065-.836-.093-1.675-.169-2.51"
                />
                <path
                  fill="url(#f1236id1t)"
                  d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 0 0 .173-.393v-.393a.24.24 0 0 1 .198-.246a7.588 7.588 0 0 1 1.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 0 1 .197.246v.393c0 .147.074.295.173.393c.231.162.217.25.198.442c-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383c-.065-.836-.093-1.675-.169-2.51"
                />
                <path
                  fill="url(#f1236idj)"
                  d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 0 0 .173-.393v-.393a.24.24 0 0 1 .198-.246a7.588 7.588 0 0 1 1.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 0 1 .197.246v.393c0 .147.074.295.173.393c.231.162.217.25.198.442c-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383c-.065-.836-.093-1.675-.169-2.51"
                />
                <path
                  fill="url(#f1236idk)"
                  d="M13.626 4.87c0-.123.05-.27.148-.344l.074-.073a.487.487 0 0 0 .173-.393v-.393a.24.24 0 0 1 .198-.246a7.588 7.588 0 0 1 1.803-.196c.889 0 1.506.123 1.803.196a.265.265 0 0 1 .197.246v.393c0 .147.074.295.173.393c.231.162.217.25.198.442c-.025.245-.05.663-.05.663h.009l-.123 1.822c-.074.815-.714 1.383-1.478 1.383h-1.478c-.788 0-1.405-.568-1.478-1.383c-.065-.836-.093-1.675-.169-2.51"
                />
              </g>
              <g filter="url(#f1236id15)">
                <path
                  fill="url(#f1236id1u)"
                  d="m17.826 3.225l-1.417.472a.482.482 0 0 0 .216.936l1.41-.189z"
                />
              </g>
              <g filter="url(#f1236id16)">
                <path
                  fill="#242324"
                  d="m18.22 2.832l.198.098a.906.906 0 0 1 .469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 0 1-.173-.393v-.393a.265.265 0 0 0-.197-.246a7.595 7.595 0 0 0-1.803-.196a7.58 7.58 0 0 0-1.803.196a.24.24 0 0 0-.198.246v.393a.49.49 0 0 1-.173.393l-.074.073c-.099.074-.148.221-.148.344c.025.27.05.663.05.663h-.023a.292.292 0 0 1-.274-.245l-.272-1.4a.94.94 0 0 1 .494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 0 1 1.013-.147c.247.073.518.073.765 0a1.11 1.11 0 0 1 1.087.245l.37.369c.1.123.223.196.37.27"
                />
                <path
                  fill="url(#f1236idl)"
                  d="m18.22 2.832l.198.098a.906.906 0 0 1 .469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 0 1-.173-.393v-.393a.265.265 0 0 0-.197-.246a7.595 7.595 0 0 0-1.803-.196a7.58 7.58 0 0 0-1.803.196a.24.24 0 0 0-.198.246v.393a.49.49 0 0 1-.173.393l-.074.073c-.099.074-.148.221-.148.344c.025.27.05.663.05.663h-.023a.292.292 0 0 1-.274-.245l-.272-1.4a.94.94 0 0 1 .494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 0 1 1.013-.147c.247.073.518.073.765 0a1.11 1.11 0 0 1 1.087.245l.37.369c.1.123.223.196.37.27"
                />
                <path
                  fill="url(#f1236idm)"
                  d="m18.22 2.832l.198.098a.906.906 0 0 1 .469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 0 1-.173-.393v-.393a.265.265 0 0 0-.197-.246a7.595 7.595 0 0 0-1.803-.196a7.58 7.58 0 0 0-1.803.196a.24.24 0 0 0-.198.246v.393a.49.49 0 0 1-.173.393l-.074.073c-.099.074-.148.221-.148.344c.025.27.05.663.05.663h-.023a.292.292 0 0 1-.274-.245l-.272-1.4a.94.94 0 0 1 .494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 0 1 1.013-.147c.247.073.518.073.765 0a1.11 1.11 0 0 1 1.087.245l.37.369c.1.123.223.196.37.27"
                />
                <path
                  fill="url(#f1236idn)"
                  d="m18.22 2.832l.198.098a.906.906 0 0 1 .469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 0 1-.173-.393v-.393a.265.265 0 0 0-.197-.246a7.595 7.595 0 0 0-1.803-.196a7.58 7.58 0 0 0-1.803.196a.24.24 0 0 0-.198.246v.393a.49.49 0 0 1-.173.393l-.074.073c-.099.074-.148.221-.148.344c.025.27.05.663.05.663h-.023a.292.292 0 0 1-.274-.245l-.272-1.4a.94.94 0 0 1 .494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 0 1 1.013-.147c.247.073.518.073.765 0a1.11 1.11 0 0 1 1.087.245l.37.369c.1.123.223.196.37.27"
                />
                <path
                  fill="url(#f1236ido)"
                  d="m18.22 2.832l.198.098a.906.906 0 0 1 .469.982l-.272 1.4c-.024.145-.12.242-.263.246h-.009s.025-.418.05-.663c.02-.2-.015-.26-.198-.442a.578.578 0 0 1-.173-.393v-.393a.265.265 0 0 0-.197-.246a7.595 7.595 0 0 0-1.803-.196a7.58 7.58 0 0 0-1.803.196a.24.24 0 0 0-.198.246v.393a.49.49 0 0 1-.173.393l-.074.073c-.099.074-.148.221-.148.344c.025.27.05.663.05.663h-.023a.292.292 0 0 1-.274-.245l-.272-1.4a.94.94 0 0 1 .494-.958l.198-.098c.123-.074.247-.172.37-.27l.445-.467a.903.903 0 0 1 1.013-.147c.247.073.518.073.765 0a1.11 1.11 0 0 1 1.087.245l.37.369c.1.123.223.196.37.27"
                />
              </g>
              <g filter="url(#f1236id17)">
                <path
                  fill="#D89992"
                  d="m15.874 5.758l-.377.783c-.047.16.065.322.224.322h.34c.159 0 .271-.164.224-.322l-.229-.783c-.05-.173-.13-.173-.182 0"
                />
              </g>
              <g filter="url(#f1236id18)">
                <path
                  fill="#FBC4B1"
                  d="m15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 0 0 .24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                />
                <path
                  fill="url(#f1236id1v)"
                  d="m15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 0 0 .24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                />
                <path
                  fill="url(#f1236id1w)"
                  d="m15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 0 0 .24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                />
                <path
                  fill="url(#f1236id1x)"
                  d="m15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 0 0 .24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                />
                <path
                  fill="url(#f1236idp)"
                  d="m15.825 5.683l-.244.783c-.05.16.07.322.24.322h.361a.25.25 0 0 0 .24-.322l-.245-.783c-.052-.173-.297-.173-.352 0"
                />
              </g>
              <path
                fill="#88024E"
                d="M16.001 7.256c-.234 0-.453-.055-.638-.151c-.063-.032-.13.039-.09.096a.87.87 0 0 0 .728.39a.872.872 0 0 0 .729-.39c.04-.06-.028-.128-.091-.096a1.376 1.376 0 0 1-.638.15"
              />
              <g filter="url(#f1236id19)">
                <path
                  fill="#1E1E1E"
                  d="M17.714 4.562h-.001V4.56l-.003-.002l-.006-.004a.548.548 0 0 0-.07-.05a1.304 1.304 0 0 0-.88-.17a.246.246 0 1 0 .075.486a.813.813 0 0 1 .543.1a.437.437 0 0 1 .03.02a.246.246 0 0 0 .311-.379"
                />
              </g>
              <g filter="url(#f1236id1a)">
                <path
                  fill="#1E1E1E"
                  d="m14.264 4.562l.001-.001l.002-.002l.006-.004a.68.68 0 0 1 .071-.05a1.304 1.304 0 0 1 .88-.17a.246.246 0 1 1-.076.486a.813.813 0 0 0-.543.1a.403.403 0 0 0-.025.018l-.004.003a.246.246 0 0 1-.312-.38"
                />
              </g>
              <path
                fill="#fff"
                d="M17.1 5.156c.301 0 .555.207.624.487a.126.126 0 0 1-.123.157h-1.027a.106.106 0 0 1-.105-.125a.644.644 0 0 1 .631-.52"
              />
              <path
                fill="url(#f1236idq)"
                d="M17.005 5.281a.41.41 0 0 1 .396.52h-.793a.412.412 0 0 1 .398-.52"
              />
              <path
                fill="#000"
                d="M16.77 5.692c0-.13.105-.235.235-.235a.234.234 0 0 1 .21.343h-.417a.214.214 0 0 1-.028-.108"
              />
              <g filter="url(#f1236id1b)">
                <path
                  fill="#C7A7A3"
                  d="M16.975 5.368c.03.039-.032.087-.101.139c-.07.052-.122.088-.15.05c-.03-.04.003-.114.072-.166c.07-.052.15-.062.18-.023"
                />
                <path
                  fill="url(#f1236idr)"
                  d="M16.975 5.368c.03.039-.032.087-.101.139c-.07.052-.122.088-.15.05c-.03-.04.003-.114.072-.166c.07-.052.15-.062.18-.023"
                />
              </g>
              <g filter="url(#f1236id1c)">
                <path
                  fill="url(#f1236id1y)"
                  d="M17.371 5.638a.387.387 0 0 0-.106-.213l-.12.131l.054.105z"
                />
              </g>
              <path
                fill="#fff"
                d="M14.9 5.156a.644.644 0 0 0-.625.487c-.02.08.042.157.124.157h1.027c.065 0 .117-.06.104-.125a.645.645 0 0 0-.63-.52"
              />
              <path
                fill="url(#f1236ids)"
                d="M14.994 5.281a.41.41 0 0 0-.396.52h.794a.414.414 0 0 0-.398-.52"
              />
              <path
                fill="#000"
                d="M15.23 5.692a.234.234 0 0 0-.236-.235a.234.234 0 0 0-.209.343h.417a.233.233 0 0 0 .028-.108"
              />
              <g filter="url(#f1236id1d)">
                <path
                  fill="url(#f1236id1z)"
                  d="M15.37 5.644c0-.133-.108-.222-.137-.248l-.133.128l.082.166z"
                />
              </g>
              <g filter="url(#f1236id1e)">
                <ellipse
                  cx="14.87"
                  cy="5.456"
                  fill="#C7A7A3"
                  fill-opacity=".9"
                  rx=".179"
                  ry=".091"
                  transform="rotate(-27.914 14.87 5.456)"
                />
                <ellipse
                  cx="14.87"
                  cy="5.456"
                  fill="url(#f1236idt)"
                  rx=".179"
                  ry=".091"
                  transform="rotate(-27.914 14.87 5.456)"
                />
              </g>
              <g filter="url(#f1236id1f)">
                <path
                  stroke="url(#f1236id20)"
                  stroke-linecap="round"
                  stroke-width=".1"
                  d="M16.766 4.496c.198-.035.584-.025.851.183"
                />
              </g>
              <g filter="url(#f1236id1g)">
                <path
                  stroke="url(#f1236id21)"
                  stroke-linecap="round"
                  stroke-width=".1"
                  d="M14.362 4.734c.15-.133.48-.273.887-.208"
                />
              </g>
              <g filter="url(#f1236id1h)">
                <path
                  stroke="url(#f1236id22)"
                  stroke-linecap="round"
                  stroke-width=".25"
                  d="M13.914 3.6v.413c-.004.068-.032.221-.119.286"
                />
              </g>
              <defs>
                <radialGradient
                  id="f1236id0"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-1.84375 0 0 -12.369 13.357 16.715)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".138" stop-color="#D0756E" />
                  <stop offset="1" stop-color="#D0756E" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(1.60938 0 0 15.4135 18.872 16.715)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".101" stop-color="#FF9682" />
                  <stop offset="1" stop-color="#FF9682" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id2"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.1836 -.5625 .3991 .13026 19.319 19.109)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D48F89" />
                  <stop offset="1" stop-color="#D48F89" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id3"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(-168.523 7.537 5.838)scale(2.27735 4.86372)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".638" stop-color="#5BA1D3" stop-opacity="0" />
                  <stop offset="1" stop-color="#5BA1D3" />
                </radialGradient>
                <radialGradient
                  id="f1236id4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-1.51587 1.2383 -.95063 -1.16372 14.562 8.915)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A87B0" />
                  <stop offset="1" stop-color="#3A87B0" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id5"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-.35938 2.17188 -.8973 -.14848 13.246 11.794)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#257AD3" />
                  <stop offset="1" stop-color="#257AD3" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id6"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.875 -.3125 1.2963 3.62963 18.794 12.06)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".251" stop-color="#2680E1" />
                  <stop offset="1" stop-color="#2680E1" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id7"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -.35938 1.91919 0 16 18.185)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6A597B" />
                  <stop offset="1" stop-color="#6A597B" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id8"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -.26953 1.85938 0 18.075 28.548)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AA9BA7" />
                  <stop offset="1" stop-color="#AA9BA7" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236id9"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -.32813 1.20581 0 14.794 28.638)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AA9BA7" />
                  <stop offset="1" stop-color="#AA9BA7" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236ida"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(140.013 7.411 8.269)scale(2.52874 3.92481)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4DB7F8" />
                  <stop offset="1" stop-color="#49A1F7" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idb"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.23437 1.1172 -3.2104 .6735 15.278 8.552)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".167" stop-color="#39779B" />
                  <stop offset="1" stop-color="#499DE8" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idc"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(47.115 -1.634 21.948)scale(1.92684 2.44284)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".526" stop-color="#CC9698" />
                  <stop offset="1" stop-color="#E0B8B0" />
                </radialGradient>
                <radialGradient
                  id="f1236idd"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-1.66284 -.84375 .32903 -.64844 19.566 29.498)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#635185" />
                  <stop offset="1" stop-color="#635185" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236ide"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.80803 0 0 1.41406 13.046 5.815)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".351" stop-color="#CF9888" />
                  <stop offset="1" stop-color="#BE8C77" />
                </radialGradient>
                <radialGradient
                  id="f1236idf"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.38066 -.27718 .31636 .43447 18.366 5.693)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".543" stop-color="#D9AA94" />
                  <stop offset="1" stop-color="#D9AA94" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idg"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.37815 -.69553 .4071 .22133 18.176 6.193)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".755" stop-color="#D6A38D" stop-opacity="0" />
                  <stop offset=".916" stop-color="#D6A38D" />
                </radialGradient>
                <radialGradient
                  id="f1236idh"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.1194 .11818 -.15235 .1539 18.195 5.814)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D5A58E" />
                  <stop offset="1" stop-color="#D5A58E" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idi"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 4.34448 -5.8974 0 16.014 4.928)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".557" stop-color="#D7A09D" stop-opacity="0" />
                  <stop offset="1" stop-color="#B07F87" />
                </radialGradient>
                <radialGradient
                  id="f1236idj"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -.60185 .74073 0 17.081 5.23)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F5B7A7" />
                  <stop offset="1" stop-color="#F5B7A7" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idk"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -.64043 .79643 0 14.982 5.214)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D0958D" />
                  <stop offset="1" stop-color="#D0958D" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idl"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(.36736 -1.36138 .50484 .13623 18.002 3.924)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#464344" />
                  <stop offset="1" stop-color="#464344" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idm"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(1.76115 .16207 -.08714 .94696 17.245 3.114)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".335" stop-color="#4A4648" />
                  <stop offset="1" stop-color="#4A4648" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idn"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 .77318 -1.19743 0 16.001 1.854)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#423D3F" />
                  <stop offset="1" stop-color="#423D3F" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236ido"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(1.4154 -1.03724 1.62502 2.21746 13.032 4.994)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#463C39" />
                  <stop offset="1" stop-color="#463C39" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idp"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 .09066 -.29128 0 16.152 6.554)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD7C1" />
                  <stop offset="1" stop-color="#FFD7C1" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="f1236idq"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 .37349 -.59407 0 17.004 5.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".802" stop-color="#7D574A" />
                  <stop offset="1" stop-color="#694B43" />
                  <stop offset="1" stop-color="#804D49" />
                  <stop offset="1" stop-color="#664944" />
                </radialGradient>
                <radialGradient
                  id="f1236idr"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-.10676 -.13758 .18941 -.14699 16.9 5.54)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".766" stop-color="#FFE6E2" stop-opacity="0" />
                  <stop offset=".966" stop-color="#FFE6E2" />
                </radialGradient>
                <radialGradient
                  id="f1236ids"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 .3735 -.5941 0 14.995 5.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".802" stop-color="#7D574A" />
                  <stop offset="1" stop-color="#694B43" />
                  <stop offset="1" stop-color="#804D49" />
                  <stop offset="1" stop-color="#664944" />
                </radialGradient>
                <radialGradient
                  id="f1236idt"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-.00356 -.22745 .2734 -.00428 14.865 5.602)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".766" stop-color="#FFE6E2" stop-opacity="0" />
                  <stop offset=".966" stop-color="#FFE6E2" />
                </radialGradient>
                <filter
                  id="f1236idu"
                  width="2.311"
                  height="8.028"
                  x="11.403"
                  y="12.701"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".2" />
                  <feGaussianBlur stdDeviation=".1" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.972549 0 0 0 0 0.74902 0 0 0 0 0.658824 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236idv"
                  width="1.464"
                  height="6.913"
                  x="19.164"
                  y="12.063"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".25" />
                </filter>
                <filter
                  id="f1236idw"
                  width="6.169"
                  height="12.453"
                  x="13.016"
                  y="16.095"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".2" />
                  <feGaussianBlur stdDeviation=".4" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.486275 0 0 0 0 0.462745 0 0 0 0 0.505882 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236idx"
                  width="6.517"
                  height="7.994"
                  x="12.941"
                  y="8.552"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".4" dy=".4" />
                  <feGaussianBlur stdDeviation=".4" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.368627 0 0 0 0 0.560784 0 0 0 0 0.784314 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236idy"
                  width="3.316"
                  height="1.848"
                  x="12.434"
                  y="28.548"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".25" dy=".25" />
                  <feGaussianBlur stdDeviation=".25" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.313726 0 0 0 0 0.235294 0 0 0 0 0.431373 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236idz"
                  width="6.594"
                  height="13.766"
                  x="12.841"
                  y="15.466"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".5" />
                </filter>
                <filter
                  id="f1236id10"
                  width="1.737"
                  height="1.537"
                  x="13.046"
                  y="5.046"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".2" />
                  <feGaussianBlur stdDeviation=".15" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.917647 0 0 0 0 0.694118 0 0 0 0 0.607843 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236id11"
                  width="1.916"
                  height="1.916"
                  x="12.857"
                  y="4.856"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".25" />
                </filter>
                <filter
                  id="f1236id12"
                  width="1.787"
                  height="1.787"
                  x="17.427"
                  y="4.796"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".25" dy="-.25" />
                  <feGaussianBlur stdDeviation=".25" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.843137 0 0 0 0 0.623529 0 0 0 0 0.580392 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236id13"
                  width="1.916"
                  height="1.916"
                  x="17.237"
                  y="4.856"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".25" />
                </filter>
                <filter
                  id="f1236id14"
                  width="4.777"
                  height="5.638"
                  x="13.626"
                  y="3.225"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy=".1" />
                  <feGaussianBlur stdDeviation=".075" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.615686 0 0 0 0 0.509804 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236id15"
                  width="2.955"
                  height="2.412"
                  x="15.579"
                  y="2.725"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".25" />
                </filter>
                <filter
                  id="f1236id16"
                  width="5.802"
                  height="3.804"
                  x="13.1"
                  y="1.754"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="-.1" />
                  <feGaussianBlur stdDeviation=".075" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.0392157 0 0 0 0 0.00784314 0 0 0 0 0.0196078 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236id17"
                  width="2.31"
                  height="2.735"
                  x="14.736"
                  y="4.878"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".375" />
                </filter>
                <filter
                  id="f1236id18"
                  width="1.064"
                  height="1.435"
                  x="15.469"
                  y="5.453"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".05" />
                </filter>
                <filter
                  id="f1236id19"
                  width="1.507"
                  height="1.078"
                  x="16.545"
                  y="3.919"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".25" dy="-.4" />
                  <feGaussianBlur stdDeviation=".3" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.0431373 0 0 0 0 0.0196078 0 0 0 0 0.027451 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236id1a"
                  width="1.507"
                  height="1.078"
                  x="14.175"
                  y="3.919"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx=".25" dy="-.4" />
                  <feGaussianBlur stdDeviation=".3" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix values="0 0 0 0 0.0431373 0 0 0 0 0.0196078 0 0 0 0 0.027451 0 0 0 1 0" />
                  <feBlend in2="shape" result="effect1_innerShadow_4002_184" />
                </filter>
                <filter
                  id="f1236id1b"
                  width=".47"
                  height=".428"
                  x="16.612"
                  y="5.244"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".05" />
                </filter>
                <filter
                  id="f1236id1c"
                  width=".626"
                  height=".636"
                  x="16.945"
                  y="5.225"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".1" />
                </filter>
                <filter
                  id="f1236id1d"
                  width=".67"
                  height=".695"
                  x="14.9"
                  y="5.196"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".1" />
                </filter>
                <filter
                  id="f1236id1e"
                  width=".528"
                  height=".432"
                  x="14.606"
                  y="5.24"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".05" />
                </filter>
                <filter
                  id="f1236id1f"
                  width="1.252"
                  height=".599"
                  x="16.566"
                  y="4.28"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".075" />
                </filter>
                <filter
                  id="f1236id1g"
                  width="1.287"
                  height=".625"
                  x="14.162"
                  y="4.31"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".075" />
                </filter>
                <filter
                  id="f1236id1h"
                  width=".869"
                  height="1.45"
                  x="13.42"
                  y="3.224"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4002_184" stdDeviation=".125" />
                </filter>
                <linearGradient
                  id="f1236id1i"
                  x1="12.466"
                  x2="12.466"
                  y1="12.865"
                  y2="12.712"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3270C8" />
                  <stop offset="1" stop-color="#2C7CD5" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1j"
                  x1="19.747"
                  x2="19.747"
                  y1="12.951"
                  y2="12.247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4E73C8" />
                  <stop offset="1" stop-color="#3686DF" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1k"
                  x1="16"
                  x2="16"
                  y1="16.095"
                  y2="16.529"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#856988" />
                  <stop offset="1" stop-color="#856988" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1l"
                  x1="16"
                  x2="16"
                  y1="9.185"
                  y2="16.146"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#46A3F0" />
                  <stop offset="1" stop-color="#3B70D0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1m"
                  x1="17.606"
                  x2="17.606"
                  y1="16.146"
                  y2="14.029"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3B70CF" />
                  <stop offset="1" stop-color="#3B70CF" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1n"
                  x1="17.231"
                  x2="17.231"
                  y1="16.099"
                  y2="15.81"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4656B3" />
                  <stop offset="1" stop-color="#4475D1" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1o"
                  x1="18.247"
                  x2="16.5"
                  y1="29.81"
                  y2="29.607"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5A3F7C" />
                  <stop offset="1" stop-color="#462F5E" />
                </linearGradient>
                <linearGradient
                  id="f1236id1p"
                  x1="13.815"
                  x2="13.52"
                  y1="5.943"
                  y2="5.943"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BA7C6B" />
                  <stop offset="1" stop-color="#BE8474" />
                </linearGradient>
                <linearGradient
                  id="f1236id1q"
                  x1="18.695"
                  x2="18.319"
                  y1="5.312"
                  y2="6.48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBD3BD" />
                  <stop offset="1" stop-color="#F0B8A4" />
                </linearGradient>
                <linearGradient
                  id="f1236id1r"
                  x1="17.859"
                  x2="14.343"
                  y1="5.994"
                  y2="6.518"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFDABF" />
                  <stop offset="1" stop-color="#EAAB97" />
                </linearGradient>
                <linearGradient
                  id="f1236id1s"
                  x1="13.403"
                  x2="14.949"
                  y1="6.697"
                  y2="6.75"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A58787" />
                  <stop offset="1" stop-color="#DEAD9D" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1t"
                  x1="13.517"
                  x2="14.383"
                  y1="7.235"
                  y2="7.204"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E8AD97" />
                  <stop offset="1" stop-color="#E8AD97" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1u"
                  x1="15.756"
                  x2="19.506"
                  y1="4.62"
                  y2="3.277"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFDEC4" />
                  <stop offset="1" stop-color="#FFDEC4" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1v"
                  x1="15.603"
                  x2="16.035"
                  y1="6.297"
                  y2="6.297"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DFA790" />
                  <stop offset="1" stop-color="#DFA790" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1w"
                  x1="16.433"
                  x2="15.961"
                  y1="6.446"
                  y2="6.439"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFDFC4" />
                  <stop offset="1" stop-color="#FFDFC4" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1x"
                  x1="16.091"
                  x2="16.091"
                  y1="6.788"
                  y2="6.524"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DC9C96" />
                  <stop offset="1" stop-color="#DC9C96" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1y"
                  x1="17.362"
                  x2="17.218"
                  y1="5.525"
                  y2="5.614"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B4948D" />
                  <stop offset="1" stop-color="#B4948D" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id1z"
                  x1="15.338"
                  x2="15.193"
                  y1="5.525"
                  y2="5.614"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B4948D" />
                  <stop offset="1" stop-color="#B4948D" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id20"
                  x1="17.37"
                  x2="17.176"
                  y1="4.54"
                  y2="4.145"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#353435" />
                  <stop offset="1" stop-color="#353435" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id21"
                  x1="14.927"
                  x2="14.379"
                  y1="4.481"
                  y2="4.252"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#353435" />
                  <stop offset="1" stop-color="#353435" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="f1236id22"
                  x1="13.855"
                  x2="13.855"
                  y1="3.554"
                  y2="4.547"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3C393A" />
                  <stop offset="1" stop-color="#3C393A" stop-opacity="0" />
                </linearGradient>
              </defs>
            </g>
          </svg>{' '}
        </div>
      </div>
    </div>
  );
}
