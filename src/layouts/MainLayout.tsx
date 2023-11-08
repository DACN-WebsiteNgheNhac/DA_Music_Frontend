import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Outlet } from 'react-router-dom';
import { Header, PlayingBar, Sidebar } from '~/layouts/Commons';

const MainLayout = () => {
   const [isSticky, setIsSticky] = useState<boolean>(false);

   const handleScroll = (e: React.UIEvent<HTMLElement>) => {
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
               <Scrollbars
                  onScroll={handleScroll}
                  renderThumbHorizontal={() => <div />}
                  renderThumbVertical={({ style, ...props }) => (
                     <div
                        {...props}
                        className="relative block w-full translate-y-0 rounded-lg bg-[rgba(0,0,0,0.2)] z-40"
                     />
                  )}
               >
                  <Header isSticky={isSticky} />
                  <main className="px-section">
                     <Outlet />
                  </main>
               </Scrollbars>
            </div>
         </div>
         <PlayingBar />
      </div>
   );
};

export default MainLayout;
