import React from 'react';
import { Heart, More } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentSongSelector } from '~/redux/selector';

import { Button, Image } from '../Commons';

const Media: React.FC = () => {
   const currentSong = useSelector(currentSongSelector);

   return (
      <div className="w-[30%] fy-center">
         <Link to="/">
            <Image src={currentSong.image} className="w-16 h-16" />
         </Link>

         <div className="ml-[10px] pr-[10px]">
            <h3 className="text-sm leading-[1.36] font-medium line-clamp-1 hover:text-purple-color">
               <Link to="/">{currentSong.name}</Link>
            </h3>
            <span className="text-xs leading-normal text-subtitle-color mt-[1px] line-clamp-1">
               {currentSong.description}
            </span>
         </div>

         <div className="fy-center ml-[10px]">
            <Button className="mx-[2px] hover:bg-alpha-color" tippyContent="Thêm vào thư viện">
               <Heart size={15} />
            </Button>
            <Button className="mx-[2px] hover:bg-alpha-color" tippyContent="Xem thêm">
               <More size={15} />
            </Button>
         </div>
      </div>
   );
};

export default Media;
