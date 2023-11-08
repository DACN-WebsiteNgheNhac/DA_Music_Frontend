import React from 'react';
import { ArrowLeft, ArrowRight, Setting2 } from 'iconsax-react';
import SearchBox from '../../components/SearchBox/SearchBox';
import { CircleButton } from '~/components/Commons';
import cx from 'classnames';

interface HeaderProps {
   isSticky: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSticky }) => {
   return (
      <section
         className={cx(
            'h-header sticky top-0 inset-x-0 px-section fy-center',
            isSticky && 'bg-header-color shadow-header z-30',
         )}
      >
         <div className="flex w-full">
            <button className="w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed" disabled>
               <ArrowLeft size="22" />
            </button>

            <button className="w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed">
               <ArrowRight size="22" />
            </button>

            <SearchBox />
         </div>

         <div className="fy-center gap-3">
            <CircleButton tippyContent="Cài đặt" className="hover:brightness-75">
               <Setting2 size="22" />
            </CircleButton>
            <CircleButton className="hover:brightness-75">
               <div className="p-[2px] bg-gradient-to-r from-green-400 to-blue-500 rounded-full overflow-hidden">
                  <div className="rounded-full overflow-hidden">
                     <img
                        className="w-full h-full object-cover"
                        src="https://s120-ava-talk-zmp3.zmdcdn.me/c/7/e/a/2/120/b90e2b957b2f78662e163c0e45b4c853.jpg"
                        alt=""
                     />
                  </div>
               </div>
            </CircleButton>
         </div>
      </section>
   );
};

export default Header;
