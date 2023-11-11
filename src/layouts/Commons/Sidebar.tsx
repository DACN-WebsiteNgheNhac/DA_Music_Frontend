import React from 'react';
import NavItem from '~/components/Sidebar/NavItem';
import { AddSquare, Home } from 'iconsax-react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
   return (
      <aside className="w-sidebar h-full bg-sidebar-color flex flex-col">
         <Link to="/" className="h-header f-center">
            <img src="/images/logo.png" alt="" />
            <span className="ml-2 font-bold text-sidebar-popup-color">Musiverse</span>
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
               <NavItem to="/postcast" Icon={Home}>
                  Postcast
               </NavItem>
            </div>
         </div>
         <button className="h-[54px] fy-center px-5 border-t border-border-color text-navigation-color text-sm font-medium hover:text-hover-color">
            <span className="w-[36px] text-[#c6c6c6]">
               <AddSquare size={24} variant="Bold" />
            </span>
            <span>Tạo playlist mới</span>
         </button>
      </aside>
   );
};

export default Sidebar;
