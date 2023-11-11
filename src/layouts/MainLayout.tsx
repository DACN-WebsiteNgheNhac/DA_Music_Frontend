import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomScrollbar from '~/components/Commons/CustomScrollbar';
import { Header, PlayingBar, Sidebar } from '~/layouts/Commons';

const MainLayout = () => {
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
         <PlayingBar />
      </div>
   );
};

export default MainLayout;
