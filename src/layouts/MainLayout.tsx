import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Outlet } from 'react-router-dom';
import { Header, PlayingBar, Sidebar } from '~/components/commons';

const MainLayout = () => {
   const [isFixed, setFixed] = useState(false);

   const handleScroll = (e: React.UIEvent<HTMLElement>) => {
      const scrollTop = e.currentTarget.scrollTop;
      if (scrollTop >= 20) {
         setFixed(true);
      } else {
         setFixed(false);
      }
   };
   return (
      <div className="h-screen flex flex-col font-inter">
         <div className="flex-1 flex w-full">
            <Sidebar />
            <div className="flex-1">
               <Scrollbars
                  onScroll={handleScroll}
                  renderThumbVertical={({ style, ...props }) => (
                     <div
                        {...props}
                        className="relative block w-full translate-y-0 rounded-lg bg-[rgba(0,0,0,0.2)] z-[100]"
                     ></div>
                  )}
               >
                  <Header isFixed={isFixed} />
                  <main className="mt-header">
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
