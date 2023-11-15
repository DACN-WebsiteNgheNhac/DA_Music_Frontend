import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { CustomScrollbar } from '~/components/Commons';
import { Header, PlayingBar, Sidebar, Audio, Drawer } from '~/layouts/Commons';
import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';

const MainLayout = () => {
   const { playlistSongs } = useSelector(musicSelector);
   const [isSticky, setIsSticky] = useState<boolean>(false);

   const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
      const scrollTop = e.currentTarget.scrollTop;
      if (scrollTop >= 20) {
         setIsSticky(true);
      } else {
         setIsSticky(false);
      }
   };

   return (
      <div className="h-screen w-full flex flex-col font-inter leading-normal">
         <div className="flex-1 flex">
            <Sidebar />
            <div className="flex-1">
               <CustomScrollbar onScroll={handleScroll}>
                  <Header isSticky={isSticky} />
                  <main className="px-section">
                     <Outlet />
                  </main>
               </CustomScrollbar>
            </div>
         </div>
         {playlistSongs.length > 0 && (
            <>
               <Drawer />
               <PlayingBar />
               <Audio />
            </>
         )}
      </div>
   );
};

export default MainLayout;
