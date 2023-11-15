import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';
import { Header } from '~/components/Drawer';

const Drawer: React.FC = () => {
   const { showPlaylist } = useSelector(musicSelector);

   const variants = {
      open: { x: 0, display: 'block' },
      closed: {
         x: '100%',
         transitionEnd: {
            display: 'none',
         },
      },
   };

   return (
      <AnimatePresence initial={false}>
         <motion.div
            animate={showPlaylist ? 'open' : 'closed'}
            variants={variants}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="fixed top-0 right-0 bg-primary-color shadow-drawer z-30"
         >
            <div className="w-[330px] h-drawer flex flex-col">
               <Header />
            </div>
         </motion.div>
      </AnimatePresence>
   );
};

export default Drawer;
