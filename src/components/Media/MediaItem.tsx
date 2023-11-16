import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, More } from 'iconsax-react';

import { Button, Image } from '../Commons';
import { LoadingIcon, musicWaveIcon, playIcon } from '~/assets';
import { setPlayPause, setNewReleaseSongs, setSingleSong } from '~/redux/slices/musicSlice';
import { currentSongSelector, musicSelector } from '~/redux/selector';

interface MediaItemProps {
   data: ISong;
   albumData?: IAlbum;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, albumData }) => {
   const dispatch = useDispatch();
   const { isPlaying, loading } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);

   const handlePlay = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (isPlaying && currentSong?.id === data.id) dispatch(setPlayPause());
      else if (albumData) {
         dispatch(setNewReleaseSongs(albumData));
      } else {
         dispatch(setSingleSong(data));
      }
   };

   return (
      <div
         className={cx(
            'fy-center px-[10px] py-2 group/image hover:bg-alpha-color rounded-md',
            currentSong?.id == data.id && 'bg-alpha-color',
         )}
      >
         <Image
            scale={false}
            active={currentSong?.id == data.id}
            className="w-[52px] h-[52px] mr-[10px]"
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
            <span className="line-clamp-1 text-subtitle-color text-xs mt-[3px] leading-normal">
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
