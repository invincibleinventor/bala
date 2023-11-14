import '@/styles/global.css';

import type { Metadata } from 'next';

import type { RootLayoutProps } from '@/types/index';

import { fontSans } from '@/lib/fonts';
import meta from '@/lib/meta';
import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Filebar from '@/components/FileBar';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await meta();
  return metadata;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${fontSans.variable}`}>
      <head>
      <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

      </head>
      <body className="h-screen w-screen overflow-hidden bg-neutral-800 ">
        <div className="flex h-screen w-screen flex-col overflow-hidden" >
        <Titlebar />
        <div className="mt-12 flex h-full w-screen grow flex-row overflow-hidden ">
          <Sidebar/>
                    <div className="flex grow flex-col overflow-hidden ">
                      <div className="no-scrollbar overflow-x-scroll">
                      <Filebar></Filebar>
                      </div>
                      <div className=' h-[calc(100vh-88px)] w-auto overflow-x-hidden pb-10 md:pb-0'>
          {children}
          </div>
          </div>
</div>
        </div>

      </body>
    </html>
  );
}
