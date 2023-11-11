import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '~/components/Commons';
import Button from '../Commons/Button/Button';
import { Heart, More } from 'iconsax-react';
import { playIcon } from '~/assets';
import cx from 'classnames';

interface AlbumCardProps {
   className?: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ className }) => {
   const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
   };

   return (
      <div className={cx('flex-shrink-0 min-w-[160px]', className)}>
         <Link to="/artist" className="relative">
            <Image>
               <Button onClick={handleClick} className="hover:bg-icon-hover-color">
                  <Heart size={18} />
               </Button>
               <Button
                  onClick={handleClick}
                  className="w-[45px] h-[45px] rounded-full border-primary-color border f-center hover:brightness-90"
               >
                  <img src={playIcon} alt="playIcon" className="w-full h-full object-cover" />
               </Button>
               <Button onClick={handleClick} className="hover:bg-icon-hover-color">
                  <More size="18" />
               </Button>
            </Image>
         </Link>
         <div className="mt-3 text-sm leading-[1.33]">
            <Link
               to="/"
               className="line-clamp-1 leading-[1.36] text-primary font-bold mb-1 hover:text-hover-color"
            >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptates
               placeat soluta repellat at, cumque quo nobis vero id facilis? Iste dignissimos nemo
               quas incidunt non ipsa iure accusamus quam.
            </Link>
            <h3 className="line-clamp-2 text-gray-600 cursor-default">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptates
               placeat soluta repellat at, cumque quo nobis vero id facilis? Iste dignissimos nemo
               quas incidunt non ipsa iure accusamus quam.
            </h3>
         </div>
      </div>
   );
};

export default AlbumCard;
