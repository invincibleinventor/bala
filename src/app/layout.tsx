import '@/styles/global.css';

import type { Metadata } from 'next';
import { AppProps } from 'next/app';

import type { RootLayoutProps } from '@/types/index';

import { fontSans } from '@/lib/fonts';
import meta from '@/lib/meta';
import Filebar from '@/components/FileBar';
import Sidebar from '@/components/Sidebar';
import Titlebar from '@/components/Titlebar';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await meta();
  return metadata;
}

export default function RootLayout({ children }: RootLayoutProps, props: AppProps) {
  return (
    <html lang="en" className={`${fontSans.variable}`}>
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </head>

      <body className="font-lato h-screen w-screen neut-800 ">
        <div className="flex h-screen w-screen flex-col overflow-hidden">
          <Titlebar />
          <div className=" flex h-full w-screen grow flex-row overflow-hidden ">
            <Sidebar />
            <div className="flex-grow h-auto flex-col">
              <div className="no-scrollbar overflow-x-scroll">
                <Filebar></Filebar>
              </div>
              <div className="h-full w-full pb-12 codeblockdiv overflow-scroll ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
