import React from 'react';
import { Button, Image } from '../Commons';
import { Heart, More } from 'iconsax-react';
import { Link } from 'react-router-dom';

const Media: React.FC = () => {
   return (
      <div className="w-[30%] fy-center">
         <Link to="/">
            <Image className="w-16 h-16" />
         </Link>

         <div className="ml-[10px] pr-[10px]">
            <h3 className="text-sm leading-[1.36] font-medium line-clamp-1 hover:text-purple-color">
               <Link to="/">Standing Next to You</Link>
            </h3>
            <span className="text-xs leading-normal text-subtitle-color mt-[1px] line-clamp-1">
               Jung Kook
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
