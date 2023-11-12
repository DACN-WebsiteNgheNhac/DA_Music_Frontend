import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from '~/components/Commons';
import { Heart, More } from 'iconsax-react';
import { playIcon } from '~/assets';
import cx from 'classnames';

interface AlbumCardProps {
   className?: string;
   data: IAlbum;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ className, data }) => {
   const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
   };

   return (
      <div className={cx('flex-shrink-0 min-w-[160px]', className)}>
         <Link to={`/album/${data.id}`} className="relative">
            <Image src={data.image}>
               <Button
                  onClick={handleClick}
                  className="w-[30px] h-[30px] hover:bg-icon-hover-color"
                  tippyContent="Thêm vào thư viện"
               >
                  <Heart size={18} />
               </Button>
               <Button
                  onClick={handleClick}
                  className="w-[45px] h-[45px] rounded-full border-primary-color border f-center hover:brightness-90"
               >
                  <img src={playIcon} alt="playIcon" className="w-full h-full object-cover" />
               </Button>
               <Button
                  onClick={handleClick}
                  className="w-[30px] h-[30px] hover:bg-icon-hover-color"
                  tippyContent="Xem thêm"
               >
                  <More size={18} />
               </Button>
            </Image>
         </Link>
         <div className="mt-3 text-sm leading-[1.33]">
            <Link
               to={`/album/${data.id}`}
               className="line-clamp-1 leading-[1.36] text-primary font-bold mb-1 hover:text-hover-color"
            >
               {data.name}
            </Link>
            <h3 className="line-clamp-2 text-gray-600 cursor-default">{data.description}</h3>
         </div>
      </div>
   );
};

export default AlbumCard;
