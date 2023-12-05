import React, { useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { Button } from '../Commons';
import { Clock, More } from 'iconsax-react';

interface HeaderProps {
   tabs: ITab[];
   activeTab: number;
   setActiveTab: (id: number) => void;
}

const Header: React.FC<HeaderProps> = ({ tabs, activeTab, setActiveTab }) => {
   return (
      <div className="fx-between py-[14px] px-2">
         <motion.div className="flex flex-1 w-fit p-[3px] bg-alpha-color rounded-full">
            {tabs.map((tab) => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cx(
                     'relative f-center flex-grow flex-shrink-0 py-[5px] rounded-full',
                     activeTab === tab.id
                        ? 'text-progressbar-active font-medium'
                        : 'text-navigation-color hover:text-progressbar-active font-normal',
                  )}
               >
                  <motion.span className="relative text-xs select-none cursor-pointer z-10">
                     {tab.label}
                  </motion.span>
                  {activeTab === tab.id && (
                     <motion.div
                        layoutId="underline"
                        className="absolute inset-0 bg-primary-color rounded-full shadow-tab"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.3 }}
                     />
                  )}
               </button>
            ))}
         </motion.div>

         <div className="f-center">
            <Button tippyContent="Hẹn giờ" className="bg-alpha-color ml-2">
               <Clock size={16} />
            </Button>
            <Button tippyContent="Khác" className="bg-alpha-color ml-2">
               <More size={16} />
            </Button>
         </div>
      </div>
   );
};

export default Header;
