import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '~/components/Commons';
import Button from '../Commons/Button/Button';
import { playIcon } from '~/assets';
import cx from 'classnames';
import { Shuffle } from 'iconsax-react';

interface ArtistCardProps {
   className?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ className }) => {
   const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
   };
   return (
      <div className={cx('flex-shrink-0 min-w-[160px]', className)}>
         <Link to="/artist" className="relative">
            <Image className="rounded-full">
               <Button
                  onClick={handleClick}
                  className="w-[45px] h-[45px] rounded-full border-primary-color border f-center hover:brightness-90"
               >
                  <Shuffle />
               </Button>
            </Image>
         </Link>
         <div className="mt-3 text-sm leading-[1.33] text-center">
            <Link
               to="/"
               className="line-clamp-1 leading-[1.36] text-primary font-medium mb-1 hover:text-hover-color"
            >
               Nhạc của tui
            </Link>
         </div>
      </div>
   );
};

export default ArtistCard;
