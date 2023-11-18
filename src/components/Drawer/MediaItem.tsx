import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, More } from 'iconsax-react';

import { Button, Image } from '../Commons';
import { LoadingIcon, musicWaveIcon, playIcon } from '~/assets';
import { currentSongSelector, musicSelector } from '~/redux/selector';
import { setPlayPause, setPlaySongWithId } from '~/redux/slices/musicSlice';

interface MediaItemProps {
   data: ISong;
   isListening: boolean;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, isListening }) => {
   const dispatch = useDispatch();
   const { isPlaying, loading } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);

   const songRef = useRef<HTMLDivElement>(null);

   const handlePlay = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (currentSong?.id === data.id) {
         dispatch(setPlayPause());
      } else {
         dispatch(setPlaySongWithId(data.id));
      }
   };

   useEffect(() => {
      if (currentSong?.id === data.id) {
         songRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
         });
      }
   }, [currentSong?.id, data.id]);

   return (
      <div
         ref={songRef}
         className={cx(
            'fy-center p-2 group/image rounded-md',
            currentSong?.id == data.id
               ? 'bg-progressbar-active text-primary-color'
               : 'hover:bg-alpha-color',
            isListening && 'opacity-50 hover:opacity-100',
         )}
      >
         <Image
            scale={false}
            active={currentSong?.id == data.id}
            className="w-10 h-10 mr-[10px]"
            src={data.image}
         >
            {loading && currentSong?.id == data.id ? (
               <Button className="w-10 h-10 mx-[17px]">
                  <LoadingIcon fill="white" />
               </Button>
            ) : (
               <Button onClick={handlePlay} className="w-10 h-10 f-center hover:brightness-90">
                  {isPlaying && currentSong?.id == data.id ? (
                     <img src={musicWaveIcon} alt="playIcon" className="w-2/5 h-2/5 object-cover" />
                  ) : (
                     <img src={playIcon} alt="playIcon" className="w-full h-full object-cover" />
                  )}
               </Button>
            )}
         </Image>
         <div className="flex-1">
            <h4 className="line-clamp-1 text-sm font-medium leading-normal">{data.name}</h4>
            <span
               className={cx(
                  'line-clamp-1 text-xs mt-[3px] leading-normal',
                  currentSong?.id == data.id ? 'text-[#ffffff99]' : 'text-subtitle-color ',
               )}
            >
               {data.artistNames || data.description}
            </span>
         </div>
         <div className="items-center ml-[10px] hidden group-hover/image:flex">
            <Button className="mx-[2px] hover:bg-alpha-color" tippyContent="Thêm vào thư viện">
               <Heart size={15} />
            </Button>
            <Button className="mx-[2px] hover:bg-alpha-color" tippyContent="Khác">
               <More size={15} />
            </Button>
         </div>
      </div>
   );
};

export default MediaItem;
