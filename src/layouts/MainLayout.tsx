import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { CustomScrollbar } from '~/components/Commons';
import { Header, PlayingBar, Sidebar, Audio, Drawer } from '~/layouts/commons';
import { useSelector } from 'react-redux';
import { musicSelector, userSelector } from '~/redux/selector';
import { AppDispatch } from '~/redux/store';
import { useDispatch } from 'react-redux';
import { fetchPlaylistByUser } from '~/redux/slices/userSlice';

const MainLayout = () => {
   const { playlistSongs } = useSelector(musicSelector);
   const { playlists } = useSelector(userSelector);
   const [isSticky, setIsSticky] = useState<boolean>(false);
   const location = useLocation();
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      if (playlists.length <= 0) {
         if (location.pathname !== '/library') dispatch(fetchPlaylistByUser());
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

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
