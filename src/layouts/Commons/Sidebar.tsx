import React from 'react';
import { NavItem } from '~/components/Sidebar';
import { Link } from 'react-router-dom';
import usePortal from 'react-cool-portal';
import { AddSquare, Home } from 'iconsax-react';
import { CreatePlaylistModal } from '~/components/Playlist';

const Sidebar: React.FC = () => {
   const { Portal, toggle, hide } = usePortal({ defaultShow: false });

   return (
      <aside className="w-sidebar h-full bg-sidebar-color flex flex-col">
         <Link to="/" className="h-header fy-center pl-5">
            <div className="w-10 h-10">
               <img src="/images/electron-vite.animate.svg" alt="" className="w-full h-full" />
            </div>
            <span className="ml-2 font-bold text-sidebar-popup-color">VMusic</span>
         </Link>
         <div className="flex-1">
            <div className="w-full mb-[15px]">
               <NavItem to="/" Icon={Home}>
                  Trang chủ
               </NavItem>
               <NavItem to="/artist" Icon={Home}>
                  Nghệ sỹ
               </NavItem>
               <NavItem to="/album" Icon={Home}>
                  Album
               </NavItem>
               <NavItem to="/radio" Icon={Home}>
                  Radio
               </NavItem>
               <NavItem to="/library" Icon={Home}>
                  Thư viện
               </NavItem>
            </div>
         </div>

         <button
            onClick={toggle}
            className="h-[54px] fy-center px-5 border-t border-border-color text-navigation-color text-sm font-medium hover:text-hover-color"
         >
            <span className="w-[36px] text-[#c6c6c6]">
               <AddSquare size={24} variant="Bold" />
            </span>
            <span>Tạo playlist mới</span>
         </button>

         <Portal>
            <CreatePlaylistModal hide={hide} />
         </Portal>
      </aside>
   );
};

export default Sidebar;
