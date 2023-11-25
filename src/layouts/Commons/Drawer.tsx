import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';
import { Header, Playlist } from '~/components/Drawer';

const Drawer: React.FC = () => {
   const { showPlaylist } = useSelector(musicSelector);

   // const variants = {
   //    open: { x: 0, display: 'block' },
   //    closed: {
   //       x: '100%',
   //       transitionEnd: {
   //          display: 'none',
   //       },
   //    },
   //    initial: { x: 0 },
   //    exit: { x: '100%' },
   // };

   return (
      <AnimatePresence>
         {showPlaylist && (
            <motion.div
               key="drawer"
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%', opacity: 1 }}
               transition={{ ease: 'easeInOut', duration: 0.5 }}
               className="fixed top-0 right-0 bg-primary-color shadow-drawer z-30"
            >
               <div className="w-[330px] h-drawer flex flex-col">
                  <Header />
                  <Playlist />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default Drawer;
