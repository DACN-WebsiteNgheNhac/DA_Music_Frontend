import React from 'react';
import { ArrowLeft, ArrowRight, Setting2 } from 'iconsax-react';
import SearchBox from '../../components/SearchBox/SearchBox';
import { CircleButton } from '~/components/Commons';
import cx from 'classnames';
import { useHistoryStack } from '~/hooks';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
   isSticky: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSticky }) => {
   const navigate = useNavigate();
   const { stack, active, setActive } = useHistoryStack();

   const handleGoBack = () => {
      if (active > 0) {
         navigate(-1);
         setActive(active - 1);
      }
   };
   const handleGoForward = () => {
      if (active < stack.length) {
         navigate(1);
         setActive(active + 1);
      }
   };
   return (
      <section
         className={cx(
            'h-header sticky top-0 inset-x-0 px-section fy-center z-30',
            isSticky && 'bg-header-color shadow-header backdrop-blur-[50px]',
         )}
      >
         <div className="flex w-full">
            <button
               onClick={handleGoBack}
               className="w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed"
               disabled={active === 0}
            >
               <ArrowLeft size="22" />
            </button>

            <button
               onClick={handleGoForward}
               className="w-10 h-10 disabled:opacity-30 disabled:cursor-not-allowed"
               disabled={active === stack.length}
            >
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
