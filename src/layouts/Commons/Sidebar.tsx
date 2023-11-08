import React from 'react';
import NavItem from '~/components/Sidebar/NavItem';
import { Home, PlayCircle } from 'iconsax-react';

const Sidebar: React.FC = () => {
   return (
      <aside className="w-sidebar h-full bg-sidebar-color">
         <div className="h-header f-center">
            <img src="/images/logo.png" alt="" />
            <span className="ml-2 font-bold text-sidebar-popup-color">Musiverse</span>
         </div>
         <ul className="w-full mb-[15px]">
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
            <NavItem to="/postcast" Icon={Home}>
               Postcast
            </NavItem>
         </ul>
      </aside>
   );
};

export default Sidebar;
